import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Iuser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userData!:any;


  /* NEED TO ADD http://IP:8080/mapping-def 
  *********************************************
  */
  private _get_users:string="";
  private _get_user_by_id:string = "";
  private _create_user_url:string = "";


  constructor(private http: HttpClient) { }

  getAllData(){
    return this.http
    .get(this._get_users)
    .pipe(catchError(this.errorHandler))
  }

  getOneUser(id: number): Observable<Iuser[]> {
    return this.http
      .get<Iuser[]>(this._get_user_by_id + id + '/')
      .pipe(catchError(this.errorHandler))
  }

  createUser(body: any): Observable<Iuser[]> {
    return this.http
      .post<Iuser[]>(this._create_user_url, body)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}
