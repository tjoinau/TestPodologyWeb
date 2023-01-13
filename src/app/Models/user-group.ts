import { EUserType } from "./e-user-type";
import { User } from "./user";

export interface UserGroup {
    groupName: string
    users: User[]
}
