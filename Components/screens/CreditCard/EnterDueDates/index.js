import React, { Fragment, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button, BottomSheet, Icon } from 'react-native-elements';

import baseStyles  from '../../../../css/layout/base'
import colorStyles from '../../../../css/abstracts/color'
import colors from '../../../../css/abstracts/variables'
import { DodgerBlueLeftChevronIcon } from '../../../Common/CustomIcons';
import TOverlay from '../../../Common/Overlay';

const isDueDateValid = (dueDate) => {
    if (dueDate && dueDate.indexOf('/') === 2 && dueDate.length===5) {
        return true
    }
}

const OVERLAY = {
    TITLE: 'You Earned Thrifti Points',
    BODY_TEXT: 'You earned 100 thrifti points and we planted a tree for you for entering your due dates'
}

const EnterDueDates = (props) => {
    const { onPressBack, onPressDone, onPressContinueAfterAlerts } = props;
    
    const [dueDate, setDueDate] = useState(null)
    const [isBottomSheetVisible, updateBottomSheetVisibility] = useState(false)
    const [isOverlayVisible, updateOverlayVisibility] = useState(false)
    const [priorDays, updatePriorDays] = useState(1)

    const pageTitleStyle = {
        ...baseStyles.makeFlex,
        alignItems: 'center'
    }

    onDone = () => {
        if (onPressDone) {
            onPressDone(dueDate)
        }
        updateBottomSheetVisibility(true)
    }

    onContinueAfterAlerts = () => {
        if (onPressContinueAfterAlerts) {
            onPressContinueAfterAlerts(priorDays)
        }
        updateBottomSheetVisibility(false)
        updateOverlayVisibility(true)
    }

    updateDays = (operation) => {
        if (operation === 'ADD') {
            updatePriorDays(priorDays+1)
        } else if (priorDays > 1) {
            updatePriorDays(priorDays-1)
        }
    }

    renderNavigationStrip = () => {
        return (
            <View style={baseStyles.flexRow}>
                <View style={[baseStyles.flexOne, baseStyles.alignItemsStart, baseStyles.justifyCenter]}>
                    <DodgerBlueLeftChevronIcon onPress={onPressBack} />
                </View>
            </View>)   
    }

    renderTextInput = (placeholderText, onChangeText) => {
        return (
            <TextInput
                value={dueDate}
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
            <View style={{ marginTop: 24 }}> 
                <View style={pageTitleStyle}>
                    <Text style={[{ fontSize: 18, fontWeight: '500' }, colorStyles.slate ]}>
                        {'Enter Due Dates'}
                    </Text>
                    <Text style={[baseStyles.f12, colorStyles.slate, { marginTop: 36 }]}>
                        {'Entering your due dates on thrifti allows thrifti to help you not miss your payment, thrifti can also automate your credit card payment if you link your bank account'}
                    </Text>

                    <View style={{ marginTop: 140, alignItems: 'center' }}>
                        {renderTextInput('DD/MM', (value) => { setDueDate(value)})}
                    </View>
                    <View style={{  alignItems: 'center', justifyContent: 'center' }}>
                        <Button
                            title={'Continue To Set Alerts'}
                            disabled={!isDueDateValid(dueDate)}
                            raised={true}
                            titleStyle={colorStyles.white}
                            buttonStyle={commonStyles.pbtn}
                            containerStyle={{ ...commonStyles.pbtn, marginTop: 204 }}
                            onPress={onDone}
                        />
                    </View> 
                    <BottomSheet
                        isVisible={isBottomSheetVisible}
                        containerStyle={{ backgroundColor: colors.translucentBg }}>

                        <View style={styles.bottomNavigationView}>
                            <Text style={[{ fontSize: 16, fontWeight: '500' }, colorStyles.slate]}> {'Set Alerts'} </Text>
                            <Text style={[{ fontSize: 14, textAlign: 'center', fontWeight: '300', marginTop: 30, paddingLeft: 20, paddingRight: 20}, colorStyles.slate]}>
                                {'Set the amount of days prior to your due date to get notified'}
                            </Text>
                            <View style={{ marginTop: 20, display: 'flex' }}>
                                <Icon
                                color={colors.dodgerBlue}
                                containerStyle={{ marginBottom: 25}}
                                disabledStyle={{}}
                                iconProps={{}}
                                iconStyle={{}}
                                name="chevron-up-circle"
                                onLongPress={() => console.log("onLongPress()")}
                                onPress={() => updateDays('ADD')}
                                size={45}
                                type="material-community" />
                                <Text  style={[{ fontSize: 20, fontWeight: '700', marginLeft: 12}, colorStyles.slate]}> {priorDays} </Text>
                                <Icon
                                color={colors.dodgerBlue}
                                containerStyle={{ marginTop: 25}}
                                disabledStyle={{}}
                                iconProps={{}}
                                iconStyle={{}}
                                name="chevron-down-circle"
                                onLongPress={() => console.log("onLongPress()")}
                                onPress={() => updateDays('SUBTRACT')}
                                size={45}
                                type="material-community" />
                            </View>
                            <Button
                                title={'Continue'}
                                raised={true}
                                titleStyle={colorStyles.white}
                                buttonStyle={commonStyles.pbtn}
                                containerStyle={{ ...commonStyles.pbtn, marginTop: 60 }}
                                onPress={onContinueAfterAlerts}/>
                        </View>    
                    </BottomSheet>
                    <TOverlay
                        title={OVERLAY.TITLE}
                        bodyText={OVERLAY.BODY_TEXT}
                        isVisible={isOverlayVisible}
                        updateVisibility={updateOverlayVisibility} />
                </View>
            </View>
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
        height: 450,
        justifyContent: 'center',
        alignItems: 'center',
      },
})


export default EnterDueDates


