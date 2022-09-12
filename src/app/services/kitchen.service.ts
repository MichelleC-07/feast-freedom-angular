import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IKitchen } from '../interfaces/ikitchen';

@Injectable({
  providedIn: 'root',
})
export class KitchenService {
  public kitchenData: IKitchen[] = [];

  private _get_kitchens_url: string = 'http://127.0.0.1:8080/get-kitchens';
  private _get_kitchen_by_id_url: string = 'http://127.0.0.1:8080/get-kitchen/';
  private _create_kitchen_url: string = 'http://127.0.0.1:8080/add-kitchen';
  private _update_kitchen_url: string = 'http://127.0.0.1:8080/update-kitchen/';
  private _delete_kitchen_url: string = 'http://127.0.0.1:8080/delete-kitchen/';

  constructor(private http: HttpClient) {}

  getAllKitchen(): Observable<IKitchen[]> {
    return this.http
      .get<IKitchen[]>(this._get_kitchens_url)
      .pipe(catchError(this.errorHandler));
  }

  getOneKitchen(id: number): Observable<IKitchen[]> {
    return this.http
      .get<IKitchen[]>(this._get_kitchen_by_id_url + id + '/')
      .pipe(catchError(this.errorHandler));
  }

  createKitchen(body: any): Observable<IKitchen[]> {
    return this.http
      .post<IKitchen[]>(this._create_kitchen_url, body)
      .pipe(catchError(this.errorHandler));
  }

  updateEmployee(id: number, body: any) {
    return this.http
      .put<IKitchen[]>(this._update_kitchen_url + id + '/', body)
      .pipe(catchError(this.errorHandler));
  }

  deleteEmployee(id: number) {
    return this.http
      .delete(this._delete_kitchen_url + id + '/')
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Errorrrrr');
  }
}
