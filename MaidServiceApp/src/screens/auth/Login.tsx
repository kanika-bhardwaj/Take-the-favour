import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TextInput } from 'react-native';
import { router } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer'); // 'customer' or 'maid'

  const handleLogin = () => {
    // Here we would normally handle the login logic with authentication
    
    // Navigate to the appropriate dashboard based on user type
    if (userType === 'customer') {
      router.push('/customer/dashboard');
    } else {
      router.push('/maid/dashboard');
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Login</ThemedText>
      
      <ThemedView style={styles.userTypeSelector}>
        <TouchableOpacity 
          style={[
            styles.userTypeButton, 
            userType === 'customer' && styles.activeUserType
          ]}
          onPress={() => setUserType('customer')}
        >
          <ThemedText style={[
            styles.userTypeText, 
            userType === 'customer' && styles.activeUserTypeText
          ]}>Customer</ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.userTypeButton, 
            userType === 'maid' && styles.activeUserType
          ]}
          onPress={() => setUserType('maid')}
        >
          <ThemedText style={[
            styles.userTypeText, 
            userType === 'maid' && styles.activeUserTypeText
          ]}>Service Provider</ThemedText>
        </TouchableOpacity>
      </ThemedView>
      
      <ThemedView style={styles.inputContainer}>
        <ThemedText style={styles.label}>Email</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </ThemedView>
      
      <ThemedView style={styles.inputContainer}>
        <ThemedText style={styles.label}>Password</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </ThemedView>
      
      <TouchableOpacity style={styles.forgotPassword}>
        <ThemedText style={styles.forgotPasswordText}>Forgot Password?</ThemedText>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <ThemedText style={styles.buttonText}>Login</ThemedText>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => router.back()}
      >
        <ThemedText style={styles.backButtonText}>Back to Welcome</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  userTypeSelector: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  userTypeButton: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  activeUserType: {
    backgroundColor: '#4a90e2',
    borderColor: '#4a90e2',
  },
  userTypeText: {
    fontSize: 16,
  },
  activeUserTypeText: {
    color: 'white',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#4a90e2',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    marginTop: 15,
    padding: 10,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    color: '#4a90e2',
  }
});