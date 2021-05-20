import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Button from '../Reusable/Button';

const { width, height } = Dimensions.get('window');

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent />
      <LinearGradient style={styles.gradient} colors={['#33C5FF', '#127475']} start={{ x: 2, y: 1 }} end={{ x: 0, y: 0 }}>
        <View style={styles.outerContainer}>
          <Text style={styles.quizzer}>QUIZZER</Text>
          <Button label="Continue" />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerContainer: {
    height: 0.81 * height,
    backgroundColor: '#ffffff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    width,
  },
  quizzer: {
    fontFamily: 'monospace',
    fontSize: 60,
    color: '#1a6499',
  }
});
