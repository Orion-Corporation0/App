import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F2FBFD',
  },

  safeArea: {
    flex: 1,
    backgroundColor: '#F2FBFD',
  },

  content: {
    flex: 1,
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },

  scrollContent: {
    width: '100%',
    maxWidth: 680,
    alignSelf: 'center',
    paddingBottom: 120,
  },

  /* FUNDO */

  topLeftShape: {
    position: 'absolute',
    width: 125,
    height: 92,
    borderRadius: 65,
    backgroundColor: '#293760',
    top: -46,
    left: -40,
  },

  topLightBlueShape: {
    position: 'absolute',
    width: 105,
    height: 80,
    borderRadius: 55,
    backgroundColor: '#BEE7F2',
    top: -40,
    left: 50,
  },

  topCreamShape: {
    position: 'absolute',
    width: 112,
    height: 78,
    borderRadius: 60,
    backgroundColor: '#FFF8D7',
    top: -41,
    right: 25,
  },

  topRightShape: {
    position: 'absolute',
    width: 105,
    height: 100,
    borderRadius: 65,
    backgroundColor: '#293760',
    top: -40,
    right: -50,
  },

  rightBlueShape: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: '#52C6E2',
    top: 67,
    right: -52,
  },

  bottomCreamShape: {
    position: 'absolute',
    width: 110,
    height: 110,
    borderRadius: 65,
    backgroundColor: '#FFF8D7',
    bottom: 55,
    left: -50,
  },

  bottomBlueShape: {
    position: 'absolute',
    width: 108,
    height: 90,
    borderRadius: 60,
    backgroundColor: '#C8EDF4',
    bottom: 30,
    left: 8,
  },

  bottomDarkShape: {
    position: 'absolute',
    width: 115,
    height: 105,
    borderRadius: 70,
    backgroundColor: '#293760',
    bottom: 22,
    right: -58,
  },

  /* HEADER */

  header: {
    paddingHorizontal: 14,
    paddingTop: 7,
  },

  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#48C2E7',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },

  /* HERO */

  hero: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 5,
    marginBottom: 9,
  },

  heroTextContainer: {
    flex: 1,
  },

  greetingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 23,
    lineHeight: 27,
    fontWeight: '800',
    color: '#111111',
  },

  waveIcon: {
    marginLeft: 4,
  },

  description: {
    marginTop: 2,
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '600',
    color: '#242424',
  },

  avatarContainer: {
    width: 75,
    height: 75,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    width: 67,
    height: 67,
    borderRadius: 34,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    backgroundColor: '#E89C8C',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },

  cameraButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 25,
    height: 25,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    backgroundColor: '#293760',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* CARDS */

  card: {
    width: '92%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DAE2E6',
    marginBottom: 6,
    overflow: 'hidden',
    elevation: 2,
  },

  cardHeader: {
    minHeight: 55,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#55C9EB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardTitleContainer: {
    flex: 1,
    marginLeft: 10,
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#13264B',
  },

  cardSubtitle: {
    fontSize: 12,
    color: '#838D94',
    marginTop: 1,
  },

  /* CONTEÚDO EXPANDIDO */

  expandedContent: {
    paddingHorizontal: 12,
    paddingBottom: 11,
    paddingTop: 2,
    borderTopWidth: 1,
    borderTopColor: '#EEF2F4',
  },

  infoRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  infoText: {
    flex: 1,
    fontSize: 13,
    color: '#171717',
  },

  nameInput: {
    flex: 1,
    minHeight: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#AFC3C8',
    borderRadius: 5,
    color: '#171717',
    fontSize: 14,
  },

  infoLabel: {
    fontWeight: '800',
  },

  editText: {
    marginLeft: 10,
    fontSize: 13,
    fontWeight: '700',
    color: '#43BDE5',
  },

  cancelEditText: {
    alignSelf: 'flex-end',
    paddingVertical: 6,
    color: '#59636B',
    fontSize: 12,
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: '#EDF1F3',
  },

  lastListItem: {
    borderBottomWidth: 0,
  },

  listIconContainer: {
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: '#E8F8FD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  listTextContainer: {
    flex: 1,
    marginLeft: 9,
  },

  itemTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#16264B',
  },

  itemDescription: {
    marginTop: 2,
    fontSize: 12,
    color: '#737D85',
  },

  statusText: {
    marginTop: 3,
    fontSize: 12,
    fontWeight: '700',
    color: '#43BDE5',
  },

  emptyText: {
    paddingVertical: 10,
    fontSize: 13,
    color: '#7B858C',
  },

  /* CURRÍCULO */

  resumeContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEF2F4',
  },

  resumeText: {
    flex: 1,
    marginLeft: 10,
  },

  viewButton: {
    minHeight: 36,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#167D98',
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  viewButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  /* AJUDA */

  helpContainer: {
    width: '84%',
    minHeight: 50,
    alignSelf: 'center',
    marginTop: 5,
    paddingHorizontal: 9,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#D7E0E5',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },

  helpIcon: {
    width: 33,
    height: 33,
    borderRadius: 17,
    backgroundColor: '#D9F2F8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  helpTextContainer: {
    flex: 1,
    marginLeft: 8,
  },

  helpTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#111111',
  },

  helpSubtitle: {
    marginTop: 1,
    fontSize: 12,
    color: '#4D4D4D',
  },

  callButton: {
    minWidth: 62,
    height: 27,
    paddingHorizontal: 10,
    borderRadius: 14,
    backgroundColor: '#293760',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  callText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
  },

});

export default styles;