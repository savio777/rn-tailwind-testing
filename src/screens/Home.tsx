import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

import Button from "../components/Button";
import Input from "../components/Input";
import ToggleTheme from "../components/ToggleTheme";
import { useColorScheme } from "nativewind";

export default function Home() {
  const { colorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center dark:bg-black light:bg-white p-8">
      <ToggleTheme />

      <Feather name="home" size={34} color={colors.green[500]} />

      <Text className="dark:text-primary-main light:text-black font-bold mt-4 text-2xl">
        Hello Tailwind on Native
      </Text>

      <Input placeholder="teste 1" />
      <Input placeholder="teste 2" />

      <Button className="w-full mt-10" />

      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </View>
  );
}
