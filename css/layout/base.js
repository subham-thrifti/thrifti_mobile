import { StyleSheet } from 'react-native';
import colors from '../abstracts/variables';


const fontStyles = {
    
    f10: { fontSize: 10, lineHeight: 16 },
    f11: { fontSize: 11, lineHeight: 16 },
    f12: { fontSize: 12, lineHeight: 16 },
    f14: { fontSize: 14, lineHeight: 16 },
    f16: { fontSize: 16, lineHeight: 16 },
    f18: { fontSize: 18, lineHeight: 20 },
    f20: { fontSize: 20, lineHeight: 20 },
}

const margins = {
    mTop1: { marginTop: 1 },
    mTop2: { marginTop: 2 },
    mTop5: { marginTop: 5 },
    mTop10: { marginTop: 10 },
    mTop20: { marginTop: 20 },
    mTop30: { marginTop: 30 },
    mTop40: { marginTop: 40 },
    mTop50: { marginTop: 50 },
    mTop60: { marginTop: 60 },
    mTop80: { marginTop: 80 },
    mTop100: { marginTop: 100 },
    
    mLeft10: { marginLeft: 10 },
    mLeft20: { marginLeft: 20 },

    mLeftRight20: { marginLeft: 40, marginRight: 20 },
}

const padding = {
    p5: { padding: 5 },
    pTop1: { paddingTop: 1 },
    pTop5: { paddingTop: 5 },
    
    pLeft5: { paddingLeft: 5 },
}

const flexStyles = {
    makeFlex: { display: 'flex' },
    flexOne: { flex: 1 },
    flexTwo: { flex: 2 },
    flexRow: { display: 'flex', flexDirection: 'row' },
    flexWrap: { display: 'flex', flexWrap: 'wrap'},
    alignItemsStart: {alignItems: 'flex-start'},
    alignItemsEnd: {alignItems: 'flex-end'},
    justifyCenter: { justifyContent: 'center' },
    spaceAround: { alignContent: 'space-around' },
    alignJustifyCenter: { justifyContent: 'center', alignItems: 'center' },
}

const shadowStyles = {
    shadow: {shadowColor: colors.darkGrey, shadowOpacity: 0.5, shadowRadius: 1, shadowOffset: {height: 1, width: 2}},
}

const baseStyles = StyleSheet.create({
    ...padding,
    ...margins,
    ...flexStyles,
    ...fontStyles,
    ...shadowStyles
})




export default baseStyles