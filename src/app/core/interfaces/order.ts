export default class Order {
    id?: number = null;
    date?: null;
    isBonusDay = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
