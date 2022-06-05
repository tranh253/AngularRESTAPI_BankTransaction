export class Transaction {
    user_id: string;
    name: string;
    details: [
        {
            transaction_id: string;
            type: string;
            amount: number
        }
    ]
}