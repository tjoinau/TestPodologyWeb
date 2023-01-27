/* tslint:disable */
/* eslint-disable */
import { PatientDto } from './patient-dto';
export interface ConsultationDto {
  endConsultation?: string;
  healthCareProviderId?: null | string;
  id?: number;
  locationId?: number;
  patient?: PatientDto;
  patientInput?: null | string;
  startConsultation?: string;
  statusId?: number;
  updatedBy?: null | number;
}
