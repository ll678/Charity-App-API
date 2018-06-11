import { Payment } from "../models/payment";
import { PaymentRepository } from "../repositories/payment.repository";
export declare class PaymentController {
    private paymentRepo;
    constructor(paymentRepo: PaymentRepository);
    findPayment(): Promise<Payment[]>;
    createPayment(payment: Payment): Promise<Payment>;
}
