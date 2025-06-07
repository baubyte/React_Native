import Icon from '@react-native-vector-icons/ionicons';

interface Props {
    name: React.ComponentProps<typeof Icon>['name'];
    size?: number;
    color?: string;
}
export const IonIcon = ({ name, size = 20, color = 'black' }: Props) => {
  return (
      <Icon name={name} size={size} color={color} />
  );
};
