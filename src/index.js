import React, { useState } from 'react'
import axios from 'axios'
import { 
    ActivityIndicator, 
    View, 
    Text, 
    TextInput, 
    Button 
} from 'react-native'
import styles from './styles'

export default function Main() {
  const [cep, setCEP] = useState('')
  const [endereco, setEndereco] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleButton() {
    setLoading(true)
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => setEndereco(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }

  return (
    <View style={{ flex: 1 }}>
        <Text style={styles.Title}>Busca por CEP</Text>
        <TextInput
            keyboardType='number-pad'
            maxLength={8}
            style={styles.input}
            onChangeText={(e) => setCEP(e)}
            placeholder='Digite o cep '
        />
        <Button 
            title='processar'
            color='#262626'
            onPress={handleButton}
        />
        {loading && <ActivityIndicator size='large' color='#262626' />}
        {endereco && <DetailsAddress data={endereco} />}
    </View>
  )
}

function DetailsAddress(props) {
    const { cep, logradouro, complemento, bairro, localidade, uf } = props.data

    return (
        <View
        style={styles.cardAdress}
        >
        <Text style={styles.DetailAdress}>CEP: {cep}</Text>
        <Text style={styles.DetailAdress}>Logradouro: {logradouro}</Text>
        <Text style={styles.DetailAdress}>Complemento: {complemento || 'NA'}</Text>
        <Text style={styles.DetailAdress}>Bairro: {bairro}</Text>
        <Text>Cidade: {localidade} - {uf}</Text>
        </View>
    )
}