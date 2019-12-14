import Product from './product';

export default interface Company {
    id: number;
    name: string;
    companyProducts: Product[];


    // public constructor(init?:Partial<Company>) {
    //     Object.assign(this, init);
    // }
}
