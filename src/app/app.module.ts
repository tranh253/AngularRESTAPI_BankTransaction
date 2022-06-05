import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientService } from './shared/client.service';
import { ClientInfoComponent } from './components/client-info/client-info.component';

@NgModule({
  declarations: [AppComponent, ClientInfoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [ClientService],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {
  ClientInfo: any = [];
  ngOnInit(): void {
    this.loadClient();
  }
  constructor(public clientService: ClientService) {}
  // Client Info
  loadClient() {
    return this.clientService.GetClientTransaction().subscribe((data: {}) => {
      this.ClientInfo = data;
    });
  }
  calculateBalance() {
    console.log(this.ClientInfo);
  }
}
