import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native';
import React from 'react';
import FlateCards from './components/FlateCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView >

        <FlateCards />
        <ElevatedCards/>
        <FancyCard/>
        <ActionCard/>
        <ContactList/>
      </ScrollView >
    </SafeAreaView >
  );
};

export default App;
