import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

type DadosAluno = {
  nome: string;
  rm: string;
  telefone: string;
  cpf: string;
}

export default function UserUser() {

  const [dados, setDados] = useState<DadosAluno | null>(null);

  useEffect(() => {
    async function carregarDados() {
      const dadosSalvos = await AsyncStorage.getItem('dadosAluno');
      if (dadosSalvos) {
        setDados(JSON.parse(dadosSalvos));
      }
    }
    carregarDados();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <Text style={styles.titulo}>Meu Perfil</Text>

        <Image
          source={require('../assets/Foto-de-Perfil.jpeg')}
          style={styles.foto}
        />

        {dados ? (
          <View style={styles.card}>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.valor}>{dados.nome}</Text>

            <Text style={styles.label}>RM:</Text>
            <Text style={styles.valor}>{dados.rm}</Text>

            <Text style={styles.label}>Telefone:</Text>
            <Text style={styles.valor}>{dados.telefone}</Text>

            <Text style={styles.label}>CPF:</Text>
            <Text style={styles.valor}>{dados.cpf}</Text>
          </View>
        ) : (
          <Text style={styles.aviso}>Nenhum dado encontrado. Preencha o cadastro!</Text>
        )}

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  card: {
    width: 300,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  label: {
    fontSize: 13,
    color: '#999',
    marginTop: 10,
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  aviso: {
    fontSize: 16,
    color: '#999',
    marginTop: 40,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});