import React, { useState } from 'react';
import { View, Text, FlatList, TouchableHighlight, Animated } from 'react-native';
import { ListItem } from 'react-native-elements';

import baseStyles from '../../css/layout/base';
import colors from '../../css/abstracts/variables';
import TIcon from '../../Components/Common/TIcon';
import colorStyles from '../../css/abstracts/color';


const CustomFlatList = (props) => {
    const { items, onSelectItem, showChevron, childNodeKey, isNestedList } = props;
    const [currentExpandedItem, setCurrentExpandedItem ] = useState([])
    const [minHeight, setMinHeight ] = useState(0)
    const [maxHeight, setMaxHeight ] = useState(0)
    const [selectedId, setSelectedId] = useState(null);
    const [animation, setAnimation] = useState(new Animated.Value(1))

    onPressItem = (item) => {
        setSelectedId(item.value)
        onSelectItem(item)
    }

    renderItem = ({ item }) => {
        const backgroundColor = item.value === selectedId ? "#3e84fe" : 'white';
        const titleColor = item.value === selectedId ? 'white' : '#4c5264';

        return (
            <ListItem
                key={item.value}
                bottomDivider
                onPress={() => onPressItem(item)}
                containerStyle={{ backgroundColor }}>
                <ListItem.Content>
                    <ListItem.Title style={{ color: titleColor }} >
                        <Text> {item.label}</Text>
                    </ListItem.Title>
                </ListItem.Content>
                {showChevron && <ListItem.Chevron />}
            </ListItem>
        )
    }

    renderFlatList = (items) => {
        return (
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.value}
                extraData={selectedId}
      />)
    }

    expandList = (item) => {
        // let initialValue = isCurrentExpandedItem(item) ? maxHeight + minHeight : minHeight
        // let finalValue = isCurrentExpandedItem(item) ? minHeight : maxHeight + minHeight
        if (isCurrentExpandedItem(item)) {
            setCurrentExpandedItem([])
        } else {
            setCurrentExpandedItem(item)
        }
        
        // setAnimation(initialValue)
        // Animated.spring(animation, { toValue: finalValue, useNativeDriver: true  }).start();
    }

    // expandList = (item) => {
    //     setCurrentExpandedItem(item)
    // }

    setCurrMinHeight = (event) => {
        setMinHeight(event.nativeEvent.layout.height)
    }

    setCurrMaxHeight = (event) => {
        setMaxHeight(event.nativeEvent.layout.height)
    }
    
    isCurrentExpandedItem = (item) => {
        return item.value ===  currentExpandedItem?.value
    }

    renderNestedItem = ({ item, index, separators }) => {
        return (
            <TouchableHighlight
              key={item.value}
              onPress={() => {}}>
                <View style={{ backgroundColor: 'white' }} onLayout={setCurrMinHeight}>
                    <ListItem
                        key={item.value}
                        onPress={() => expandList(item)}
                        containerStyle={{ backgroundColor: 'white' }}>
                            <ListItem.Content>
                                <ListItem.Title style={[baseStyles.f16, baseStyles.fontW600, colorStyles.slate]} >
                                    <Text> {item.label}</Text>
                                </ListItem.Title>
                            </ListItem.Content>
                            {<TIcon color={colors.dodgerBlue} name={isCurrentExpandedItem(item) ? 'remove': 'add'} size={20} />}
                    </ListItem>
                    {isCurrentExpandedItem(item) && <View style={baseStyles.mLeftRight10} onLayout={setCurrMaxHeight}>
                        {renderFlatList(item.subCategory)}
                    </View>}
                </View>
            </TouchableHighlight>
           )
    }
    renderNestedFlatList = (items) => {
        return (
            <FlatList
                data={items}
                renderItem={renderNestedItem}
                keyExtractor={(item) => item.value}
                extraData={selectedId}
      />)
        
    }

    return (
        <>
            {isNestedList && renderNestedFlatList(items)}
            {!isNestedList && renderFlatList(items)}
        </> 
    )
}


export default CustomFlatList


