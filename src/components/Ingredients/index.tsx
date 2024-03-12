import { useEffect, useState } from "react";
import { ScrollView } from "react-native"

import { Loading } from '@/components/Loading';
import { Ingredient } from "@/components/Ingredient"

import { services } from "@/services";

import { styles } from "./styles"

export type IngredientProps = IngredientResponse & {
  selected?: boolean
}

export function Ingredients() {
  const [isLoading, setIsLoading] = useState(true)

  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
  const [idsSelectedIngredients, setIdsSelectedIngredients] = useState<string[]>([])
  
  useEffect(() => {
    services.ingredients.findAll()
      .then(setIngredients)
      .finally(() => setIsLoading(false))
  }, [])

  function handleToggleSelected(value: string) {
    if (idsSelectedIngredients.includes(value)) {
      return setIdsSelectedIngredients((state) => state.filter((item) => item !== value))
    }

    setIdsSelectedIngredients((state) => [...state, value])
  }

  if (isLoading) {
    return <Loading />
  }

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
          selected={idsSelectedIngredients.includes(ingredient.id)}
          onPress={() => handleToggleSelected(ingredient.id)}
        />
      ))}
    </ScrollView>
  )
}