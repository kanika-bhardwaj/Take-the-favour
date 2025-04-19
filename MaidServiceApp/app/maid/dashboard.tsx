import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';

export default function MaidDashboard() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Service Provider Dashboard</ThemedText>
      
      <ScrollView style={styles.content}>
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">Job Requests</ThemedText>
          <ThemedText>View and respond to new job requests from customers</ThemedText>
          <TouchableOpacity style={styles.button}>
            <ThemedText style={styles.buttonText}>View Requests</ThemedText>
          </TouchableOpacity>
        </ThemedView>
        
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">My Schedule</ThemedText>
          <ThemedText>View and manage your upcoming bookings</ThemedText>
          <TouchableOpacity style={styles.button}>
            <ThemedText style={styles.buttonText}>View Schedule</ThemedText>
          </TouchableOpacity>
        </ThemedView>
        
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">My Earnings</ThemedText>
          <ThemedText>Track your earnings and payment history</ThemedText>
          <TouchableOpacity style={styles.button}>
            <ThemedText style={styles.buttonText}>View Earnings</ThemedText>
          </TouchableOpacity>
        </ThemedView>
        
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">My Profile</ThemedText>
          <ThemedText>Update your services, availability, and rates</ThemedText>
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
    backgroundColor: '#50c878',
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