import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';

import { View, Text } from 'react-native';
import { colors } from '../../ChooseCountry/styles';


const SplashScreen = () => {
    return (
        <Fragment>
            <View style={[styles.flexContainer, { backgroundColor: colors.dodgerBlue}]}>
                <Text style={{ color: 'white', fontSize: 35, fontWeight: '800'}}> thrifti </Text>
            </View>   
        </Fragment>
    )
}
 

const styles = StyleSheet.create({
    flexContainer:  {
        height: '100%',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default SplashScreen