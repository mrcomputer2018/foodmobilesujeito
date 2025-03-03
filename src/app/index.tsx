import { ScrollView, Text, View } from "react-native";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";

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

                <Banner />

                <Search />
            </View>

            <Section 
            name="comidas em alta" 
            label="veja mais" 
            size="text-2xl" 
            action={() => console.log("clicou!!!")}/>
        </ScrollView>
    );
}
