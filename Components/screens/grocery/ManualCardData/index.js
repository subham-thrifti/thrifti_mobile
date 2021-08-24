import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Button, BottomSheet } from 'react-native-elements';

import colors from "../../../../css/abstracts/variables"
import colorStyles from "../../../../css/abstracts/color"

const ManualCardData = (props) => {
    const [isBottomSheetVisible, updateBottomSheetVisibility] = useState(false)
    const {cardNumber, setCardNumber} = useState('')

    renderTextInput = () => {
        return (
            <TextInput
                onChangeText={onTextChange}
                value={cardNumber}
                autoCorrect={false}
                placeholderTextColor={'#d0d8df'}
                keyboardType="numeric"
                autoFocus={true}
                styles={{  color: colors.dodgerBlue, fontSize: 26 }}
                inputContainerStyle={{
                    borderBottomColor: colorStyles.bluetiful,
                    marginTop: 50,
                    marginLeft: 20,
                    fontSize: 26,
                    }}/>
        )
    }

    useEffect(() => {
        if (props.isBottomSheetVisible === false || props.isBottomSheetVisible === true) {
            updateBottomSheetVisibility(props.isBottomSheetVisible)
        }
    }, [isBottomSheetVisible])

    onTextChange = (data) =>{
        console.log(this.state, 'CCCCCX ')
        if (setCardNumber) {
            console.log('CCCCC ')
            setCardNumber(data)
        }
    }

    onManualCardDetailsEnter = () => {
        console.log(cardNumber, 'CC')
        updateBottomSheetVisibility(false)
        if (props.onManualCardDetailsEnter) {
            props.onManualCardDetailsEnter(cardNumber)
        }
    }

    return (
        <BottomSheet
            isVisible={isBottomSheetVisible}
            containerStyle={{ backgroundColor: colors.translucentBg }}>

        <View style={styles.bottomNavigationView}>
            <Text style={{ fontSize: 16, fontWeight: '400', color: colors.slate}}> {'Enter Card Details Manually'} </Text>
            <View style={{ marginTop: 70, display: 'flex', flexDirection: 'row' }}>
                {renderTextInput()}
            </View>    
            <Button
                disabled={false}
                title={'Done'}
                raised={true}
                titleStyle={colorStyles.white}
                buttonStyle={commonStyles.pbtn}
                containerStyle={{ ...commonStyles.pbtn, marginTop: 60 }}
                onPress={onManualCardDetailsEnter}/>
        </View>    
    </BottomSheet>)
}


export default ManualCardData


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
