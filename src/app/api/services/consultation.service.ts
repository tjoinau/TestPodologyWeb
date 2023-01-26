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
import { ConsultationDto } from '../models/consultation-dto';
import { NewConsultationDto } from '../models/new-consultation-dto';

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
    HealthCheckProviderId?: string;
    PatientId?: string;
    StartDateBefore?: string;
    StartDateAfter?: string;
    EndDateBefore?: string;
    EndDateAfter?: string;
    Location?: number;
    Id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ConsultationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ConsultationService.ApiConsultationGetPath, 'get');
    if (params) {
      rb.query('HealthCheckProviderId', params.HealthCheckProviderId, {});
      rb.query('PatientId', params.PatientId, {});
      rb.query('StartDateBefore', params.StartDateBefore, {});
      rb.query('StartDateAfter', params.StartDateAfter, {});
      rb.query('EndDateBefore', params.EndDateBefore, {});
      rb.query('EndDateAfter', params.EndDateAfter, {});
      rb.query('Location', params.Location, {});
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ConsultationDto>>;
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
    HealthCheckProviderId?: string;
    PatientId?: string;
    StartDateBefore?: string;
    StartDateAfter?: string;
    EndDateBefore?: string;
    EndDateAfter?: string;
    Location?: number;
    Id?: number;
    context?: HttpContext
  }
): Observable<Array<ConsultationDto>> {

    return this.apiConsultationGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ConsultationDto>>) => r.body as Array<ConsultationDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConsultationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConsultationGet$Json$Response(params?: {
    HealthCheckProviderId?: string;
    PatientId?: string;
    StartDateBefore?: string;
    StartDateAfter?: string;
    EndDateBefore?: string;
    EndDateAfter?: string;
    Location?: number;
    Id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ConsultationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ConsultationService.ApiConsultationGetPath, 'get');
    if (params) {
      rb.query('HealthCheckProviderId', params.HealthCheckProviderId, {});
      rb.query('PatientId', params.PatientId, {});
      rb.query('StartDateBefore', params.StartDateBefore, {});
      rb.query('StartDateAfter', params.StartDateAfter, {});
      rb.query('EndDateBefore', params.EndDateBefore, {});
      rb.query('EndDateAfter', params.EndDateAfter, {});
      rb.query('Location', params.Location, {});
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ConsultationDto>>;
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
    HealthCheckProviderId?: string;
    PatientId?: string;
    StartDateBefore?: string;
    StartDateAfter?: string;
    EndDateBefore?: string;
    EndDateAfter?: string;
    Location?: number;
    Id?: number;
    context?: HttpContext
  }
): Observable<Array<ConsultationDto>> {

    return this.apiConsultationGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ConsultationDto>>) => r.body as Array<ConsultationDto>)
    );
  }

  /**
   * Path part for operation apiConsultationPost
   */
  static readonly ApiConsultationPostPath = '/api/Consultation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConsultationPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiConsultationPost$Plain$Response(params?: {
    context?: HttpContext
    body?: NewConsultationDto
  }
): Observable<StrictHttpResponse<ConsultationDto>> {

    const rb = new RequestBuilder(this.rootUrl, ConsultationService.ApiConsultationPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ConsultationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiConsultationPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiConsultationPost$Plain(params?: {
    context?: HttpContext
    body?: NewConsultationDto
  }
): Observable<ConsultationDto> {

    return this.apiConsultationPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ConsultationDto>) => r.body as ConsultationDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConsultationPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiConsultationPost$Json$Response(params?: {
    context?: HttpContext
    body?: NewConsultationDto
  }
): Observable<StrictHttpResponse<ConsultationDto>> {

    const rb = new RequestBuilder(this.rootUrl, ConsultationService.ApiConsultationPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ConsultationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiConsultationPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiConsultationPost$Json(params?: {
    context?: HttpContext
    body?: NewConsultationDto
  }
): Observable<ConsultationDto> {

    return this.apiConsultationPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ConsultationDto>) => r.body as ConsultationDto)
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
    LocationId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<AvailableDatesDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ConsultationService.ApiConsultationGetFirstsAvailableDatesGetPath, 'get');
    if (params) {
      rb.query('LocationId', params.LocationId, {});
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
    LocationId?: number;
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
    LocationId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<AvailableDatesDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ConsultationService.ApiConsultationGetFirstsAvailableDatesGetPath, 'get');
    if (params) {
      rb.query('LocationId', params.LocationId, {});
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
    LocationId?: number;
    context?: HttpContext
  }
): Observable<Array<AvailableDatesDto>> {

    return this.apiConsultationGetFirstsAvailableDatesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AvailableDatesDto>>) => r.body as Array<AvailableDatesDto>)
    );
  }

}
