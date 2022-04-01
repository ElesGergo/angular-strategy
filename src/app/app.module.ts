import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent,
        children: [
          { component: ListComponent, path: '' },
          { component: DetailsComponent, path: 'details/:data' },
        ],
      },
    ]),
  ],
  declarations: [AppComponent, ListComponent, DetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
