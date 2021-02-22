export class Product {
  _id: string;
  name: string;
  altName: string;
  description: string;
  price: number;
  menuSection: {
    _id : number,
    name: string,
    active: boolean
  }

  constructor(id, name, altName, description = '', price = 0, menuSection) {
    this._id = id
    this.name = name
    this.altName = altName
    this.description = description
    this.price = price
    this.menuSection = menuSection
  }
}
