// Component
export abstract class ProductComponent {
  abstract getPrice(): number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  add(product: ProductComponent): void {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(product: ProductComponent): void {}
}

// Leaf
export class ProductLeaf extends ProductComponent {
  constructor(
    public name: string,
    public price: number,
  ) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

// Composite
export class ProductComposed extends ProductComponent {
  private children: ProductComponent[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);

    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

// Client

const pen = new ProductLeaf('Caneta', 1);
const smartphone = new ProductLeaf('Smartphone', 2_000);
const tShirt = new ProductLeaf('Camiseta', 40);

const productBox = new ProductComposed();
productBox.add(pen, smartphone, tShirt);

const tablet = new ProductLeaf('Tablet', 2_000);
const kindle = new ProductLeaf('Kindle', 500);

const anotherProductBox = new ProductComposed();
anotherProductBox.add(tablet, kindle);
productBox.add(anotherProductBox);
console.log(productBox);
console.log(productBox.getPrice());
