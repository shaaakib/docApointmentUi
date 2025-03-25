import { Component, inject } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-appointment',
  imports: [FormsModule],
  templateUrl: './new-appointment.component.html',
  styleUrl: './new-appointment.component.css'
})
export class NewAppointmentComponent {

  masterSrv = inject(MasterService);

  appObj:any = {
    patientId: 0,
    patientName: "",
    email: "",
    city : "",
    mobileNo : "",
    address : "",
    appointmentDate : "",
  }

  OnSave(){
    debugger;
    this.masterSrv.createNewAppointment(this.appObj).subscribe((res:any) => {
      debugger;
      alert("Appointment created successfully");
  })
 }

 getPatientInfo(){

    this.appObj.patientName = "";
    this.appObj.email= "";
    this.appObj.city = "";
    this.appObj.address = "";

  this.masterSrv.searchByPatientMobile(this.appObj.mobileNo).subscribe((res:any) => {
    this.appObj.patientName = res.patientName;
    this.appObj.email = res.email;
    this.appObj.city = res.city;
    this.appObj.address = res.address;
  }, error =>{
    alert("New Patient create");
  })
 }

}