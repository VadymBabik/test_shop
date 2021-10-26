import { BaseEntity } from "./base.entity";
import { PurchaseStatusEnum } from "../enums/purchase-status.enum";

export class PurchaseEntity extends BaseEntity {
  public customerId: string;
  public itemId: string;
  public status: PurchaseStatusEnum;
}
