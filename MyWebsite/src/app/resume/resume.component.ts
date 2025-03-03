import { Component } from '@angular/core';
import { ResumeUploadService } from '../resume-upload.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  
  selectedFile: File | null = null;
  message: string = '';
  filePresent: boolean = false;

  constructor(private resumeUploadService: ResumeUploadService) { }

  // Handle file selection
  onFileSelected(event: any): void {
    
    this.selectedFile = event.target.files[0];
    console.log("file selected", this.selectedFile)
    if(this.selectedFile != null) {
      this.filePresent = true;
    }
  }

  // Upload the selected file
  onUpload(): void {
    console.log("uploaded")
    if (this.selectedFile) {
      this.resumeUploadService.uploadFile(this.selectedFile).subscribe({
        next: (response) => this.message = response,
        error: (error) => this.message = 'Error uploading file.'
      });
    } else {
      this.message = 'Please select a file first!';
    }
  }

  // Download the file
  onDownload(filename: string): void {
  console.log("downloaded", filename);
  this.resumeUploadService.downloadFile(filename).subscribe(blob => {
    const url = window.URL.createObjectURL(blob);

    // Check if the file is an image
    const fileType = filename.split('.').pop()?.toLowerCase();
    if (fileType === 'jpg' || fileType === 'jpeg' || fileType === 'png' || fileType === 'gif') {
      const img: HTMLImageElement = document.createElement('img');
      img.src = url;
      img.width = 500;  // Set image width or adjust it
      img.height = 500; // Set image height or adjust it
      document.body.appendChild(img);  // Add the image to the document
    } else {
      const iframe: HTMLIFrameElement = document.createElement('iframe');
      iframe.src = url;
      iframe.width = '100%';
      iframe.height = '600px'; // Adjust height for other files like PDFs
      document.body.appendChild(iframe);  // Add the iframe to the document
    }
  });
}

}
