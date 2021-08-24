import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import PropTypes from 'prop-types'
import { Button } from 'react-native-elements';

import colorStyles from "../../../css/abstracts/color";
import colors from "../../../css/abstracts/variables";


const TOverlay = (props) => {
  const { isVisible, updateVisibility, title, bodyText, animationType,
    middleCta, transparent, onRequestClose, ChildComponent } = props;
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType={animationType}
        transparent={transparent}
        visible={isVisible}
        onRequestClose={onRequestClose} >
        <View style={[styles.centeredView, styles.backdrop]}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{title}</Text>
            <Text style={styles.modalText}>{bodyText}</Text>
            {ChildComponent && <ChildComponent />}
            <Button
                title={middleCta.title}
                raised={true}
                titleStyle={colorStyles.white}
                buttonStyle={styles.pbtn}
                containerStyle={{ ...styles.pbtn, marginTop: 20 }}
                onPress={() => updateVisibility(!isVisible)}/>
          </View>
        </View>
      </Modal>
    </View>
  );
};

TOverlay.propTypes = {
    animationType: PropTypes.oneOf(['fade', 'slide', 'none']),
    middleCta: PropTypes.object,
    transparent: PropTypes.bool,
    onRequestClose: PropTypes.func,
    updateVisibility: PropTypes.func,
    isVisible: PropTypes.bool.isRequired,
}

TOverlay.defaultProps = {
    animationType: 'fade',
    middleCta: { title: 'Continue' },
    transparent: true,
    onRequestClose: () => {},
    updateVisibility: () => {},
    isVisible: false,
    ChildComponent: null
}


const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: colors.translucentBg,
    height: '100%',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalTitle: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 18,
    fontWeight: '500',
    color: colors.slate
  },
  pbtn: {
    backgroundColor: colors.dodgerBlue,
    borderRadius: 50,
    color: '#ffffff',
    fontSize: 12,
    height: 50,
    width: 150
},
});

export default TOverlay;