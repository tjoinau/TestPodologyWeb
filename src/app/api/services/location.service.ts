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

import { LocationDto } from '../models/location-dto';

@Injectable({
  providedIn: 'root',
})
export class LocationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiLocationGet
   */
  static readonly ApiLocationGetPath = '/api/Location';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLocationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLocationGet$Plain$Response(params?: {
    DoctorId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<LocationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, LocationService.ApiLocationGetPath, 'get');
    if (params) {
      rb.query('DoctorId', params.DoctorId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LocationDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLocationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLocationGet$Plain(params?: {
    DoctorId?: number;
    context?: HttpContext
  }
): Observable<Array<LocationDto>> {

    return this.apiLocationGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LocationDto>>) => r.body as Array<LocationDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLocationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLocationGet$Json$Response(params?: {
    DoctorId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<LocationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, LocationService.ApiLocationGetPath, 'get');
    if (params) {
      rb.query('DoctorId', params.DoctorId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LocationDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLocationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLocationGet$Json(params?: {
    DoctorId?: number;
    context?: HttpContext
  }
): Observable<Array<LocationDto>> {

    return this.apiLocationGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LocationDto>>) => r.body as Array<LocationDto>)
    );
  }

  /**
   * Path part for operation apiLocationPost
   */
  static readonly ApiLocationPostPath = '/api/Location';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLocationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLocationPost$Response(params?: {
    context?: HttpContext
    body?: string
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LocationService.ApiLocationPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiLocationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLocationPost(params?: {
    context?: HttpContext
    body?: string
  }
): Observable<void> {

    return this.apiLocationPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiLocationIdGet
   */
  static readonly ApiLocationIdGetPath = '/api/Location/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLocationIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLocationIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, LocationService.ApiLocationIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiLocationIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLocationIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<string> {

    return this.apiLocationIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLocationIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLocationIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, LocationService.ApiLocationIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiLocationIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLocationIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<string> {

    return this.apiLocationIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiLocationIdPut
   */
  static readonly ApiLocationIdPutPath = '/api/Location/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLocationIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLocationIdPut$Response(params: {
    id: number;
    context?: HttpContext
    body?: string
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LocationService.ApiLocationIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiLocationIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLocationIdPut(params: {
    id: number;
    context?: HttpContext
    body?: string
  }
): Observable<void> {

    return this.apiLocationIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiLocationIdDelete
   */
  static readonly ApiLocationIdDeletePath = '/api/Location/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLocationIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLocationIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LocationService.ApiLocationIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiLocationIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLocationIdDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiLocationIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
