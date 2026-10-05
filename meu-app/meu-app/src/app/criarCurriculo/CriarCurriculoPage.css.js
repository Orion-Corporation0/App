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
    width: '100%',
    maxWidth: 720,
    alignSelf: 'center',
    paddingBottom: 112,
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


  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#293760',
    marginBottom: 5,
  },


  // =========================
  // CAMPO DE IDADE
  // =========================

  inputContainer: {
    width: '100%',
    minHeight: 44,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    minHeight: 44,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#222222',
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
    fontSize: 12,
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
    minHeight: 40,
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
    fontSize: 13,
    color: '#293760',
  },


  // =========================
  // BOTÃO
  // =========================

  continueButton: {
    width: '100%',
    minHeight: 48,
    backgroundColor: '#000C46',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
  },

  continueText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },


});

export default styles;
