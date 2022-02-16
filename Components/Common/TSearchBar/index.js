import React from 'react';
import PropTypes from 'prop-types';
import { SearchBar } from 'react-native-elements';

import colors from '../../../css/abstracts/variables'


const TSearchBar = (props) => {
    const { placeholderTextColor, inputContainerStyle, platform, placeholder, searchTerm, onChangeText } = props;

    setSearchTerm = (val) => {
        onChangeText(val)
    }

    return (<SearchBar
        platform={platform}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        inputContainerStyle={inputContainerStyle}
        onChangeText={setSearchTerm}
        value={searchTerm} />)
}

TSearchBar.defaultProps = {
    platform: 'ios',
    placeholder: 'Search from here',
    placeholderTextColor: colors.blueGrey,
    inputContainerStyle: {backgroundColor: colors.lightgrey},
}

TSearchBar.propTypes = {
    platform: PropTypes.string,
    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    inputContainerStyle: PropTypes.object,
    searchTerm: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
}

export default TSearchBar;


