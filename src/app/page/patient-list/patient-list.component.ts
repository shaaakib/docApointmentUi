import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-patient-list',
  imports: [],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent implements OnInit {
  masterSrv = inject(MasterService);

patientList: any = [];

ngOnInit(): void {
  this.getAllPatient();
}

getAllPatient(){
  this.masterSrv.getAllPatient().subscribe((res:any) => {
    this.patientList = res;
  })
}

}
