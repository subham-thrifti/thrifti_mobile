import React, { Fragment, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button, BottomSheet, colors } from 'react-native-elements';

// import { searchBarStyles, colors } from './styles'
import baseStyles  from '../../../../css/layout/base'
import colorStyles from '../../../../css/abstracts/color'
import { DodgerBlueLeftChevronIcon } from '../../../Common/CustomIcons';


const CreditCardManualDetail = (props) => {
    const { onPressBack, onPressNext, onPressSkip, onPressContinue } = props;

    const [isBottomSheetVisible, updateBottomSheetVisibility] = useState(false); 
    const pageTitleStyle = {
        ...baseStyles.makeFlex,
        alignItems: 'center'
    }

    onNext = () => {
        updateBottomSheetVisibility(true)
        if (onPressNext) {
            onPressNext()
        }
    }

    onSkip = () => {
        updateBottomSheetVisibility(false)
        if (onPressSkip) {
            onPressSkip()
        }
    }

    onContinue = () => {
        updateBottomSheetVisibility(false)
        if (onPressContinue) {
            onPressContinue()
        }
    }

    renderNavigationStrip = () => {
        return (
            <View style={baseStyles.flexRow}>
                <View style={[baseStyles.flexOne, baseStyles.alignItemsStart, baseStyles.justifyCenter]}>
                    <DodgerBlueLeftChevronIcon onPress={onPressBack} />
                </View>
                <View style={[baseStyles.flexTwo, baseStyles.alignItemsEnd, baseStyles.justifyCenter]}>
                    <Text onPress={onNext} style={colorStyles.dodgerBlue}> {'Next'} </Text>
                </View>
            </View>)   
    }

    renderTextInput = (placeholderText, onChangeText) => {
        return (
            <TextInput
                onChangeText={onChangeText}
                autoCorrect={false}
                placeholder={placeholderText}
                placeholderTextColor={colors.placeholderText}
                inputContainerStyle={{
                    borderBottomColor: colorStyles.white,
                    marginTop: 50,
                    width:150,
                    marginLeft: 20,
                    fontSize: 10
                    }}/>
        )
    }

    return (
        <Fragment>
            {renderNavigationStrip()}
            <View style={{ marginTop: 17 }}> 
                <View style={pageTitleStyle}>
                    <Text style={[{ fontSize: 18, fontWeight: '500' }, colorStyles.slate ]}>
                        {'Enter Details Manually'}
                    </Text>
                    <Text style={[baseStyles.mTop20, baseStyles.f12, colorStyles.slate]}>
                        {'Enter your card information'}
                    </Text>
                </View>
            </View>

            <View style={{ marginTop: 86 }}>
                {renderTextInput('Credit Card Number')}
                <View style={{ marginTop: 57 }}>
                    {renderTextInput('Expiration Date')}
                </View>
                <View style={{ marginTop: 57 }}>
                    {renderTextInput('Security Code')}
                </View>
            </View>
            <BottomSheet
                isVisible={isBottomSheetVisible}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.7)' }}>

                <View style={styles.bottomNavigationView}>
                    <Text style={{ fontSize: 16, fontWeight: '400', color: commonStyles.color.slate}}> {'Enter credit card limit'} </Text>
                    <Text style={[ colorStyles.slate, {marginTop: 50, textAlign: 'center', fontWeight: '300'}]}>
                        {'Enter the credit limit for this card, would \n help you manage your spending and you would be \n rewarded thrifti point'}
                    </Text>
                    <Button title={'Continue'}
                        raised={true}
                        titleStyle={colorStyles.white}
                        buttonStyle={commonStyles.pbtn}
                        containerStyle={{ ...commonStyles.pbtn, marginTop: 40 }}
                        onPress={onContinue}
                        />
                    <Button
                        type="clear"
                        title={'Skip for now'}
                        titleStyle={{fontSize: 13,  color: '#3e84fe'}}
                        onPress={onSkip}
                        containerStyle={{ marginTop: 25, marginLeft: 10 }}
                        style={{ fontSize: 12, lineHeight: 16, color: '#3e84fe' }} />    
                </View>    
          </BottomSheet> 
        </Fragment>
    )
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
        height: 51,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -33,
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
      bottomNavigationView: {
        backgroundColor: '#fff',
        width: '100%',
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
      },
})


export default CreditCardManualDetail


