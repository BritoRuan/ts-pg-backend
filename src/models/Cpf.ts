import { type Document } from "./Document";

export class Cpf implements Document {
  constructor(private value: string) {
    if (!Cpf.isValid(value)) {
      throw new Error(`Value not is valid CPF: ${value}`);
    }
  }

  static isValid(value: string): boolean {
    return value.length == 11;
  }

  getDocument(): Document {
    return this;
  }
  getValue(): string {
    return this.value;
  }
}
