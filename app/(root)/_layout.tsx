import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "@/external/global-provider";
import { Redirect, Slot } from "expo-router";

export default function AppLayout() {
    const {loading, isLoggedIn} = useGlobalContext();
    console.log(isLoggedIn)
    if (loading) {
        return (
            <SafeAreaView className="bg-white h-full flex justify-center items-center">
                <ActivityIndicator size='large' className="text-primary-300"/>
            </SafeAreaView>
        )
    }

    if (!isLoggedIn) {
        return <Redirect href='/sign-in'/>
    }

    return <Slot/>
}