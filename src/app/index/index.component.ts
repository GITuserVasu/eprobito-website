import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { ServicePageService } from '../service-page.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  contactForm!: FormGroup

  constructor(private fb: FormBuilder, private contactFormservice: ServicePageService) { }

  ngOnInit() {

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      msg: ['', Validators.required]
    })


  }

  onSubmit() {

    this.contactFormservice.contactForm(this.contactForm.value).subscribe((res: any) => {
      if (res.errorCode == 200) {
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
        this.contactForm.reset()

      } else {
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'error'
        )
        this.contactForm.reset()
      }
    })
    // this.contactForm

  }
}
