import React, { Fragment, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button, BottomSheet, Slider } from 'react-native-elements';

import baseStyles  from '../../../../css/layout/base'
import colorStyles from '../../../../css/abstracts/color'
import colors from '../../../../css/abstracts/variables'
import { DodgerBlueLeftChevronIcon } from '../../../Common/CustomIcons';
import TOverlay from '../../../Common/Overlay';
import TSlider from '../../../Common/Slider';

const OVERLAY = {
    TITLE: 'You Earned Thrifti Point',
    BODY_TEXT: 'You earned 100 thrifti point and we planted a tree for you, you would be able to redeem this point in the app, earn more point by completing more action'
}

const isValidCreditLimit = (creditLimit) => {
    return creditLimit > 0
}

const getFormattedCreditLimit = (value) => {
    return '$' + value
}

const EnterCreditLimit = (props) => {
    const { onPressBack, onPressEnterManually, onPressDone, onPressContinue, onPressSkipDueDates, onPressContinueToAddDueDates } = props;

    const [creditLimit, setCreditLimit] = useState(50)
    const [isBottomSheetVisible, updateBottomSheetVisibility] = useState(false)
    const [isThrifitiPointOverlayVisible, updateThrifitiPointOverlayVisibility] = useState(false)
    const [isAddDueDatesBottomSheetVisible, updateAddDueDatesBottomSheetVisibility] = useState(false)

    const pageTitleStyle = {
        ...baseStyles.makeFlex,
        alignItems: 'center'
    }

    
    onEnterManually = () => {
        updateBottomSheetVisibility(true)
        if (onPressEnterManually) {
            onPressEnterManually()
        }
    }

    onDone = () => {
        if (onPressDone) {
            onPressDone(creditLimit)
        }
        updateThrifitiPointOverlayVisibility(true)
    }

    onContinue = () => {
        if (onPressContinue && creditLimit >0) {
            onPressContinue(creditLimit)
        }

        if (creditLimit) {
            updateBottomSheetVisibility(false)
            updateThrifitiPointOverlayVisibility(true)
        }
    }
    
    onChangeCreditLimitTextInput = (value) => {
        if (value === '') {
            value = 0
        }
        const creditLimitVal = (parseInt(value) > 100) ? 100 : parseInt(value);
        setCreditLimit(creditLimitVal)
    }

    onSkipDueDates = () => {
        onPressSkipDueDates()
        updateAddDueDatesBottomSheetVisibility(false)
    }

    onContinueToAddDueDates = () => {
        onPressContinueToAddDueDates()
        updateAddDueDatesBottomSheetVisibility(false)
    }

    updateOverlayVisibility = (isOverlayVisible) => {
        updateThrifitiPointOverlayVisibility(isOverlayVisible)
        updateAddDueDatesBottomSheetVisibility(true)
    }

    renderTextInput = (placeholderText, onChangeText, creditLimit) => {
        return (
            <TextInput
                onChangeText={onChangeText}
                value={JSON.stringify(creditLimit)}
                autoCorrect={false}
                placeholder={placeholderText}
                placeholderTextColor={'#d0d8df'}
                keyboardType="numeric"
                autoFocus={true}
                styles={{  color: colors.dodgerBlue, fontSize: 26 }}
                inputContainerStyle={{
                    borderBottomColor: colorStyles.white,
                    marginTop: 50,
                    marginLeft: 20,
                    fontSize: 26,
                    }}/>
        )
    }

    renderNavigationStrip = () => {
        return (
            <View style={baseStyles.flexRow}>
                <View style={[baseStyles.flexOne, baseStyles.alignItemsStart, baseStyles.justifyCenter]}>
                    <DodgerBlueLeftChevronIcon onPress={onPressBack} />
                </View>
            </View>)   
    }

    return (
        <Fragment>
            {renderNavigationStrip()}
            <View style={{ marginTop: 5 }}> 
                <View style={pageTitleStyle}>
                    <Text style={[{ fontSize: 18, fontWeight: '500' }, colorStyles.slate ]}>
                        {'Enter Credit Limit'}
                    </Text>
                    <Text style={[baseStyles.mTop20, baseStyles.f11, colorStyles.slate]}>
                        {'Telling thrifti your credit limit allows thrifti to make \n personalized and effective spending decisions for \n you'}
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: 80, alignItems: 'center' }}>
                <Text style={[{ fontSize: 40 }, colorStyles.dodgerBlue]}> {`$${creditLimit}`}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TSlider
                    onValueChange={value => setCreditLimit(value)}
                    value={creditLimit}
                />
            </View>

            <View style={{alignItems: 'center'}}>
                    <Button
                        type="clear"
                        title={'Enter Manually'}
                        titleStyle={{fontSize: 13,  color: colors.dodgerBlue}}
                        onPress={onEnterManually}
                        style={{ fontSize: 12, lineHeight: 16, color: colors.dodgerBlue }} />

                    <Button
                        title={'Done'}
                        raised={true}
                        titleStyle={colorStyles.white}
                        buttonStyle={commonStyles.pbtn}
                        containerStyle={{ ...commonStyles.pbtn, marginTop: 40 }}
                        onPress={onDone}/>
            </View>    
            
            <BottomSheet
                isVisible={isBottomSheetVisible}
                containerStyle={{ backgroundColor: colors.translucentBg }}>

                <View style={styles.bottomNavigationView}>
                    <Text style={{ fontSize: 16, fontWeight: '400', color: commonStyles.color.slate}}> {'Enter Manually'} </Text>
                    <View style={{ marginTop: 70, display: 'flex', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 16, fontWeight: '400', color: commonStyles.color.slate}}> {'$'} </Text>
                        {renderTextInput('Enter Your Credit Limit', onChangeCreditLimitTextInput, creditLimit)}
                    </View>    
                    <Button
                        disabled={!isValidCreditLimit(creditLimit)}
                        title={'Continue'}
                        raised={true}
                        titleStyle={colorStyles.white}
                        buttonStyle={commonStyles.pbtn}
                        containerStyle={{ ...commonStyles.pbtn, marginTop: 60 }}
                        onPress={onContinue}/>
                </View>    
          </BottomSheet>
          <BottomSheet
                isVisible={isAddDueDatesBottomSheetVisible}
                containerStyle={{ backgroundColor: colors.translucentBg }}>

                <View style={[styles.bottomNavigationView, {height: 350}]}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: commonStyles.color.slate}}> {'Add Due Dates'} </Text>
                    <View style={[{ paddingLeft: 25, paddingRight: 25, marginTop: 50 }, baseStyles.flexRow]}>
                        <Text style={{ fontSize: 16, fontWeight: '400', color: commonStyles.color.slate}}> {'Add due dates of your credit card, and thrifti would help you not miss your payment, and you would be rewarded thrifti point.'} </Text>    
                    </View>    
                    <Button
                        title={'Continue'}
                        raised={true}
                        titleStyle={colorStyles.white}
                        buttonStyle={commonStyles.pbtn}
                        containerStyle={{ ...commonStyles.pbtn, marginTop: 60 }}
                        onPress={onContinueToAddDueDates}/>
                    <Button
                        type="clear"
                        title={'Skip for now'}
                        titleStyle={{fontSize: 13,  color: colors.dodgerBlue}}
                        onPress={onSkipDueDates}
                        containerStyle={{ marginTop: 30 }}
                        style={{ fontSize: 12, lineHeight: 16, color: colors.dodgerBlue }} />
                </View>    
          </BottomSheet>
          <TOverlay
            title={OVERLAY.TITLE}
            bodyText={OVERLAY.BODY_TEXT}
            isVisible={isThrifitiPointOverlayVisible}
            updateVisibility={updateOverlayVisibility} />
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
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
      },
})


export default EnterCreditLimit


