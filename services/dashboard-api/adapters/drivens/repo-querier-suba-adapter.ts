
import { User as RepoUser } from "../../../repository/app/schemas/user";
import { User } from "../../ports/drivers";
import { ForRepoQuerying } from "../../ports/drivens";
const userMock : RepoUser = {
    id: '12314',
    name: 'John Doe',
    email: 'john@gmail.com'
}

export class RepoQuerierStub implements ForRepoQuerying{
    getUser(email: string): Promise<RepoUser> {
      return Promise.resolve(userMock); 

    }
    createUser(user: User, password: string): Promise<RepoUser> {
      return Promise.resolve(userMock);
    }
  
}