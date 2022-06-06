import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ClientService } from './client.service';

describe('ClientService', () => {
  let service: ClientService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientService],
    });
    service = TestBed.inject(ClientService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it(`should fetch client infos as an Observable<Client>`, () => {
    const clientInfo = {
      user_id: '1abc',
      name: 'Mr A',
      transactions: [
        {
          transaction_id: '1a',
          date: '01.06.2022',
          type: 'receive',
          description: 'Salary from company A',
          amount: 3000,
        },
        {
          transaction_id: '1b',
          date: '02.06.2022',
          type: 'payment',
          description: 'Buying furniture',
          amount: 50,
        },
        {
          transaction_id: '1c',
          date: '02.06.2022',
          type: 'payment',
          description: 'Buying food',
          amount: 10,
        },
        {
          transaction_id: '1d',
          date: '03.06.2022',
          amount: 800,
          description: 'Paying house rent',
          type: 'payment',
        },
        {
          transaction_id: '1e',
          date: '04.06.2022',
          amount: 500,
          description: 'Buying bicycle',
          type: 'payment',
        },
      ],
      balance: 0,
      currency: 'EUR',
    };

    service.GetClientInfo().subscribe((data: any) => {
      expect(data.transactions.length).toBe(5);
    });

    const req = httpMock.expectOne(`http://localhost:3000/Client`);
    expect(req.request.method).toBe('GET');
    req.flush(clientInfo);
  });
  afterEach(() => {
    httpMock.verify();
  });
});
