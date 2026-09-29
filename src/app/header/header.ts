import { Component ,signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
  
})

export class Header {
  descriptions = [
  'رؤية أوضح، تنظيم أفضل، وتحكم كامل في سير المهام.',
  'أدر المستخدمين، نظّم المهام، وابقَ دائمًا على اطلاع.',
  'كل ما تحتاجه لإدارة المستخدمين والمهام، في مكان واحد.',
  'إدارة أبسط، متابعة أسهل، وتحكم أكبر في سير العمل.',
];

  currentDescription = signal(0);
isVisible = signal(true);


//timer
 constructor() {
  setInterval(() => {
    this.isVisible.set(false);

    setTimeout(() => {
      this.currentDescription.update(
                             //% اللي يرجعنا للبداية
        index => (index + 1) % this.descriptions.length
      );

      this.isVisible.set(true);
    }, 500);
  }, 6000);
}

}
