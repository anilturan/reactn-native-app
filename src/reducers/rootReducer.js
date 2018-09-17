import { combineReducers } from 'react-redux';
import userReducer from '../reducers/user/UserReducer';

const rootReducer = combineReducers({
    userReducer
});

export default rootReducer;
