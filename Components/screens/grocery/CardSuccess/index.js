import React, { Fragment, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import baseStyles from '../../../../css/layout/base'
import colors from '../../../../css/abstracts/variables'
import colorStyles from "../../../../css/abstracts/color";
import elemStyles from '../../../../css/elemStyles';
import TIcon from '../../../Common/TIcon';



const CardSuccess = (props) => {
    
    const { onPressBtn } = props

    return (
            <View style={[baseStyles.mTop60, styles.bottomPanel]}>
                <Text style={[colorStyles.bluetiful, baseStyles.f18]}> {'Card Added Successfully'}</Text>
                <TIcon
                    color={colors.dodgerBlue}
                    containerStyle={baseStyles.mTop30}
                    name="checkbox-marked-circle-outline"
                    size={60}
                    type="material-community" />

                <Text style={[baseStyles.f16, baseStyles.mTop40, {lineHeight: 25}]}>
                    {'You can save a lot by creating your \n       next shopping list with thrifti'}
                </Text>
                <Text style={[baseStyles.f16, baseStyles.mTop80, {lineHeight: 25}]}>
                    {'Do you want to create your shopping \n                list with thrifti?'} </Text>
                <View style={[baseStyles.flexRow, baseStyles.mTop40]}>
                    <Button title={'Yes'}
                        raised={true}
                        titleStyle={{color: '#ffffff'}}
                        buttonStyle={elemStyles.pBtnSmall}
                        containerStyle={{ ...elemStyles.pBtnSmall }}
                        onPress={() => onPressBtn(true)}
                        />
                    <Button
                        raised={true}
                        title={'No'}
                        type={'outline'}
                        titleStyle={colorStyles.bluetiful}                        
                        buttonStyle={[elemStyles.pBtnSmallWhite]}
                        containerStyle={[elemStyles.pBtnSmall, baseStyles.mLeft20]}
                        onPress={() => onPressBtn(false)}
                        />
                </View>   
            </View>
    )
}




export default CardSuccess


const commonStyles = {
    pbtn: {
        borderRadius: 50,
        backgroundColor: '#3e84fe',
        color: '#ffffff',
        fontSize: 16,
        height: 50,
        width: 249
    },
    disabledBtn: {
        borderRadius: 50,
        color: '#ffffff',
        fontSize: 16,
        height: 50,
        width: 249
    },
    mTop10: {
        marginTop: 10
    },
    mTop20: {
        marginTop: 20
    },
    color: {
        slate: '#4C5264'
    }
}

const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        // flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        padding: 0,
        margin: 0,
        flex: 1
    },
    flexItem: {
        marginTop: 5,
        color: colors.black,
        fontSize: 14,
        textAlign: 'center'
    },
    bottomPanel: {
        height: 500,
        paddingLeft: 15,
        paddingRight: 15,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0, .3)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 2,
    }
})