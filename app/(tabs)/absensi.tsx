import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TextInput } from 'react-native';

const AttendanceHistory = () => {
  // Sample data for attendance records with employee names
  const [attendanceRecords, setAttendanceRecords] = useState([
    { date: '12 November 2024', employeeName: 'John Doe', status: 'Hadir' },
    { date: '11 November 2024', employeeName: 'Jane Smith', status: 'Hadir' },
    { date: '10 November 2024', employeeName: 'Robert Brown', status: 'Tidak Hadir' },
  ]);

  // State for input fields
  const [newEmployee, setNewEmployee] = useState('');
  const [newStatus, setNewStatus] = useState('');

  // Function to add a new attendance record
  const addAttendanceRecord = () => {
    if (newEmployee && newStatus) {
      const newRecord = {
        date: new Date().toLocaleDateString(),
        employeeName: newEmployee,
        status: newStatus,
      };
      setAttendanceRecords([...attendanceRecords, newRecord]);
      setNewEmployee('');
      setNewStatus('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Riwayat Absensi Karyawan</Text>
      <Text style={styles.description}>
        Berikut adalah daftar riwayat absensi karyawan. Aplikasi ini membantu melacak kehadiran
        karyawan dengan mudah dan terorganisir.
      </Text>

      {/* Form for new attendance entry */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nama Karyawan"
          value={newEmployee}
          onChangeText={setNewEmployee}
        />
        <TextInput
          style={styles.input}
          placeholder="Status (Hadir/Tidak Hadir)"
          value={newStatus}
          onChangeText={setNewStatus}
        />
        <Button title="Tambah Absensi" onPress={addAttendanceRecord} />
      </View>

      {/* Render each attendance record */}
      {attendanceRecords.map((record, index) => (
        <View key={index} style={styles.record}>
          <Text style={styles.recordDate}>{record.date}</Text>
          <Text style={styles.recordEmployee}>{record.employeeName}</Text>
          <Text style={styles.recordStatus}>{record.status}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#e1bee7', // Soft background color, same as login screen
    justifyContent: 'flex-start', // Align items to the top of the screen
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a148c', // Dark purple text for the title
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'serif',
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Arial',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  record: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  recordDate: {
    fontSize: 14,
    color: '#4a148c',
    fontWeight: '600',
  },
  recordEmployee: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  recordStatus: {
    fontSize: 14,
    color: '#d81b60',
    fontWeight: '500',
  },
});

export default AttendanceHistory;
