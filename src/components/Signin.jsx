import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import { Pressable } from 'react-native';
import Text from './Text';
import theme from '../theme';
import * as yup from "yup";

const initalValues = {
	username: "",
	password: ""
}

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.required("username is required"),
	password: yup
		.string()
		.required("Password is required")
})
const styles = StyleSheet.create({
	container : {
		padding: 15
	},
	button: {
		backgroundColor: theme.colors.primary,
		height: 50,
		flexDirection: 'row',
		justifyContent: "center",
		alignItems: "center",
	}
})
 
const SignInForm = ({ onSubmit }) => {
	return (
	<View>
		<FormikTextInput name="username" placeholder="Username" />
		<FormikTextInput name="password" placeholder="Password" secureTextEntry />
		<Pressable style={styles.button} onPress={onSubmit}><Text style={{color: "white"}}>Sign in</Text></Pressable>
	</View>
	);
} 
const SignIn = () => {
	const onSubmit = values => {
		console.log(values)
	}
  return (
		<View style={styles.container}>
			<Formik initialValues={initalValues} onSubmit={onSubmit} validationSchema={validationSchema} >
				{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
			</Formik>
		</View>
	);
};

export default SignIn;