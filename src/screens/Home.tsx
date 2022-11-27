import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

import Button from "../components/Button";
import Input from "../components/Input";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-black p-8">
      <Feather name="home" size={34} color={colors.green[500]} />

      <Text className="text-primary-main font-bold mt-4 text-2xl">
        Hello Tailwind on Native
      </Text>

      <Input placeholder="teste 1" />
      <Input placeholder="teste 2" />

      <Button className="w-full mt-10" />

      <StatusBar style="light" />
    </View>
  );
}
