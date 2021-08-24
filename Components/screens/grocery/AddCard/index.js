import React, { Fragment, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import RoundItemBadge from '../../../Common/RoundItemBadge'
import baseStyles from '../../../../css/layout/base'
import colors from '../../../../css/abstracts/variables'
import colorStyles from "../../../../css/abstracts/color";
import elemStyles from '../../../../css/elemStyles';



const AddCard = (props) => {
    const { onPressAddNewCard, storeSelectionLimit, stores } = props;
    const [selectedStoreMap, selectStore] = useState({})

    onStoreSelect = (selectedStore) => {
        const { id: storeId } = selectedStore
        if (selectedStoreMap[storeId]) {
            let temp = selectedStoreMap
            delete temp[storeId]
            selectStore({...temp})
        } else if (Object.keys(selectedStoreMap).length < storeSelectionLimit) {
            selectStore({...selectedStoreMap, [storeId] : selectedStore })
        }
    }

    renderTitle = () => {
        return (
            <View style={baseStyles.mTop10}>
                <Text style={[baseStyles.f20, baseStyles.alignItemsStart]}>{'Cards'} </Text>
            </View>)   
    }

    renderStoresInGrid = () => {
        if (stores) {
            return (<View style={styles.flexContainer}>
                {stores.map(item => (
                    <RoundItemBadge onBadgeSelect={onStoreSelect} item={item} isSelected={!!selectedStoreMap[item.id]} />
                ))}
            </View>)
        }

        return null
    }
    
    onAddNewCardBtnPress = () => {
        const selectedStores = Object.values(selectedStoreMap)
        onPressAddNewCard(selectedStores)
    }


    return (
        <Fragment>
            {renderTitle()}
            <View style={[baseStyles.makeFlex, baseStyles.alignJustifyCenter, baseStyles.mTop40]}>
                <Text style={[baseStyles.f14]}>
                    {'Popular Stores'}
                </Text>
            </View>    
            <View style={{ paddingTop: StatusBar.currentHeight, height: 445 }}>
                <ScrollView>
                    {renderStoresInGrid()}
                </ScrollView> 
            </View>
            <View style={[baseStyles.mTop30, baseStyles.alignJustifyCenter]}>
                <Button title={'+ Add a new card'}
                 raised={true}
                 titleStyle={{...colorStyles.white, fontSize: 12, fontWeight: '600'}}
                 buttonStyle={elemStyles.pBtnSmall}
                 containerStyle={{ ...elemStyles.pBtnSmall }}
                 onPress={onAddNewCardBtnPress}
                 />
            </View>
            <View style={[baseStyles.flexRow, baseStyles.mTop30, styles.bottomPanel]}>
                <View style={[{alignItems: 'center'}]} >
                    <Icon color={'#468EF2'} name='payment' size={25}  type="material" /> 
                    <Text style={baseStyles.mTop2, baseStyles.f12, {color: '#468EF2'}}> Cards </Text>
                </View> 
                <View style={[{alignItems: 'center'}]} >
                    <Icon color={'#000'} name='layers' size={25}  type="material" /> 
                    <Text style={baseStyles.mTop2, baseStyles.f12, colorStyles.slate}> List </Text>
                </View> 
                <View style={[{alignItems: 'center'}]} >
                    <Icon color={'#000'} name='build' size={25}  type="material" /> 
                    <Text style={baseStyles.mTop2, baseStyles.f12, colorStyles.slate}> Options </Text>
                </View>
            </View>
        </Fragment>
    )
}


AddCard.defaultProps = {
    storeSelectionLimit: 4
}

export default AddCard




const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        padding: 0,
        margin: 0,
        flex: 1
    },
    bottomPanel: {
        justifyContent: 'space-between',
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: colors.greyWhite,
        marginRight: -22,
        marginLeft: -22
    }
})