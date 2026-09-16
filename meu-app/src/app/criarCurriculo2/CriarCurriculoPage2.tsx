import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import styles from './CriarCurriculoPage2.css';
import { Link } from 'expo-router';

export default function CriarCurriculoPage2() {
  const [cep, setCep] = useState('');
  const [descricao, setDescricao] = useState('');
  const [experiencias, setExperiencias] = useState('');
  const [quantidadeEmpresas, setQuantidadeEmpresas] = useState('');
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [tempoTrabalhado, setTempoTrabalhado] = useState('');
  const [nuncaTrabalhei, setNuncaTrabalhei] = useState(false);

  return (
    <SafeAreaView style={styles.container}>

      {/* Fundo decorativo superior */}
      <View style={styles.topBackground}>
        <View style={styles.blueShape} />
        <View style={styles.lightBlueShape} />
        <View style={styles.yellowShape} />
        <View style={styles.darkBlueShape} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        {/* Cabeçalho */}
        <View style={styles.header}>

          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>

          <View style={styles.headerText}>
            <Text style={styles.title}>
              Criar seu currículo
            </Text>

            <Text style={styles.subtitle}>
              Vamos começar com suas{'\n'}
              informações básicas!
            </Text>
          </View>

          <View style={styles.pageIndicator}>
            <Text style={styles.pageIndicatorText}>
              2/3
            </Text>
          </View>

        </View>

        {/* CEP */}
        <View style={styles.fieldRow}>

          <View style={styles.iconBox}>
            <Text style={styles.iconText}>⌂</Text>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>
              Informe o seu CEP
            </Text>

            <View style={styles.inputWithMic}>
              <TextInput
                style={styles.input}
                value={cep}
                onChangeText={setCep}
                placeholder="Ex: 45366999856"
                placeholderTextColor="#BDBDBD"
                keyboardType="numeric"
              />

              <MicIcon />
            </View>
          </View>

        </View>

        {/* Descrição */}
        <View style={styles.fieldRow}>

          <View style={styles.iconBox}>
            <Text style={styles.iconText}>▤</Text>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>
              Sua descrição
            </Text>

            <View style={styles.inputWithMic}>
              <TextInput
                style={[styles.input, styles.multilineInput]}
                value={descricao}
                onChangeText={setDescricao}
                placeholder="Me fale de você. Ex: Idade, estado civil..."
                placeholderTextColor="#BDBDBD"
                multiline
              />

              <MicIcon />
            </View>
          </View>

        </View>

        {/* Experiências */}
        <View style={styles.fieldRow}>

          <View style={styles.iconBox}>
            <Text style={styles.iconText}>▣</Text>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>
              Experiências
            </Text>

            <View style={styles.inputWithMic}>
              <TextInput
                style={styles.input}
                value={experiencias}
                onChangeText={setExperiencias}
                placeholder="Quais trabalhos já fez? (Formais e informais)"
                placeholderTextColor="#BDBDBD"
              />

              <MicIcon />
            </View>
          </View>

        </View>

        {/* Quantidade de empresas */}
        <View style={styles.fieldRow}>

          <View style={styles.iconBox}>
            <Text style={styles.iconText}>♧</Text>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>
              Quantidade de empresa trabalhadas
            </Text>

            <TouchableOpacity style={styles.select}>
              <Text
                style={
                  quantidadeEmpresas
                    ? styles.selectText
                    : styles.placeholderText
                }
              >
                {quantidadeEmpresas || 'Selecione'}
              </Text>

              <Text style={styles.chevron}>
               ⌄
              </Text>
            </TouchableOpacity>
          </View>

        </View>

        {/* Nome da empresa */}
        <View style={styles.fieldRow}>

          <View style={styles.iconBox}>
            <Text style={styles.iconText}>▦</Text>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>
              Nome da empresa
            </Text>

            <View style={styles.inputWithMic}>
              <TextInput
                style={styles.input}
                value={nomeEmpresa}
                onChangeText={setNomeEmpresa}
                placeholder="Ex: empresa Orion"
                placeholderTextColor="#BDBDBD"
              />

              <MicIcon />
            </View>
          </View>

        </View>

        {/* Tempo trabalhado */}
        <View style={styles.fieldRow}>

          <View style={styles.iconBox}>
            <Text style={styles.iconText}>◷</Text>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>
              Tempo trabalhado
            </Text>

            <View style={styles.inputWithMic}>
              <TextInput
                style={styles.input}
                value={tempoTrabalhado}
                onChangeText={setTempoTrabalhado}
                placeholder="Ex: 3 anos"
                placeholderTextColor="#BDBDBD"
              />

              <MicIcon />
            </View>
          </View>

        </View>

        {/* Nunca trabalhei */}
        <View style={styles.neverWorkedRow}>

          <View style={styles.iconBox}>
            <Text style={styles.iconText}>
              ⊘
            </Text>
          </View>

          <View style={styles.neverWorkedText}>
            <Text style={styles.neverWorkedTitle}>
              Nunca Trabalhei
            </Text>

            <Text style={styles.neverWorkedDescription}>
              Marque caso esta seja a primeira oportunidade de
              conseguir um emprego.
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.switch,
              nuncaTrabalhei && styles.switchActive,
            ]}
            onPress={() => setNuncaTrabalhei(!nuncaTrabalhei)}
          >
            <View
              style={[
                styles.switchCircle,
                nuncaTrabalhei && styles.switchCircleActive,
              ]}
            />
          </TouchableOpacity>

        </View>

        {/* Continuar */}
        <Link href="/criarCurriculo3" asChild>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueText}>
              Continuar
            </Text>
          </TouchableOpacity>
        </Link>

        {/* Indicador das páginas */}
        <View style={styles.progressContainer}>

          <View style={styles.progressActiveCircle} />

          <View style={styles.progressLine} />

          <View style={styles.progressActiveCircle} />

          <View style={styles.progressLine} />

          <View style={styles.progressInactiveCircle} />

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}


/*
 * Microfone criado somente com View.
 * Não precisa instalar biblioteca de ícones.
 */
function MicIcon() {
  return (
    <View style={styles.micContainer}>

      <View style={styles.micBody} />

      <View style={styles.micArc} />

      <View style={styles.micLine} />

    </View>
  );
}