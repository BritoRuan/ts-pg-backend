import { Request, Response } from "express";
import { CustomerRepository } from "../../../models/repositories/CustomerRepository";
import { Uuid } from "../../../models/Uuid";

export class CustomerGetById {
  constructor(readonly respository: CustomerRepository) {}

  async execute(request: Request, response: Response) {
    let id : string | Uuid = request.params.id
  
    id = new Uuid(id)
    const customer = await this.respository.getById(id);
    response.status(201).json({ customer });
  }
}
