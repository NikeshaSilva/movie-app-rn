import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl font-bold text-accent">Welcome!</Text>
      <Link href={"/onboarding"}>OnBoarding</Link>
    </View>
  );
}
