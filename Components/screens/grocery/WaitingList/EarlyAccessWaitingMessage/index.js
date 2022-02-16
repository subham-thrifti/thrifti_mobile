import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import colorStyles from '../../../../../css/abstracts/color';
import elemStyles from '../../../../../css/elemStyles';
import baseStyles from '../../../../../css/layout/base';
import colors from '../../../../../css/abstracts/variables'



const EarlyAccessWaitingMessage = (props) => {
    const { customerWaitingCount, totalWaitingCount, onPressShare } = props
    
    return (
        <View style={[baseStyles.makeFlex, baseStyles.alignJustifyCenter]}>
            <View style={styles.container}>
                <Text style={[baseStyles.f16, { lineHeight: 20 }]}> {'Congratulations for joining early  \n              access waiting list !'} </Text>
                <Text style={[baseStyles.mTop60, { alignSelf: 'center'}]}>
                    {'Your waiting list number is'}
                </Text>
                <View style={[baseStyles.flexRow, baseStyles.mLeft50]}> 
                    <Text style={[{ alignSelf: 'center'}, baseStyles.f16, colorStyles.bluetiful, baseStyles.mTop20]}> {`${customerWaitingCount}`}</Text>
                    <Text style={[{ alignSelf: 'center'}, baseStyles.f16, colorStyles.bluetiful, baseStyles.mTop20]}> Of</Text>
                    <Text style={[{ alignSelf: 'center'}, baseStyles.f16, colorStyles.bluetiful, baseStyles.mTop20]}> {`${totalWaitingCount}`}</Text>
                </View>
            </View>
            <View style={[baseStyles.mTop50]}>
                <Text style={[{ alignSelf: 'center'}, colorStyles.bluetiful, baseStyles.fontW500]}>{'Share with friends to jump ahead on the waiting list'}</Text> 
            </View>
            <View style={{ marginTop: 70 }}>
                <Button
                    title={'Share & Invite'}
                    raised={true}
                    titleStyle={colorStyles.white}
                    buttonStyle={elemStyles.pBtnMedium}
                    containerStyle={{ ...elemStyles.pBtnMedium, marginTop: 30 }}
                    onPress={onPressShare} />
            </View>
        </View>
    )
}

export default EarlyAccessWaitingMessage

const styles = StyleSheet.create({
    container: {
        ...baseStyles.mTop60,
        ...baseStyles.p25,
        borderWidth: 2,
        borderColor: colors.bluetiful,
        borderRadius: 15
    }
})