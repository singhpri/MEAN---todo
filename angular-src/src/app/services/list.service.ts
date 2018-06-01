import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { List } from '../models/List';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({ providedIn: 'root' })
export class ListService {

    constructor(private http: HttpClient)      {
    console.log("List Service initialized ....")}


    private serverApi= 'http://localhost:3000/bucketlist';

    public getAllLists(): Observable<List[]>{
        return this.http.get<List[]>(this.serverApi);
    }

    public deleteList(listId : string) {
      let URI = `${this.serverApi}/${listId}`;
        return this.http.delete<List>(URI, httpOptions);
    }

  public addList(list: List):Observable<List> {
      return this.http.post<List>(this.serverApi, list, httpOptions)

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
