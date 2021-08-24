import React, { Fragment, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';

import RoundItemBadge from '../../../Common/RoundItemBadge'
import baseStyles from '../../../../css/layout/base'
import colors from '../../../../css/abstracts/variables'
import colorStyles from "../../../../css/abstracts/color";
import elemStyles from '../../../../css/elemStyles';





const filterItemsBySearchLabel = (items, searchLabel) => {
    // if (!searchLabel || !items) return []
    
    const filteredItems = items.filter(item => {
        const lowerCaseLabel = item.label.toLowerCase()
        return (lowerCaseLabel.indexOf(searchLabel.toLowerCase()) > -1)
    });
    return filteredItems;
}


const SelectFavStore = (props) => {
    const { onPressSkip, storeSelectionLimit, onPressContinue } = props;
    const [searchTerm, setSearchTerm] = useState('')
    const [stores, setStores] = useState(props.stores)
    const [selectedStoreMap, selectStore] = useState({})


    onSkip = () => {
        onPressSkip()
    }

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

    renderNavigationStrip = () => {
        return (
            <View style={baseStyles.flexRow}>
                <View style={[baseStyles.alignItemsStart]}>
                    <Text style={baseStyles.f14}>{'Select Favorite Stores'} </Text>
                </View>
                <View style={[baseStyles.flexTwo, baseStyles.alignItemsEnd]}>
                    <Text onPress={onSkip} style={colorStyles.bluetiful}> {'Skip'} </Text>
                </View>
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
    
    getSelectedStoreCount = () => {
        return Object.keys(selectedStoreMap).length
    }

    onContinueButtonPress = () => {
        const selectedStores = Object.values(selectedStoreMap)
        onPressContinue(selectedStores)
    }

    useEffect(() => {
        const filteredStores = filterItemsBySearchLabel(props.stores, searchTerm)
        setStores(filteredStores)
    }, [searchTerm])

    renderBottomPanel = () => {
        return (
        <View style={[baseStyles.mTop10, baseStyles.p5, styles.bottomPanel, baseStyles.flexRow]}>
            <Text style={baseStyles.flexOne}> {`Selected Stores \n ${getSelectedStoreCount()}/${storeSelectionLimit}`}</Text>
            <View style={baseStyles.flexTwo, { alignItems: 'flex-end'}}>
             <Button title={'Continue'}
                 raised={true}
                 titleStyle={{...colorStyles.white, fontSize: 14, fontWeight: '600'}}
                 buttonStyle={elemStyles.pBtnXtraSmall}
                 containerStyle={{ ...elemStyles.pBtnXtraSmall }}
                 onPress={onContinueButtonPress}
                 />
             </View>        
         </View>)
    }

    return (
        <Fragment>
            {renderNavigationStrip()}
            <View style={[baseStyles.makeFlex, baseStyles.alignJustifyCenter, baseStyles.mTop40]}>
                <Text style={[baseStyles.f14]}>
                    {'Select 4 stores where you do grocery shopping'}
                </Text>
            </View>    
            <View style={baseStyles.mTop5}> 
                <SearchBar
                    platform="ios"
                    placeholder="Search"
                    placeholderTextColor={colors.blueGrey}
                    inputContainerStyle={{backgroundColor: colors.lightgrey}}
                    onChangeText={setSearchTerm}
                    value={searchTerm}
                />
            </View>
            <View style={[baseStyles.makeFlex, baseStyles.alignJustifyCenter, baseStyles.mTop40, baseStyles.mLeft10]}>
                <Text style={[baseStyles.f12, colorStyles.slate]}>
                    {/* TODO: Fix Layout */}
                    {'Showing stores near you, you can search for other stores'}
                </Text>
            </View>
            <View style={{ paddingTop: StatusBar.currentHeight, height: 400 }}>
                <ScrollView>
                    {renderStoresInGrid()}
                </ScrollView> 
            </View>
            {renderBottomPanel()}
        </Fragment>
    )
}


SelectFavStore.defaultProps = {
    storeSelectionLimit: 4
}

export default SelectFavStore




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
    flexItem: {
        marginTop: 5,
        color: colors.black,
        fontSize: 14,
        textAlign: 'center'
    },
    bottomPanel: {
        height: 60,
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