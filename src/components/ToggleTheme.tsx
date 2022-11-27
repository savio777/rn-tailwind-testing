import { View, Text, Switch } from "react-native";
import { useColorScheme } from "nativewind";
import colors from "tailwindcss/colors";

export default function ToggleTheme() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-row items-center">
      <Text className="text-yellow-500">Dark</Text>
      <Switch
        trackColor={{ false: colors.yellow[200], true: colors.blue[400] }}
        thumbColor={
          colorScheme === "light" ? colors.blue[900] : colors.yellow[900]
        }
        value={colorScheme === "light"}
        onValueChange={toggleColorScheme}
      />
      <Text className="text-blue-400">Light</Text>
    </View>
  );
}
