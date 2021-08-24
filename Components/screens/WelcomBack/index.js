import React, { Fragment } from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import { Button, Image } from 'react-native-elements';
import OTPTextView from '../../Common/OTPTextView';

const ImageSource = require('../../../assets/images/profile_img/img@2X.png');

const WelcomBack = ({ moveToPage }): Node => {
    return (
        <Fragment>
            <View style={styles.container}>
                <Image
                    source={ImageSource}
                    style={styles.imageContainer}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <View style={styles.welcomeBack}>
                    <Text style={{ fontSize: 18, color: commonStyles.color.slate}}> 
                        {'Welcome Back'}
                    </Text>
                    <Text style={{  marginTop: 20, marginLeft: 30, fontSize: 15, color: commonStyles.color.slate }}>
                        {'Han Solo'}
                    </Text>
                    <Text style={{  marginTop: 75, marginLeft: 40, fontSize: 12, lineHeight: 16, color: commonStyles.color.slate }}>
                        {'Enter Pin'}
                    </Text>
                </View>
            </View>
            <Password />
            {/* Touch Icon */}
            {/* <Icon
                raised
                name=''
                color='#f50'
                onPress={() => console.log('hello')} /> */}
            
            <View style={{ marginLeft: 50, marginTop: 100}}>
                <Button title={'Log In'}
                    raised={true}
                    titleStyle={{color: '#ffffff'}}
                    buttonStyle={commonStyles.pbtn}
                    containerStyle={{ ...commonStyles.pbtn, marginTop: 30 }}
                    onPress={() => moveToPage(2)}
                    />
                <Button
                    title={'Sign Out    >'}
                    type="clear"
                    raised={true}
                    titleStyle={{color: '#bcc5d3'}}
                    buttonStyle={commonStyles.disabledBtn}                    
                    containerStyle={{ ...commonStyles.disabledBtn, marginTop: 30 }}/>
            </View>    
        </Fragment>
    )
}
 
const Password = ({ }): Node => {
    return (
        <View style={styles.otpContainer}>
            <OTPTextView
                handleTextChange={(e) => {}}
                containerStyle={styles.textInputContainer}
                textInputStyle={styles.roundedTextInput}
                secureTextEntry={true}
            />
      </View>
    );

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
    container: {
        marginTop: 15,
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

export default WelcomBack