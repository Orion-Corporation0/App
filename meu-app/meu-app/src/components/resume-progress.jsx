import { StyleSheet, View } from 'react-native';

export default function ResumeProgress({ step }) {
  return (
    <View accessibilityLabel={`Etapa ${step} de 3`} style={styles.container}>
      {[1, 2, 3].map((position) => (
        <View key={position} style={styles.group}>
          <View style={[styles.dot, position <= step && styles.activeDot]} />
          {position < 3 ? (
            <View style={[styles.line, position < step && styles.activeLine]} />
          ) : null}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '88%',
    maxWidth: 360,
    alignSelf: 'center',
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  group: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#D0D8DB',
  },
  activeDot: {
    backgroundColor: '#167D98',
  },
  line: {
    flex: 1,
    height: 2,
    marginHorizontal: 6,
    backgroundColor: '#D0D8DB',
  },
  activeLine: {
    backgroundColor: '#167D98',
  },
});