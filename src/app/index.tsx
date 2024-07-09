import { ScrollView, Text, View } from "react-native";
import { Header } from "../components/header";
import { Banner } from "../components/banner";

import Constants from "expo-constants";


const statusBarHeight = Constants.statusBarHeight; // pegando a altura da status bar

export default function Index() {
    return (
        <ScrollView 
        className='w-full h-full flex-1 bg-slate-100'
        showsVerticalScrollIndicator={false}
        >
            <View 
            className="w-full px-4" 
            style={{ marginTop: statusBarHeight }}>
                <Header />
            </View>

            <View>
                <Banner />
            </View>
        </ScrollView>
    );
}
