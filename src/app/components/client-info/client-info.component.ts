import { Component, OnInit, NgZone } from '@angular/core';
import { ClientService } from 'src/app/shared/client.service';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css'],
})
export class ClientInfoComponent implements OnInit {
  ClientInfo: any = [];
  constructor(public clientService: ClientService, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.loadClientInfo();
  }

  // Client Info
  loadClientInfo() {
    return this.clientService.GetClientInfo().subscribe((data: {}) => {
      this.ClientInfo = data;
    });
  }

  // Calculate balance
  calculateBalance() {
    let balance = 0;
    this.ClientInfo.transactions.forEach((transaction) => {
      if (transaction.type === 'receive') {
        balance = balance + transaction.amount;
      } else {
        balance = balance - transaction.amount;
      }
    });
    this.ClientInfo.balance = balance;
    this.clientService.UpdateBalance(this.ClientInfo).subscribe();
  }
}
