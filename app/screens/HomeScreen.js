import { useRouter } from 'expo-router';
import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Appbar, Card, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CameraFAB from '../components/FAB';
import { Theme } from '../constants/theme';

const cardData = [
    { id: '1', title: 'Card 1', content: 'First card content', image: 'https://picsum.photos/700' },
    { id: '2', title: 'Card 2', content: 'Second card content', image: 'https://picsum.photos/701' },
    { id: '3', title: 'Card 3', content: 'Third card content', image: 'https://picsum.photos/702' },
    { id: '4', title: 'Card 4', content: 'Fourth card content', image: 'https://picsum.photos/703' },
    { id: '5', title: 'Card 5', content: 'Fifth card content', image: 'https://picsum.photos/704' },
];

export default function HomeScreen() {
    const insets = useSafeAreaInsets();
    const { colors } = useTheme();
    const router = useRouter();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        header: {
            backgroundColor: colors.primary,
            paddingTop: insets.top,
            height: 56 + insets.top,
            elevation: 0
        },
        listContent: {
            padding: 16,
            paddingTop: 24,
        },
        card: {
            marginBottom: 16,
            backgroundColor: colors.cardBackground,
            borderRadius: 10,
            overflow: 'hidden',
            elevation: 3,
        },
        cardCover: {
            height: Theme.cardCover.height,
            resizeMode: 'cover',
        },
        cardContent: {
            padding: 16,
        },
        cardTitle: {
            fontSize: 22,
            fontWeight: 'bold',
            color: colors.text,
            marginBottom: 8,
        },
        cardBody: {
            color: colors.textSecondary,
            lineHeight: 20,
        }
    });

    const renderCard = ({ item }) => (
        <Card style={styles.card}>
            <Card.Cover
                source={{ uri: item.image }}
                style={styles.cardCover}
                loadingIndicatorSource={require('../assets/vinyl-record.png')}
            />
            <Card.Content style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardBody}>{item.content}</Text>
            </Card.Content>
        </Card>
    );

    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.header}>
                <Appbar.Content
                    title="Minha Biblioteca"
                    color={colors.accent}
                    style={{ alignItems: 'center', marginBottom: 8, transform: [{ translateY: -2 }] }}
                />
            </Appbar.Header>

            <FlatList
                data={cardData}
                renderItem={renderCard}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
            />
            <CameraFAB 
                onPress={() => console.log('Camera FAB pressed')} 
                icon="camera"
                label="Open Camera"
            />
        </View>
    );
}