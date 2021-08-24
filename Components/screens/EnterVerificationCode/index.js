import React, { Fragment, useState, useRef } from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Button } from 'react-native-elements';
import OTPTextView from '../../Common/OTPTextView'

const MIN_OTP_LENGTH = 4

const EnterVerificationCode = ({ onPressVerificationCode, onPressResendCode, isError }): Node => {

    const  [otp, setOtp] = useState('');

    shouldDisableContinueBtn = () => {
        if (!otp || (otp.length < MIN_OTP_LENGTH)) {
            return true
        }
        return false
    }

    handleResendCode = () => {
        setOtp('')
        onPressResendCode()
    }

    return (
        <Fragment>
            <View style={styles.container}>
                {isError && <ErrorStrip />}
                <View style={styles.welcomeBack}>
                    {!isError && <Text style={{ fontSize: 18, color: commonStyles.color.slate}}> 
                        {'Enter Verification Code'}
                    </Text>}
                    <Text style={{  marginTop: 0, marginLeft: -30, marginRight: 15, fontSize: 11, lineHeight: 20, color: '#bcc5d3' }}>
                        {'A verification code has been sent to your phone no please enter the password to continue'}
                    </Text>
                </View>
            </View>
            <Password isError={isError} onEnterOtp={setOtp} password={otp}/>
            <Button
                type="clear"
                title={'Resend Code'}
                titleStyle={{fontSize: 13,  color: '#3e84fe'}}
                onPress={handleResendCode}
                containerStyle={{ marginTop: 95, marginLeft: 10 }}
                style={{   fontSize: 12, lineHeight: 16, color: '#3e84fe' }} />
            {/* Touch Icon */}
            {/* <Icon
                raised
                name=''
                color='#f50'
                onPress={() => console.log('hello')} /> */}
            
            <View style={{ marginLeft: 50, marginTop: 30 }}>
                <Button title={'Continue'}
                    disabled={shouldDisableContinueBtn()}
                    raised={true}
                    titleStyle={{color: '#ffffff'}}
                    buttonStyle={commonStyles.pbtn}
                    containerStyle={{ ...commonStyles.pbtn, marginTop: 30 }}
                    onPress={() => onPressVerificationCode(otp)}
                    />
            </View>    
        </Fragment>
    )
}
 
const Password = (props): Node => {
    const { onEnterOtp, password } = props;
    const [isError, setIsError] = useState(props.isError)

    const offTintColor = isError ? '#ee2939' : undefined
    const tintColor = isError ? '#ee2939': undefined

    updateIsError = (updatedErrorState) => {
        if (updatedErrorState !== isError) {
            setIsError(updatedErrorState)
        }
    }

    handleOtp = (otp) => {
        if (otp && otp.length === MIN_OTP_LENGTH) {
            updateIsError(false)
            onEnterOtp(otp)
        }
    }

    return (
        <View style={styles.otpContainer}>
            <OTPTextView
                defaultValue={password}
                handleTextChange={handleOtp}
                containerStyle={styles.textInputContainer}
                textInputStyle={styles.roundedTextInput}
                secureTextEntry={true}
                offTintColor={offTintColor}
                tintColor={tintColor}
            />
      </View>
    );

}

const ErrorStrip = () => {
    return (<View style={styles.errorStrip}>
                <Text style={{ fontSize: 14, fontWeight: "500",  color: '#ffffff', lineHeight: 12, paddingTop: 5}}> 
                    {'The Verification Code is Not Correct'}
                </Text>
            </View>)
}

const commonStyles = {
    pbtn: {
        borderRadius: 50,
        backgroundColor: '#3e84fe',
        color: '#ffffff',
        fontSize: 16,
        height: 50,
        width: 249
    },
    disabledBtn: {
        borderRadius: 50,
        color: '#ffffff',
        fontSize: 16,
        height: 50,
        width: 249
    },
    mTop10: {
        marginTop: 10
    },
    mTop20: {
        marginTop: 20
    },
    color: {
        slate: '#4C5264'
    }
}

const styles = StyleSheet.create({
    errorStrip: {
        backgroundColor: '#ee2939',
        width: 310,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -35,
        borderRadius: 5,
        shadowColor: '#ffd1df',
        shadowOpacity: 1.0,
        shadowRadius: 15
    },
    container: {
        marginTop: 17,
        marginLeft: 50
    },
    imageContainer: {
        marginTop: 60,
        marginLeft: 70,
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    welcomeBack: {
        marginTop: 25,
        marginLeft: 50,
    },
    input: {
        backgroundColor: '#efefef',
        borderRadius: 1,
        width: 37,
        height: 37
    },
    otpContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 105,
        // padding: 5,
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center',
        color: '#333333',
        marginBottom: 20,
      },
      textInputContainer: {
        marginBottom: 20,
      },
      roundedTextInput: {
        borderRadius: 7,
        borderWidth: 1,
      },
      buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        width: '60%',
      },
      textInput: {
        height: 40,
        width: '80%',
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        letterSpacing: 5,
        marginBottom: 10,
        textAlign: 'center',
      },
      buttonStyle: {
        marginHorizontal: 20,
      },
})

export default EnterVerificationCode