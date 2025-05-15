import { StyleSheet } from 'react-native';

const Theme = {
    colors: {
        primary: '#384B70',
        secondary: '#507687',
        accent: '#FCFAEE',
        background: '#FFFFFF',
        text: '#384B70',
        textSecondary: '#384B70',
        cardBackground: '#FCFAEE',
    },
    spacing: {
        small: 8,
        medium: 16,
        large: 24,
    },
    borderRadius: {
        small: 4,
        medium: 10,
        large: 16,
    },
    cardBodyLineHeight: 20,
    cardCover: {
        height: 200,
    },
};

const parseNestedStyles = (stylesObj, parentKey = '') => {
    return Object.keys(stylesObj).reduce((acc, key) => {
        if (typeof stylesObj[key] === 'object' && !Array.isArray(stylesObj[key])) {
            return {
                ...acc,
                ...parseNestedStyles(stylesObj[key], `${parentKey}${key}_`)
            };
        }
        return {
            ...acc,
            [`${parentKey}${key}`]: stylesObj[key]
        };
    }, {});
};

const createNestedStyles = (styles) => StyleSheet.create(parseNestedStyles(styles));

export { createNestedStyles, Theme };

export default {};