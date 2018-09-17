import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { ScrollView, Text, View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import HomePage from '../HomePage';
import Product from '../Product';
import Finance from '../Finance';
import VirtualPos from '../VirtualPos';
import CreditSales from '../CreditSales';
// import HomeScreen from '../Home';

const Menu = createDrawerNavigator(
    {
        Anasayfa: { screen: HomePage },
        Ürün: { screen: Product },
        Finans: { screen: Finance },
        SanalPos: { screen: VirtualPos },
        TaksitliSatıs: { screen: CreditSales },
    }
)
export default Menu


// export default class DrawerScreen extends Component {
//     navigateToScreen = (route) => () => {
//         const navigationAction = NavigationActions.navigate({ routeName: route });
//         this.props.navigation.dispatch(navigationAction);
//         this.props.navigation.dispatch(DrawerActions.closeDrawer())
//     }

//     render() {
//         return (
//             <View>
//                 <ScrollView>
//                     <View>
//                         <View style={styles.menuItem}>
//                             <Text onPress={this.navigation.navigate('Home')}>
//                                 Home
//                              </Text>
//                             <Text onPress={this.navigation.navigate('Login')}>
//                                 Login
//                              </Text>
//                         </View>
//                     </View>
//                 </ScrollView>
//             </View>
//         )
//     }

// };



