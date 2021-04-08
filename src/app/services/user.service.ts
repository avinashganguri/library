import { Injectable, EventEmitter } from '@angular/core';
import { AuthHttpService } from '../services/auth-http.service';
import { UrlService } from '../services/url.service';
import { User } from '../models/user';

@Injectable()
export class UserService {
    url!: string;
    users: User[];
    loggedInUser!: User;

    constructor(private httpAuth: AuthHttpService,
        private urlService: UrlService) {
            this.users = [];
        }

    updatedLoggedInUserInfo = new EventEmitter<User>();
    getUsers() {
        this.url = this.urlService.generateUrl('users.json');
        return this.httpAuth.get(this.url);
    }

    addUser(user: User) {
        this.url = this.urlService.generateUrl('users.json');
        return this.httpAuth.post(this.url, user);
    }

    updateUser(user: User, id: string) {
        this.url = this.urlService.generateUrl('users/' + id + '.json');
        return this.httpAuth.put(this.url, user);
    }
}
