import {AuthenticatedUser, ForAuthenticating, User } from '../ports/drivers';
import { ForRepoQuerying } from '../ports/drivens';
import { ForControlAuthenticating } from '../ports/drivens';
export class DashboardApi implements ForAuthenticating {
    constructor(
        private readonly controlAuthenticator: ForControlAuthenticating,
        private readonly repoQurier: ForRepoQuerying
    ){}
 
    async login(email: string, password: string): Promise<AuthenticatedUser> {
        const authDetails = await this.controlAuthenticator.getAuthDetails(
            email,
            password
        );
        const permission = await this.controlAuthenticator.getPermissions(
            email,
            password
        );
        const user = await this.repoQurier.getUser(email);
        return {
            ...user,
            ...authDetails,
            ...permission
        }
    }
 
    async register(user: User, password: string): Promise<AuthenticatedUser> {
       const newUser = await this.repoQurier.createUser(user,password);
       const authDetails = await this.controlAuthenticator.getAuthDetails(
        user.email,
        password
       );
       const permissions = await this.controlAuthenticator.getPermissions(
        user.email,
        password
       );
        return {
            ...newUser,
            ...authDetails,
            ...permissions,
        };
    }

    


}