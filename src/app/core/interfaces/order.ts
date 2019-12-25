export default class Order {
    id?: number = null;
    date?: null;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
