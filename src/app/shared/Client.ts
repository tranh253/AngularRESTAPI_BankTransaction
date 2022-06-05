export class Client {
  user_id: string;
  name: string;
  transactions: [
    {
      transaction_id: string;
      date: string;
      type: string;
      amount: number;
    }
  ];
  balance: number;
  currency: string;
}
