import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F3F7F8',
  },

  backgroundImage: {
    opacity: 0.16,
  },

  safeArea: {
    flex: 1,
  },

  scrollContent: {
    width: '100%',
    maxWidth: 720,
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingBottom: 112,
  },


  /* CABEÇALHO */

  header: {
    minHeight: 126,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingTop: 14,
    paddingBottom: 18,
    position: 'relative',
    overflow: 'hidden',
  },

  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    zIndex: 1,
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#DDECEF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  greetingContainer: {
    flex: 1,
    minWidth: 0,
  },

  greetingHeadline: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  greeting: {
    flexShrink: 1,
    color: '#173B50',
    fontSize: 20,
    fontWeight: '800',
  },

  greetingDescription: {
    maxWidth: 250,
    marginTop: 3,
    color: '#586970',
    fontSize: 14,
    lineHeight: 20,
  },

  notificationButton: {
    width: 42,
    height: 42,
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 21,
    borderWidth: 1,
    borderColor: '#E0E8EB',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },

  notificationDot: {
    position: 'absolute',
    top: 7,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D14E47',
  },

  notificationModal: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: 78,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(16, 34, 45, 0.16)',
  },

  notificationPopup: {
    width: '100%',
    maxWidth: 360,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E8EB',
    backgroundColor: '#FFFFFF',
    elevation: 10,
  },

  notificationPopupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EDF1F3',
  },

  notificationPopupHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  notificationPopupTitle: {
    color: '#173B50',
    fontSize: 15,
    fontWeight: '700',
  },

  notificationEmpty: {
    paddingTop: 12,
    color: '#586970',
    fontSize: 13,
    lineHeight: 19,
  },

  notificationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 9,
    paddingTop: 12,
  },

  notificationItemDot: {
    width: 7,
    height: 7,
    marginTop: 6,
    borderRadius: 4,
    backgroundColor: '#167D98',
  },

  notificationItemText: {
    flex: 1,
    color: '#354850',
    fontSize: 13,
    lineHeight: 19,
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
    minHeight: 112,
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
    fontSize: 13,
    color: '#293760',
    fontWeight: 'bold',
  },

  shortcutDescription: {
    fontSize: 12,
    lineHeight: 17,
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

  /* =========================
     OUVIR VAGAS
  ========================= */

  listenButton: {
    width: '68%',
    minHeight: 46,
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
    fontSize: 14,
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111111',
  },

  seeAll: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#42B5F5',
  },

  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },


  /* =========================
     CARD DE VAGA
  ========================= */

  /* =========================
     AJUDA
  ========================= */

  helpContainer: {
    width: '92%',
    minHeight: 70,
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

  helpTextContainer: {
    flex: 1,
    marginLeft: 3,
  },

  helpTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#111111',
  },

  helpDescription: {
    fontSize: 12,
    lineHeight: 15,
    color: '#555555',
  },

  helpButton: {
    minWidth: 76,
    minHeight: 36,
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
    fontSize: 12,
    fontWeight: 'bold',
  },


  /* =========================
     MENU INFERIOR
  ========================= */

});

export default styles;