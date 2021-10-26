import { BaseEntity } from "./base.entity";
import { assign } from "lodash";
import {UserRoleEnum} from "../enums/user-role.enum";

export class UserEntity extends BaseEntity {
  public login: string;
  public role:UserRoleEnum
  public password: string;
  public balance: number;
  constructor(data: Partial<UserEntity>) {
    super();
    assign(data);
  }
}
