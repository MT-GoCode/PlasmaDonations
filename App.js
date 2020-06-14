import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider, Header } from 'react-native-elements';
import EntryForm from "./EntryForm"

const AppButton = (props) =>  
<View style = {{margin: 20}}>
<Button 
  buttonStyle = {{backgroundColor: "green", borderRadius: "10", width: 300}}
  {...props}/>
</View>

export default function App() {
  return (
      // <EntryForm/>
    <View style = {{flex:1}}>
      <Header
          containerStyle = {{
            backgroundColor: "#008000"
          }}
          leftComponent={{ icon: 'home', color: '#fff' }}
          centerComponent={{ text: 'Plasma Donation', style: { color: '#fff' } }}
          // rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <View style={styles.container}>
          <Text style = {{fontSize: 20}}>Welcome!  {'\n'}</Text>
          <Text>Please choose a login option.  {'\n'}</Text>
          <AppButton title = "Donor"/>
          <AppButton title = "Hospital/Plasma Collector"/>
          <AppButton title = "Pharma/Research Company"/>
          
      </View>
    </View>
  );
}

// pharmacy ethnicity, age, zip, distance

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
