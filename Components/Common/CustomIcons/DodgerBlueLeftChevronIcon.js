import React from 'react';
import type {Node} from 'react';

import TIcon from '../TIcon'
import colors from '../../../css/abstracts/variables'
import iconNames from '../../Constants/iconNames'

const DodgerBlueLeftChevronIcon = (props): Node => {
	const { size, onPress, type } = props

	return <TIcon
			color={colors.dodgerBlue}
			name={iconNames.leftChevron}
			size={size}
			type={type}
			onPress={onPress}/>
}

DodgerBlueLeftChevronIcon.defaultProps = {
	size: 40,
	type: 'material'
}


export { DodgerBlueLeftChevronIcon }