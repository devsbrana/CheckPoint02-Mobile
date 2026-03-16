import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Image, TextInput, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const[nomeAluno, setNomeAluno] = useState('');
  const[nomeCurso, setNomeCurso] = useState('');
  const[nomeDisciplina, setNomeDisciplina] = useState('');
  const[Descricao, setDescricao] = useState('');
  const[mostrarDados, setMostrarDados] = useState(false)
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image style={styles.image}
          source={require('./assets/fiaplogo.jpg')}
        />
        <StatusBar style="auto"/>
        <TextInput
          style={styles.input}
          value={nomeAluno}
          placeholder='Digite seu nome:'
          autoCapitalize='words'
          maxLength={30}
        />
        <TextInput
          style={styles.input}
          value={nomeCurso}
          placeholder='Curso:'
          autoCapitalize='words'
          maxLength={50}
        />
        <TextInput
          style={styles.input}
          value={nomeDisciplina}
          placeholder='Disciplina:'
          autoCapitalize='words'
          maxLength={50}
        />
        <TextInput
          style={styles.input}
          value={Descricao}
          placeholder='Breve descrição pessoal:'
          autoCapitalize='words'
          maxLength={200}
        />
        <Button title='Cadastrar' onPress={()=>setMostrarDados(true)}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
  width: 200,
  height: 200,
  resizeMode: 'contain'
  },

  input: {
    backgroundColor: 'fff',
    width: 300,
    borderRadius: 7,
    paddingLeft: 10,
    fontSize: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
