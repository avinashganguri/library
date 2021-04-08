// import { Injectable, EventEmitter } from '@angular/core';
// import { Router } from '@angular/router';
// import * as _ from 'lodash';
// import { Adal4Service } from 'adal-angular4/adal4.service';

// import { UserService } from '../services/user.service';
// import { User } from '../models/user';



// @Injectable()
// export class AuthorizationService {
//     authStatus: boolean;
//     users: User[];
//     userRole: string;
//     constructor(private router: Router,
//         private userService: UserService,
//         private auth: Adal4Service) {
//         this.authStatus = false;
//         this.users = [];
//     }

//     getUsersData() {
//         return new Promise((resolve, reject) => {
//             try {
//                 this.userService.getUsers()
//                     .subscribe(
//                         (users) => {
//                             this.users = [];
//                             this.userService.users = [];
//                             for (const id in users) {
//                                 if (users.hasOwnProperty(id)) {
//                                     this.users.push(users[id]);
//                                     if (users[id].SocialId === localStorage.getItem('SocialId')) {
//                                         this.userService.loggedInUser = users[id];
//                                         localStorage.setItem('Role', users[id].Role);
//                                         localStorage.setItem('UserName', users[id].Name);
//                                         localStorage.setItem('Picture', users[id].Picture);
//                                     }
//                                 }
//                             }
//                             if (localStorage.getItem('Role') === null) {
//                                 localStorage.setItem('Role', 'User');
//                             }
//                             this.userService.users = this.users;
//                             resolve(localStorage.getItem('Role'));
//                         }
//                     );
//             }catch (err) {
//                 console.log(err);
//             }
//         });
//     }

//     isAllowedToView(roles: Array<string>): Promise<boolean> {
//         this.authStatus = false;
//         return this.getUsersData()
//             .then(
//                 (response: string) => {
//                     this.userRole = response;
//                     roles.forEach((role) => {
//                         if (role === this.userRole) {
//                             this.authStatus = true;
//                         }
//                     });
//                     if (!this.authStatus) {
//                         this.router.navigate(['unauthorizedUser']);
//                     }
//                     return this.authStatus;
//                 }
//             );
//     }
// }
