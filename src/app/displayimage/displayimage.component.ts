import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Theme } from '@app/_models/theme';
import { ThemeService } from '@app/_services/ThemeService';

@Component({
  selector: 'app-displayimage',
  templateUrl: './displayimage.component.html',
  styleUrls: ['./displayimage.component.scss']
})
export class DisplayimageComponent implements OnInit {
  themeForm: FormGroup = new FormGroup({}); // Initialize it here
  selectedFile: File | undefined;

  constructor(private fb: FormBuilder, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.themeForm = this.fb.group({
      type: ['', Validators.required],
      image: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.themeForm.valid && this.selectedFile) {
        const formData = new FormData();
        formData.append('image', this.selectedFile);

        this.themeService.uploadImage(formData).subscribe(
            (imageFileName) => {
                console.log("image uploaded");
                    //image: imageFileName as string 
               
                
            },
            (uploadError) => {
                console.error("Error uploading image", uploadError);
            }
        );
        const formModel = this.themeForm.value;
                const newTheme: Theme = {
                    type: formModel.type as string,
                    image: formModel.image as string }
                this.themeService.createTheme(newTheme).subscribe(
                    (data) => {
                        console.log("Successfully added a new theme");
                        // Additional code after theme creation success
                    },
                    (err) => {
                        console.error("Error creating theme", err);
                    }
                );

        this.markFormGroupTouched(this.themeForm);
    }
}

  /*
  onSubmit() {
    if (this.themeForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      
      this.themeService.uploadImage(formData).subscribe(
        data => console.log("uploaded img",data),
        error => console.error("not uploaded",error));
      
      const formModel = this.themeForm.value;
          const newTheme: Theme = {
            type: formModel.type as string,
            image: formData.get('image') as string  
          };
      this.themeService.createTheme(newTheme).subscribe
      ((data)=>{console.log("Successfully added a new theme"+data)}, 
      err=>{ console.error("Error" +err)});
      this.markFormGroupTouched(this.themeForm);
    }}*/
/*
  onSubmit() {
    if (this.themeForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      
      this.themeService.uploadImage(formData).subscribe(
        (response: any) => {
          const imageUrl = response;
  
          const formModel = this.themeForm.value;
          const newTheme: Theme = {
            type: formModel.type as string,
            image: imageUrl
          };
          console.log(`Uploaded Image Url ${imageUrl}`);
          this.themeService.createTheme(newTheme).subscribe(
            (createdTheme: Theme) => {
              console.log('Theme created:', createdTheme);
              this.themeForm.reset();
            },
            (error) => {
              console.error('Error creating theme:', error);
            }
          );
        },
        (error) => {
          console.error('Error uploading image:', error);
        }
      );
    } else {
      console.error('Form is invalid or no file selected');
      this.markFormGroupTouched(this.themeForm);
    }
  }*/
  
  

  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.selectedFile = fileList[0];
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
