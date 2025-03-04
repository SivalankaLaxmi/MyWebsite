package com.MyWebsite;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/resume")
@CrossOrigin("http://localhost:4200")
public class ResumeController {
	
	 private static final String UPLOAD_DIR = "uploads/";

	    // Ensure the upload directory exists
	    public ResumeController() {
	        File dir = new File(UPLOAD_DIR);
	        if (!dir.exists()) {
	            dir.mkdirs();
	        }
	    }

	    @PostMapping("/upload")
	    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
	        try {
	        	System.out.println("upload file");
	            Path filePath = Paths.get(UPLOAD_DIR, file.getOriginalFilename());
	            Files.write(filePath, file.getBytes());
	            return ResponseEntity.status(HttpStatus.OK).body("File uploaded successfully: " + file.getOriginalFilename());
	        } catch (IOException e) {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("File upload failed: " + e.getMessage());
	        }
	    }

	    @GetMapping("/download/{filename}")
	    public ResponseEntity<byte[]> downloadFile(@PathVariable("filename") String filename) throws IOException {
	    	System.out.println("downFile");
	    	Path filePath = Paths.get(UPLOAD_DIR, filename);
	        byte[] fileContent = Files.readAllBytes(filePath);

	        String contentType = Files.probeContentType(filePath);
	        
	        return ResponseEntity.ok()
	                .header("Content-Disposition", "attachment; filename=" + filename)
	                .contentType(MediaType.parseMediaType(contentType))
	                .body(fileContent);	    }

}
