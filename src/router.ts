import { Router, Request, Response } from "express";
import { CustomerRepositoryInMemory } from "./infra/repository/memory/CustomerRepositoryInMemory";
import { CustomerCreate } from "./controllers/customers/create/CustomerCreate";
import { CustomerList } from "./controllers/customers/getAllCustomers/CustomerList";

const router = Router();

const repository = new CustomerRepositoryInMemory();
const customerCreate = new CustomerCreate(repository);
const customerList = new CustomerList(repository);

router.post("/customer", (request: Request, response: Response) => {
  customerCreate.execute(request, response);
});

router.get("/customer", (request: Request, response: Response) => {
  customerList.execute(request, response);
});

export { router };
