/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AvailableDatesDto } from '../models/available-dates-dto';

@Injectable({
  providedIn: 'root',
})
export class ConsultationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiConsultationGet
   */
  static readonly ApiConsultationGetPath = '/api/Consultation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConsultationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConsultationGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, ConsultationService.ApiConsultationGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiConsultationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConsultationGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<string>> {

    return this.apiConsultationGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConsultationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConsultationGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, ConsultationService.ApiConsultationGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiConsultationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConsultationGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<string>> {

    return this.apiConsultationGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Path part for operation apiConsultationPost
   */
  static readonly ApiConsultationPostPath = '/api/Consultation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConsultationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiConsultationPost$Response(params?: {
    context?: HttpContext
    body?: string
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ConsultationService.ApiConsultationPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiConsultationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiConsultationPost(params?: {
    context?: HttpContext
    body?: string
  }
): Observable<void> {

    return this.apiConsultationPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiConsultationIdGet
   */
  static readonly ApiConsultationIdGetPath = '/api/Consultation/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConsultationIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConsultationIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ConsultationService.ApiConsultationIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiConsultationIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConsultationIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<string> {

    return this.apiConsultationIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConsultationIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConsultationIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ConsultationService.ApiConsultationIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiConsultationIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConsultationIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<string> {

    return this.apiConsultationIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiConsultationIdPut
   */
  static readonly ApiConsultationIdPutPath = '/api/Consultation/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConsultationIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiConsultationIdPut$Response(params: {
    id: number;
    context?: HttpContext
    body?: string
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ConsultationService.ApiConsultationIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiConsultationIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiConsultationIdPut(params: {
    id: number;
    context?: HttpContext
    body?: string
  }
): Observable<void> {

    return this.apiConsultationIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiConsultationIdDelete
   */
  static readonly ApiConsultationIdDeletePath = '/api/Consultation/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConsultationIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConsultationIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ConsultationService.ApiConsultationIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiConsultationIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConsultationIdDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiConsultationIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiConsultationGetFirstsAvailableDatesGet
   */
  static readonly ApiConsultationGetFirstsAvailableDatesGetPath = '/api/Consultation/GetFirstsAvailableDates';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConsultationGetFirstsAvailableDatesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConsultationGetFirstsAvailableDatesGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<AvailableDatesDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ConsultationService.ApiConsultationGetFirstsAvailableDatesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AvailableDatesDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiConsultationGetFirstsAvailableDatesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConsultationGetFirstsAvailableDatesGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<AvailableDatesDto>> {

    return this.apiConsultationGetFirstsAvailableDatesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AvailableDatesDto>>) => r.body as Array<AvailableDatesDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConsultationGetFirstsAvailableDatesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConsultationGetFirstsAvailableDatesGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<AvailableDatesDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ConsultationService.ApiConsultationGetFirstsAvailableDatesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AvailableDatesDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiConsultationGetFirstsAvailableDatesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConsultationGetFirstsAvailableDatesGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<AvailableDatesDto>> {

    return this.apiConsultationGetFirstsAvailableDatesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AvailableDatesDto>>) => r.body as Array<AvailableDatesDto>)
    );
  }

}
