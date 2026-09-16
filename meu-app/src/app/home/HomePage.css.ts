import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EFFBFD',
  },

  scrollContent: {
    paddingHorizontal: 10,
    paddingBottom: 95,
  },


  /* =========================
     DECORAÇÃO DO TOPO
  ========================= */

  topDecoration: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    overflow: 'hidden',
  },

  decorationBlue: {
    position: 'absolute',
    width: 130,
    height: 63,
    backgroundColor: '#293760',
    left: -35,
    top: -25,
    borderBottomRightRadius: 70,
  },

  decorationLight: {
    position: 'absolute',
    width: 95,
    height: 65,
    backgroundColor: '#BDEBFA',
    left: 60,
    top: -20,
    borderBottomLeftRadius: 65,
    borderBottomRightRadius: 65,
  },

  decorationYellow: {
    position: 'absolute',
    width: 88,
    height: 48,
    backgroundColor: '#FFF7C9',
    right: 22,
    top: -20,
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
  },

  decorationDark: {
    position: 'absolute',
    width: 105,
    height: 74,
    backgroundColor: '#293760',
    right: -50,
    top: 20,
    borderTopLeftRadius: 80,
  },


  /* =========================
     CABEÇALHO
  ========================= */

  header: {
    height: 92,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },

  notificationContainer: {
    width: 33,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -4,
  },

  bellIcon: {
    color: '#000C46',
    fontSize: 25,
  },

  notificationBadge: {
    position: 'absolute',
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#E51B23',
    top: 3,
    right: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  notificationBadgeText: {
    color: '#FFFFFF',
    fontSize: 5,
    fontWeight: 'bold',
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 3,
    marginTop: 5,
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 30,
    backgroundColor: '#E5E5E5',
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
  },

  avatarHead: {
    width: 22,
    height: 22,
    borderRadius: 12,
    backgroundColor: '#F7F7F7',
    marginBottom: 2,
  },

  avatarBody: {
    width: 43,
    height: 27,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#F7F7F7',
  },

  greetingContainer: {
    marginLeft: 10,
  },

  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111111',
  },

  greetingDescription: {
    fontSize: 9,
    lineHeight: 11,
    color: '#222222',
    marginTop: 1,
  },


  /* =========================
     NOTIFICAÇÃO
  ========================= */

  notificationSection: {
    width: '100%',
    height: 45,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 9,
  },

  notificationIcon: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: '#E51B23',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -1,
  },

  notificationIconText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 17,
  },

  notificationTextContainer: {
    flex: 1,
    alignItems: 'center',
  },

  notificationTitle: {
    fontSize: 15,
    color: '#333333',
    marginBottom: 2,
  },

  notificationDescription: {
    fontSize: 8.5,
    fontWeight: 'bold',
    color: '#222222',
  },

  notificationArrow: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#111111',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },

  arrowText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },


  /* =========================
     ATALHOS
  ========================= */

  shortcutsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  shortcutCard: {
    width: '48.5%',
    height: 84,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderLeftWidth: 5,
    borderLeftColor: '#42B5F5',
    paddingHorizontal: 7,
    paddingVertical: 7,
    position: 'relative',
  },

  shortcutCardYellow: {
    borderLeftColor: '#FFD84D',
  },

  shortcutIconArea: {
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  documentIcon: {
    fontSize: 29,
    color: '#42B5F5',
    fontWeight: 'bold',
  },

  jobIcon: {
    fontSize: 29,
    color: '#FFD84D',
    fontWeight: 'bold',
  },

  shortcutMic: {
    width: 18,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  shortcutTextContainer: {
    marginTop: 1,
  },

  shortcutTitle: {
    fontSize: 10,
    color: '#293760',
    fontWeight: 'bold',
  },

  shortcutDescription: {
    fontSize: 6.5,
    lineHeight: 8,
    color: '#222222',
    marginTop: 2,
  },

  shortcutArrowBlue: {
    position: 'absolute',
    right: 6,
    bottom: 5,
    width: 19,
    height: 19,
    borderRadius: 10,
    backgroundColor: '#42B5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  shortcutArrowYellow: {
    position: 'absolute',
    right: 6,
    bottom: 5,
    width: 19,
    height: 19,
    borderRadius: 10,
    backgroundColor: '#FFD84D',
    justifyContent: 'center',
    alignItems: 'center',
  },

  shortcutArrowText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },


  /* =========================
     MICROFONE
  ========================= */

  micContainer: {
    width: 17,
    height: 29,
    justifyContent: 'center',
    alignItems: 'center',
  },

  micBody: {
    width: 7,
    height: 13,
    backgroundColor: '#000C46',
    borderRadius: 5,
  },

  micArc: {
    position: 'absolute',
    width: 13,
    height: 15,
    borderWidth: 1.5,
    borderTopColor: 'transparent',
    borderLeftColor: '#000C46',
    borderRightColor: '#000C46',
    borderBottomColor: '#000C46',
    borderRadius: 8,
    top: 7,
  },

  micLine: {
    position: 'absolute',
    width: 1.5,
    height: 5,
    backgroundColor: '#000C46',
    bottom: 2,
  },


  /* =========================
     OUVIR VAGAS
  ========================= */

  listenButton: {
    width: '68%',
    height: 36,
    alignSelf: 'center',
    backgroundColor: '#000C46',
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  listenText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  listenSpeaker: {
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft: 6,
  },

  soundWave: {
    height: 20,
    width: 66,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 2,
  },

  wave1: {
    width: 2,
    height: 8,
    backgroundColor: '#FFFFFF',
  },

  wave2: {
    width: 2,
    height: 15,
    backgroundColor: '#FFFFFF',
  },

  wave3: {
    width: 2,
    height: 10,
    backgroundColor: '#FFFFFF',
  },

  wave4: {
    width: 2,
    height: 18,
    backgroundColor: '#FFFFFF',
  },

  wave5: {
    width: 2,
    height: 13,
    backgroundColor: '#FFFFFF',
  },

  wave6: {
    width: 2,
    height: 19,
    backgroundColor: '#FFFFFF',
  },

  wave7: {
    width: 2,
    height: 11,
    backgroundColor: '#FFFFFF',
  },

  wave8: {
    width: 2,
    height: 17,
    backgroundColor: '#FFFFFF',
  },

  wave9: {
    width: 2,
    height: 8,
    backgroundColor: '#FFFFFF',
  },


  /* =========================
     VAGAS
  ========================= */

  jobsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 7,
  },

  jobsTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#111111',
  },

  seeAll: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#42B5F5',
  },


  /* =========================
     CARD DE VAGA
  ========================= */

  jobCard: {
    width: '100%',
    height: 70,
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    marginBottom: 7,
    padding: 6,
    flexDirection: 'row',
    position: 'relative',
  },

  jobImage: {
    width: 59,
    height: 58,
    borderRadius: 9,
    backgroundColor: '#DDF4FA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  jobImageEmoji: {
    fontSize: 30,
  },

  jobInformation: {
    marginLeft: 7,
    paddingTop: 1,
  },

  jobTitle: {
    color: '#42B5F5',
    fontSize: 12,
    fontWeight: 'bold',
  },

  jobLocation: {
    fontSize: 7,
    color: '#555555',
    marginTop: 2,
  },

  jobSalary: {
    fontSize: 7,
    color: '#555555',
    marginTop: 1,
  },

  jobTime: {
    fontSize: 7,
    color: '#555555',
    marginTop: 1,
  },

  newBadge: {
    position: 'absolute',
    right: 7,
    top: 6,
    backgroundColor: '#E9F7F9',
    borderRadius: 9,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },

  newBadgeText: {
    fontSize: 7,
    color: '#222222',
  },

  jobArrow: {
    position: 'absolute',
    right: 7,
    bottom: 8,
    width: 21,
    height: 21,
    borderRadius: 11,
    backgroundColor: '#42B5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  jobArrowText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },


  /* =========================
     AJUDA
  ========================= */

  helpContainer: {
    width: '92%',
    height: 51,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 3,
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },

  helpPerson: {
    width: 39,
    height: 39,
    justifyContent: 'center',
    alignItems: 'center',
  },

  helpEmoji: {
    fontSize: 27,
  },

  helpTextContainer: {
    flex: 1,
    marginLeft: 3,
  },

  helpTitle: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#111111',
  },

  helpDescription: {
    fontSize: 6,
    lineHeight: 8,
    color: '#555555',
  },

  helpButton: {
    width: 59,
    height: 23,
    backgroundColor: '#000C46',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  phoneIcon: {
    color: '#FFFFFF',
    fontSize: 12,
    marginRight: 3,
  },

  helpButtonText: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: 'bold',
  },


  /* =========================
     MENU INFERIOR
  ========================= */

  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 8,
    right: 8,
    height: 61,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 3,
    elevation: 8,
  },

  navItem: {
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },

  navIconActive: {
    width: 30,
    height: 26,
    borderRadius: 6,
    backgroundColor: '#D7F4FC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  navHomeIcon: {
    color: '#42B5F5',
    fontSize: 17,
  },

  navIcon: {
    color: '#333333',
    fontSize: 23,
    height: 26,
  },

  profileNavIcon: {
    color: '#222222',
    fontSize: 25,
    height: 27,
  },

  navText: {
    fontSize: 7,
    color: '#222222',
    marginTop: 1,
  },

  navTextActive: {
    fontSize: 7,
    color: '#42B5F5',
    marginTop: 1,
  },

  createCurriculum: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },

  plusCircle: {
    width: 32,
    height: 32,
    borderRadius: 17,
    backgroundColor: '#293D91',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -12,
  },

  plusText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '300',
    lineHeight: 31,
  },

});

export default styles;