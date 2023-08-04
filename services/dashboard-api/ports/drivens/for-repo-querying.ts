import { User as RepoUser } from "../../../repository/app/schemas/user";
import { User } from "../drivers";

export interface ForRepoQuerying {
    getUser(email:string): Promise<RepoUser>;
    createUser(user:User, password:string): Promise<RepoUser>;
}