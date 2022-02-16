import { StyleSheet } from 'react-native';

import colors from '../css/abstracts/variables'

const pBtnLarge = {
    borderRadius: 50,
    backgroundColor: colors.bluetiful,
    fontSize: 16,
    height: 50,
    width: 249
}

const pBtnMedium = {
    borderRadius: 50,
    backgroundColor: colors.bluetiful,
    // fontSize: 14,
    height: 50,
    width: 180
}

const pBtnSmall = {
    borderRadius: 50,
    backgroundColor: colors.bluetiful,
    fontSize: 14,
    height: 40,
    width: 120
}

const pBtnSmallWhite = {
    borderRadius: 50,
    backgroundColor: colors.white,
    fontSize: 14,
    height: 40,
    width: 120
}

const pBtnXtraSmall = {
    borderRadius: 20,
    backgroundColor: colors.bluetiful,
    height: 40,
    width: 90
}

const greyXtraSmallBtn = {
    borderRadius: 5,
    padding: 0,
    backgroundColor: colors.paleGrey,
    height: 23,
    width: 23
}

const buttonStyles = {
    pBtnXtraSmall,
    pBtnSmall,
    pBtnSmallWhite,
    pBtnMedium,
    pBtnLarge,
    greyXtraSmallBtn,
}






const elemStyles = StyleSheet.create({
    ...buttonStyles,
})

export default elemStyles