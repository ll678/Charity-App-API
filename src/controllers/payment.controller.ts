import { repository } from "@loopback/repository";
import { post, get, requestBody, HttpErrors, param } from "@loopback/rest";
import { Payment } from "../models/payment";
import { PaymentRepository } from "../repositories/payment.repository";

export class PaymentController {
  constructor(
    @repository(PaymentRepository.name) private paymentRepo: PaymentRepository
  ) {}

  @get('/payment')
  async getAllPaymentMethods(): Promise<Array<Payment>> {
    return await this.paymentRepo.find();
  }

  @post('/payment')
  async createPaymentMethod(@requestBody() payment: Payment) {
    return await this.paymentRepo.create(payment);
  }
}