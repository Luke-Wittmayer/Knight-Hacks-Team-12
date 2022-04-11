import React from 'react';
import { Text } from 'react-native';

import defaultStyles from '../config/styles';

//for using dynamic default text that changes per platform
function AppText({ children, style }) {
    return (
        <Text style={[defaultStyles.text, style]}>{children}</Text>
    );
}


export default AppText;