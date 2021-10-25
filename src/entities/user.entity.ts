import { BaseEntity } from "./base.entity";

export class UserEntity extends BaseEntity {
  public login: string;
  public password: string;
  public balance: number;
}
