import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    }
  });

const CustomContainer = ({children}) => {
    return (
      <View style={styles.sectionContainer}>
          {children}
      </View>
    );
  };

  export default CustomContainer