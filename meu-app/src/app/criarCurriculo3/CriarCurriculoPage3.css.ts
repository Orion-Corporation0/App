import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EFFBFD',
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 12,
    paddingBottom: 10,
  },


  /* =========================
     DECORAÇÃO DO TOPO
     ========================= */

  topDecoration: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
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
    top: 18,
    borderTopLeftRadius: 80,
  },


  /* =========================
     CABEÇALHO
     ========================= */

  header: {
    width: '100%',
    height: 73,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 8,
  },

  backButton: {
    width: 24,
    height: 24,
    borderRadius: 13,
    backgroundColor: '#42B5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
  },

  backIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#293760',
  },

  headerTextContainer: {
    flex: 1,
    marginLeft: 14,
    marginTop: 17,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000C46',
  },

  subtitle: {
    fontSize: 8.5,
    lineHeight: 11,
    color: '#222222',
    marginTop: 2,
  },

  stepContainer: {
    width: 38,
    height: 29,
    backgroundColor: '#000C46',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  stepText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },


  /* =========================
     SEÇÕES
     ========================= */

  section: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 7,
  },

  sectionIconContainer: {
    width: 30,
    height: 30,
    backgroundColor: '#D8DCE2',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
    marginTop: 2,
  },

  sectionIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#293760',
  },

  briefcaseIcon: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#293760',
  },

  calendarIcon: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#293760',
  },

  courseIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#293760',
  },

  sectionContent: {
    flex: 1,
  },

  label: {
    color: '#000C46',
    fontSize: 10.5,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  smallDescription: {
    color: '#555555',
    fontSize: 5.5,
    marginBottom: 4,
  },


  /* =========================
     TRABALHOS
     ========================= */

  jobsGrid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  jobOption: {
    width: '31.5%',
    height: 47,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },

  jobOptionSelected: {
    borderWidth: 1,
    borderColor: '#42B5F5',
  },

  jobIcon: {
    fontSize: 17,
    color: '#293760',
    fontWeight: 'bold',
    marginBottom: 1,
  },

  jobIconSelected: {
    color: '#42B5F5',
  },

  jobText: {
    textAlign: 'center',
    fontSize: 5.5,
    lineHeight: 7,
    color: '#293760',
    fontWeight: 'bold',
  },

  jobTextSelected: {
    color: '#000C46',
  },


  /* =========================
     ATIVIDADES
     ========================= */

  activitiesGrid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  activityOption: {
    width: '31.5%',
    minHeight: 27,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 4,
    paddingHorizontal: 5,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  activityOptionSelected: {
    borderWidth: 1,
    borderColor: '#42B5F5',
  },

  checkbox: {
    width: 9,
    height: 9,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 2,
    marginRight: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxSelected: {
    backgroundColor: '#42B5F5',
    borderColor: '#42B5F5',
  },

  check: {
    color: '#FFFFFF',
    fontSize: 7,
    fontWeight: 'bold',
    lineHeight: 8,
  },

  activityText: {
    flex: 1,
    fontSize: 5.2,
    lineHeight: 6.5,
    color: '#555555',
  },


  /* =========================
     SELECT
     ========================= */

  selectContainer: {
    width: '100%',
    height: 34,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },

  selectPlaceholder: {
    fontSize: 9,
    color: '#BDBDBD',
  },

  selectText: {
    fontSize: 9,
    color: '#333333',
  },

  selectArrow: {
    color: '#999999',
    fontSize: 19,
    marginTop: -5,
  },


  /* =========================
     INPUT
     ========================= */

  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    height: 34,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 5,
    paddingHorizontal: 12,
    fontSize: 9,
    color: '#333333',
  },


  /* =========================
     MICROFONE
     ========================= */

  micContainer: {
    width: 18,
    height: 32,
    marginLeft: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  micBody: {
    width: 7,
    height: 13,
    backgroundColor: '#293760',
    borderRadius: 5,
  },

  micArc: {
    position: 'absolute',
    width: 13,
    height: 15,
    borderWidth: 1.5,
    borderTopColor: 'transparent',
    borderLeftColor: '#293760',
    borderRightColor: '#293760',
    borderBottomColor: '#293760',
    borderRadius: 8,
    top: 8,
  },

  micLine: {
    position: 'absolute',
    width: 1.5,
    height: 5,
    backgroundColor: '#293760',
    bottom: 4,
  },


  /* =========================
     BOTÃO FINALIZAR
     ========================= */

  finishButton: {
    width: '78%',
    height: 30,
    alignSelf: 'center',
    backgroundColor: '#000C46',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  finishText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },


  /* =========================
     PROGRESSO
     ========================= */

  progressContainer: {
    width: '88%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  progressActiveDot: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: '#42B5F5',
  },

  progressActiveLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#42B5F5',
    marginHorizontal: 5,
  },

});

export default styles;