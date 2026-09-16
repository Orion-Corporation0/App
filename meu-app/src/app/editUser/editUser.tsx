import React, { useState } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from './editUser.css';
import userDataJson from './userData.json';

type Formation = {
  course: string;
  institution: string;
  year: string | number;
};

type Experience = {
  role: string;
  company: string;
  duration: string;
};

type JobHistory = {
  jobTitle: string;
  company: string;
  status: string;
};

type UserData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  resume: string;
  formations: Formation[];
  experiences: Experience[];
  jobHistory: JobHistory[];
};

type SectionName =
  | 'personal'
  | 'formations'
  | 'experiences'
  | 'resume'
  | 'history';

const EditUser = () => {
  const data = userDataJson as UserData;

  const [openSection, setOpenSection] =
    useState<SectionName | null>('personal');

  const firstName =
    data.name?.trim().split(' ')[0] || 'Usuário';

  const toggleSection = (section: SectionName) => {
    setOpenSection(current =>
      current === section ? null : section
    );
  };

  const handleOpenResume = async () => {
    try {
      if (!data.resume) {
        Alert.alert(
          'Currículo não encontrado',
          'Nenhum currículo foi cadastrado.'
        );

        return;
      }

      const supported =
        await Linking.canOpenURL(data.resume);

      if (!supported) {
        Alert.alert(
          'Link inválido',
          'Não foi possível abrir o currículo.'
        );

        return;
      }

      await Linking.openURL(data.resume);
    } catch {
      Alert.alert(
        'Erro',
        'Não foi possível abrir o currículo.'
      );
    }
  };

  const renderArrow = (section: SectionName) => {
    const opened = openSection === section;

    return (
      <Ionicons
        name={
          opened
            ? 'chevron-down-outline'
            : 'chevron-forward-outline'
        }
        size={22}
        color="#C6CDD2"
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.content}>

          {/* FUNDO */}
          <View style={styles.topLeftShape} />
          <View style={styles.topLightBlueShape} />
          <View style={styles.topCreamShape} />
          <View style={styles.topRightShape} />
          <View style={styles.rightBlueShape} />
          <View style={styles.bottomCreamShape} />
          <View style={styles.bottomBlueShape} />
          <View style={styles.bottomDarkShape} />

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={
              styles.scrollContent
            }
          >
            {/* VOLTAR */}
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.backButton}
                activeOpacity={0.8}
              >
                <Ionicons
                  name="arrow-back"
                  size={23}
                  color="#293760"
                />
              </TouchableOpacity>
            </View>

            {/* HERO */}
            <View style={styles.hero}>
              <View style={styles.heroTextContainer}>
                <View style={styles.greetingRow}>
                  <Text style={styles.greeting}>
                    Olá, {firstName}!
                  </Text>

                  <Ionicons
                    name="hand-left-outline"
                    size={22}
                    color="#F3C02D"
                    style={styles.waveIcon}
                  />
                </View>

                <Text style={styles.description}>
                  Aqui é o seu espaço,{'\n'}
                  atualize suas informações{'\n'}
                  caso necessário!
                </Text>
              </View>

              <View style={styles.avatarContainer}>
                <View style={styles.avatar}>
                  <Ionicons
                    name="person"
                    size={45}
                    color="#FFFFFF"
                  />
                </View>

                <TouchableOpacity
                  style={styles.cameraButton}
                  activeOpacity={0.8}
                >
                  <Ionicons
                    name="camera"
                    size={14}
                    color="#FFFFFF"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* MEUS DADOS */}
            <View style={styles.card}>
              <TouchableOpacity
                style={styles.cardHeader}
                activeOpacity={0.8}
                onPress={() =>
                  toggleSection('personal')
                }
              >
                <View style={styles.iconCircle}>
                  <Ionicons
                    name="person-outline"
                    size={22}
                    color="#FFFFFF"
                  />
                </View>

                <View style={styles.cardTitleContainer}>
                  <Text style={styles.cardTitle}>
                    Meus dados
                  </Text>

                  <Text style={styles.cardSubtitle}>
                    Nome, telefone, e-mail...
                  </Text>
                </View>

                {renderArrow('personal')}
              </TouchableOpacity>

              {openSection === 'personal' && (
                <View style={styles.expandedContent}>
                  <View style={styles.infoRow}>
                    <Text style={styles.infoText}>
                      <Text style={styles.infoLabel}>
                        Nome:{' '}
                      </Text>

                      {data.name}
                    </Text>

                    <TouchableOpacity>
                      <Text style={styles.editText}>
                        Editar
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.infoRow}>
                    <Text style={styles.infoText}>
                      <Text style={styles.infoLabel}>
                        Telefone:{' '}
                      </Text>

                      {data.phone}
                    </Text>
                  </View>

                  <View style={styles.infoRow}>
                    <Text style={styles.infoText}>
                      <Text style={styles.infoLabel}>
                        Email:{' '}
                      </Text>

                      {data.email}
                    </Text>
                  </View>

                  <View style={styles.infoRow}>
                    <Text style={styles.infoText}>
                      <Text style={styles.infoLabel}>
                        Endereço:{' '}
                      </Text>

                      {data.address}
                    </Text>
                  </View>
                </View>
              )}
            </View>

            {/* FORMAÇÕES */}
            <View style={styles.card}>
              <TouchableOpacity
                style={styles.cardHeader}
                activeOpacity={0.8}
                onPress={() =>
                  toggleSection('formations')
                }
              >
                <View style={styles.iconCircle}>
                  <Ionicons
                    name="school-outline"
                    size={23}
                    color="#FFFFFF"
                  />
                </View>

                <View style={styles.cardTitleContainer}>
                  <Text style={styles.cardTitle}>
                    Minha Formação
                  </Text>

                  <Text style={styles.cardSubtitle}>
                    Grau de escolaridade, cursos feitos...
                  </Text>
                </View>

                {renderArrow('formations')}
              </TouchableOpacity>

              {openSection === 'formations' && (
                <View style={styles.expandedContent}>
                  {data.formations?.length > 0 ? (
                    data.formations.map(
                      (formation, index) => (
                        <View
                          key={`${formation.course}-${index}`}
                          style={[
                            styles.listItem,
                            index ===
                              data.formations.length - 1 &&
                              styles.lastListItem,
                          ]}
                        >
                          <View
                            style={
                              styles.listIconContainer
                            }
                          >
                            <Ionicons
                              name="school-outline"
                              size={17}
                              color="#43BDE5"
                            />
                          </View>

                          <View
                            style={
                              styles.listTextContainer
                            }
                          >
                            <Text
                              style={styles.itemTitle}
                            >
                              {formation.course}
                            </Text>

                            <Text
                              style={
                                styles.itemDescription
                              }
                            >
                              {formation.institution}
                            </Text>

                            <Text
                              style={
                                styles.itemDescription
                              }
                            >
                              {formation.year}
                            </Text>
                          </View>
                        </View>
                      )
                    )
                  ) : (
                    <Text style={styles.emptyText}>
                      Nenhuma formação cadastrada.
                    </Text>
                  )}
                </View>
              )}
            </View>

            {/* EXPERIÊNCIAS */}
            <View style={styles.card}>
              <TouchableOpacity
                style={styles.cardHeader}
                activeOpacity={0.8}
                onPress={() =>
                  toggleSection('experiences')
                }
              >
                <View style={styles.iconCircle}>
                  <Ionicons
                    name="briefcase-outline"
                    size={22}
                    color="#FFFFFF"
                  />
                </View>

                <View style={styles.cardTitleContainer}>
                  <Text style={styles.cardTitle}>
                    Minhas experiências
                  </Text>

                  <Text style={styles.cardSubtitle}>
                    Trabalhos feitos...
                  </Text>
                </View>

                {renderArrow('experiences')}
              </TouchableOpacity>

              {openSection === 'experiences' && (
                <View style={styles.expandedContent}>
                  {data.experiences?.length > 0 ? (
                    data.experiences.map(
                      (experience, index) => (
                        <View
                          key={`${experience.company}-${index}`}
                          style={[
                            styles.listItem,
                            index ===
                              data.experiences.length -
                                1 &&
                              styles.lastListItem,
                          ]}
                        >
                          <View
                            style={
                              styles.listIconContainer
                            }
                          >
                            <Ionicons
                              name="briefcase-outline"
                              size={17}
                              color="#43BDE5"
                            />
                          </View>

                          <View
                            style={
                              styles.listTextContainer
                            }
                          >
                            <Text
                              style={styles.itemTitle}
                            >
                              {experience.role}
                            </Text>

                            <Text
                              style={
                                styles.itemDescription
                              }
                            >
                              {experience.company}
                            </Text>

                            <Text
                              style={
                                styles.itemDescription
                              }
                            >
                              {experience.duration}
                            </Text>
                          </View>
                        </View>
                      )
                    )
                  ) : (
                    <Text style={styles.emptyText}>
                      Nenhuma experiência cadastrada.
                    </Text>
                  )}
                </View>
              )}
            </View>

            {/* CURRÍCULO */}
            <View style={styles.card}>
              <TouchableOpacity
                style={styles.cardHeader}
                activeOpacity={0.8}
                onPress={() =>
                  toggleSection('resume')
                }
              >
                <View style={styles.iconCircle}>
                  <Ionicons
                    name="document-text-outline"
                    size={22}
                    color="#FFFFFF"
                  />
                </View>

                <View style={styles.cardTitleContainer}>
                  <Text style={styles.cardTitle}>
                    Meu currículo
                  </Text>

                  <Text style={styles.cardSubtitle}>
                    Visualize o seu currículo...
                  </Text>
                </View>

                {renderArrow('resume')}
              </TouchableOpacity>

              {openSection === 'resume' && (
                <View style={styles.resumeContent}>
                  <Ionicons
                    name="document-text-outline"
                    size={28}
                    color="#43BDE5"
                  />

                  <View style={styles.resumeText}>
                    <Text style={styles.itemTitle}>
                      Currículo cadastrado
                    </Text>

                    <Text
                      style={styles.itemDescription}
                    >
                      Clique abaixo para visualizar.
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={styles.viewButton}
                    activeOpacity={0.8}
                    onPress={handleOpenResume}
                  >
                    <Text
                      style={styles.viewButtonText}
                    >
                      Ver
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            {/* HISTÓRICO */}
            <View style={styles.card}>
              <TouchableOpacity
                style={styles.cardHeader}
                activeOpacity={0.8}
                onPress={() =>
                  toggleSection('history')
                }
              >
                <View style={styles.iconCircle}>
                  <Ionicons
                    name="folder-open-outline"
                    size={22}
                    color="#FFFFFF"
                  />
                </View>

                <View style={styles.cardTitleContainer}>
                  <Text style={styles.cardTitle}>
                    Histórico de vagas
                  </Text>

                  <Text style={styles.cardSubtitle}>
                    Visualize suas vagas...
                  </Text>
                </View>

                {renderArrow('history')}
              </TouchableOpacity>

              {openSection === 'history' && (
                <View style={styles.expandedContent}>
                  {data.jobHistory?.length > 0 ? (
                    data.jobHistory.map(
                      (job, index) => (
                        <View
                          key={`${job.jobTitle}-${index}`}
                          style={[
                            styles.listItem,
                            index ===
                              data.jobHistory.length -
                                1 &&
                              styles.lastListItem,
                          ]}
                        >
                          <View
                            style={
                              styles.listIconContainer
                            }
                          >
                            <Ionicons
                              name="business-outline"
                              size={17}
                              color="#43BDE5"
                            />
                          </View>

                          <View
                            style={
                              styles.listTextContainer
                            }
                          >
                            <Text
                              style={styles.itemTitle}
                            >
                              {job.jobTitle}
                            </Text>

                            <Text
                              style={
                                styles.itemDescription
                              }
                            >
                              {job.company}
                            </Text>

                            <Text
                              style={
                                styles.statusText
                              }
                            >
                              {job.status}
                            </Text>
                          </View>
                        </View>
                      )
                    )
                  ) : (
                    <Text style={styles.emptyText}>
                      Nenhuma vaga no histórico.
                    </Text>
                  )}
                </View>
              )}
            </View>

            {/* AJUDA */}
            <View style={styles.helpContainer}>
              <View style={styles.helpIcon}>
                <Ionicons
                  name="headset-outline"
                  size={23}
                  color="#293760"
                />
              </View>

              <View style={styles.helpTextContainer}>
                <Text style={styles.helpTitle}>
                  Precisa de ajuda?
                </Text>

                <Text style={styles.helpSubtitle}>
                  Fale com a nossa equipe pelo suporte!
                </Text>
              </View>

              <TouchableOpacity
                style={styles.callButton}
                activeOpacity={0.8}
              >
                <Ionicons
                  name="call"
                  size={12}
                  color="#FFFFFF"
                />

                <Text style={styles.callText}>
                  Ligar
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* MENU INFERIOR */}
          <View style={styles.bottomNav}>
            <TouchableOpacity style={styles.navItem}>
              <Ionicons
                name="home"
                size={25}
                color="#111111"
              />

              <Text style={styles.navText}>
                Início
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
              <Ionicons
                name="search-outline"
                size={26}
                color="#5C5C5C"
              />

              <Text style={styles.navText}>
                Vagas
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
              <View style={styles.createButton}>
                <Ionicons
                  name="add"
                  size={31}
                  color="#FFFFFF"
                />
              </View>

              <Text style={styles.navText}>
                Criar currículo
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
              <View style={styles.activeNavIcon}>
                <Ionicons
                  name="person-outline"
                  size={23}
                  color="#43C5EE"
                />
              </View>

              <Text style={styles.navActiveText}>
                Perfil
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditUser;