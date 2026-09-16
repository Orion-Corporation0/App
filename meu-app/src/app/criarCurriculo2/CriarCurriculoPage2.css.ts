import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EFFBFD',
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 9,
    paddingBottom: 15,
  },

  /*
   * Fundo decorativo
   */
  topBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    overflow: 'hidden',
  },

  blueShape: {
    position: 'absolute',
    width: 135,
    height: 65,
    backgroundColor: '#293760',
    left: -30,
    top: -27,
    borderBottomRightRadius: 70,
  },

  lightBlueShape: {
    position: 'absolute',
    width: 95,
    height: 65,
    backgroundColor: '#BDEBFA',
    left: 60,
    top: -20,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },

  yellowShape: {
    position: 'absolute',
    width: 90,
    height: 50,
    backgroundColor: '#FFF7C9',
    right: 22,
    top: -20,
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
  },

  darkBlueShape: {
    position: 'absolute',
    width: 105,
    height: 75,
    backgroundColor: '#293760',
    right: -50,
    top: 18,
    borderTopLeftRadius: 80,
  },

  /*
   * Cabeçalho
   */
  header: {
    width: '100%',
    minHeight: 93,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 9,
  },

  backButton: {
    width: 24,
    height: 24,
    borderRadius: 13,
    backgroundColor: '#42B5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },

  backIcon: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#293760',
    lineHeight: 20,
  },

  headerText: {
    flex: 1,
    marginLeft: 15,
    marginTop: 20,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000C46',
  },

  subtitle: {
    marginTop: 2,
    fontSize: 9,
    lineHeight: 12,
    color: '#222222',
  },

  pageIndicator: {
    width: 38,
    height: 29,
    backgroundColor: '#000C46',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 0,
  },

  pageIndicatorText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },

  /*
   * Linha de cada campo
   */
  fieldRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 9,
  },

  iconBox: {
    width: 30,
    height: 30,
    backgroundColor: '#D8DCE2',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
    marginBottom: 0,
  },

  iconText: {
    color: '#293760',
    fontSize: 20,
    fontWeight: 'bold',
  },

  fieldContainer: {
    flex: 1,
  },

  label: {
    color: '#000C46',
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  inputWithMic: {
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
    paddingVertical: 0,
    fontSize: 9,
    color: '#333333',
  },

  multilineInput: {
    height: 34,
    textAlignVertical: 'top',
    paddingTop: 9,
  },

  /*
   * Microfone
   */
  micContainer: {
    width: 19,
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

  /*
   * Select
   */
  select: {
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

  selectText: {
    fontSize: 9,
    color: '#333333',
  },

  placeholderText: {
    fontSize: 9,
    color: '#BDBDBD',
  },

  chevron: {
    color: '#999999',
    fontSize: 19,
    lineHeight: 15,
    marginTop: -5,
  },

  /*
   * Nunca trabalhei
   */
  neverWorkedRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 19,
  },

  neverWorkedText: {
    flex: 1,
    paddingRight: 5,
  },

  neverWorkedTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000C46',
    marginBottom: 1,
  },

  neverWorkedDescription: {
    fontSize: 5.5,
    lineHeight: 7,
    color: '#222222',
  },

  switch: {
    width: 47,
    height: 21,
    borderRadius: 12,
    backgroundColor: '#D6D6D6',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },

  switchActive: {
    backgroundColor: '#42B5F5',
  },

  switchCircle: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },

  switchCircleActive: {
    alignSelf: 'flex-end',
  },

  /*
   * Botão
   */
  continueButton: {
    width: '78%',
    height: 30,
    alignSelf: 'center',
    backgroundColor: '#000C46',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },

  continueText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  /*
   * Progresso
   */
  progressContainer: {
    width: '88%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  progressActiveCircle: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: '#42B5F5',
  },

  progressInactiveCircle: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: '#D0D0D0',
  },

  progressLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#42B5F5',
    marginHorizontal: 5,
  },

});

export default styles;