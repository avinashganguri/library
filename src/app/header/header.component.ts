import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BookService } from '../services/book.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  notificationMessage!: string;
  user: User;
  constructor(
    private userService: UserService,
    private router: Router,
    // private NotificationManager: ToastsManager, vcr: ViewContainerRef,
    // toastrConfig: ToastOptions
    ) {
    this.user = this.userService.loggedInUser;
  }

  ngOnInit() {
    // this.userService.updatedLoggedInUserInfo.subscribe(
    //   (user: User) => {
    //     this.user = user;
    //   }
    // );
    // if (this.user == null) {
    //   this.checkUser().then(
    //     (response: boolean) => {
    //       if (!response) {
    //         this.router.navigate(['add-user-info']);
    //        }
    //     }
    //   );
    // }
  }

  checkUser() {
    let userAlreadyExists = false;
    return new Promise((resolve, reject) => {
    this.userService.getUsers()
     .subscribe(
       (response) => {
         for (const id in response) {
          if (response[id].SocialId === localStorage.getItem('SocialId')) {
            userAlreadyExists = true;
            this.user = response[id];
          }
         }
         resolve(userAlreadyExists);
       }
     );
    });
  }

  logout() {
    // this.auth.logOut();
    alert("Logged out successfully");
  }
}
