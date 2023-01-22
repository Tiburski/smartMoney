import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';

import {saveEntry} from '../../services/Entries';

const NewEntry = ({navigation}) => {
  const currenctBalance = 2064.35;
  const entry = navigation.getParam('entry', {
    id: null,
    amount: 0,
    description: '',
    entryAt: new Date(),
  });
  const [amount, setAmount] = useState(`${entry.amount}`);
  const [description, setDescription] = useState(entry.description);

  const save = () => {
    const data = {
      amount: parseFloat(amount),
      description: description,
    };
    console.log('NewEntry :: save ', data);
    saveEntry(data, entry);
  };

  return (
    <View style={styles.container}>
      <BalanceLabel currenctBalance={currenctBalance} />

      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => setAmount(text)}
          value={amount}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setDescription(text)}
          value={description}
        />

        <Button title="GPS" />
        <Button title="Camera" />
      </View>

      <View>
        <Button title="Adicionar" onPress={save} />
        <Button title="Cancelar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default NewEntry;
