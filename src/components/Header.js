import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ title }) => (
    <View style={ styles.container }>
        <Text style={ styles.title }>
            { title }
        </Text>
    </View>
);

const styles = {
    /*
     * default display for View is `flex`
    */
    container: {
        backgroundColor: '#fff',
        /*
         * default: dp,
         * another choose: %
        */
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center', //<-- mainAxis
        //alignItems <-- crossAxis
    },
    title: {
        color: '#525252',
        fontWeight: 'bold',
        fontSize: 14
    }
}

export default Header;