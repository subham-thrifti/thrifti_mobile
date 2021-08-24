import React, { Fragment } from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Button } from 'react-native-elements';

const GOALS = {
    CONTINUE: 'CONTINUE',
    MAXIMIZE_CASHBACK: 'MAXIMIZE_CASHBACK',
    MAXIMIZE_TRAVEL_MILES: 'MAXIMIZE_TRAVEL_MILES',
    LET_THRIFTI_DECIDE: 'LET_THRIFTI_DECIDE',
}

const ChooseSavingGoals = (props): Node => {
    const { onGoalSelect } = props;

    onGoalPress = (goal) => {
        onGoalSelect(goal)
    }

    return (
        <Fragment>
            <View style={styles.container}>
                <View style={styles.welcomeBack}>
                    <Text style={{ fontSize: 18, color: commonStyles.color.slate }}> 
                        {'Choose Saving Goals'}
                    </Text>
                    <Text style={{  marginTop: 50, marginLeft: -30, marginRight: 15, fontSize: 11, lineHeight: 20, color: '#bcc5d3' }}>
                        {'Select the saving goals you want, helps thrifti choose the right credit card relatiing to the goal'}
                    </Text>
                    
                </View>
            </View>
            
            <View style={{ marginLeft: 50, marginTop: 70 }}>
                <Button
                    title={'Continue                                         >'}
                    raised={true}
                    type="outline"
                    titleStyle={styles.rectangleBtnTitleStyle}
                    buttonStyle={commonStyles.rectangleBtn}
                    containerStyle={{marginTop: 30 }}
                    onPress={() => onGoalPress(GOALS.CONTINUE)}
                    />
                    <Button
                    title={'Maximize Cashback                     >'}
                    raised={true}
                    type="outline"
                    titleStyle={styles.rectangleBtnTitleStyle}
                    buttonStyle={commonStyles.rectangleBtn}
                    containerStyle={{marginTop: 30 }}
                    onPress={() => onGoalPress(GOALS.LET_THRIFTI_DECIDE)}
                    />
                    <Button
                    title={'Maximize travel miles                  >'}
                    raised={true}
                    type="outline"
                    titleStyle={styles.rectangleBtnTitleStyle}
                    buttonStyle={commonStyles.rectangleBtn}
                    containerStyle={{marginTop: 30 }}
                    onPress={() => onGoalPress(GOALS.MAXIMIZE_TRAVEL_MILES)}
                    />
                    <Button
                    title={'Let thrifti decide                          >'}
                    raised={true}
                    type="outline"
                    titleStyle={styles.rectangleBtnTitleStyle}
                    buttonStyle={commonStyles.rectangleBtn}
                    containerStyle={{marginTop: 30 }}
                    onPress={() => onGoalPress(GOALS.LET_THRIFTI_DECIDE)}
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
    rectangleBtn: {
        borderRadius: 15,
        borderColor: '#ffffff',
        fontSize: 12,
        height: 60,
        paddingLeft: 25,
        justifyContent: 'flex-start'
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
    rectangleBtnTitleStyle: {
        color: '#3e84fe',
        fontSize: 16
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

export default ChooseSavingGoals


