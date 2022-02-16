import React, { Fragment } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import { Button, Image } from 'react-native-elements';
import colors from '../../../../css/abstracts/variables';

const ImageSource = require('../../../../assets/images/cards/Thrifti_card_placeholder_2X.png')

const AddCreditCard = (props) => {

    onContinueButtonPress = () => {
        const { onContinue } = props
        onContinue()
    }

    return (
        <Fragment>
            <View style={styles.container}>
                <View style={styles.welcomeBack}>
                    <Text style={{ fontSize: 18, fontWeight: '500', color: commonStyles.color.slate }}> 
                        {'Add Credit Card'}
                    </Text>
                </View>
            <View style={{ marginLeft: -43, marginTop: 50, display: 'flex', flexDirection: 'row'}}>
                <View style={{ justifyContent: 'center' }}>
                    <Image 
                        source={ImageSource}
                        style={{ width: 330, height: 250 }}
                        PlaceholderContent={<ActivityIndicator siz={"small"} color={colors.bluetiful} />}
                    />
                </View>
            </View>
            <Text style={{ marginTop: 40, marginLeft: 70, marginRight: 15, fontSize: 16, fontWeight: '600', lineHeight: 20, color: '#4c5264' }}>
                {'thrifti Pay'}
            </Text>
            <Text style={{  marginTop: 40, marginLeft: -30, marginRight: 15, fontSize: 11, lineHeight: 20, color: '#4c5264' }}>
                {'When you add credit cards to thrifti, thrifti chooses the right credit card that helps you meet your goal, such as the card that gives you the most cash back or the one that gets you the highest reward points and the best discounts every time'}
            </Text>
            </View>
            <View style={{ marginLeft: 50, marginTop: 10 }}>
                <Button title={'Continue'}
                    raised={true}
                    titleStyle={{color: '#ffffff'}}
                    buttonStyle={commonStyles.pbtn}
                    containerStyle={{ ...commonStyles.pbtn, marginTop: 30 }}
                    onPress={onContinueButtonPress}
                    />
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
})

export default AddCreditCard