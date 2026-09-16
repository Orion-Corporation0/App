import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import styles from './CriarCurriculoPage.css';
import { Link } from 'expo-router';

export default function CriarCurriculoPage() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [education, setEducation] = useState('');

  const educationOptions = [
    'Ensino Fundamental completo',
    'Ensino Fundamental incompleto',
    'Ensino médio completo',
    'Ensino médio incompleto',
    'Ensino superior completo',
    'Ensino superior incompleto',
  ];

  return (
    <SafeAreaView style={styles.container}>

      {/* DECORAÇÃO DO TOPO */}

      <View style={styles.topDecoration}>

        <View style={styles.decorationBlue} />

        <View style={styles.decorationLight} />

        <View style={styles.decorationYellow} />

        <View style={styles.decorationDark} />

      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        {/* CABEÇALHO */}

        <View style={styles.header}>

          <View style={styles.headerTextContainer}>

            <Text style={styles.title}>
              Criar seu currículo
            </Text>

            <Text style={styles.subtitle}>
              Vamos começar com suas{'\n'}
              informações básicas!
            </Text>

          </View>

          <View style={styles.stepContainer}>

            <Text style={styles.stepText}>
              1/3
            </Text>

          </View>

        </View>


        {/* IDADE */}

        <View style={styles.section}>

          <View style={styles.sectionIconContainer}>

            <Text style={styles.calendarIcon}>
              ▣
            </Text>

          </View>

          <View style={styles.sectionContent}>

            <Text style={styles.label}>
              Qual sua idade?
            </Text>

            <View style={styles.inputContainer}>

              <TextInput
                style={styles.input}
                value={age}
                onChangeText={setAge}
                placeholder="Ex: 25 anos"
                placeholderTextColor="#BDBDBD"
                keyboardType="numeric"
                maxLength={3}
              />

              <Text style={styles.inputIcon}>
                ♟
              </Text>

            </View>

          </View>

        </View>


        {/* GÊNERO */}

        <View style={styles.section}>

          <View style={styles.sectionIconContainer}>

            <Text style={styles.personIcon}>
              ♙
            </Text>

          </View>

          <View style={styles.sectionContent}>

            <Text style={styles.label}>
              Qual o seu gênero?
            </Text>

            <View style={styles.genderContainer}>

              {/* FEMININO */}

              <TouchableOpacity
                style={[
                  styles.genderOption,
                  gender === 'feminino' &&
                    styles.genderOptionSelected,
                ]}
                onPress={() => setGender('feminino')}
                activeOpacity={0.7}
              >

                <Text style={styles.genderSymbol}>
                  ♀
                </Text>

                <Text style={styles.genderText}>
                  Feminino
                </Text>

              </TouchableOpacity>


              {/* MASCULINO */}

              <TouchableOpacity
                style={[
                  styles.genderOption,
                  gender === 'masculino' &&
                    styles.genderOptionSelected,
                ]}
                onPress={() => setGender('masculino')}
                activeOpacity={0.7}
              >

                <Text style={styles.genderSymbol}>
                  ♂
                </Text>

                <Text style={styles.genderText}>
                  Masculino
                </Text>

              </TouchableOpacity>


              {/* NÃO BINÁRIO */}

              <TouchableOpacity
                style={[
                  styles.genderOption,
                  gender === 'nao-binario' &&
                    styles.genderOptionSelected,
                ]}
                onPress={() => setGender('nao-binario')}
                activeOpacity={0.7}
              >

                <Text style={styles.genderSymbol}>
                  ⚯
                </Text>

                <Text style={styles.genderText}>
                  Não Binário
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </View>


        {/* ESCOLARIDADE */}

        <View style={styles.section}>

          <View style={styles.sectionIconContainer}>

            <Text style={styles.schoolIcon}>
              ♧
            </Text>

          </View>

          <View style={styles.sectionContent}>

            <Text style={styles.label}>
              Qual grau de escolaridade?
            </Text>

            <View style={styles.educationContainer}>

              {educationOptions.map((option) => {

                const selected = education === option;

                return (
                  <TouchableOpacity
                    key={option}
                    style={[
                      styles.educationOption,
                      selected &&
                        styles.educationOptionSelected,
                    ]}
                    onPress={() => setEducation(option)}
                    activeOpacity={0.7}
                  >

                    <View
                      style={[
                        styles.radio,
                        selected && styles.radioSelected,
                      ]}
                    >

                      {selected && (
                        <View style={styles.radioInner} />
                      )}

                    </View>

                    <Text style={styles.educationText}>
                      {option}
                    </Text>

                  </TouchableOpacity>
                );

              })}

            </View>

          </View>

        </View>


        {/* BOTÃO CONTINUAR */}
        <Link href="/criarCurriculo2/CriarCurriculoPage2" asChild>

        <TouchableOpacity
            style={styles.continueButton}
            activeOpacity={0.8}
        >
            <Text style={styles.continueText}>
            Continuar
            </Text>
        </TouchableOpacity>
        </Link>


        {/* INDICADOR DE ETAPAS */}

        <View style={styles.progressContainer}>

          <View style={styles.progressActiveDot} />

          <View style={styles.progressActiveLine} />

          <View style={styles.progressInactiveDot} />

          <View style={styles.progressInactiveLine} />

          <View style={styles.progressInactiveDot} />

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}
