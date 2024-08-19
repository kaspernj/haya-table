import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Column, HeadColumn, Row, Table, Tbody, Thead } from 'haya-table';

export default function App() {
  return (
    <View style={styles.container}>
      <Table>
        <Thead>
          <Row>
            <HeadColumn>Column 1</HeadColumn>
            <HeadColumn>Column 2</HeadColumn>
            <HeadColumn>Column 3</HeadColumn>
          </Row>
        </Thead>
        <Tbody>
          <Row>
            <Column>
              Value 1
            </Column>
            <Column>
              Value 2
            </Column>
            <Column>
              Value 3
            </Column>
          </Row>
        </Tbody>
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
