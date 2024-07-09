import { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from "@expo/vector-icons"

export function Search() {
    const [search, setSearch] = useState('');

    return (
        <View>
            <Feather name="search" size={20} color="#64748b" />
            <TextInput 
            placeholder='Pesquisar...'
            className='w-full h-10 px-4 py-2 mt-2 text-sm
             text-gray-700 placeholder-gray-400 bg-white 
             border border-gray-300 rounded-lg focus:outline-none
              focus:border-blue-400'
            value={search}
            onChangeText={setSearch}
            />
        </View>
    );
}