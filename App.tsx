import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, useColorScheme, View, ScrollView } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

// MyText component remains the same
function MyText() {
  return (
    <Text style={styles.myText}>Slog Solutions</Text>
  );
}

// --- Main change is here ---
function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <MyText />
      
     
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,       // ensures ScrollView expands to full height
    justifyContent: 'flex-start',
    padding: 16,
  },
  myText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default App;
