import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AttendanceHistory = () => {
  // Sample data for attendance records with employee names
  const attendanceRecords = [
    { date: '12 November 2024', employeeName: 'John Doe', status: 'Hadir' },
    { date: '11 November 2024', employeeName: 'Jane Smith', status: 'Hadir' },
    { date: '10 November 2024', employeeName: 'Robert Brown', status: 'Tidak Hadir' },
    // Add more records as needed
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Riwayat Absensi Karyawan</Text>
      <Text style={styles.description}>
        Berikut adalah daftar riwayat absensi karyawan. Aplikasi ini membantu melacak kehadiran
        karyawan dengan mudah dan terorganisir.
      </Text>

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
    padding: 20, // Adjusted padding for more space around the content
    backgroundColor: '#e1bee7', // Soft background color, same as login screen
    justifyContent: 'flex-start', // Align items to the top of the screen
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a148c', // Dark purple text for the title
    marginBottom: 15, // Reduced margin for better vertical alignment
    textAlign: 'center',
    fontFamily: 'serif',
  },
  description: {
    fontSize: 16,
    color: '#333', // Dark text for good contrast
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Arial',
  },
  record: {
    backgroundColor: '#ffffff',
    padding: 12, // Reduced padding for tighter space
    borderRadius: 10,
    marginBottom: 12, // Slightly reduced margin between records
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
    fontSize: 14, // Smaller font size for date
    color: '#4a148c', // Purple color for consistency
    fontWeight: '600',
  },
  recordEmployee: {
    fontSize: 14, // Smaller font size for employee name
    color: '#333', // Dark text for the employee's name
    fontWeight: '500', // Reduced weight for better readability
  },
  recordStatus: {
    fontSize: 14, // Smaller font size for status
    color: '#d81b60', // Highlight color for attendance status
    fontWeight: '500', // Reduced weight for balance
  },
});

export default AttendanceHistory;
