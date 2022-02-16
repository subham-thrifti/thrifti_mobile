import React, { useState } from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';


const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });

const ThriftiScreens = ({children, title}): Node => {
   const [ currentPageIdx, setCurrentPageIdx] = useState(0)
   
   const updateCurrentPageIdx = (pageIdx) => {
    setCurrentPageIdx(pageIdx)
   }


    return (
      <View style={styles.sectionContainer}>
        {currentPageIdx === 0 && <Button
          raised={true}
          title="Thrifti Screenss"
          onPress={() => updateCurrentPageIdx(5)} />}
      </View>
    );
  };

  export default ThriftiScreens