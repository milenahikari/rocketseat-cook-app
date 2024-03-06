import { Text, View } from 'react-native';

import { Ingredients } from '@/components/Ingredients';

import { styles } from './styles'

export default function Home() {
  return <View style={styles.container}>
    <Text style={styles.title}>Escolha {"\n"}
      <Text style={styles.subtitle}>os produtos</Text>
    </Text>

    <Text style={styles.message}>Descubra receitas baseadas nos produtos que você escolheu.</Text>

    <Ingredients ingredients={[{ name: "Maça", image: ""}, { name: "Uva", image: ""} ]} />
  </View>
} 