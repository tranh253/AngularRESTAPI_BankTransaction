import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/shared/client.service';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css'],
})
export class ClientInfoComponent implements OnInit {
  ClientInfo: any = [];
  constructor(public clientService: ClientService) {}

  ngOnInit(): void {
    this.loadClientInfo();
  }

  // Client Info
  loadClientInfo() {
    return this.clientService.GetClientTransaction().subscribe((data: {}) => {
      this.ClientInfo = data;
    });
  }

  // Calculate balance
  calculateBalance() {
    this.ClientInfo.balance;
  }
}
