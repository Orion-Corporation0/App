import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EFFBFD',
  },

  scrollContent: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 720,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingBottom: 120,
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


  label: {
    color: '#000C46',
    fontSize: 15,
    fontWeight: 'bold',
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
    minHeight: 72,
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

  jobText: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 16,
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
    width: '48.5%',
    minHeight: 46,
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
    width: 18,
    height: 18,
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

  activityText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 16,
    color: '#555555',
  },


  /* =========================
     SELECT
     ========================= */

  experienceOptions: {
    flexDirection: 'row',
    gap: 6,
  },

  experienceOption: {
    flex: 1,
    minHeight: 42,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: '#C9D4D8',
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  experienceOptionSelected: {
    borderColor: '#167D98',
    backgroundColor: '#E4F5F7',
  },

  experienceOptionText: {
    color: '#59636B',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
  },

  experienceOptionTextSelected: {
    color: '#12697E',
    fontWeight: '700',
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
    minHeight: 46,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 5,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#333333',
  },


  /* =========================
     BOTÃO FINALIZAR
     ========================= */

  finishButton: {
    width: '78%',
    minHeight: 48,
    alignSelf: 'center',
    backgroundColor: '#000C46',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  finishText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },


});

export default styles;