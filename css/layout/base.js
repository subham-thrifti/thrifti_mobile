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
    mTop3: { marginTop: 3 },
    mTop5: { marginTop: 5 },
    mTop8: { marginTop: 8 },
    mTop10: { marginTop: 10 },
    mTop15: { marginTop: 15 },
    mTop20: { marginTop: 20 },
    mTop25: { marginTop: 25 },
    mTop30: { marginTop: 30 },
    mTop40: { marginTop: 40 },
    mTop50: { marginTop: 50 },
    mTop60: { marginTop: 60 },
    mTop80: { marginTop: 80 },
    mTop100: { marginTop: 100 },
    
    mLeft10: { marginLeft: 10 },
    mLeft20: { marginLeft: 20 },
    mLeft30: { marginLeft: 30 },
    mLeft40: { marginLeft: 40 },
    mLeft50: { marginLeft: 50 },
    mLeft60: { marginLeft: 60 },
    mLeft80: { marginLeft: 80 },
    mLeft120: { marginLeft: 120 },

    mBottom5: { marginBottom: 5 }, 
    mBottom10: { marginBottom: 10 }, 

    mLeftRight20: { marginLeft: 40, marginRight: 20 },
    mLeftRight10: { marginLeft: 10, marginRight: 10 },
}

const padding = {
    p5: { padding: 5 },
    pTop1: { paddingTop: 1 },
    pTop5: { paddingTop: 5 },
    
    pBottom5: { paddingBottom: 5 },
    pBottom30: { paddingBottom: 30 },
    pBottom50: { paddingBottom: 50 },
    pLeft5: { paddingLeft: 5 },

    p15: { padding: 15 },
    p20: { padding: 20 },
    p25: { padding: 25 },
    p30: { padding: 30 }
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
    alignCenter: { alignItems: 'center' },
    spaceAround: { alignContent: 'space-around' },
    alignJustifyCenter: { justifyContent: 'center', alignItems: 'center' },
}

const shadowStyles = {
    shadow: {shadowColor: colors.darkGrey, shadowOpacity: 0.5, shadowRadius: 1, shadowOffset: {height: 1, width: 2}},
}

const fontWeights = {
    fontW100: { fontWeight: '100'},
    fontW200: { fontWeight: '200'},
    fontW300: { fontWeight: '300'},
    fontW400: { fontWeight: '400'},
    fontW500: { fontWeight: '500'},
    fontW600: { fontWeight: '600'},
    fontW700: { fontWeight: '700'},
    fontBold: { fontWeight: 'bold'},
}

const baseStyles = StyleSheet.create({
    ...padding,
    ...margins,
    ...flexStyles,
    ...fontStyles,
    ...shadowStyles,
    ...fontWeights
})




export default baseStyles