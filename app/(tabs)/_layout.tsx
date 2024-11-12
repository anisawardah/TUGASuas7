import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#d81b60', // Pink color for active tab
        tabBarInactiveTintColor: '#4a148c', // Purple color for inactive tab
        tabBarStyle: {
          backgroundColor: '#e1bee7', // Light purple background color for the tab bar
        },
      }}
    >
      <Tabs.Screen
        name="login"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="log-in-outline" size={size} color={color} /> // Icon for login
          ),
          tabBarLabel: 'Login',
        }}
      />
      <Tabs.Screen
        name="absensi"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} /> // Icon for absensi
          ),
          tabBarLabel: 'Absensi',
        }}
      />
      <Tabs.Screen
        name="data"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="folder-outline" size={size} color={color} /> // Icon for data
          ),
          tabBarLabel: 'Data',
        }}
      />
    </Tabs>
  );
};
