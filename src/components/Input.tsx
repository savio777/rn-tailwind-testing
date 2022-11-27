import { TextInput, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";

export default function Input(props: TextInputProps) {
  return (
    <TextInput
      className="w-full h-14 border-2 border-white rounded-md my-2 text-white px-4 focus:border-green-500"
      placeholderTextColor={colors.gray[200]}
      {...props}
    />
  );
}
