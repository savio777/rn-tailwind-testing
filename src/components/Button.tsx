import { Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

function Button() {
  return (
    <TouchableOpacity className="h-14 bg-green-500 rounded-md justify-center item-center p-3">
      <Text className="text-white font-bold text-md">Entrar</Text>
    </TouchableOpacity>
  );
}

export default styled(Button);
