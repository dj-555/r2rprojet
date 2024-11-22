export class Client {
  constructor(
    public id: string,
    public email: string,
    public phone: string | null,
    public password: string,
    public lastName: string,
    public firstName: string,
    public isAdmin: boolean,
    public address: string | null,
    public currentLevel: number,
    public score: number
  ) {}
}
