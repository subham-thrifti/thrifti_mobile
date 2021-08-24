import React from 'react';
import { Icon } from 'react-native-elements';
                    
const TIcon = (props) => {
	const { color, name, onPress, onLongPress, size, type, containerStyle,
		disabledStyle, iconProps, iconStyle } = props
	
	return <Icon
			color={color}
			name={name}
			onPress={onPress}
			onLongPress={onLongPress}
			size={size}
			type={type}
			containerStyle={containerStyle}
			disabledStyle={disabledStyle}
			iconProps={iconProps}
			iconStyle={iconStyle}/>
}

TIcon.defaultProps = {
	onPress: () => {},
	onLongPress: () => {},
	containerStyle: {},
	disabledStyle: {},
	iconProps: {},
	iconStyle: {}
}

export default TIcon;