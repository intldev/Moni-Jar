import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import Button from '../Button';

export default function PickerModal(props) {

    const {
        modalVisible,
        setModalVisible,
        renderPicker
    } = props;

    function closeModal() {
        setModalVisible(false)
    }

    return (
        <Modal
            visible={modalVisible}
            onRequestClose={closeModal}
            animationType="slide"
            transparent
        >
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    {renderPicker()}
                    <Button
                        title="DONE"
                        onPress={closeModal}
                    />
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    contentContainer: {
        backgroundColor: colors.light,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40
    }
})