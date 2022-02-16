import React, { Fragment, useEffect, useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SearchBar } from 'react-native-elements';
import colors from '../../../../css/abstracts/variables'

import TSearchBar from '../../../Common/TSearchBar'
import baseStyles from '../../../../css/layout/base'
import colorStyles from "../../../../css/abstracts/color";
import CustomFlatList from '../../../Common/CustomFlatList';



const ProductCategories = (props) => {
    const { onPressBack, store, productCategories, onSelectItem } = props;
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])

    onBack = () => {
        onPressBack()
    }

    renderNavigationStrip = () => {
        return (
            <View style={baseStyles.flexRow}>
                <View style={[baseStyles.alignJustifyCenter]}>
                    <Text style={[baseStyles.f20, baseStyles.fontW600, colorStyles.bluetiful]}>{store.label} </Text>
                </View>
                <View style={[baseStyles.flexTwo, baseStyles.alignItemsEnd]}>
                    <Text onPress={onBack} style={colorStyles.bluetiful}> {'Back'} </Text>
                </View>
            </View>)   
    }

    useEffect(() => {
        let filteredList = []
        productCategories.forEach(productCategory => {
            productCategory.subCategory.forEach(item => {
                if (item.label.indexOf(searchTerm) >= 0) {
                    filteredList.push(item)
                }
            })
        })
        setFilteredProducts(filteredList)
    }, [searchTerm])

    renderProductCategories = () => (
        <View style={{ paddingTop: StatusBar.currentHeight, height: 600 }}>
            <CustomFlatList
                isNestedList={!searchTerm}
                showChevron={true}
                items={searchTerm ? filteredProducts : productCategories}
                onSelectItem={(item) => { onSelectItem(item)}}
                childNodeKey={'subCategory'}
            />
        </View>
    )

    return (
        <Fragment>
            {renderNavigationStrip()}
            <View style={baseStyles.mTop15}> 
                <SearchBar
                    platform="ios"
                    placeholder={`Search for product in ${store.label}`}
                    placeholderTextColor={colors.blueGrey}
                    inputContainerStyle={{backgroundColor: colors.lightgrey}}
                    onChangeText={setSearchTerm}
                    value={searchTerm}
                />
                {/* <TSearchBar
                    placeholder={`Search for product in ${store.label}`}
                    onChangeText={setSearchTerm}
                    value={searchTerm} /> */}
            </View>
            {renderProductCategories()}
        </Fragment>
    )
}


ProductCategories.defaultProps = {
    storeSelectionLimit: 1
}

export default ProductCategories
