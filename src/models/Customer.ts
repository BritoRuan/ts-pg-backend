import { Document } from "./Document";
import { DocumentFactory } from "./DocumentFactory";
import { Uuid } from "./Uuid";

export class Customer {
  private name: string;
  private document: Document;
  private id: Uuid;

  constructor(name: string, document: Document, id?: string) {
    (this.name = name),
      (this.document = document),
      (this.id = id ? new Uuid(id) : Uuid.randomGenerator());
  }

  static create(name: string, document: string, id?: string): Customer {
    const documentInstance = DocumentFactory.create(document);

    return new Customer(name, documentInstance, id);
  }
}
