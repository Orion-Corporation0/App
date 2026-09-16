import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import styles from './CriarCurriculoPage3.css';
import { Link } from 'expo-router';

export default function CriarCurriculoPage3() {
  const [trabalho, setTrabalho] = useState('');
  const [atividades, setAtividades] = useState<string[]>([]);
  const [tempoExperiencia, setTempoExperiencia] = useState('');
  const [certificacao, setCertificacao] = useState('');

  const trabalhos = [
    {
      id: 'limpeza',
      icon: '♨',
      title: 'Auxiliar de\nlimpeza',
    },
    {
      id: 'caixa',
      icon: '▣',
      title: 'Operador de\ncaixa',
    },
    {
      id: 'vendedor',
      icon: '♙',
      title: 'Vendedor',
    },
    {
      id: 'seguranca',
      icon: '♜',
      title: 'Segurança',
    },
    {
      id: 'motorista',
      icon: '▱',
      title: 'Motorista',
    },
    {
      id: 'producao',
      icon: '▥',
      title: 'Auxiliar de\nprodução',
    },
    {
      id: 'estoque',
      icon: '♟',
      title: 'Auxiliar de\nestoque',
    },
    {
      id: 'cozinha',
      icon: '♨',
      title: 'Auxiliar de\ncozinha',
    },
    {
      id: 'outro',
      icon: '•••',
      title: 'Outro',
    },
  ];

  const atividadesOpcoes = [
    'Limpeza de\nambientes',
    'Organização de\nprodutos',
    'Atendimento ao\npúblico',
    'Operação de\ncaixa',
    'Controle de\nestoque',
    'Segurança',
    'Vendedores de\nmercadorias',
    'Controle de\nprodução',
    'Outro',
  ];

  const selecionarAtividade = (atividade: string) => {
    if (atividades.includes(atividade)) {
      setAtividades(
        atividades.filter((item) => item !== atividade)
      );
    } else {
      setAtividades([...atividades, atividade]);
    }
  };

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

          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backIcon}>
              ←
            </Text>
          </TouchableOpacity>

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
              3/3
            </Text>
          </View>

        </View>


        {/* TRABALHO QUE PROCURA */}
        <View style={styles.section}>

          <View style={styles.sectionIconContainer}>
            <Text style={styles.sectionIcon}>
              ◎
            </Text>
          </View>

          <View style={styles.sectionContent}>

            <Text style={styles.label}>
              Qual trabalho você procura?
            </Text>

            <View style={styles.jobsGrid}>

              {trabalhos.map((item) => {

                const selected = trabalho === item.id;

                return (
                  <TouchableOpacity
                    key={item.id}
                    style={[
                      styles.jobOption,
                      selected && styles.jobOptionSelected,
                    ]}
                    onPress={() => setTrabalho(item.id)}
                    activeOpacity={0.7}
                  >

                    <Text
                      style={[
                        styles.jobIcon,
                        selected && styles.jobIconSelected,
                      ]}
                    >
                      {item.icon}
                    </Text>

                    <Text
                      style={[
                        styles.jobText,
                        selected && styles.jobTextSelected,
                      ]}
                    >
                      {item.title}
                    </Text>

                  </TouchableOpacity>
                );
              })}

            </View>

          </View>

        </View>


        {/* ÚLTIMO TRABALHO */}
        <View style={styles.section}>

          <View style={styles.sectionIconContainer}>
            <Text style={styles.briefcaseIcon}>
              ▣
            </Text>
          </View>

          <View style={styles.sectionContent}>

            <Text style={styles.label}>
              O que você exerceu no seu último trabalho?
            </Text>

            <Text style={styles.smallDescription}>
              Selecione as atividades que você realizou
            </Text>

            <View style={styles.activitiesGrid}>

              {atividadesOpcoes.map((atividade) => {

                const selected =
                  atividades.includes(atividade);

                return (
                  <TouchableOpacity
                    key={atividade}
                    style={[
                      styles.activityOption,
                      selected && styles.activityOptionSelected,
                    ]}
                    onPress={() =>
                      selecionarAtividade(atividade)
                    }
                    activeOpacity={0.7}
                  >

                    <View
                      style={[
                        styles.checkbox,
                        selected && styles.checkboxSelected,
                      ]}
                    >
                      {selected && (
                        <Text style={styles.check}>
                          ✓
                        </Text>
                      )}
                    </View>

                    <Text style={styles.activityText}>
                      {atividade}
                    </Text>

                  </TouchableOpacity>
                );
              })}

            </View>

          </View>

        </View>


        {/* TEMPO DE EXPERIÊNCIA */}
        <View style={styles.section}>

          <View style={styles.sectionIconContainer}>
            <Text style={styles.calendarIcon}>
              ▦
            </Text>
          </View>

          <View style={styles.sectionContent}>

            <Text style={styles.label}>
              Há quanto tempo de experiência nessa área?
            </Text>

            <TouchableOpacity style={styles.selectContainer}>

              <Text
                style={
                  tempoExperiencia
                    ? styles.selectText
                    : styles.selectPlaceholder
                }
              >
                {tempoExperiencia || '1 a 2 anos'}
              </Text>

              <Text style={styles.selectArrow}>
                ⌄
              </Text>

            </TouchableOpacity>

          </View>

        </View>


        {/* CURSO / CERTIFICAÇÃO */}
        <View style={styles.section}>

          <View style={styles.sectionIconContainer}>
            <Text style={styles.courseIcon}>
              △
            </Text>
          </View>

          <View style={styles.sectionContent}>

            <Text style={styles.label}>
              Você possui curso ou certificação?
            </Text>

            <View style={styles.inputContainer}>

              <TextInput
                style={styles.input}
                value={certificacao}
                onChangeText={setCertificacao}
                placeholder="Se sim, quais?"
                placeholderTextColor="#BDBDBD"
              />

              <MicIcon />

            </View>

          </View>

        </View>


        {/* FINALIZAR */}
        <Link href="/home" asChild>
            <TouchableOpacity
            style={styles.finishButton}
            >
            <Text style={styles.finishText}>
                Finalizar
            </Text>
            </TouchableOpacity>
        </Link>
       


        {/* INDICADOR DE ETAPAS */}
        <View style={styles.progressContainer}>

          <View style={styles.progressActiveDot} />

          <View style={styles.progressActiveLine} />

          <View style={styles.progressActiveDot} />

          <View style={styles.progressActiveLine} />

          <View style={styles.progressActiveDot} />

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}


/*
 * Microfone feito somente com View.
 * Não precisa instalar nenhuma biblioteca.
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