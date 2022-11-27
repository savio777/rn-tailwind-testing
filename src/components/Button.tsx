import { Text, TouchableOpacity } from "react-native";
import { StyledComponent } from "nativewind";
// import { styled } from "nativewind";

function Button({ ...props }) {
  return (
    <StyledComponent component={TouchableOpacity} {...props}>
      <TouchableOpacity className="h-14 bg-green-500 rounded-md justify-center items-center p-3">
        <Text className="text-white font-bold text-md">Entrar</Text>
      </TouchableOpacity>
    </StyledComponent>
  );
}

// export default styled(Button);

export default Button;
