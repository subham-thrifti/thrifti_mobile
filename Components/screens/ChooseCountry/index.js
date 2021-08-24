import React, { Fragment, useState } from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';

import CustomFlatList from '../../Common/CustomFlatList'
import { DodgerBlueLeftChevronIcon } from '../../Common/CustomIcons'
import { searchBarStyles, colors } from './styles'
import baseStyles from '../../../css/layout/base'


const filterItemsBySearchLabel = (items, searchLabel) => {
    const filteredItems = items.filter(item => item.label.indexOf(searchLabel) > -1);
    return filteredItems;
}

const ChooseCountry = (props) => {
    const { countries, onSelectCountry, onPressBack } = props;
    const [searchTerm, setSearchTerm] = useState('')

    onSelectItem = (item) => {
        onSelectCountry(item)
    }

    return (
        <Fragment>
            <View style={baseStyles.flexRow}> 
                <View style={{ ...baseStyles.flexOne, alignItems: 'flex-start', justifyContent: 'center'}}>
                    <DodgerBlueLeftChevronIcon onPress={onPressBack}/>
                </View>
                <View style={baseStyles.flexTwo}>
                    <Text style={[baseStyles.f20, baseStyles.pTop5]}> Search </Text>
                </View>
            </View>

            <View style={baseStyles.mTop5}> 
                <SearchBar
                    platform="ios"
                    placeholder="Search"
                    placeholderTextColor={colors.blueGrey}
                    inputContainerStyle={searchBarStyles.inputContainerStyle}
                    onChangeText={setSearchTerm}
                    value={searchTerm}
                />
            </View>
            
            <View style={[baseStyles.mTop10, baseStyles.mLeft10]}>
                <CustomFlatList
                    showChevron={true}
                    items={filterItemsBySearchLabel(countries, searchTerm)}
                    onSelectItem={onSelectItem}/>
            </View>        
        </Fragment>
    )
}

export default ChooseCountry


