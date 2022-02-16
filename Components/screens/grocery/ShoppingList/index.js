import React, { Fragment, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, ActivityIndicator } from 'react-native';
import { Image, Button } from 'react-native-elements';

import baseStyles from '../../../../css/layout/base'
import colors from '../../../../css/abstracts/variables'
import colorStyles from "../../../../css/abstracts/color";
import elemStyles from '../../../../css/elemStyles';
import TIcon from '../../../Common/TIcon';
import { roundNumber } from '../../../src/utils/MathUtils';

const OPERATION = { ADD_QTY: 'ADD_QTY', SUBTRACT_QTY: 'SUBTRACT_QTY', DELETE_ITEM: 'DELETE_ITEM' }

const Cart = (props) => {
    const { product: { id, imageUrl, title, subTitle, price, qty }, onPressUpdateItem} = props

    return (
        <View style={styles.productItemContainer} key={id}>
            <Image
                source={imageUrl}
                style={styles.productImageContainer}
                placeholderStyle={{backgroundColor: colors.white}}
                PlaceholderContent={<ActivityIndicator siz={"small"} color={colors.bluetiful} />}
            />
            <View>
                <Text style={[baseStyles.mTop3]}>{title}</Text>
                <Text style={[baseStyles.mTop8, colorStyles.bluetiful]}>{subTitle}</Text>
                <View style={[baseStyles.flexRow, baseStyles.mTop8]}>
                    <Button
                        raised={true}
                        title={'+'}
                        titleStyle={colorStyles.bluetiful}
                        buttonStyle={elemStyles.greyXtraSmallBtn}
                        containerStyle={[elemStyles.greyXtraSmallBtn]}
                        onPress={() => onPressUpdateItem({ id, operation: OPERATION.ADD_QTY, price})}
                    />
                    <Text style={{ paddingHorizontal: 5, alignSelf: 'center'}}> {qty} </Text>
                    <Button
                        title={'-'}
                        raised={true}
                        titleStyle={colorStyles.bluetiful}
                        buttonStyle={elemStyles.greyXtraSmallBtn}
                        containerStyle={{ ...elemStyles.greyXtraSmallBtn }}
                        onPress={() => onPressUpdateItem({ id, operation: OPERATION.SUBTRACT_QTY, price})}
                    />
                </View>
            </View>
            <TIcon
                raised
                color={colors.red}
                containerStyle={[baseStyles.mTop30]}
                name="delete-outline"
                size={30}
                type="material-community"
                onPress={() => onPressUpdateItem({ id, operation: OPERATION.DELETE_ITEM, price})}
                />
        </View>)
}

const ShoppingList = (props) => {
    const { shoppingListTitle, onPressContinue, onPressBack } = props
    const [cartItems, updateCartItems ] = useState(props.productList)
    const [cartValue, setCartValue] = useState(0)

    useEffect(() => {
        let totalCartValue = cartItems.reduce((acc, item) => acc + (item.qty * item.price), 0)
        setCartValue(roundNumber(totalCartValue, 2)) // rounding logic for two decimal points
    }, [cartItems])

    onContinue = () => {
        onPressContinue(cartItems)
    }

    renderNavigationStrip = () => {
        return (
            <View style={baseStyles.flexRow}>
                <View style={[baseStyles.alignItemsStart]}>
                    <Text onPress={onPressBack} style={[baseStyles.f14, colorStyles.bluetiful]}>{'Back'} </Text>
                </View>
                <View style={[baseStyles.flexTwo, baseStyles.alignItemsEnd]}>
                    <Text onPress={clearCart} style={colorStyles.bluetiful}> {'Clear List'} </Text>
                </View>
            </View>)   
    }


    renderBottomPanel = () => {
        return (
        <View style={[baseStyles.mTop10, baseStyles.p5, styles.bottomPanel, baseStyles.flexRow]}>
            <View style={baseStyles.flexOne}>
                <Text style={baseStyles.f14}>{`Total Items:  ${cartItems.length}`}</Text>
                <Text style={[colorStyles.bluetiful, baseStyles.mTop5, baseStyles.f16]}>{`$${cartValue}`}</Text>
            </View>
            <View style={baseStyles.flexTwo, { alignItems: 'flex-end'}}>
                <Button
                    title={'Continue'}
                    raised={true}
                    titleStyle={{...colorStyles.white, fontSize: 14, fontWeight: '600'}}
                    buttonStyle={elemStyles.pBtnXtraSmall}
                    containerStyle={{ ...elemStyles.pBtnXtraSmall }}
                    onPress={onContinue} />
             </View>        
         </View>)
    }

    onPressUpdateItem = ({ id, operation, price}) => {
        switch(operation) {
            case OPERATION.ADD_QTY: {
                updateCartItems(cartItems.map(item => ((item.id === id) ? { ...item, qty: item.qty+1} : item )))
                break
            }
            case OPERATION.SUBTRACT_QTY: {
                updateCartItems(cartItems.map(item => {
                    if (item.id === id && item.qty > 1) {
                        return { ...item, qty: item.qty - 1 }
                    }
                    return item
                }))
                break
            }
            case OPERATION.DELETE_ITEM: {
                let newCartItems = []
                cartItems.forEach(item => {
                    if (item.id !== id) {
                        newCartItems.push(item)
                    }
                })
                updateCartItems(newCartItems)
                break
            }
        }
    }

    clearCart = () => {
        updateCartItems([])
    }

    renderCartItems = (cartItems) => {
        if (cartItems.length > 0) {
            return (
                <ScrollView>
                    {cartItems.map(cartItem =>
                        <Cart product={cartItem} onPressUpdateItem={onPressUpdateItem} />)}
                </ScrollView>
            )
        }
        return (<View style={styles.emptyCartContainer}>
                <Text> {'Cart is empty!'} </Text>
                </View>)
        
    }

    return (
        <Fragment>
            {renderNavigationStrip()}
            <View>
                <View style={[baseStyles.mTop15]}>
                    <Text style={[baseStyles.f16]}>{shoppingListTitle}</Text>
                </View>
                <View style={[baseStyles.mTop15]}>
                    {cartItems !== undefined && renderCartItems(cartItems)}
                </View>
            </View>
            <View style={styles.bottomPanelContainer}>
                {renderBottomPanel()}
            </View>    
        </Fragment>
    )
}


export default ShoppingList




const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 0,
        margin: 0,
        flex: 1
    },
    flexItem: {
        marginTop: 5,
        color: colors.black,
        fontSize: 14,
        textAlign: 'center'
    },
    bottomPanel: {
        height: 60,
        paddingLeft: 15,
        paddingRight: 15,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0, .3)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 2,
    },
    bottomPanelContainer: {
        position: 'absolute',
        top: 600,
        left: 30,
        right: 30,
        bottom: 50
    },
    productImageContainer: {
        width: 80,
        height: 80,
        marginLeft: -5,
        resizeMode: 'contain',  
    },
    productItemContainer: {
        ...baseStyles.flexRow,
        ...baseStyles.mTop15,
        ...baseStyles.pBottom5,
        borderBottomColor: colors.lightgrey,
        borderBottomWidth: 1
    },
    emptyCartContainer: {
        ...baseStyles.mTop100,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

