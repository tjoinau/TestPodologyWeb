import { Injectable } from "@angular/core";
import { User } from "../Models/user";

Injectable()
export class GlobalContext {
    connectedUser : User | undefined = undefined
}

// export const connectedUser : User | undefined = undefined
