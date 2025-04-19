import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  const navigateToCustomerRegister = () => {
    router.push('/auth/CustomerRegister');
  };
  
  const navigateToMaidRegister = () => {
    router.push('/auth/MaidRegister');
  };
  
  const navigateToLogin = () => {
    router.push('/auth/Login');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Welcome to MaidService</ThemedText>
      <ThemedText style={styles.subtitle}>Connect with maids for daily or monthly services</ThemedText>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={navigateToCustomerRegister}
        >
          <Text style={styles.buttonText}>Register as Customer</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.secondaryButton]}
          onPress={navigateToMaidRegister}
        >
          <Text style={styles.buttonText}>Register as Service Provider</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.outlineButton]}
          onPress={navigateToLogin}
        >
          <Text style={styles.outlineButtonText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  secondaryButton: {
    backgroundColor: '#50c878',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#4a90e2',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  outlineButtonText: {
    color: '#4a90e2',
    fontSize: 16,
    fontWeight: '600',
  }
});