import { useColorScheme } from "nativewind";
import { TextInput, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";

export default function Input(props: TextInputProps) {
  const { colorScheme } = useColorScheme();

  return (
    <TextInput
      className="w-full h-14 border-2 dark:border-white light:border-black rounded-md my-2 black:text-white light:text-black px-4 focus:border-green-500"
      placeholderTextColor={
        colorScheme === "dark" ? colors.gray[200] : colors.gray[400]
      }
      {...props}
    />
  );
}
