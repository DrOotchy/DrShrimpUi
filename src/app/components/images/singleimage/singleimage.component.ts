import { Component, OnInit, Input } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-singleimage',
  templateUrl: './singleimage.component.html',
  styleUrls: ['./singleimage.component.css']
})
export class SingleimageComponent implements OnInit {
  selectedFile: File = null;
  @Input() childMessage: any;
  title = 'fileUpload';
  images;
  multipleImages = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, private form: FormBuilder) { }


  ngOnInit() {

  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  selectMultipleImage(event) {
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.images);
    formData.append('model', this.childMessage.model);
    formData.append('_id', this.childMessage.id);
    this.http.post<any>('api/images/file', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  onMultipleSubmit() {
    const formData = new FormData();
    for (let img of this.multipleImages) {
      formData.append('files', img);
    }
    formData.append('model', this.childMessage.model);
    formData.append('_id', this.childMessage.id);

    this.http.post<any>('api/images/multipleFiles', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
