// import { AsyncStorage } from "react-native"
// import Storage from 'react-native-storage';


// var storage = new Storage({
//     size: 1000,
//     storageBackend: AsyncStorage,
//     defaultExpires: 1000 * 3600 * 24,
//     enableCache: true,
//     sync:{

//     }
// })

// export const localAdd =  (token, value) => {
//     storage.save({
//         key: token,
//         data: value,
//         expires: 1000 * 3600
//     });
// }

// export const localGet = (token) => {
//     storage.load({
//         key: token,
//         autoSync: true,
//         syncInBackground: true,

//     }).then(ret => {
//         // found data go to then()
//         console.log(ret);})
//         .cache(err => {
//         console.log(err.message);
//     });
// }

// export const localRemove = (token) => {
//     storage.remove({
//         key: token
//     });
// }


















































// export const loginAdd = async (key, value) => {
//     try {
//         await AsyncStorage.setItem(`@Login:${key}`, value);
//         console.log(value, 'name');
//     } catch (error) {
//         alert('error loginAdd');
//     }
// }


// export const loginGet = async (key) => {
//     try {
//         const value = await AsyncStorage.getItem(key);
//         if (value !== null) {
//             const item = JSON.parse(value);
//             return item;
//         }
//         else {
//             alert('Kullanıcı bulunamadı.')
//         }
//     } catch (error) {
//         alert(error);
//     }
// }

// export const loginRemove = async (key) => {
//     try {
//         await AsyncStorage.removeItem(key);
//         return true;
//     } catch (error) {
//         alert(error);
//     }
// }



// module.exports = loginAdd, loginRemove, loginGet