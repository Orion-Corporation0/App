import React, { useState } from 'react';
import { Alert, ImageBackground, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

import styles from './register.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { signUp } = useAuth();
  const router = useRouter();

  const handleSubmit = async () => {
    if (password !== confirmation) {
      Alert.alert('Verifique sua senha', 'As senhas informadas não são iguais.');
      return;
    }
    setSubmitting(true);
    try {
      await signUp({ nome: name, email, telefone: phone, senha: password, dataNascimento: birthDate, idLocalizacao: 1 });
      router.replace('/criarCurriculo/CriarCurriculoPage');
    } catch (error) {
      Alert.alert('Não foi possível cadastrar', error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ImageBackground source={require('../../img/login/fundo.png')} style={styles.background} resizeMode="cover">
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
          <View style={styles.logo}>
            <Text style={styles.logoMark}>e<Text style={styles.logoPlus}>+</Text></Text>
            <Text style={styles.logoText}>EMPREGA+</Text>
          </View>
          <Text style={styles.panelTitle}>Painel de acesso</Text>
          <Text style={styles.title}>Cadastre-se</Text>
          <Text style={styles.subtitle}>Crie seu currículo e encontre seu emprego!</Text>

          <View style={styles.form}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Insira seu nome completo" placeholderTextColor="#B5B5B5" />
            <Text style={styles.label}>E-mail:</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Insira seu e-mail" placeholderTextColor="#B5B5B5" keyboardType="email-address" autoCapitalize="none" />
            <Text style={styles.label}>Telefone:</Text>
            <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Insira seu telefone" placeholderTextColor="#B5B5B5" keyboardType="phone-pad" />
            <Text style={styles.label}>Data de nascimento:</Text>
            <TextInput style={styles.input} value={birthDate} onChangeText={setBirthDate} placeholder="Insira sua data de nascimento" placeholderTextColor="#B5B5B5" />
            <Text style={styles.label}>Crie sua senha:</Text>
            <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Crie uma senha" placeholderTextColor="#B5B5B5" secureTextEntry />
            <Text style={styles.label}>Confirme a senha:</Text>
            <TextInput style={styles.input} value={confirmation} onChangeText={setConfirmation} placeholder="Confirme sua senha" placeholderTextColor="#B5B5B5" secureTextEntry />

            <Pressable style={styles.button} onPress={handleSubmit} disabled={submitting}>
              <Text style={styles.buttonText}>{submitting ? 'Cadastrando...' : 'Continuar'}</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}