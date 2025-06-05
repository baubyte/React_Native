import { globalStyles } from '../../theme/theme';
import { Pressable, Text } from 'react-native';

interface Props {
  onPress: () => void
  label:string
}

export const PrimaryButton = ({onPress, label}:Props) => {
  return (
      <Pressable style={globalStyles.primaryButton} onPress={onPress}>
        <Text style={globalStyles.buttonText}>{label}</Text>
      </Pressable>
  );
};
