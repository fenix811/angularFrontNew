export default class Company {
    id: number;
    name: string;

    public constructor(init?:Partial<Company>) {
        Object.assign(this, init);
    }
}
