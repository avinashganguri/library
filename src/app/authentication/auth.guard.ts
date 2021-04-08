// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ResolveEnd } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import * as _ from 'lodash';

// import { Adal4Service } from 'adal-angular4';
// import { UserService } from '../services/user.service';
// import { User } from '../models/user';

// @Injectable()
// export class LoggedInGuard implements CanActivate {

//     currentUser: User;
//     constructor(
//         private auth: Adal4Service,
//         private userService: UserService,
//         private router: Router) {
//         this.currentUser = new User('', '', '', [], '', '', '');
//     }

//     canActivate(
//         next: ActivatedRouteSnapshot,
//         state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//         localStorage.setItem('SocialId', this.auth.userInfo.username);
//         // return this.getUserInfo().then(
//         //     (response: User) => {
//         //         this.userService.loggedInUser = response;
//         //         if (this.auth.userInfo.authenticated) {
//         //             return true;
//         //         } else {
//         //             this.auth.login();
//         //             return false;
//         //         }
//         //     }
//         // );
//         if (this.auth.userInfo.authenticated) {
//             return true;
//         } else {
//             this.auth.login();
//             return false;
//         }
//     }

//     getUserInfo() {
//         return new Promise((resolve, reject) => {
//             this.userService.getUsers()
//                 .subscribe(
//                     (response: any) => {
//                         const users: User[] = [];
//                         for (const id in response) {
//                             if (response.hasOwnProperty(id)) {
//                                 users.push(response[id]);
//                             }
//                         }
//                         users.forEach(
//                             (user: User) => {
//                             if (_.isEqual(user.SocialId, this.auth.userInfo.username)) {
//                                 this.currentUser = user;
//                                 localStorage.setItem('Role', user.Role);
//                                 localStorage.setItem('SocialId', user.SocialId);
//                                 localStorage.setItem('UserName', user.Name);
//                                 localStorage.setItem('Picture', user.Picture);
//                             }
//                             resolve(this.currentUser);
//                         }
//                     );
//                 }
//             );
//         });
//     }
// }
