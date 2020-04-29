import {combineReducers} from 'redux';
import fuse from './fuse';
import auth from 'app/auth/store/reducers';
import quickPanel from 'app/fuse-layouts/shared-components/quickPanel/store/reducers';
import devicesDetail from './devices.reducer';
import customers from './customers.reducer';
import installerAgency from './installerAgency.reducer';
import tariffDetail from './tariff.reducer';
import promotions from './promotions.reducer';

const createReducer = (asyncReducers) =>
    combineReducers({
        auth,
        fuse,
        quickPanel,
        devicesDetail,
        customers,
        installerAgency,
        tariffDetail,
        promotions,
        ...asyncReducers
    });

export default createReducer;
