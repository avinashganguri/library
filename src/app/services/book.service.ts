import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { FireBook } from '../models/fireBook';
import { UrlService } from './url.service';
import { AuthHttpService } from './auth-http.service';
import { Book } from '../models/book';


@Injectable()
export class BookService {
    url!: string;
    bookToUpdate!: FireBook;
    fireBookDetails!: FireBook;
    collectionName!: string;

    constructor(private http: HttpClient,
        private httpAuth: AuthHttpService,
        private urlService: UrlService) {
            this.collectionName = environment.booksCollection;
    }

    getBookFromGoogle(parameter: string) {
        return this.httpAuth.get('https://www.googleapis.com/books/v1/volumes/' + parameter);
    }

    getAllBooks() {
         this.url = this.urlService.generateUrl(this.collectionName + '.json');
         return this.httpAuth.get(this.url);
    }

    addBook(book: Book) {
        this.url = this.urlService.generateUrl(this.collectionName + '.json');
        return this.httpAuth.post(this.url, book);
    }

    getBook(id: string) {
        this.url = this.urlService.generateUrl('books/' + id + '.json');
        return this.httpAuth.get(this.url);
    }

    updateBook(book: Book, id: string) {
        this.url = this.urlService.generateUrl('books/' + id + '.json');
        return this.httpAuth.put(this.url, book);
    }

    deleteBook(id: string) {
        this.url = this.urlService.generateUrl('books/' + id + '.json');
        return this.httpAuth.delete(this.url);
    }

    convertToBook(fireBook: FireBook): Book {
        const book = new Book(
            fireBook.Isbn,
            fireBook.Title,
            fireBook.Authors,
            fireBook.Description,
            fireBook.ImageUrl,
            fireBook.Category,
            fireBook.Location,
            fireBook.Quantity,
            fireBook.AvgRating,

        );
        return book;
    }

    convertToFireBook(book: Book, id: string) {
        const fireBook = new FireBook(
            id,
            book.Isbn,
            book.Title,
            book.Authors,
            book.Description,
            book.ImageUrl,
            book.Category,
            book.Location,
            book.Quantity,
            book.AvgRating
        );
        return fireBook;
    }
}
