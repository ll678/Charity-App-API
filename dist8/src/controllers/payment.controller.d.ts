import { Payment } from "../models/payment";
import { PaymentRepository } from "../repositories/payment.repository";
export declare class PaymentController {
    private paymentRepo;
    constructor(paymentRepo: PaymentRepository);
    getAllPaymentMethods(): Promise<Array<Payment>>;
    createPaymentMethod(payment: Payment): Promise<Payment>;
}
