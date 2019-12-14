export default class Product {
    id?: number = null;
    name: '';
    description: '';
    companyId?: number = null;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
