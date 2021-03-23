import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Webview } from 'react-native-webview';
import emissionsCalculator from '../logic/EmissionsCalculation';
import { resultsMessage } from '../logic/ResultsMessage';

const ResultsScreen = ({ route }) => {
  const { convertedDistance, emissions } = route.params;
  const result = emissionsCalculator(emissions, convertedDistance);
  const comparison = resultsMessage(result);

  return (
    <View style={styles.container}>
      <Text>Your journey will release {result} kilograms of CO2.</Text>
      <Text>{'\n'}</Text>
      <Text>{comparison}</Text>
      <Text>{'\n'}</Text>
      {result !== 0 ? (
        <Text
          style={styles.link}
          onPress={() => (
            <Webview
              source={{
                uri: 'https://www.clevel.co.uk/offset-a-desired-amount-of-co2/',
              }}
            />
          )}>
          How you can help!
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 100,
  },
  link: {
    color: 'blue',
  },
});

export default ResultsScreen;
