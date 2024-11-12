import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login ke Aplikasi Absensi Karyawan</Text>
      
      <Text style={styles.description}>
        Masuk untuk melacak kehadiran dan aktivitas karyawan Anda dengan mudah dan aman. Belum punya akun? Daftar sekarang!
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#9e9e9e"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#9e9e9e"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Belum punya akun? Daftar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1bee7',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a148c',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'serif',
  },
  description: {
    fontSize: 16,
    color: '#4a148c',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
    paddingHorizontal: 10,
    fontFamily: 'Arial',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#4a148c',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#d81b60',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    shadowColor: '#d81b60',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontFamily: 'serif',
  },
  registerButton: {
    marginTop: 20,
  },
  registerButtonText: {
    color: '#4a148c',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Arial',
  },
});

export default Login;
