import { Camera } from 'expo-camera';
import React, { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function QRCodeScannerScreen({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const cameraRef = useRef(null);
    
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        center: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonContainer: {
            position: 'absolute',
            bottom: 20,
            left: 20,
            right: 20,
            alignItems: 'center',
        },
    });

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Scanned ${type}: ${data}`);
        navigation.goBack();
    };

    if (hasPermission === null) {
        return <View style={styles.center}><Text>Requesting permissions...</Text></View>;
    }
    if (hasPermission === false) {
        return <View style={styles.center}><Text>No camera access</Text></View>;
    }

    return (
        <View style={styles.container}>
            <Camera
                ref={cameraRef}
                style={StyleSheet.absoluteFillObject}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                barCodeScannerSettings={{
                    barCodeTypes: ['qr', 'pdf417', 'ean13', 'code128']
                }}
            />
            {scanned && (
                <View style={styles.buttonContainer}>
                    <Button title="Scan Again" onPress={() => setScanned(false)} />
                </View>
            )}
        </View>
    );
}