import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import Button from "../components/Button";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Feather name="home" size={34} color={colors.green[500]} />

      <Text className="text-primary-main font-bold mt-4 text-2xl">
        Hello Tailwind on Native
      </Text>

      <Button />

      <StatusBar style="light" />
    </View>
  );
}