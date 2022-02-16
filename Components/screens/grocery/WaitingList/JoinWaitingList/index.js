import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import colorStyles from '../../../../../css/abstracts/color';
import elemStyles from '../../../../../css/elemStyles';
import baseStyles from '../../../../../css/layout/base';
import colors from '../../../../../css/abstracts/variables'
import TIcon from '../../../../Common/TIcon';

const features = [
    { text: 'Store cards across several devices', iconName: 'lock', color: colors.black },
    { text: 'Store credit cards', iconName: 'credit-card', color: colors.blue },
    { text: 'Share shopping list with friends', iconName: 'share', color: colors.greenblue },
    { text: 'Get thrifti coins to be used anywhere', iconName: 'toll', color: colors.tangerine },
    { text: 'Convert loyalty points to thrifit points', iconName: 'redeem', color: colors.red },
    { text: 'Customized prices from different stores', iconName: 'store', color: colors.coralPink }
]


const JoinWaitingList = (props) => {
    const { onPressJoinWaitingList } = props
    
    return (
        <View style={[baseStyles.makeFlex, baseStyles.alignJustifyCenter]}>
            <View style={styles.container}>
                <Text style={[{ lineHeight: 20, alignSelf: 'center' }]}> {'Thrifti is currently in beta'} </Text>
                <Text style={[baseStyles.mTop8, {alignSelf: 'center' } ]}> {'Join the waiting list to have early access to'} </Text>
                <Text style={[baseStyles.mTop8, {alignSelf: 'center' } ]}> {'more features such as'} </Text>
                <View style={[baseStyles.mTop50]}>
                    {features.map(feature => (
                    <View style={[baseStyles.flexRow, baseStyles.alignCenter, baseStyles.mTop10]}>
                        <TIcon
                            color={feature.color}
                            containerStyle={baseStyles.mLeftRight10}
                            name={feature.iconName}
                            size={35} />
                        <Text style={{}}>
                            {`${feature.text}`}
                        </Text>
                    </View>))}
                </View>    
            </View>
            
            <View style={baseStyles.mTop50}>
                <Button
                    title={'Join Waiting List'}
                    raised={true}
                    titleStyle={colorStyles.white}
                    buttonStyle={elemStyles.pBtnMedium}
                    containerStyle={{ ...elemStyles.pBtnMedium, marginTop: 30 }}
                    onPress={onPressJoinWaitingList} />
            </View>
        </View>
    )
}

export default JoinWaitingList

const styles = StyleSheet.create({
    container: {
        ...baseStyles.mTop40,
        ...baseStyles.p25,
    }
})