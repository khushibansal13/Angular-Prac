import { Routes } from '@angular/router';
import { ControlStatmentComponent } from './components/control-statment/control-statment.component';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { SignalComponent } from './components/signal/signal.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dataBinding',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'dataBinding',
    component: DataBindingComponent
  },
  {
    path: 'ng-class',
    component: NgClassComponent
  },
  {
    path: 'control-flow',
    component: ControlStatmentComponent
  },
  {
    path: 'signal',
    component: SignalComponent
  },
  {
    path: 'linked-signal',
    component: LinkedSignalComponent
  },
  {
    path:'template-form',
    component: TemplateFormComponent
  },
  {
    path:'reactive-form',
    component: ReactiveFormComponent
  }
];
