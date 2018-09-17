import { UPDATE_USER } from '../../constans/constans';

let dataState = {
    userName: '',
    password: '',
    data: [],
}

export default UserReducer = (state = dataState,actions) => {
    switch (actions.type) {
        case UPDATE_USER:
            return Object.assign({}, state, { userName: actions.payload.userName, password: actions.payload.password, data: actions.payload.data });
        default:
            return state;
    }
}
