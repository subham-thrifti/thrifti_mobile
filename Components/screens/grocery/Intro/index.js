import React, { Fragment, useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

import { Button } from 'react-native-elements';
import elemStyles from '../../../../css/elemStyles';
import colors from '../../../../css/abstracts/variables';
import TOverlay from '../../../Common/Overlay';
import colorStyles from '../../../../css/abstracts/color';



const MESSAGES = [{
    TITLE: 'No More Bulky Wallets',
    BODY: 'You can store your loyalty card digitally and also convert your loyalty points to thrifti coins that you can use anywhere',
    BUTTON_TEXT: 'Next'
}, {
    TITLE: 'Save More',
    BODY: 'thrifti helps you get the best value from your shopping by giving you the best offers from your favorite stores',
    BUTTON_TEXT: 'Next'
},{
    TITLE: 'Smarter Shopping',
    BODY: 'Create your shopping list and thrifti would provide you customized prices from different stores',
    BUTTON_TEXT: 'Continue'
},{
    TITLE: '',
    BODY: "thrifti would like to access your location to show the best offers near you. thrifti won't sell your data or misuse it",
    BUTTON_TEXT: 'Allow Access',
    BUTTON_TEXT2: 'Enter your Zip Code',
    SHOW_ZIPCODE_LABEL: true
}]

const OVERLAY = {
    TITLE: 'Enter Zip Code',
    BODY_TEXT: 'Input your zip code below to get best deals'
}

const MAX_ZIP_CODE_LENGTH = 6;

const Intro = (props) => {
    const { registerZipCodeFromUser } = props

    const [currentMessageNumber, showNextMessage] = useState(0) 
    const [isOverlayVisible, updateOverlayVisibility] = useState(false)
    const [zipCode, updateZipCode] = useState('')

    onPressNextBtn = () => {
        if ((currentMessageNumber +1) < MESSAGES.length) {
            showNextMessage(currentMessageNumber+1)
        }
        const { SHOW_ZIPCODE_LABEL } =  MESSAGES[currentMessageNumber]
        if (SHOW_ZIPCODE_LABEL) {
            allowLocationAccess()
        }
    }

    allowLocationAccess = () => {
        console.log('allow locatuon access')
    }

    onChangeText = (value) => {
        if (value && value.length === MAX_ZIP_CODE_LENGTH) {
            registerZipCodeFromUser(value)
            updateZipCode(value)
        }
    }

    onUpdateOverlayVisibility = () => {
        updateOverlayVisibility(false)

    }


    const ChildComponent = () => {
        return (<View style={{marginTop: 20, marginBottom: 20 }}>
            <TextInput
                maxLength={MAX_ZIP_CODE_LENGTH}
                defaultValue={zipCode}
                onChangeText={onChangeText}
                autoCorrect={false}
                placeholder={'Enter zip code'}
                placeholderTextColor={colors.placeholderText}
                inputContainerStyle={{
                    borderColor: colors.placeholderText,
                    borderWidth: 2,
                    marginTop: 100,
                    width:150,
                    marginLeft: 20,
                    fontSize: 20
                    }}/>
        </View>)
    }
    

    const { TITLE, BODY, BUTTON_TEXT, BUTTON_TEXT2, SHOW_ZIPCODE_LABEL } = MESSAGES[currentMessageNumber]
    return (
        <Fragment>
            <View style={[styles.flexContainer, { paddingBottom: 20}]} >
                <Text style={styles.title}> {TITLE} </Text>
                <Text style={styles.body}> {BODY} </Text>
                <Button
                    title={BUTTON_TEXT}
                    titleStyle={{ color: colors.white, fontSize: 14, fontWeight: '500' }}
                    buttonStyle={elemStyles.pBtnSmall}
                    raised={true}
                    containerStyle={{ ...elemStyles.pBtnSmall, marginTop: 30 }}
                    onPress={onPressNextBtn}
                    />
                {SHOW_ZIPCODE_LABEL && 
                    <View>
                        <Text style={{ marginTop: 25, textAlign: 'center' }}> Or </Text>
                        <Button
                            titleStyle={{ color: '#000', fontSize: 13 }}
                            title={BUTTON_TEXT2}
                            raised={true}
                            type="clear"
                            containerStyle={{marginTop: 20, marginBottom: 20 }}
                            onPress={() => updateOverlayVisibility(true)}
                            />
                    </View>}
                    {isOverlayVisible && <TOverlay
                    title={OVERLAY.TITLE}
                    bodyText={OVERLAY.BODY_TEXT}
                    isVisible={isOverlayVisible}
                    updateVisibility={onUpdateOverlayVisibility}
                    ChildComponent={ChildComponent}
                    >
                </TOverlay>}
            </View>   
        </Fragment>
    )
}
 

const styles = StyleSheet.create({
    flexContainer:  {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    title: {
        fontWeight: '400',
        marginBottom: 10,
        fontSize: 16
    },
    body: {
        fontWeight: '400',
        padding: 20,
        lineHeight: 20,
        fontSize: 13,
    }
})
export default Intro