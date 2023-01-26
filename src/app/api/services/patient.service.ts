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

import { PatientDto } from '../models/patient-dto';

@Injectable({
  providedIn: 'root',
})
export class PatientService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPatientGet
   */
  static readonly ApiPatientGetPath = '/api/Patient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPatientGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPatientGet$Plain$Response(params?: {
    Id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<PatientDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PatientService.ApiPatientGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PatientDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPatientGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPatientGet$Plain(params?: {
    Id?: string;
    context?: HttpContext
  }
): Observable<Array<PatientDto>> {

    return this.apiPatientGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PatientDto>>) => r.body as Array<PatientDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPatientGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPatientGet$Json$Response(params?: {
    Id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<PatientDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PatientService.ApiPatientGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PatientDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPatientGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPatientGet$Json(params?: {
    Id?: string;
    context?: HttpContext
  }
): Observable<Array<PatientDto>> {

    return this.apiPatientGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PatientDto>>) => r.body as Array<PatientDto>)
    );
  }

  /**
   * Path part for operation apiPatientPost
   */
  static readonly ApiPatientPostPath = '/api/Patient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPatientPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPatientPost$Response(params?: {
    context?: HttpContext
    body?: string
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PatientService.ApiPatientPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiPatientPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPatientPost(params?: {
    context?: HttpContext
    body?: string
  }
): Observable<void> {

    return this.apiPatientPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPatientIdGet
   */
  static readonly ApiPatientIdGetPath = '/api/Patient/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPatientIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPatientIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, PatientService.ApiPatientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiPatientIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPatientIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<string> {

    return this.apiPatientIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPatientIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPatientIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, PatientService.ApiPatientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiPatientIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPatientIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<string> {

    return this.apiPatientIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiPatientIdPut
   */
  static readonly ApiPatientIdPutPath = '/api/Patient/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPatientIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPatientIdPut$Response(params: {
    id: number;
    context?: HttpContext
    body?: string
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PatientService.ApiPatientIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiPatientIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPatientIdPut(params: {
    id: number;
    context?: HttpContext
    body?: string
  }
): Observable<void> {

    return this.apiPatientIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPatientIdDelete
   */
  static readonly ApiPatientIdDeletePath = '/api/Patient/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPatientIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPatientIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PatientService.ApiPatientIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiPatientIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPatientIdDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiPatientIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
