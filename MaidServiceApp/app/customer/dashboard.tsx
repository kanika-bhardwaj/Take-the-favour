import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';

export default function CustomerDashboard() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Customer Dashboard</ThemedText>
      
      <ScrollView style={styles.content}>
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">Find a Service Provider</ThemedText>
          <ThemedText>Search for available service providers in your area</ThemedText>
          <TouchableOpacity style={styles.button}>
            <ThemedText style={styles.buttonText}>Search Now</ThemedText>
          </TouchableOpacity>
        </ThemedView>
        
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">My Bookings</ThemedText>
          <ThemedText>View and manage your current and past bookings</ThemedText>
          <TouchableOpacity style={styles.button}>
            <ThemedText style={styles.buttonText}>View Bookings</ThemedText>
          </TouchableOpacity>
        </ThemedView>
        
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">My Profile</ThemedText>
          <ThemedText>Update your personal information and preferences</ThemedText>
          <TouchableOpacity style={styles.button}>
            <ThemedText style={styles.buttonText}>Edit Profile</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ScrollView>
      
      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={() => router.push('/')}
      >
        <ThemedText style={styles.logoutButtonText}>Logout</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    flex: 1,
  },
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  logoutButton: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginTop: 10,
  },
  logoutButtonText: {
    color: '#e74c3c',
    fontSize: 16,
  }
});