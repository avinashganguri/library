import { Injectable } from '@angular/core';
import { AuthHttpService } from './auth-http.service';
import { UrlService } from './url.service';
import { Category } from '../models/category';

@Injectable()
export class CategoryService {
    url!: string;
    constructor(
        private httpAuthService: AuthHttpService,
        private urlService: UrlService
    ) {}

    getCategories() {
        this.url = this.urlService.generateUrl('categories.json');
        return this.httpAuthService.get(this.url);
    }

    postCategory(category: Category) {
        this.url = this.urlService.generateUrl('categories.json');
        return this.httpAuthService.post(this.url, category);
    }

    updateCategory(category: Category, id: string) {
        this.url = this.urlService.generateUrl('categories' + id + '.json');
        return this.httpAuthService.put(this.url, category);
    }

    deleteCategory(id: string) {
        this.url = this.urlService.generateUrl('categories' + id + '.json');
        return this.httpAuthService.delete(this.url);
    }
}
