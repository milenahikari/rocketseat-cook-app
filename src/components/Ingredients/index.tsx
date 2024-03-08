import { ScrollView } from "react-native"

import { Ingredient } from "@/components/Ingredient"

import { styles } from "./styles"

export type IngredientProps = {
  id: string
  name: string
  image: string
  selected?: boolean
}

type Props = {
  ingredients: IngredientProps[]
  handleToggleSelected: (ingredientId: string) => void
}

export function Ingredients({ ingredients, handleToggleSelected }: Props) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.id}
          name={ingredient.name}
          image={ingredient.image}
          selected={ingredient.selected}
          onPress={() => handleToggleSelected(ingredient.id)}
        />
      ))}
    </ScrollView>
  )
}