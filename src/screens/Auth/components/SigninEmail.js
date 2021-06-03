import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import auth from "@react-native-firebase/auth";

// constants
import colors from "../../../constants/colors";
import { errorMessages } from "../../../constants/variable";

// components
import TextField from "../../../cpts/base/TextField";
import Button from "../../../cpts/base/Button";
import Background from "./Background";

const initailErrors = {
  email: false,
  password: false,
};

const initialValues = {
  email: "",
  password: "",
};

export default function SignupEmail(props) {
  const [details, setDetails] = useState({
    ...initialValues,
  });
  const [errors, setErrors] = useState({
    ...initailErrors,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitOnce, setSubmitOnce] = useState(false);
  const [apiError, setApiError] = useState(false);

  const [errorMessage, setErrorMessage] = useState(
    errorMessages.validationField,
  );

  const { navigation } = props;

  const { email, password } = details;

  const validate = useCallback(() => {
    const localErrors = {
      ...initailErrors,
    };
    let validated = true;
    Object.keys(details).forEach(field => {
      if (!details[field]) {
        localErrors[field] = true;
        validated = false;
      }
    });
    if (!validated) {
      setErrorMessage(errorMessages.validationField);
    }
    setErrors({
      ...localErrors,
    });
    return {
      validated,
      localErrors,
    };
  }, [details]);

  useEffect(() => {
    if (submitOnce) {
      validate();
    }
  }, [details, validate, submitOnce]);

  return (
    <SafeAreaView style={styles.container}>
      <Background backgroundColor={colors.dark} />
      <KeyboardAwareScrollView contentContainerStyle={styles.contentContainer}>
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
          {isError() || apiError ? (
            <Text style={styles.finishText}>
              {errorMessage}
              <Text style={styles.asterisk}>*</Text>
            </Text>
          ) : null}
          <Button
            title="SIGN IN"
            containerStyles={styles.button}
            textStyles={styles.buttonText}
            onPress={submit}
            isLoading={isLoading}
            activityColor={colors.blue}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );

  function handleFormValues(text, field) {
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
      setIsLoading(true);
      auth()
        .signInWithEmailAndPassword(details.email, details.password)
        .then(() => {
          navigation.navigate("Drawer");
        })
        .catch(error => {
          setApiError(true);
          setErrorMessage(error.nativeErrorMessage);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  container: {
    backgroundColor: colors.dark,
    flexGrow: 1,
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
