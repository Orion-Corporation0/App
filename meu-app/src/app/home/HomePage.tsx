import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import { Link } from 'expo-router'
import styles from './HomePage.css';

export default function HomePage() {
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
      >

        {/* =========================
            CABEÇALHO
        ========================= */}

        <View style={styles.header}>

          <View style={styles.notificationContainer}>
            <Text style={styles.bellIcon}>
              ♟
            </Text>

            <View style={styles.notificationBadge}>
              <Text style={styles.notificationBadgeText}>
                1
              </Text>
            </View>
          </View>

          <View style={styles.profileContainer}>

            <View style={styles.avatar}>
              <View style={styles.avatarHead} />
              <View style={styles.avatarBody} />
            </View>

            <View style={styles.greetingContainer}>

              <Text style={styles.greeting}>
                Olá👋
              </Text>

              <Text style={styles.greetingDescription}>
                Vamos encontrar a{'\n'}
                vaga ideal para você?
              </Text>

            </View>

          </View>

        </View>


        {/* =========================
            NOTIFICAÇÃO
        ========================= */}

        <View style={styles.notificationSection}>

          <View style={styles.notificationIcon}>
            <Text style={styles.notificationIconText}>
              !
            </Text>
          </View>

          <View style={styles.notificationTextContainer}>

            <Text style={styles.notificationTitle}>
              Notificação
            </Text>

            <Text style={styles.notificationDescription}>
              Empresa “emprega +” aceitou sua solicitação
            </Text>

          </View>

          <TouchableOpacity style={styles.notificationArrow}>
            <Text style={styles.arrowText}>
              →
            </Text>
          </TouchableOpacity>

        </View>


        {/* =========================
            ATALHOS
        ========================= */}

        <View style={styles.shortcutsContainer}>

          {/* MEU CURRÍCULO */}

          <TouchableOpacity style={styles.shortcutCard}>

            <View style={styles.shortcutIconArea}>

              <Text style={styles.documentIcon}>
                ▤
              </Text>

              <View style={styles.shortcutMic}>
                <MicIcon />
              </View>

            </View>

            <View style={styles.shortcutTextContainer}>

              <Text style={styles.shortcutTitle}>
                Meu currículo
              </Text>

              <Text style={styles.shortcutDescription}>
                Crie seu currículo de{'\n'}
                forma automática!
              </Text>

            </View>

            <View style={styles.shortcutArrowBlue}>
              <Text style={styles.shortcutArrowText}>
                →
              </Text>
            </View>

          </TouchableOpacity>


          {/* VAGAS PARA VOCÊ */}

          <TouchableOpacity
            style={[
              styles.shortcutCard,
              styles.shortcutCardYellow,
            ]}
          >

            <View style={styles.shortcutIconArea}>

              <Text style={styles.jobIcon}>
                ◎
              </Text>

              <View style={styles.shortcutMic}>
                <MicIcon />
              </View>

            </View>

            <View style={styles.shortcutTextContainer}>

              <Text style={styles.shortcutTitle}>
                Vagas para você
              </Text>

              <Text style={styles.shortcutDescription}>
                Encontre vagas para{'\n'}
                o seu perfil!
              </Text>

            </View>

            <View style={styles.shortcutArrowYellow}>
              <Text style={styles.shortcutArrowText}>
                →
              </Text>
            </View>

          </TouchableOpacity>

        </View>


        {/* =========================
            OUVIR VAGAS
        ========================= */}

        <TouchableOpacity style={styles.listenButton}>

          <Text style={styles.listenText}>
            Ouvir vagas
          </Text>

          <Text style={styles.listenSpeaker}>
            ◖
          </Text>

          <View style={styles.soundWave}>
            <View style={styles.wave1} />
            <View style={styles.wave2} />
            <View style={styles.wave3} />
            <View style={styles.wave4} />
            <View style={styles.wave5} />
            <View style={styles.wave6} />
            <View style={styles.wave7} />
            <View style={styles.wave8} />
            <View style={styles.wave9} />
          </View>

        </TouchableOpacity>


        {/* =========================
            VAGAS PERTO DE VOCÊ
        ========================= */}

        <View style={styles.jobsHeader}>

          <Text style={styles.jobsTitle}>
            Vagas perto de você
          </Text>

          <TouchableOpacity>
            <Text style={styles.seeAll}>
              Ver todas ›
            </Text>
          </TouchableOpacity>

        </View>


        {/* VAGA 1 */}

        <TouchableOpacity style={styles.jobCard}>

          <View style={styles.jobImage}>
            <Text style={styles.jobImageEmoji}>
              👩‍💼
            </Text>
          </View>

          <View style={styles.jobInformation}>

            <Text style={styles.jobTitle}>
              Atendente de Loja
            </Text>

            <Text style={styles.jobLocation}>
              📍 São Paulo, SP
            </Text>

            <Text style={styles.jobSalary}>
              💵 1.568,00
            </Text>

            <Text style={styles.jobTime}>
              ◷ 8h às 16h
            </Text>

          </View>

          <View style={styles.newBadge}>
            <Text style={styles.newBadgeText}>
              Nova
            </Text>
          </View>

          <View style={styles.jobArrow}>
            <Text style={styles.jobArrowText}>
              →
            </Text>
          </View>

        </TouchableOpacity>


        {/* VAGA 2 */}

        <TouchableOpacity style={styles.jobCard}>

          <View style={styles.jobImage}>
            <Text style={styles.jobImageEmoji}>
              📦
            </Text>
          </View>

          <View style={styles.jobInformation}>

            <Text style={styles.jobTitle}>
              Auxiliar de Estoque
            </Text>

            <Text style={styles.jobLocation}>
              📍 São Paulo, SP
            </Text>

            <Text style={styles.jobSalary}>
              💵 2.120,00
            </Text>

            <Text style={styles.jobTime}>
              ◷ 14h às 22h
            </Text>

          </View>

          <View style={styles.newBadge}>
            <Text style={styles.newBadgeText}>
              Nova
            </Text>
          </View>

          <View style={styles.jobArrow}>
            <Text style={styles.jobArrowText}>
              →
            </Text>
          </View>

        </TouchableOpacity>


        {/* =========================
            AJUDA
        ========================= */}

        <View style={styles.helpContainer}>

          <View style={styles.helpPerson}>
            <Text style={styles.helpEmoji}>
              🧑‍💼
            </Text>
          </View>

          <View style={styles.helpTextContainer}>

            <Text style={styles.helpTitle}>
              Precisa de ajuda?
            </Text>

            <Text style={styles.helpDescription}>
              Fale com nossa equipe{'\n'}
              pelo suporte!
            </Text>

          </View>

          <TouchableOpacity style={styles.helpButton}>

            <Text style={styles.phoneIcon}>
              ☎
            </Text>

            <Text style={styles.helpButtonText}>
              Ligar
            </Text>

          </TouchableOpacity>

        </View>

      </ScrollView>


      {/* =========================
          MENU INFERIOR
      ========================= */}

      <View style={styles.bottomNavigation}>

        {/* INÍCIO */}

        <TouchableOpacity style={styles.navItem}>

          <View style={styles.navIconActive}>
            <Text style={styles.navHomeIcon}>
              ◆
            </Text>
          </View>

          <Text style={styles.navTextActive}>
            Início
          </Text>

        </TouchableOpacity>


        {/* VAGAS */}

        <TouchableOpacity style={styles.navItem}>

          <Text style={styles.navIcon}>
            ◉
          </Text>

          <Text style={styles.navText}>
            Vagas
          </Text>

        </TouchableOpacity>


        {/* CRIAR CURRÍCULO */}

        <TouchableOpacity style={styles.createCurriculum}>

          <View style={styles.plusCircle}>

            <Text style={styles.plusText}>
              +
            </Text>

          </View>

          <Text style={styles.navText}>
            Criar currículo
          </Text>

        </TouchableOpacity>


        {/* PERFIL */}

        <Link href="/editUser/editUser" asChild>
          <TouchableOpacity style={styles.profileNavIcon}>
            <Text style={styles.profileNavIcon}>
                ♙
            </Text>

            <Text style={styles.navText}>
                Perfil
            </Text>
          </TouchableOpacity>
        </Link>

      </View>

    </SafeAreaView>
  );
}


/* =========================
   MICROFONE
========================= */

function MicIcon() {
  return (
    <View style={styles.micContainer}>

      <View style={styles.micBody} />

      <View style={styles.micArc} />

      <View style={styles.micLine} />

    </View>
  );
}