import knex, { Knex } from 'knex';
import { Customer } from "../../../models/Customer";
import { CustomerRepository } from "../../../models/repositories/CustomerRepository";
import { development } from "./Knex.config";
import { Uuid } from '../../../models/Uuid';

export class CustomerRepositoryDatabase implements CustomerRepository {
  private connection: Knex
  
  constructor(){
    this.connection = knex(development)
  }

  async save(customer: Customer): Promise<void> {
    await this.connection('customer').insert({
      'id': customer.getId().getValue(),
      'name': customer.getName(),
      'document': customer.getDocument().getValue()
    })
  }
  async getAll(): Promise<Customer[]> {
    const customersCollection: Array<Customer> = []

    const customers = await this.connection('customer').select('*')

    for(let i = 0; i < customers.length; i ++){
      const customer = customers[i]
      const id = customer['id']
      const name = customer['name']
      const document = customer['document']
      customersCollection.push(Customer.create(name, document, id));
    }

    return customersCollection
  }

  async getById(id: Uuid): Promise<Customer> {
    const customer = await this.connection('customer').select('*').where({'id': id.getValue()})

    if(!customer){
      throw new Error(`Customer not found: ${id.getValue()}`)
    }
    return Customer.create(customer[0]['name'], customer[0]['document'], customer[0]['id'])
  }

  async remove(id: Uuid): Promise<void> {
    await this.connection('customer').where({'id': id.getValue()}).delete()
  }
}