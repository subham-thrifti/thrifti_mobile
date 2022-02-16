import React from 'react';
import { ActivityIndicator } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Image } from 'react-native-elements';

import colors from '../../../css/abstracts/variables'
const ImageSource = require('../../../assets/images/stores/loblaw_v2.png');

const ImageComponent = (props) => {
    // const { imgUrl: ImageSource } = props
    return (
        <View style={{paddingLeft: 5, paddingRight: 5}}>
            <Image
                source={ImageSource}
                style={{ width: 70, height: 80}}
                resizeMode="contain"
                placeholderStyle={{backgroundColor: colors.white}}
                PlaceholderContent={<ActivityIndicator siz="small" color={colors.bluetiful}/>}
            />
        </View>)
  }


const RoundItemBadge = (props) => {
    const { onBadgeSelect, item, isSelected } = props

    getIconContainerStyle = () => {
        const commonStyle = [styles.roundShadowedIcon, styles.item]
        if (isSelected) {
            return {
                ...commonStyle,
                borderColor:'rgba(7,103,208,0.2)',
                backgroundColor:'#CBDDF3',
                borderRadius:50,
            }
        } 

        return commonStyle
    }

    return (
    <TouchableOpacity onPress={() => onBadgeSelect(item)}>
        <View
            key={item.id}
            style={{alignItems: 'center', margin: 5, marginBottom: 10 }}>
            <Icon
                containerStyle={getIconContainerStyle()}
                Component={ImageComponent}
                size={30} />
            <Text style={styles.item}>{item.label}</Text>
        </View> 
    </TouchableOpacity>)
}

RoundItemBadge.defaultProps = {
    onBadgeSelect: () => {},
    isSelected: false,
}

export default RoundItemBadge


const styles = StyleSheet.create({
    item: {
        marginTop: 5,
        color: colors.black,
        fontSize: 14,
        textAlign: 'center'
    },
    roundShadowedIcon: {
        borderColor:'rgba(0,0,0,0.3)',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        backgroundColor:'#fff',
        borderRadius: 50,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 2, width: 5 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 2
    },
})