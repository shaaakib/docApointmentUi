import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-appointment-list',
  imports: [],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {

  masterSrv = inject(MasterService);
  appointmentList: any[] = [];

  activeBtnName: string = "All";

  ngOnInit(): void {
    this.getAllAppointment();
  }

    getAllAppointment(){
      this.activeBtnName = "All";
      this.masterSrv.getAllAppointment().subscribe((data:any) => {
        this.appointmentList = data;
    })
  }

  getNewAppointment(){
    this.activeBtnName = "New";
    this.masterSrv.getNewAppointment().subscribe((data:any) => {
      this.appointmentList = data;
  })
  }

  getDoneAppointment(){
    this.activeBtnName = "Done";
    this.masterSrv.getDoneAppointment().subscribe((data:any) => {
      this.appointmentList = data;
    })
  }

  onMarkDone(id:string){
    this.masterSrv.changeStatus(id).subscribe((res:any) => {
      this.getAllAppointment();
   })
  }

}
