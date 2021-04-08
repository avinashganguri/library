import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';

import { IssuedBook } from '../models/issuedBook';
import { UrlService } from './url.service';
import { AuthHttpService } from './auth-http.service';

@Injectable()
export class IssuedBooksService {
    url: string;
    collectionName: string;
    issuedBooks: IssuedBook[];
    constructor(
        private urlService: UrlService,
        private httpAuth: AuthHttpService
        ) {
        this.url = '';
        this.issuedBooks = [];
        this.collectionName = environment.issuedBooksCollection;
    }

    updatedIssuedBooks = new EventEmitter<IssuedBook[]>();

    getIssuedBooks() {
        this.url = this.urlService.generateUrl(this.collectionName + '.json');
        return this.httpAuth.get(this.url);
    }

    updateIssuedBook(issuedBook: IssuedBook, id: string) {
        this.url = this.urlService.generateUrl('issuedBooks/' + id + '.json');
        return this.httpAuth.put(this.url, issuedBook);
    }

    addUpdateIssuedBooks(issuedBook: IssuedBook) {
        this.url = this.urlService.generateUrl(this.collectionName + '.json');
        return this.httpAuth.post(this.url, issuedBook);
    }

    deleteIssudBook(id: string) {
        this.url = this.urlService.generateUrl('issuedBooks/' + id + '.json');
        return this.httpAuth.delete(this.url);
    }

}
