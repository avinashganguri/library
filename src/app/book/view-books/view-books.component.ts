import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../../services/book.service';
import { FireBook } from '../../models/fireBook';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {

  fireBooks: FireBook[];
  userRole: string;
  categories: Category[];
  Category: string;
  userName: string;
  userAlreadyExists: boolean;
  searchText!: string
  messageToDisplay: string;
  constructor(
    private router: Router,
    private bookService: BookService,
    private categoryService: CategoryService
    ) {
      // this.userName = localStorage.getItem('UserName')!;
      this.userName = "satheesh@gmail.com";
      this.fireBooks = [];
      this.categories = [];
      // this.userRole = localStorage.getItem('Role')!;
      this.userRole = "Admin";
      this.Category = 'Select Category';
      this.getCategories();
      this.userAlreadyExists = false;
      this.messageToDisplay = "Fetching available books, please wait..";
   }

  ngOnInit() {
    this.bookService.getAllBooks()
      .subscribe(
        (response: any) => {
          if (response != null) {
            for (const id in response) {
              if (response.hasOwnProperty(id)) {
                const fireBook = this.bookService.convertToFireBook(response[id], id);
                this.fireBooks.push(fireBook);
              }
            }
          } else {
            this.messageToDisplay = "No Books available in the store";
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getCategories() {
    this.categoryService.getCategories()
      .subscribe(
        (response) => {
          for (const id in response) {
            if (response.hasOwnProperty(id)) {
              this.categories.push(response[id]);
            }
          }
        }
      );
  }

}
