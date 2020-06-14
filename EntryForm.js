import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider, Header, Input, Icon } from 'react-native-elements';

const AppButton = (props) =>  
<View style = {{margin: 20}}>
<Button 
  buttonStyle = {{backgroundColor: "green", borderRadius: "10", width: 300}}
  {...props}/>
</View>

export default function EntryForm() {
  return (
    <View style = {{flex:1}}>
      <Header
          containerStyle = {{
            backgroundColor: "#008000"
          }}
          leftComponent={{ icon: 'home', color: '#fff' }}
          centerComponent={{ text: 'Plasma Donation', style: { color: '#fff' } }}
          // rightComponent={{ icon: 'home', color: '#fff' }}
      />      
      
    <View style = {{margin: 20}}>
      <Input
        placeholder=''
        containerStyle = {{width: 150}}
        label = "First Name"
      />

      <Input
        placeholder=''
        containerStyle = {{width: 150}}
        label = "Last Name"
      />
    </View>
      <View style={styles.container}>
        <AppButton title = "Submit"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
