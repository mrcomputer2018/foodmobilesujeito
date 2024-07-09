import { View, Text, Pressable } from 'react-native';
import { Ionicons, Feather } from "@expo/vector-icons"

export function Header() {
    return (
        <View>
            <Pressable className='flex-row justify-between items-center p-3 bg-gray-800'>
                <Ionicons name='menu' size={24} color='white' />
                <Text className='text-white text-lg font-bold'>Home</Text>
                <Feather name='search' size={24} color='white' />
            </Pressable>
        </View>
    );
}