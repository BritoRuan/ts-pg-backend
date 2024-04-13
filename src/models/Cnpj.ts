import { Document } from "./Document";

export class Cnpj implements Document {
  constructor(private value: string) {
    if (!Cnpj.isValid(value)) {
      throw new Error(`Value not is valid CNPJ: ${value}`);
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
