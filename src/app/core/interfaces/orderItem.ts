export default class OrderItem {
    id?: number = null;
    productName: '';
    productId: '';
    count?: number = 0;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
