import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResumeUploadService {

  private apiUrl = 'http://localhost:8080/resume';  // Spring Boot backend URL

  constructor(private http: HttpClient) { }

  // Upload file
  uploadFile(file: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<string>(`${this.apiUrl}/upload`, formData);
  }

  // Download file
  downloadFile(filename: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/download/${filename}`, {
      headers: new HttpHeaders(),
      responseType: 'blob'
    });
  }
}
