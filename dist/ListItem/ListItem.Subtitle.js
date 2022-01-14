import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Text } from '../Text';
const ANDROID_SECONDARY = 'rgba(0, 0, 0, 0.54)';
/** This allows adding SubTitle to the ListItem.
 * This, Receives all [Text](text#props) props. */
export const ListItemSubtitle = ({ style, right, children, ...props }) => {
    return (<Text testID="listItemTitle" style={StyleSheet.flatten([
            styles.subtitle,
            right && styles.rightSubtitle,
            style,
        ])} {...props}>
      {children}
    </Text>);
};
const styles = StyleSheet.create({
    subtitle: {
        backgroundColor: 'transparent',
        ...Platform.select({
            ios: {
                fontSize: 15,
            },
            default: {
                color: ANDROID_SECONDARY,
                fontSize: 14,
            },
        }),
    },
    rightSubtitle: {
        color: ANDROID_SECONDARY,
    },
});
ListItemSubtitle.displayName = 'ListItem.Subtitle';
