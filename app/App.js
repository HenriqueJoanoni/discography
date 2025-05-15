// import { StatusBar } from 'expo-status-bar';
import { Platform, StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Theme } from './constants/theme';
import AppNavigator from './navigation';

export default function App() {
    return (
        <PaperProvider theme={Theme}>
            <StatusBar
                style={Platform.OS === 'ios' ? 'dark' : 'light'}
                backgroundColor={Theme.colors.primary}
            />
            <AppNavigator />
        </PaperProvider>
    );
}