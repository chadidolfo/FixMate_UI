import { Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { ClientComponent } from './client/client.component';
import { SignUpClientComponent } from './basic/components/sign-up-client/sign-up-client.component';
import { SignUpCompanyComponent } from './basic/components/sign-up-company/sign-up-company.component';
import { LoginComponent } from './basic/components/login/login.component';

export const routes: Routes = [{

    path:'campany_component',
    component:CompanyComponent,
},
{

    path:'client_component',
    component:ClientComponent,
},
{
    path:'register_client',
    component:SignUpClientComponent,
},
{
    path:'register_company',
    component:SignUpCompanyComponent,
},
{
    path:'login',
    component:LoginComponent,
},
    
];
