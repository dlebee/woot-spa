import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

export interface ContactUsModel
{
  fullName: string | null,
  email: string | null,
  message: string | null
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {

  }

  send(model: ContactUsModel) : Observable<boolean> {
    if (!model.fullName) {
      return timer(500)
        .pipe(
            switchMap(_ => throwError({
              status: 400,
              err: {
                type: 'validation',
                errors: {
                  fullName: 'Full Name Cannot be empty'
                }
              }
            }))
         );
    }

    if (model.fullName == "john") {
      return timer(1000).pipe(switchMap(_ => throwError({
        status: 500,
        err: {
          type: 'error',
          message: "Could not create someone with john, its a non john club."
        }
      })));
    }

    return of(true);
    // this.http.post(enviroment.endpoint + '/contact-form', model);
  }
}
