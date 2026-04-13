import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TextInput, Button, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Cadastro() {

  useEffect(() => {
    console.log('Aplicativo Iniciado');
  }, []);

  const [nomeAluno, setNomeAluno] = useState('');
  const [nomeCurso, setNomeCurso] = useState('');
  const [nomeDisciplina, setNomeDisciplina] = useState('');
  const [Descricao, setDescricao] = useState('');
  const [mostrarDados, setMostrarDados] = useState(false);
  const [dadosExibidos, setDadosExibidos] = useState(null);

  function handleCadastrar() {
    setDadosExibidos({
      nome: nomeAluno,
      curso: nomeCurso,
      disciplina: nomeDisciplina,
      descricao: Descricao,
    });
    setMostrarDados(true);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Formulário de Cadastro</Text>
        <Image style={styles.image}
          source={require('../assets/fiaplogo.jpg')}
        />
        <StatusBar style="auto"/>
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
          value={nomeCurso}
          placeholder='Curso:'
          autoCapitalize='words'
          maxLength={50}
          onChangeText={(text) => setNomeCurso(text)}
        />
        <TextInput
          style={styles.input}
          value={nomeDisciplina}
          placeholder='Disciplina:'
          autoCapitalize='words'
          maxLength={50}
          onChangeText={(text) => setNomeDisciplina(text)}
        />
        <TextInput
          style={styles.input}
          value={Descricao}
          placeholder='Descrição pessoal (2 a 3 linhas):'
          autoCapitalize='words'
          maxLength={200}
          onChangeText={(text) => setDescricao(text)}
        />
        <Button title='Cadastrar' onPress={handleCadastrar}/>

        {mostrarDados && (
          <View style={{ width: 300, marginTop: 20 }}>
            <Text>Nome: {dadosExibidos.nome}</Text>
            <Text>Curso: {dadosExibidos.curso}</Text>
            <Text>Disciplina: {dadosExibidos.disciplina}</Text>
            <Text>Descrição: {dadosExibidos.descricao}</Text>
          </View>
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
    justifyContent: 'flex-start',
    paddingTop: 30,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
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
  }
});