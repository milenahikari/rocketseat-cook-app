import { Image, Pressable, PressableProps, Text } from 'react-native';

import { IngredientProps } from '../Ingredients';

import { styles } from './styles';

type Props = Omit<IngredientProps, "id"> & PressableProps

export function Ingredient({name, image, selected = false, ...rest}: Props) {
  return <Pressable
    style={[styles.container, selected && styles.selected]}
    {...rest}
  >
    <Image source={{uri: `${process.env.EXPO_PUBLIC_SUPABASE_IMAGE_PATH}/${image}`}} style={styles.image} />
    <Text style={styles.title}>{name}</Text>
  </Pressable>
}