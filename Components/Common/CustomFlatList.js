import React, { useState } from 'react';
import { Text, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';


const CustomFlatList = (props) => {
    const { items, onSelectItem, showChevron } = props;
    const [selectedId, setSelectedId] = useState(null);


    onPressItem = (item) => {
        setSelectedId(item.value)
        onSelectItem(item)
    }


    renderList = (items) => {
        const listHTML = items.map((item, idx) => (
            <ListItem key={idx} bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{item.label}</ListItem.Title>
            </ListItem.Content>
            </ListItem>
        ))
        
        return listHTML;
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
    
    return (
        renderFlatList(items)
    )
}


export default CustomFlatList


