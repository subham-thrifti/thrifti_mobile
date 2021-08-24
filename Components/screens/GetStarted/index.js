import React, { Fragment } from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Button, Input } from 'react-native-elements';


const GetStarted = ({ onPressGetStarted, onPressContinueWithPhone }): Node => {
    return (
        <Fragment>
            <View style={styles.container}>
                <View style={styles.welcomeBack}>
                    <Text style={{ fontSize: 18, color: commonStyles.color.slate}}> 
                        {'Let\'s get you started'}
                    </Text>
                    <Text style={{  marginTop: 50, marginLeft: 20, fontSize: 13, color: commonStyles.color.slate }}>
                        {'Enter Email Address'}
                    </Text>
                    <Input
                        autoCorrect={false}
                        placeholder={'Email Address'}
                        placeholderTextColor={'#e2e8ed'}
                        inputContainerStyle={{
                            borderBottomColor: "#ffffff",
                            marginTop: 50,
                            width:150,
                            marginLeft: 20,
                            fontSize: 10
                         }}
                    />
                </View>
            </View>
            
            <View style={{ marginLeft: 50 }}>
                <Button title={'Get Started'}
                    raised={true}
                    titleStyle={{color: '#ffffff'}}
                    buttonStyle={commonStyles.pbtn}
                    containerStyle={{ ...commonStyles.pbtn, marginTop: 30, marginLeft: 30 }}
                    onPress={onPressGetStarted}
                    />
                <Text style={{  marginTop: 55, marginLeft: 125, fontSize: 12, lineHeight: 16, color: commonStyles.color.slate }}>
                    {'Or'}
                </Text>
                    <Button
                        title={'Continue With Phone'}
                        type="outline"
                        raised={true}
                        titleStyle={{color: '#3e84fe'}}
                        buttonStyle={commonStyles.whiteBtn}                    
                        containerStyle={{ ...commonStyles.whiteBtn, marginTop: 30 }}
                        onPress={onPressContinueWithPhone}
                    />
            </View>    
        </Fragment>
    )
}

const commonStyles = {
    pbtn: {
        borderRadius: 50,
        backgroundColor: '#3e84fe',
        fontSize: 16,
        height: 50,
        width: 201
    },
    whiteBtn: {
        borderRadius: 50,
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        fontSize: 2,
        lineHeight: 16,
        height: 50,
        width: 249,
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
    button: {
        borderRadius:25,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 0.4,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 11},
      },
    container: {
        marginTop: 15,
        marginLeft: 45
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
        marginTop: 25,
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

export default GetStarted