import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';

import { AuthHttpService } from './auth-http.service';
import { UrlService } from './url.service';
import { UserRating } from '../models/userRating';


@Injectable()
export class BookReviewService {
    url: string;
    collectionName: string;
    reviewsUpdated = new EventEmitter<UserRating[]>();

    constructor(
        private urlService: UrlService,
        private httpAuth: AuthHttpService
    ) {
        this.url = '';
        this.collectionName = environment.userRatingCollection;
    }

    getAllRatings() {
        this.url = this.urlService.generateUrl(this.collectionName + '.json');
        return this.httpAuth.get(this.url);
    }

    postUserRating(userRating: UserRating) {
        this.url = this.urlService.generateUrl(this.collectionName + '.json');
        return this.httpAuth.post(this.url, userRating);
    }
}
