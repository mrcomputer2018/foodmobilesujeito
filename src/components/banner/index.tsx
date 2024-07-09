import { View, Pressable, Text, Image } from 'react-native';

export function Banner() {
    return (
        <View>
            <Pressable>
            <Image source={{ uri: 'https://via.placeholder.com/200' }} />
            <Text>Click me</Text>
            </Pressable>
        </View>    
    );
}