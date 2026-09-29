import { Component ,input} from '@angular/core';
import { dummyUsers } from '../dummy-users';

// عشان يختار رقم عشوائي من المصفوفة
// const randomIndex = Math.floor(Math.random() * dummyUsers.length);

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
                    users = input.required<typeof dummyUsers>();


}
