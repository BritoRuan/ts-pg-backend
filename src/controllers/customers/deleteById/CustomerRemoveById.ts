import { Request, Response } from "express";
import { CustomerRepository } from "../../../models/repositories/CustomerRepository";
import { Uuid } from "../../../models/Uuid";

export class CustomerRemoveById {
  constructor(readonly repository: CustomerRepository){
  }

  async execute(request: Request, response: Response){
    let id: string | Uuid = request.params.id
    id = new Uuid(id)

    await this.repository.remove(id)

    response.status(203).json({})
  }
}