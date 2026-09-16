import React, { useRef, useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";

import { styles } from "./verificationCode.css";

export default function CodigoVerificacao() {
  const [codigo, setCodigo] = useState(["", "", "", ""]);

  const inputs = useRef<(TextInput | null)[]>([]);

  const alterarCodigo = (valor: string, index: number) => {
    const novoCodigo = [...codigo];
    novoCodigo[index] = valor.replace(/[^0-9]/g, "");
    setCodigo(novoCodigo);
    if (valor && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  return (
    <ImageBackground
      source={require("../../img/login/fundo.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboard}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >

            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                Código de{"\n"}Verificação
              </Text>
            </View>

            <Image
              source={require("../../img/sendCode/image.png")}
              style={styles.celularImg}
              resizeMode="contain"
            />

            <Text style={styles.description}>
              Enviamos um código para o ******58
            </Text>

            <View style={styles.codeContainer}>
              {codigo.map((valor, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => {
                    inputs.current[index] = ref;
                  }}
                  style={styles.codeInput}
                  value={valor}
                  onChangeText={(texto) =>
                    alterarCodigo(texto, index)
                  }
                  keyboardType="number-pad"
                  maxLength={1}
                  textAlign="center"
                  selectionColor="#263A70"
                />
              ))}
            </View>

            <Text style={styles.confirmText}>
              Confirme o código para continuar.
            </Text>

            <Link href="/confirmPassword/confirmPassword" asChild>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>
                  Enviar
                </Text>
              </TouchableOpacity>
            </Link>

            <Text style={styles.resendText}>
              Reenviar código em 00:54
            </Text>

          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}