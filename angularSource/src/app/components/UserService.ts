import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import { User } from './UserModel';

Injectable()
export class UserService{
  private baseUrl: string = "localhost:8080";
  constructor(private http : Http){
  }

  getAll(): Observable<User[]>{
    let people$ = this.http
      .get(`${this.baseUrl}/user/`)
      .map(mapPersons);
      return people$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  // other code...
}

function mapPersons(response:Response): User[]{
   // The response of the API has a results
   // property with the actual results
   return response.json().results.map(toPerson)
}

function toPerson(r:any): User{
  let person = <User>({
    picURL: r.picURL,
    name: r.name,
    resume: r.resume,
    github: r.github,
    telephone: r.telephone,
    city: r.city
  });
  console.log('Parsed person:', person);
  return person;
}