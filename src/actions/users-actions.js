import { UPDATE_USER } from '../constans/constans';

export default updateUser = (newUser, newPass) => {
    return {
        type: UPDATE_USER,
        playload: {
            userName: newUser,
            password: newPass
        }
    }
}