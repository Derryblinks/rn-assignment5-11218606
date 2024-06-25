import React from 'react';
import TabNavigator from './TabNavigator';
import { ThemeProvider } from './Theme/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <TabNavigator />
    </ThemeProvider>
  );
}