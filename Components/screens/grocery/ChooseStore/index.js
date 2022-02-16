import React, { Fragment, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { SearchBar } from 'react-native-elements';

import RoundItemBadge from '../../../Common/RoundItemBadge'
import baseStyles from '../../../../css/layout/base'
import colors from '../../../../css/abstracts/variables'
import colorStyles from "../../../../css/abstracts/color";






const filterItemsBySearchLabel = (items, searchLabel) => {
    // if (!searchLabel || !items) return []
    
    const filteredItems = items.filter(item => {
        const lowerCaseLabel = item.label.toLowerCase()
        return (lowerCaseLabel.indexOf(searchLabel.toLowerCase()) > -1)
    });
    return filteredItems;
}


const ChooseStore = (props) => {
    const { storeSelectionLimit, onPressBack } = props;
    const [searchTerm, setSearchTerm] = useState('')
    const [favStores, setFavStores] = useState(props.favStores)
    const [nearbyStores, setNearbyStores] = useState(props.nearbyStores)
    const [selectedStoreMap, selectStore] = useState({})


    onBack = () => {
        onPressBack()
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
                    <Text style={baseStyles.f14}>{'Choose Stores'} </Text>
                </View>
                <View style={[baseStyles.flexTwo, baseStyles.alignItemsEnd]}>
                    <Text onPress={onBack} style={colorStyles.bluetiful}> {'Back'} </Text>
                </View>
            </View>)   
    }

    renderStoresInGrid = (stores) => {
        if (stores) {
            return (<View style={styles.flexContainer}>
                {stores.map(item => (
                    <Fragment key={item.id}>
                        <RoundItemBadge onBadgeSelect={onStoreSelect} item={item} isSelected={!!selectedStoreMap[item.id]} />
                    </Fragment> 
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
        const filteredFavStores = filterItemsBySearchLabel(props.favStores, searchTerm)
        setFavStores(filteredFavStores)
        const filteredNearbyStores = filterItemsBySearchLabel(props.nearbyStores, searchTerm)
        setNearbyStores(filteredNearbyStores)
    }, [searchTerm])

    return (
        <Fragment>
            {renderNavigationStrip()}
            <View style={[baseStyles.makeFlex, baseStyles.alignJustifyCenter, baseStyles.mTop40]}>
                <Text style={[baseStyles.f12, colorStyles.lightgrey2]}>
                    {`These are the stores near you that have  \n              added their loyalty cards`}
                </Text>
            </View>    
            <View style={baseStyles.mTop15}> 
                <SearchBar
                    platform="ios"
                    placeholder="Search for other stores"
                    placeholderTextColor={colors.blueGrey}
                    inputContainerStyle={{backgroundColor: colors.lightgrey}}
                    onChangeText={setSearchTerm}
                    value={searchTerm}
                />
            </View>
            {!searchTerm && <>
            <View style={{ paddingTop: StatusBar.currentHeight, height: 400 }}>
                    <View style={[baseStyles.makeFlex, baseStyles.alignJustifyCenter, baseStyles.mTop20, baseStyles.mLeft10]}>
                        <Text style={[baseStyles.f12, colorStyles.slate]}>
                            {'Favorite Stores'}
                        </Text>
                    </View>
                    {renderStoresInGrid(favStores)}
                    <View style={[baseStyles.makeFlex, baseStyles.alignJustifyCenter, baseStyles.mTop10, baseStyles.mLeft10]}>
                        <Text style={[baseStyles.f12, colorStyles.slate]}>
                            {'Nearby Stores'}
                        </Text>
                    </View>
                    {renderStoresInGrid(nearbyStores)}
            </View>
            </>}

            {!!searchTerm && <View style={{ paddingTop: StatusBar.currentHeight, height: 400 }}>
                <ScrollView>
                    {renderStoresInGrid([...favStores, ...nearbyStores])}
                </ScrollView>    
            </View>}
        </Fragment>
    )
}


ChooseStore.defaultProps = {
    storeSelectionLimit: 1
}

export default ChooseStore




const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 0,
        margin: 0,
        flex: 1
    }
})