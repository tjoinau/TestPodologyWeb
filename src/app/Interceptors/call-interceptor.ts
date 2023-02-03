import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";

@Injectable()
export class CallInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('intercepté')
        return next.handle(request).pipe(
            tap((event) => {
              if (event instanceof HttpResponse) {
                {
                  console.log(request)
                }
      
              }
            }),
            catchError((error) => {
                console.error(error);

                switch (error.status) {

                    case 400:
                    case 404:
                      // if (error.error.translate)
                      //   this.toasterService.showMsg({ color: 'red', translationCode: error.error.message } as SnackBarMessageContent)
                      // else
                        
                      break;
                    case 401:
                    case 403:
                      
                      break;
                    case 500:
                      //server error
                     
                      break;
                    default:
                     
                  }
                  
                  console.log(error)
                  return throwError(() => new Error(error))

            })
        );
    }
}
