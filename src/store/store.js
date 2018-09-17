import { createStore } from 'redux';
import user from '../reducers/user/UserReducer'; 

export default createStore( user );