import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../Theme/ThemeContext';

const Card = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
      <Text style={{ color: theme.text }}>4562 1122 4595 7852</Text>
      <Text style={{ color: theme.text }}>AR Jonson</Text>
      <Text style={{ color: theme.text }}>Expiry Date: 24/2000</Text>
      <Text style={{ color: theme.text }}>CVV: 6986</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default Card;
