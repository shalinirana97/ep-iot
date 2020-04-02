import {combineReducers} from 'redux';
import fuse from './fuse';
import auth from 'app/auth/store/reducers';
import quickPanel from 'app/fuse-layouts/shared-components/quickPanel/store/reducers';
import tariffDetail from './tariff.reducer'

const createReducer = (asyncReducers) =>
    combineReducers({
        auth,
        fuse,
        quickPanel,
        tariffDetail,
        ...asyncReducers
    });

export default createReducer;
