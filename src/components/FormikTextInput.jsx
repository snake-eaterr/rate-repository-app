import { StyleSheet } from 'react-native';
import { useField } from 'formik';
import theme from '../theme';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
	textInput: {
		flexGrow: 1,
		borderWidth: 1,
		borderColor: theme.colors.textSecondary,
		height: 50,
		color: theme.colors.textSecondary,
		marginBottom: 10,
		padding: 10
	}
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
				
        value={field.value}
        error={showError}
        {...props}
				style={styles.textInput}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;