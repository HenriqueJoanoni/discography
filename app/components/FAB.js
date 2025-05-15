import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { Theme } from '../constants/theme';

const CameraFAB = ({ onPress, icon, label }) => {
    const styles = StyleSheet.create({
        fab: {
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
            backgroundColor: Theme.colors.primary,
        },
    });

    return (
        <FAB
            icon={icon}
            label={label}
            onPress={onPress}
            style={styles.fab}
            color={Theme.colors.accent}
        />
    );
};

export default CameraFAB;