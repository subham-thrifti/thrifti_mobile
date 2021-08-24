

import React from 'react';
import { Button } from 'react-native-elements';

const TButton = ({ title, onPress, raised=true }) => {
    return (
        <Button raised={raised} title={title} onPress={onPress} />
    )
}

export default TButton