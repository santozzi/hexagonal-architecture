import { DashboardApi } from './dashboard-api';
import { ControlAuthenticatorStub} from './../adapters/drivens';
import {RepoQuerierStub} from './../adapters/drivens';
import { AuthenticatorProxyAdapter } from '../adapters/drivers/authenticator-proxy-adapter';
const compositionMock = () => {
    const controlAuthenticatorStub = new ControlAuthenticatorStub()
    const repoQurierStub = new RepoQuerierStub();
    const dashboardApiMock = new DashboardApi(controlAuthenticatorStub,repoQurierStub);

    const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(
        dashboardApiMock
    );
    return {authenticatorProxyAdapter,};
};

export const {authenticatorProxyAdapter} = compositionMock();