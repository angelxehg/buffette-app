export interface ProductInterface {
  id: number;
  code: string;
  title: string;
  brand: string;
}

export class Product implements ProductInterface {

  id = 0;
  code = '';
  title = '';
  brand = '';

  constructor(template: ProductInterface) {
    this.id = template.id;
    this.code = template.code;
    this.title = template.title;
    this.brand = template.brand;
  }

  public get existencias(): number {
    return 0;
  }
}
