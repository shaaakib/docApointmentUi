import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { LayoutComponent } from './page/layout/layout.component';
import { AppointmentListComponent } from './page/appointment-list/appointment-list.component';
import { NewAppointmentComponent } from './page/new-appointment/new-appointment.component';
import { PatientListComponent } from './page/patient-list/patient-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
     path: 'login',
     component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'appointment-list',
                component: AppointmentListComponent
            },
            {
                path: 'newAppointment',
                component: NewAppointmentComponent
            },
            {
                path: 'patient-list',
                component: PatientListComponent
            },
        ]
    }
];
