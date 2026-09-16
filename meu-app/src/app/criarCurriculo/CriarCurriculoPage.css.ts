import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F1FCFF',
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 12,
  },


  // =========================
  // DECORAÇÃO DO TOPO
  // =========================

  topDecoration: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 65,
    overflow: 'hidden',
  },

  decorationBlue: {
    position: 'absolute',
    width: 90,
    height: 90,
    backgroundColor: '#293760',
    left: -35,
    top: -48,
    transform: [
      {
        rotate: '35deg',
      },
    ],
  },

  decorationLight: {
    position: 'absolute',
    width: 75,
    height: 75,
    backgroundColor: '#B8E2F0',
    left: 28,
    top: -48,
    borderRadius: 40,
  },

  decorationYellow: {
    position: 'absolute',
    width: 90,
    height: 55,
    backgroundColor: '#FFFBE1',
    left: 130,
    top: -25,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
  },

  decorationDark: {
    position: 'absolute',
    width: 105,
    height: 85,
    backgroundColor: '#293760',
    right: -50,
    top: -35,
    borderRadius: 50,
  },


  // =========================
  // CABEÇALHO
  // =========================

  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 1,
    marginBottom: 14,
  },

  headerTextContainer: {
    flex: 1,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#293760',
    marginBottom: 2,
  },

  subtitle: {
    fontSize: 8,
    lineHeight: 10,
    color: '#222222',
  },

  stepContainer: {
    width: 32,
    height: 18,
    borderRadius: 10,
    backgroundColor: '#D6F0FA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  stepText: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#293760',
  },


  // =========================
  // SEÇÕES
  // =========================

  section: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 13,
  },

  sectionIconContainer: {
    width: 24,
    height: 26,
    borderRadius: 5,
    backgroundColor: '#E1E1E1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
    marginTop: 2,
  },

  sectionContent: {
    flex: 1,
  },

  label: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#293760',
    marginBottom: 5,
  },


  // =========================
  // ÍCONES
  // =========================

  calendarIcon: {
    fontSize: 16,
    color: '#293760',
  },

  personIcon: {
    fontSize: 20,
    color: '#293760',
  },

  schoolIcon: {
    fontSize: 20,
    color: '#293760',
  },


  // =========================
  // CAMPO DE IDADE
  // =========================

  inputContainer: {
    width: '100%',
    height: 27,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    height: 27,
    paddingHorizontal: 10,
    fontSize: 9,
    color: '#222222',
  },

  inputIcon: {
    fontSize: 13,
    color: '#293760',
    marginRight: 6,
  },


  // =========================
  // GÊNERO
  // =========================

  genderContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  genderOption: {
    width: '31.5%',
    height: 45,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D5D5D5',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  genderOptionSelected: {
    borderColor: '#3039AE',
    backgroundColor: '#EEF4F9',
  },

  genderSymbol: {
    fontSize: 25,
    color: '#111111',
    lineHeight: 26,
  },

  genderText: {
    fontSize: 6,
    color: '#293760',
    marginTop: 2,
  },


  // =========================
  // ESCOLARIDADE
  // =========================

  educationContainer: {
    width: '100%',
  },

  educationOption: {
    width: '100%',
    height: 25,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D5D5D5',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    marginBottom: 5,
  },

  educationOptionSelected: {
    backgroundColor: '#E8E8E8',
  },

  radio: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#3039AE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
  },

  radioSelected: {
    borderColor: '#3039AE',
  },

  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3039AE',
  },

  educationText: {
    fontSize: 7,
    color: '#293760',
  },


  // =========================
  // BOTÃO
  // =========================

  continueButton: {
    width: '100%',
    height: 30,
    backgroundColor: '#000C46',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
  },

  continueText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },


  // =========================
  // PROGRESSO
  // =========================

  progressContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  progressActiveDot: {
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: '#42B5F5',
  },

  progressInactiveDot: {
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: '#C8C8C8',
  },

  progressActiveLine: {
    width: 64,
    height: 2,
    backgroundColor: '#42B5F5',
    marginHorizontal: 6,
  },

  progressInactiveLine: {
    width: 64,
    height: 2,
    backgroundColor: '#D0D0D0',
    marginHorizontal: 6,
  },

});

export default styles;
