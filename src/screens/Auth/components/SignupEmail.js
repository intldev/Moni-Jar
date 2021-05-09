import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// constants
import colors from "../../../constants/colors";

// components
import AppCheckbox from "../../../cpts/base/Checkbox";
import TextField from "../../../cpts/base/TextField";
import Button from "../../../cpts/base/Button";

const initailErrors = {
  firstName: false,
  lastName: false,
  email: false,
  phone: false,
  password: false,
  checkbox1: false,
  checkbox2: false,
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  checkbox1: false,
  checkbox2: false,
};

export default function SignupEmail(props) {
  const [details, setDetails] = useState({
    ...initialValues,
  });
  const [errors, setErrors] = useState({
    ...initailErrors,
  });
  const [submitOnce, setSubmitOnce] = useState(false);

  const { navigation } = props;

  const {
    firstName,
    lastName,
    email,
    phone,
    password,
    checkbox1,
    checkbox2,
  } = details;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.row}>
          <TextField
            label="First Name"
            textInputStyles={styles.rowTextInput}
            textInputProps={{
              onChangeText: text => {
                handleFormValues(text, "firstName");
              },
              value: firstName,
            }}
            error={errors.firstName}
          />
          <TextField
            label="Last Name"
            textInputStyles={styles.rowTextInput}
            textInputProps={{
              onChangeText: text => {
                handleFormValues(text, "lastName");
              },
              value: lastName,
            }}
            error={errors.lastName}
          />
        </View>
        <TextField
          label="Email"
          textInputProps={{
            placeholder: "Xxxxxx@xxx.com",
            keyboardType: "email-address",
            autoCapitalize: "none",
            onChangeText: text => {
              handleFormValues(text, "email");
            },
            value: email,
          }}
          error={errors.email}
        />
        <TextField
          label="Phone"
          textInputProps={{
            placeholder: "(XXX) XXX-XXXX",
            keyboardType: "phone-pad",
            onChangeText: text => {
              handleFormValues(text, "phone");
            },
            value: phone,
          }}
          error={errors.phone}
        />
        <TextField
          label="Password"
          textInputProps={{
            placeholder: "Xxxxxx",
            secureTextEntry: true,
            onChangeText: text => {
              handleFormValues(text, "password");
            },
            value: password,
          }}
          error={errors.password}
        />
        <View>
          <AppCheckbox
            value={checkbox1}
            text="I agree to the Consent to Receive Electronic Disclosure and understand that we'll send account notices to the email address you provided."
            onValueChange={value => {
              handleFormValues(value, "checkbox1");
            }}
          />
          <AppCheckbox
            value={checkbox2}
            text="I have read and agree to Venmo's User Agreement and Privacy Policy."
            containerStyles={{
              marginTop: 15,
            }}
            onValueChange={value => {
              handleFormValues(value, "checkbox2");
            }}
          />
          <TouchableOpacity style={styles.linkButtonContainer}>
            <Text style={styles.helpfulInformation}>Helpful Information</Text>
          </TouchableOpacity>
          {isError() ? (
            <Text style={styles.finishText}>
              Finish fill required fields<Text style={styles.asterisk}>*</Text>
            </Text>
          ) : null}
          <Button
            title="SIGN UP"
            containerStyles={styles.button}
            textStyles={styles.buttonText}
            onPress={submit}
          />
          <Text style={styles.reviewText}>
            By submitting, you confirm that you are authorized to use the number
            entered andagree to receive SMS texts to verify you own the number.
            Carrier fees may apply.
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );

  function handleFormValues(text, field) {
    if (submitOnce) {
      validate({
        ...details,
        [field]: text,
      });
    }
    setDetails({
      ...details,
      [field]: text,
    });
  }
  function isError() {
    let error = false;
    Object.keys(errors).forEach(field => {
      if (errors[field]) {
        error = true;
        return;
      }
    });
    return error;
  }
  function submit() {
    setSubmitOnce(true);
    const { validated } = validate();
    if (validated) {
      navigation.navigate("Drawer");
    }
  }
  function validate(updatedDetails) {
    const localErrors = {
      ...initailErrors,
    };
    let validated = true;
    const detailsToCheck = updatedDetails ? updatedDetails : details;
    Object.keys(detailsToCheck).forEach(field => {
      if (!detailsToCheck[field]) {
        localErrors[field] = true;
        validated = false;
      }
    });
    setErrors({
      ...localErrors,
    });
    return {
      validated,
      localErrors,
    };
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowTextInput: {
    minWidth: "45%",
  },
  container: {
    backgroundColor: colors.dark,
    flexGrow: 1,
  },
  helpfulInformation: {
    padding: 10,
    paddingLeft: 0,
    color: colors.blue,
  },
  button: {
    borderColor: colors.light,
    width: 100,
    alignSelf: "center",
    marginTop: 20,
    borderWidth: 1,
    backgroundColor: colors.secondary.grey,
  },
  buttonText: {
    color: colors.blue,
    fontWeight: "bold",
  },
  reviewText: {
    color: colors.light,
    marginTop: 30,
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Calibre",
  },
  linkButtonContainer: {
    marginTop: 25,
  },
  finishText: {
    color: colors.secondary.danger,
    fontSize: 16,
    fontFamily: "Calibre-SemiBold",
    textAlign: "center",
  },
  asterisk: {
    fontSize: 16,
  },
});
