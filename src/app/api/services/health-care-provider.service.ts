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

import { HealthCareProviderDto } from '../models/health-care-provider-dto';

@Injectable({
  providedIn: 'root',
})
export class HealthCareProviderService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiHealthCareProviderGet
   */
  static readonly ApiHealthCareProviderGetPath = '/api/HealthCareProvider';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHealthCareProviderGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHealthCareProviderGet$Plain$Response(params?: {
    Id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<HealthCareProviderDto>>> {

    const rb = new RequestBuilder(this.rootUrl, HealthCareProviderService.ApiHealthCareProviderGetPath, 'get');
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
        return r as StrictHttpResponse<Array<HealthCareProviderDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiHealthCareProviderGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHealthCareProviderGet$Plain(params?: {
    Id?: string;
    context?: HttpContext
  }
): Observable<Array<HealthCareProviderDto>> {

    return this.apiHealthCareProviderGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<HealthCareProviderDto>>) => r.body as Array<HealthCareProviderDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHealthCareProviderGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHealthCareProviderGet$Json$Response(params?: {
    Id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<HealthCareProviderDto>>> {

    const rb = new RequestBuilder(this.rootUrl, HealthCareProviderService.ApiHealthCareProviderGetPath, 'get');
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
        return r as StrictHttpResponse<Array<HealthCareProviderDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiHealthCareProviderGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHealthCareProviderGet$Json(params?: {
    Id?: string;
    context?: HttpContext
  }
): Observable<Array<HealthCareProviderDto>> {

    return this.apiHealthCareProviderGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<HealthCareProviderDto>>) => r.body as Array<HealthCareProviderDto>)
    );
  }

  /**
   * Path part for operation apiHealthCareProviderPost
   */
  static readonly ApiHealthCareProviderPostPath = '/api/HealthCareProvider';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHealthCareProviderPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiHealthCareProviderPost$Response(params?: {
    context?: HttpContext
    body?: string
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, HealthCareProviderService.ApiHealthCareProviderPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiHealthCareProviderPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiHealthCareProviderPost(params?: {
    context?: HttpContext
    body?: string
  }
): Observable<void> {

    return this.apiHealthCareProviderPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiHealthCareProviderIdGet
   */
  static readonly ApiHealthCareProviderIdGetPath = '/api/HealthCareProvider/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHealthCareProviderIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHealthCareProviderIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, HealthCareProviderService.ApiHealthCareProviderIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiHealthCareProviderIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHealthCareProviderIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<string> {

    return this.apiHealthCareProviderIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHealthCareProviderIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHealthCareProviderIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, HealthCareProviderService.ApiHealthCareProviderIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiHealthCareProviderIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHealthCareProviderIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<string> {

    return this.apiHealthCareProviderIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiHealthCareProviderIdPut
   */
  static readonly ApiHealthCareProviderIdPutPath = '/api/HealthCareProvider/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHealthCareProviderIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiHealthCareProviderIdPut$Response(params: {
    id: number;
    context?: HttpContext
    body?: string
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, HealthCareProviderService.ApiHealthCareProviderIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiHealthCareProviderIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiHealthCareProviderIdPut(params: {
    id: number;
    context?: HttpContext
    body?: string
  }
): Observable<void> {

    return this.apiHealthCareProviderIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiHealthCareProviderIdDelete
   */
  static readonly ApiHealthCareProviderIdDeletePath = '/api/HealthCareProvider/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHealthCareProviderIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHealthCareProviderIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, HealthCareProviderService.ApiHealthCareProviderIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiHealthCareProviderIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHealthCareProviderIdDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiHealthCareProviderIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
