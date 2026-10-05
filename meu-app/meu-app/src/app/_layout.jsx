import '@/global.css';
import { Stack } from "expo-router";
import { AuthProvider } from '@/context/AuthContext';
import { ResumeProvider } from '@/context/ResumeContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <ResumeProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </ResumeProvider>
    </AuthProvider>
  );
}

