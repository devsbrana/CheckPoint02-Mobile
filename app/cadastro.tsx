import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TextInput, Text, Alert, Button, ScrollView } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

type DadosAluno = {
  nome: string;
  rm: string;
  telefone: string;
  cpf: string;
}

export default function Cadastro() {

  const router = useRouter();

  const [nomeAluno, setNomeAluno] = useState('');
  const [rm, setRm] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');

  useEffect(() => {
    async function carregarDados() {
      const dadosSalvos = await AsyncStorage.getItem('dadosAluno');
      if (dadosSalvos) {
        const dados: DadosAluno = JSON.parse(dadosSalvos);
        setNomeAluno(dados.nome);
        setRm(dados.rm);
        setTelefone(dados.telefone);
        setCpf(dados.cpf);
      }
    }
    carregarDados();
  }, []);

  async function handleCadastrar() {
    if (!nomeAluno || !rm || !telefone || !cpf) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos!');
      return;
    }

    const dadosAluno: DadosAluno = {
      nome: nomeAluno,
      rm: rm,
      telefone: telefone,
      cpf: cpf,
    };

    await AsyncStorage.setItem('dadosAluno', JSON.stringify(dadosAluno));
    router.push('/user');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Formulário de Cadastro</Text>
        <Image style={styles.image}
          source={require('../assets/fiaplogo.jpg')}
        />
        <StatusBar style="auto" />
        <TextInput
          style={styles.input}
          value={nomeAluno}
          placeholder='Digite seu nome:'
          autoCapitalize='words'
          maxLength={30}
          onChangeText={(text) => setNomeAluno(text)}
        />
        <TextInput
          style={styles.input}
          value={rm}
          placeholder='Digite seu RM:'
          maxLength={30}
          onChangeText={(text) => setRm(text)}
        />
        <MaskedTextInput
          style={styles.input}
          mask="(99) 99999-9999"
          onChangeText={(text) => setTelefone(text)}
          value={telefone}
          keyboardType="numeric"
          placeholder='Telefone:'
        />
        <MaskedTextInput
          style={styles.input}
          mask="999.999.999-99"
          onChangeText={(text) => setCpf(text)}
          value={cpf}
          keyboardType="numeric"
          placeholder='CPF:'
        />
        <Button title='Cadastrar' onPress={handleCadastrar} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  input: {
    backgroundColor: '#fff',
    width: 300,
    borderRadius: 7,
    paddingLeft: 10,
    fontSize: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});