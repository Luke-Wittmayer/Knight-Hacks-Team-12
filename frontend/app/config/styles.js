import { Platform } from 'react-native';

import colors from './colors';

//default styles to use
export default{
    colors,
    text: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
};
