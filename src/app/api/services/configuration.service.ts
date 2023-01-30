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

import { HcpConfigurationDto } from '../models/hcp-configuration-dto';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiConfigurationGet
   */
  static readonly ApiConfigurationGetPath = '/api/Configuration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConfigurationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConfigurationGet$Plain$Response(params?: {
    HCPId?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<HcpConfigurationDto>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigurationService.ApiConfigurationGetPath, 'get');
    if (params) {
      rb.query('HCPId', params.HCPId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HcpConfigurationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiConfigurationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConfigurationGet$Plain(params?: {
    HCPId?: string;
    context?: HttpContext
  }
): Observable<HcpConfigurationDto> {

    return this.apiConfigurationGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<HcpConfigurationDto>) => r.body as HcpConfigurationDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConfigurationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConfigurationGet$Json$Response(params?: {
    HCPId?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<HcpConfigurationDto>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigurationService.ApiConfigurationGetPath, 'get');
    if (params) {
      rb.query('HCPId', params.HCPId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HcpConfigurationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiConfigurationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConfigurationGet$Json(params?: {
    HCPId?: string;
    context?: HttpContext
  }
): Observable<HcpConfigurationDto> {

    return this.apiConfigurationGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<HcpConfigurationDto>) => r.body as HcpConfigurationDto)
    );
  }

  /**
   * Path part for operation apiConfigurationPost
   */
  static readonly ApiConfigurationPostPath = '/api/Configuration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConfigurationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiConfigurationPost$Response(params?: {
    context?: HttpContext
    body?: HcpConfigurationDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigurationService.ApiConfigurationPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiConfigurationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiConfigurationPost(params?: {
    context?: HttpContext
    body?: HcpConfigurationDto
  }
): Observable<void> {

    return this.apiConfigurationPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiConfigurationIdGet
   */
  static readonly ApiConfigurationIdGetPath = '/api/Configuration/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConfigurationIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConfigurationIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigurationService.ApiConfigurationIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiConfigurationIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConfigurationIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<string> {

    return this.apiConfigurationIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConfigurationIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConfigurationIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigurationService.ApiConfigurationIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiConfigurationIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConfigurationIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<string> {

    return this.apiConfigurationIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiConfigurationIdPut
   */
  static readonly ApiConfigurationIdPutPath = '/api/Configuration/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConfigurationIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiConfigurationIdPut$Response(params: {
    id: number;
    context?: HttpContext
    body?: string
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigurationService.ApiConfigurationIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiConfigurationIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiConfigurationIdPut(params: {
    id: number;
    context?: HttpContext
    body?: string
  }
): Observable<void> {

    return this.apiConfigurationIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiConfigurationIdDelete
   */
  static readonly ApiConfigurationIdDeletePath = '/api/Configuration/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConfigurationIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConfigurationIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigurationService.ApiConfigurationIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiConfigurationIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConfigurationIdDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiConfigurationIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
