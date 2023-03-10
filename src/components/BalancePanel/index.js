import React from 'react';
import {View, StyleSheet} from 'react-native';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

const BalancePanel = ({currenctBalance}) => {
  return (
    <View style={styles.container}>
      <BalancePanelLabel currenctBalance={currenctBalance} />
      <BalancePanelChart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
});

export default BalancePanel;
