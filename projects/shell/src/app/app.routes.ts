import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  // {
  //   path: 'cryptos',
  //   loadChildren: () => loadRemoteModule({ type: 'manifest', remoteName: 'mfe1', exposedModule: './Module'}).then(m => m.CryptosModule)
  // },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
