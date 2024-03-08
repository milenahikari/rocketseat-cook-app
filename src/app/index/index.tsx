import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { services } from "@/services"

import { Ingredients } from '@/components/Ingredients';

import { styles } from './styles'
import { Loading } from '@/components/Loading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])

  useEffect(() => {
    services.ingredients.findAll()
      .then(setIngredients)
      .finally(() => setIsLoading(false))
  }, [])


  if (isLoading) {
    return <Loading />
  }

  return <View style={styles.container}>
    <Text style={styles.title}>Escolha {"\n"}
      <Text style={styles.subtitle}>os produtos</Text>
    </Text>

    <Text style={styles.message}>Descubra receitas baseadas nos produtos que você escolheu.</Text>

    <Ingredients ingredients={ingredients} handleToggleSelected={() => {}}/>
  </View>
} 