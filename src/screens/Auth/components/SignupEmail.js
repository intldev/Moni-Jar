import React, { useCallback, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import auth from "@react-native-firebase/auth";

// constants
import colors from "../../../constants/colors";
import { CREATE_USER } from "../../../constants/mutations";
import { errorMessages } from "../../../constants/variable";
import { useMutation } from "@apollo/client";

// components
import AppCheckbox from "../../../cpts/base/Checkbox";
import TextField from "../../../cpts/base/TextField";
import Button from "../../../cpts/base/Button";

// apollo caching variables
import {
  firstNameVar as setFirstName,
  lastNameVar as setLastName,
} from "../../../cache";

const initialErrors = {
  firstName: false,
  lastName: false,
  email: false,
  phone: false,
  password: false,
  confirmPassword: false,
  checkbox1: false,
  checkbox2: false,
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  checkbox1: false,
  checkbox2: false,
};

export default function SignupEmail(props) {
  const [details, setDetails] = useState({
    ...initialValues,
  });
  const [errors, setErrors] = useState({
    ...initialErrors,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitOnce, setSubmitOnce] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [createUser, { data, error }] = useMutation(CREATE_USER);

  const { navigation } = props;
  const {
    firstName,
    lastName,
    email,
    phone,
    password,
    confirmPassword,
    checkbox1,
    checkbox2,
  } = details;

  const validate = useCallback(() => {
    const localErrors = { ...initialErrors };

    let validated = true;
    let localErrorMessage = null;

    // Check for blank fields
    Object.keys(details).forEach(field => {
      if (!details[field]) {
        localErrors[field] = true;
        validated = false;
        localErrorMessage = errorMessages.validationField;
      }
    });

    // Check password match
    if (password !== confirmPassword) {
      validated = false;
      localErrorMessage = errorMessages.passwordMatch;
    }

    setErrorMessage(localErrorMessage);

    setErrors({
      ...localErrors,
    });

    return {
      validated,
      localErrors,
    };
  }, [confirmPassword, details, password]);

  useEffect(() => {
    if (submitOnce) {
      validate();
    }
  }, [details, validate, submitOnce]);

  useEffect(() => {
    if (data) {
      const { user } = data?.createUser;
      setFirstName(user?.firstName);
      setLastName(user?.lastName);
      navigation.navigate("Drawer");
    }
    if (data || error) {
      setIsLoading(false);
    }
  }, [data, navigation, error]);

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
        <TextField
          label="Confirm Password"
          textInputProps={{
            placeholder: "Xxxxxx",
            secureTextEntry: true,
            onChangeText: text => {
              handleFormValues(text, "confirmPassword");
            },
            value: confirmPassword,
          }}
          error={errors.password}
        />
        <View>
          <AppCheckbox
            text="I agree to the Consent to Receive Electronic Disclosure and understand that we'll send account notices to the email address you provided."
            value={checkbox1}
            onValueChange={value => handleFormValues(value, "checkbox1")}
          />
          <AppCheckbox
            text="I have read and agree to Venmo's User Agreement and Privacy Policy."
            containerStyles={{
              marginTop: 15,
            }}
            value={checkbox2}
            onValueChange={value => handleFormValues(value, "checkbox2")}
          />
          <TouchableOpacity style={styles.linkButtonContainer}>
            <Text style={styles.helpfulInformation}>Helpful Information</Text>
          </TouchableOpacity>
          {errorMessage && (
            <Text style={styles.finishText}>
              {errorMessage}
              <Text style={styles.asterisk}>*</Text>
            </Text>
          )}
          <Button
            title="SIGN UP"
            containerStyles={styles.button}
            textStyles={styles.buttonText}
            onPress={submit}
            isLoading={isLoading}
            activityColor={colors.blue}
          />
          <Text style={styles.reviewText}>
            By submitting, you confirm that you are authorized to use the number
            entered and agree to receive SMS texts to verify you own the number.
            Carrier fees may apply.
          </Text>
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

  async function submit() {
    setSubmitOnce(true);
    const { validated } = validate();
    if (validated) {
      setIsLoading(true);

      try {
        const {
          user: { uid },
        } = await auth().createUserWithEmailAndPassword(
          details.email,
          details.password,
        );

        createUser({
          variables: {
            input: {
              user: {
                firstName,
                id: uid,
                lastName,
                phone,
              },
            },
          },
        });
      } catch (error) {
        setErrorMessage(error.nativeErrorMessage);
        setIsLoading(false);
      }
    }
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
