import { repository } from "@loopback/repository";
import { post, get, requestBody, HttpErrors, param } from "@loopback/rest";
import { Payment } from "../models/payment";
import { PaymentRepository } from "../repositories/payment.repository";

export class PaymentController {
  constructor(
    @repository(PaymentRepository.name) private paymentRepo: PaymentRepository
  ) {}

  @get('/payment')
  async findPayment(): Promise<Payment[]> {
    return await this.paymentRepo.find();
  }

  @post('/payment')
  async createPayment(@requestBody() payment: Payment) {
    return await this.paymentRepo.create(payment);
  }
}