import { Customer } from "../../../models/Customer";
import { Uuid } from "../../../models/Uuid";
import { CustomerRepository } from "../../../models/repositories/CustomerRepository";

export class CustomerRepositoryInMemory implements CustomerRepository {
  
  private customerCollection: Array<Customer> = [];

  async save(customer: Customer): Promise<void> {
    this.customerCollection.push(customer);
  }

  async getAll(): Promise<Customer[]> {
    return this.customerCollection;
  }
  
  async getById(id: Uuid): Promise<Customer> {
    throw new Error('Method not implemented.')
  }

  async remove(id: Uuid): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
