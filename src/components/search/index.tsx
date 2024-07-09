import { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from "@expo/vector-icons"

export function Search() {
    
    const [search, setSearch] = useState('');

    return (
        <View 
        className='w-full flex-row items-center h-14
        gap-2 px-4 border border-slate-500 rounded-full bg-white 
        '>
            <Feather name="search" size={24} color="#64748b" />
            <TextInput 
            placeholder='Procure sua comida...'
            className='w-full flex-1 h-full px-4 py-2 mt-2 text-xl
             text-gray-700 placeholder-gray-400'
            value={search}
            onChangeText={setSearch}
            />
        </View>
    );
}