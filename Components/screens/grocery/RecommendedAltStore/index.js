import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { addCurrencySymbol } from '../../../src/utils/localeUtils'
import baseStyles from '../../../../css/layout/base'
import colors from '../../../../css/abstracts/variables'
import colorStyles from "../../../../css/abstracts/color";
import elemStyles from '../../../../css/elemStyles';
import RoundItemBadge from '../../../Common/RoundItemBadge';
import { roundNumber } from '../../../src/utils/MathUtils';


const RecommendedAltStore = (props) => {
    
    const { selectedStore, recommendedStore, onPressBtn } = props

    getAmountDiffBetweenStores = () => {
        return addCurrencySymbol(roundNumber(selectedStore.cartValue - recommendedStore.cartValue))
    }

    return (
        <View style={[baseStyles.f20, baseStyles.mTop20, baseStyles.alignJustifyCenter]}>
            <Text style={[baseStyles.f18]}> {'Thrifti found an alternative store for you'}</Text>

            <View style={[baseStyles.mTop40, baseStyles.pBottom50, styles.bottomPanel]}>
                <Text style={[baseStyles.f16, baseStyles.mTop30, baseStyles.fontW500, colorStyles.green]}>
                    {`Save ${getAmountDiffBetweenStores()} by shopping at ${recommendedStore.label}`}
                </Text>
                <View style={[styles.flexContainer, baseStyles.mTop40]}>
                    <View>
                        <Text style={[styles.flexItem]}> {'Your selection'} </Text>
                        <View style={styles.flexItem}><RoundItemBadge onBadgeSelect={() => {}} item={selectedStore} /></View>
                        <Text style={[styles.flexItem, colorStyles.red,  baseStyles.fontW600]}> {`Total Cost: ${addCurrencySymbol(selectedStore.cartValue)}`} </Text>
                    </View>
                    <View style={baseStyles.mLeft30}>
                        <Text style={[styles.flexItem]}> {'thrifti recommends'} </Text>
                        <View style={styles.flexItem}><RoundItemBadge onBadgeSelect={() => {}} item={recommendedStore} /></View>
                        <Text style={[styles.flexItem, colorStyles.green, baseStyles.fontW600]}> {`Total Cost: ${addCurrencySymbol(recommendedStore.cartValue)}`} </Text>
                    </View>
                </View>
                <Text style={[baseStyles.f16, {lineHeight: 25}]}> {'Do you want to use the recommendation ?'} </Text>
                <View style={[baseStyles.flexRow, baseStyles.mTop25]}>
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
        </View>
    )
}




export default RecommendedAltStore



const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
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
        padding: 15,
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