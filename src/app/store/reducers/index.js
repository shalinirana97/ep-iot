import {combineReducers} from 'redux';
import fuse from './fuse';
import auth from 'app/auth/store/reducers';
import quickPanel from 'app/fuse-layouts/shared-components/quickPanel/store/reducers';
import tariffDetail from './tariff.reducer'
import devicesDetail from './devices.reducer'
import installerAgency from './agency.reducer'

const createReducer = (asyncReducers) =>
    combineReducers({
        auth,
        fuse,
        quickPanel,
        tariffDetail,
        devicesDetail,
        installerAgency,
        ...asyncReducers
    });

export default createReducer;
