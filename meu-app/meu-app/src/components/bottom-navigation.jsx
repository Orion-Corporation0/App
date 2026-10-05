import { Ionicons } from '@expo/vector-icons';
import { Link, usePathname } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const destinations = [
  { href: '/home', label: 'Início', icon: 'home-outline' },
  { href: '/explore', label: 'Vagas', icon: 'search-outline' },
  { href: '/criarCurriculo', label: 'Currículo', icon: 'add-outline', prominent: true },
  { href: '/editUser/editUser', label: 'Perfil', icon: 'person-outline' },
];

export default function BottomNavigation() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.outer}>
      <View style={[styles.bar, { paddingBottom: Math.max(insets.bottom, 8) }]}>
        {destinations.map(({ href, label, icon, prominent }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link key={href} href={href} asChild>
              <Pressable
                accessibilityRole="tab"
                accessibilityLabel={label}
                accessibilityState={{ selected: active }}
                style={styles.item}
              >
                <View
                  style={[
                    styles.iconContainer,
                    prominent && styles.createIcon,
                    active && !prominent && styles.activeIcon,
                  ]}
                >
                  <Ionicons
                    name={icon}
                    size={prominent ? 26 : 22}
                    color={prominent ? '#FFFFFF' : active ? '#167D98' : '#59636B'}
                  />
                </View>
                <Text style={[styles.label, active && styles.activeLabel]}>
                  {label}
                </Text>
              </Pressable>
            </Link>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  bar: {
    width: '100%',
    maxWidth: 720,
    minHeight: 72,
    paddingTop: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E1E8EB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 12,
  },
  item: {
    flex: 1,
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  iconContainer: {
    width: 34,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  activeIcon: {
    backgroundColor: '#E4F5F7',
  },
  createIcon: {
    width: 40,
    height: 40,
    marginTop: -12,
    borderRadius: 20,
    backgroundColor: '#167D98',
  },
  label: {
    color: '#59636B',
    fontSize: 11,
    fontWeight: '600',
  },
  activeLabel: {
    color: '#167D98',
    fontWeight: '700',
  },
});