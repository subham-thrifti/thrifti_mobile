import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import colors from '../../../../css/abstracts/variables';
import baseStyles from "../../../../css/layout/base"

const Loader = ({ show }) => {
    return <ActivityIndicator size="large" color={colors.bluetiful} animating={show}/>
}


const LoadingStoreRecommendation = (props) => {
    return (
        <View style={[baseStyles.makeFlex, baseStyles.alignJustifyCenter]}>
            <View style={styles.titleContainer}> 
                <Text style={{ fontSize: 16, lineHeight: 20 }}>{'Finding You the Best Store Recommendation'}</Text>
            </View>
            <View style={styles.bodyContainer}> 
                <Loader show/>
            </View>
            <View style={styles.footerContainer}> 
                <Text style={{ fontSize: 16, lineHeight: 20 }}>{'        thirfti is looking for best store       \n   recommendation that would save you \n                  more money!'}</Text>
            </View>
        </View>
    )
}

export default LoadingStoreRecommendation


const styles = StyleSheet.create({
    titleContainer: {
        ...baseStyles.mTop60,
        ...baseStyles.f20,
        ...baseStyles.fontW300,
    },
    bodyContainer: {
        ...baseStyles.mTop50,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerContainer: {
        paddingHorizontal: 20, 
        ...baseStyles.mTop50,
        ...baseStyles.f12,
        ...baseStyles.fontW100,
        alignSelf: 'center'
    }

})