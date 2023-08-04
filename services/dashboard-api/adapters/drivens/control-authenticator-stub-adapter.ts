 import { AuthDetails, ForControlAuthenticating,Permissions } from "../../ports/drivens";
 
 
 const authDetailsMock: AuthDetails = {
    token : '290723472',
    refreshToken: '4052048'
}

const permissionsMock: Permissions ={
    admin: true,
    user: true,
};

 export class ControlAuthenticatorStub implements ForControlAuthenticating {
    

    
    getAuthDetails(_email: string, _password: string): Promise<AuthDetails> {
         return Promise.resolve(authDetailsMock);
     }
     getPermissions(_email: string, _password: string): Promise<Permissions> {
         return Promise.resolve(permissionsMock);
     }
    


 }