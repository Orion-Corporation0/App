import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Link } from 'expo-router'
import { MaskedTextInput } from 'react-native-mask-text';

import styles from './loginPage.css';

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={require('../../img/login/fundo.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >

      <Text style={styles.logo}>
        EMPREGA +
      </Text>

      <Text style={styles.panelTitle}>
        Painel de acesso
      </Text>

      <Text style={styles.title}>
        Entrar
      </Text>

      <Text style={styles.subtitle}>
        Acesse sua conta para continuar
      </Text>

      <View style={styles.form}>

        <Text style={styles.label}>
          Telefone:
        </Text>

        <MaskedTextInput
          mask="(99) 99999-9999"
          style={styles.input}
          value={phone}
          onChangeText={(text) => setPhone(text)}
          placeholder="Insira seu telefone"
          placeholderTextColor="#B5B5B5"
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          autoComplete="tel"
        />

        <Text style={styles.label}>
          Confirme a senha:
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          placeholderTextColor="#B5B5B5"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Link href="/sendCode/sendCode" asChild>
          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgotText}>
              Esqueceu sua senha?
            </Text>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity style={styles.rememberContainer}>
          <View style={styles.checkbox} />

          <Text style={styles.rememberText}>
            Lembrar de mim
          </Text>
        </TouchableOpacity>

        <Link href="/criarCurriculo/CriarCurriculoPage" asChild>
  <Pressable style={styles.button}>
    <Text style={styles.buttonText}>
      Entrar
    </Text>
  </Pressable>
</Link>






        <View style={styles.dividerContainer}>

          <View style={styles.divider} />

          <Text style={styles.dividerText}>
            OU
          </Text>

          <View style={styles.divider} />

        </View>

        {/* Google */}
        <TouchableOpacity style={styles.googleButton}>

          <Text style={styles.googleText}>
            Entrar com
          </Text>

          <Text style={[styles.googleLogo, { color: '#4285F4' }]}>
            G
          </Text>

          <Text style={[styles.googleLogo, { color: '#EA4335' }]}>
            o
          </Text>

          <Text style={[styles.googleLogo, { color: '#FBBC05' }]}>
            o
          </Text>

          <Text style={[styles.googleLogo, { color: '#4285F4' }]}>
            g
          </Text>

          <Text style={[styles.googleLogo, { color: '#34A853' }]}>
            l
          </Text>

          <Text style={[styles.googleLogo, { color: '#EA4335' }]}>
            e
          </Text>

        </TouchableOpacity>

      </View>

        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
