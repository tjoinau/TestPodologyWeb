/* tslint:disable */
/* eslint-disable */
import { ConfigLocationDto } from './config-location-dto';
export interface HcpConfigFormModel {
  consultationLength?: number;
  endDay?: null | string;
  locationsHours?: null | Array<ConfigLocationDto>;
  startDay?: null | string;
}
