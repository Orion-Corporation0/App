import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EFFBFD',
  },

  content: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 720,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingBottom: 120,
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
   * Linha de cada campo
   */
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

  label: {
    color: '#000C46',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  input: {
    flex: 1,
    minHeight: 46,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 0,
    fontSize: 14,
    color: '#333333',
  },

  multilineInput: {
    height: 34,
    textAlignVertical: 'top',
    paddingTop: 9,
  },

  /*
   * Select
   */
  quantityOptions: {
    flexDirection: 'row',
    gap: 6,
  },

  quantityOption: {
    flex: 1,
    minHeight: 40,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: '#C9D4D8',
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  quantityOptionSelected: {
    borderColor: '#167D98',
    backgroundColor: '#E4F5F7',
  },

  quantityOptionText: {
    color: '#59636B',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
  },

  quantityOptionTextSelected: {
    color: '#12697E',
    fontWeight: '700',
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
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000C46',
    marginBottom: 1,
  },

  neverWorkedDescription: {
    fontSize: 12,
    lineHeight: 17,
    color: '#222222',
  },

  switch: {
    width: 52,
    height: 30,
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
    minHeight: 48,
    alignSelf: 'center',
    backgroundColor: '#000C46',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },

  continueText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

});

export default styles;