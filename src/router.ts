import { Router, Request, Response } from "express";
import { CustomerRepositoryInMemory } from "./infra/repository/memory/CustomerRepositoryInMemory";
import { CustomerCreate } from "./controllers/customers/create/CustomerCreate";
import { CustomerList } from "./controllers/customers/getAllCustomers/CustomerList";
import { CustomerRepositoryDatabase } from "./infra/repository/database/CustomerRepository";
import { CustomerGetById } from "./controllers/customers/getById/CustomerGetById";
import { CustomerRemoveById } from "./controllers/customers/deleteById/CustomerRemoveById";

const router = Router();

const repository = new CustomerRepositoryInMemory();
// const repository = new CustomerRepositoryDatabase();
const customerCreate = new CustomerCreate(repository);
const customerList = new CustomerList(repository);
const customerById = new CustomerGetById(repository)
const customerRemoveById = new CustomerRemoveById(repository)

router.post("/customer", (request: Request, response: Response) => {
  customerCreate.execute(request, response);
});

router.get("/customer", (request: Request, response: Response) => {
  customerList.execute(request, response);
});

router.get("/customer/:id", (request: Request, response: Response) => {
  customerById.execute(request, response);
});

router.delete("/customer/:id", (request: Request, response: Response) => {
  customerRemoveById.execute(request, response);
});

export { router };
