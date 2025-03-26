import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  createNewAppointment(obj:any){
    return this.http.post('https://localhost:7221/api/Appointment/createNewAppointement', obj);
  }

  searchByPatientMobile(mob:string){
    return this.http.get('https://localhost:7221/api/Appointment/getPatientByPhoneNo?mobile='+mob);
  }

  getAllAppointment(){
    return this.http.get('https://localhost:7221/api/Appointment/getAllAppointment');
  }

  getNewAppointment(){
    return this.http.get('https://localhost:7221/api/Appointment/getNewAppointment');
  }

  getDoneAppointment(){
    return this.http.get('https://localhost:7221/api/Appointment/getDoneAppointment');
  }

  changeStatus(appointmentid: string){
    return this.http.get('https://localhost:7221/api/Appointment/ChangeStatus?appointmentid='+appointmentid);
  }

  getAllPatient(){
    return this.http.get('https://localhost:7221/api/Appointment/getAllPatient');
  }
}
