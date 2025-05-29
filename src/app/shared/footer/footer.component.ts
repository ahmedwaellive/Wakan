import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-footer',
  imports: [TranslateModule ,NgClass ,FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public translate: TranslateService){}


   form = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };



   sendEmail() {
    const templateParams = {
      name: this.form.name,
      email: this.form.email,
      phone: this.form.phone,
      message: this.form.message
    };

    console.log('Sending email with params:', templateParams);

    emailjs.send(
      'YOUR_SERVICE_ID',     // استبدل بـ service ID من EmailJS
      'YOUR_TEMPLATE_ID',    // استبدل بـ template ID من EmailJS
      templateParams,
      'YOUR_PUBLIC_KEY'      // استبدل بـ public key من EmailJS
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('تم إرسال الرسالة بنجاح ✅');
    }, (err) => {
      console.error('FAILED...', err);
      alert('حدث خطأ أثناء الإرسال ❌');
    });
  }


}
