import React, { Fragment, useState } from 'react';
import { View } from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';

import colorStyles from '../../../../../css/abstracts/color';
import elemStyles from '../../../../../css/elemStyles';
import baseStyles from '../../../../../css/layout/base';
import { isValidEmail } from '../../../../src/utils/regexUtils';


const EnterEmail = ({ onPressJoinWaitingList }) => {

    const [emailAddress, setEmailAddress] = useState(null)
    const [erroMsg, setErrorMsg] = useState('')
    
    clearField = () => {
        setEmailAddress(null)
        setErrorMsg('')
    }

    onEmailAddressChange = (a) => {
        let emailAddress = a.nativeEvent.text
        if (isValidEmail(emailAddress)) {
            setEmailAddress(emailAddress)
            setErrorMsg('')
        } else {
            setErrorMsg('Invalid Email')
        }
    }

    return (
        <Fragment>
            <View style={[{ marginLeft: 10, marginTop: 150 }]}>
                <Input
                    autoCapitalize={'none'}
                    onChange={onEmailAddressChange}
                    type={'email'}
                    keyboardType={'email-address'}
                    textContentType={'emailAddress'}
                    value={emailAddress}
                    autoCorrect={false}
                    label={'Enter Email'}
                    labelStyle={[colorStyles.bluetiful, baseStyles.fontW600]}
                    errorMessage={erroMsg}
                    disabledInputStyle={{ background: "#ddd" }}
                    rightIcon={<Icon name="close" onPress={clearField} size={20} />}
                    placeholder="email@address.com"
                />
            </View>
            <View style={[baseStyles.mTop60, baseStyles.makeFlex, baseStyles.alignJustifyCenter]}>
                <Button
                    title={'Join Waiting List'}
                    raised={true}
                    titleStyle={colorStyles.white}
                    buttonStyle={elemStyles.pBtnLarge}
                    containerStyle={{ ...elemStyles.pBtnLarge, marginTop: 30 }}
                    onPress={() => onPressJoinWaitingList(emailAddress)} />
            </View>
        </Fragment>
    )
}


export default EnterEmail