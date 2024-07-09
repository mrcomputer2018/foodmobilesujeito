import { View, Text, Pressable } from 'react-native';
import { Ionicons, Feather } from "@expo/vector-icons"

export function Header() {
    return (
        <View className='w-full flex-row items-center justify-between'>
            <Pressable 
            className='w-10 h-10 bg-white rounded-full 
            flex justify-center items-center'>
                <Ionicons name='menu' size={20} color='#121212' />
            </Pressable>

            <View className='flex flex-col justify-center items-center gap-1'>
                <Text className='text-sm text-center text-slate-700'>
                    Localização
                </Text>

                <View className='flex flex-row justify-center items-center gap-1'>
                    <Feather name='map-pin' size={14} color='#ff0000' />
                    <Text className='text-lg font-bold'>Campo Grande</Text>
                </View>
            </View>

            <Pressable className='w-10 h-10 bg-white rounded-full 
            flex justify-center items-center'>        
                <Feather name='bell' size={20} color='#121212' />
            </Pressable>
        </View>
    );
}