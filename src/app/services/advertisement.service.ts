import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {Category} from '../models/category';
import {Advertisement} from '../models/advertisement';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {

  constructor(private http: HttpClient) {
  }

  getAdvertisementCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/Categories');
  }

  getAllAdvertisements(sort?) {
    sort = sort || 'newer';
    return this.http.get<Advertisement[]>('/api/Advertisements?sort=' + sort);
  }

  getAdvertisementsByCategory(categoryId) {
    return this.http.get<Advertisement[]>('/api/Advertisements/Category/' + categoryId);
  }
}
