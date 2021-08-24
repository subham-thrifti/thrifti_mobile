import React from "react";
import { View } from "react-native";
import PropTypes from 'prop-types'
import { Slider } from 'react-native-elements';

import colors from "../../../css/abstracts/variables";

const TSlider = (props) => {
  const { animateTransitions, animationType, maximumTrackTintColor, maximumValue,
    minimumTrackTintColor, minimumValue, onSlidingComplete, onSlidingStart, 
    onValueChange, orientation, step, style, thumbStyle, thumbTintColor,
    thumbTouchSize, trackStyle, value
  } = props;
  
  return (
    <View style={{}}>
        <Slider
            animateTransitions={animateTransitions}
            animationType={animationType}
            maximumTrackTintColor={maximumTrackTintColor}
            maximumValue={maximumValue}
            minimumTrackTintColor={minimumTrackTintColor}
            minimumValue={minimumValue}
            onSlidingComplete={onSlidingComplete}
            onSlidingStart={onSlidingStart}
            onValueChange={onValueChange}
            orientation={orientation}
            step={step}
            style={style}
            thumbStyle={thumbStyle}
            thumbTintColor={thumbTintColor}
            thumbTouchSize={thumbTouchSize}
            trackStyle={trackStyle}
            value={value} />
    </View>
  );
};

TSlider.propTypes = {
    animateTransitions: PropTypes.bool,
    animationType: PropTypes.string,
    maximumTrackTintColor: PropTypes.string,
    maximumValue: PropTypes.number,
    minimumTrackTintColor: PropTypes.string,
    minimumValue: PropTypes.number,
    onSlidingComplete: () => {},
    onSlidingStart: () => {},
    onValueChange: PropTypes.func.isRequired,
    orientation: PropTypes.string,
    step: PropTypes.number,
    style: PropTypes.object,
    thumbStyle: PropTypes.object,
    thumbTintColor: PropTypes.string,
    thumbTouchSize: PropTypes.object,
    trackStyle: PropTypes.object,
    value: PropTypes.number.isRequired,
}

TSlider.defaultProps = {
    animateTransitions: true,
    animationType: 'timing',
    maximumTrackTintColor: "#ccc",
    maximumValue: 100,
    minimumTrackTintColor: colors.dodgerBlue,
    minimumValue: 0,
    onSlidingComplete: () => {},
    onSlidingStart: () => {},
    onValueChange: () => {},
    orientation: 'horizontal',
    step: 1,
    style: { width: 280, height: 200 },
    thumbStyle: { height: 20, width: 20 },
    thumbTintColor: colors.paleGrey,
    thumbTouchSize: { width: 40, height: 40 },
    trackStyle: { height: 10, borderRadius: 20 },
    value: 0
}


export default TSlider;