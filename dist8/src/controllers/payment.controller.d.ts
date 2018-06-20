import { Payment } from "../models/payment";
import { PaymentRepository } from "../repositories/payment.repository";
import { StripeToken } from "../models/stripetoken";
export declare class PaymentController {
    private paymentRepo;
    constructor(paymentRepo: PaymentRepository);
    findPayment(jwt: string): Promise<Payment[]>;
    createPayment(jwt: string, payment: Payment): Promise<Payment>;
    createStripePayment(jwt: string, stripeToken: StripeToken): Promise<any>;
    getUserInformation(jwt: string): Promise<any>;
}
