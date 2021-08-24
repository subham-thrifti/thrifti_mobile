import React, { Fragment, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';

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


const ChooseSuperMarket = (props) => {
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
                    <Text style={baseStyles.f14}>{'Choose Supermarket'} </Text>
                </View>
                <View style={[baseStyles.flexTwo, baseStyles.alignItemsEnd]}>
                    <Text onPress={onSkip} style={colorStyles.bluetiful}> {'Back'} </Text>
                </View>
            </View>)   
    }

    renderStoresInGrid = () => {
        const storeGroupKeys = Object.keys(stores)
        
        if (storeGroupKeys) {
            return  (<View style={styles.flexContainer}>
            {storeGroupKeys.map((key, keyIdx) => (
                <View key={`${key}-${keyIdx}`} style={baseStyles.mTop20}>
                    <Text style={baseStyles.f20, colorStyles.slate}>{key}</Text>
                    <View style={[baseStyles.flexRow, {flexWrap: 'wrap'}]}>
                        {stores[key].map((item, idx) => (
                            <Fragment key={`${item.id}-${idx}`}>
                                <RoundItemBadge onBadgeSelect={onStoreSelect} item={item} isSelected={!!selectedStoreMap[item.id]} />
                            </Fragment>    
                        ))}
                    </View>
                </View>
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
        if (searchTerm) {
            const searchTermInUppercase = searchTerm.toUpperCase()
            let temp = props.stores[searchTermInUppercase[0]]
            if (temp) {
                setStores({[searchTermInUppercase[0]]: filterItemsBySearchLabel(temp, searchTerm) })
            } else {
                setStores(props.stores)
            }
        } else {
            setStores(props.stores)
        }
        
    }, [searchTerm])

    return (
        <Fragment>
            {renderNavigationStrip()}
            <View style={baseStyles.mTop5}> 
                <SearchBar
                    platform="ios"
                    placeholder="Search for a supermarket"
                    placeholderTextColor={colors.blueGrey}
                    inputContainerStyle={{backgroundColor: colors.lightgrey}}
                    onChangeText={setSearchTerm}
                    value={searchTerm}
                />
            </View>
            <View style={{ paddingTop: StatusBar.currentHeight, height: 600 }}>
                <ScrollView>
                    {renderStoresInGrid()}
                </ScrollView> 
            </View>
        </Fragment>
    )
}


ChooseSuperMarket.defaultProps = {
    storeSelectionLimit: 4
}

export default ChooseSuperMarket




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