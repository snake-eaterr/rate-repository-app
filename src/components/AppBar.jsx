import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
		backgroundColor: "#24292e",
		flexDirection: "row"
  },
  tab: {
		padding: 20
	}
});

const AppBar = () => {
  return (
		<View style={styles.container}>
			<ScrollView horizontal>
				<View style={styles.tab}>
					<Link to={"/"}>
						<Text fontWeight="bold" style={{ color: "white" }} fontSize="subheading">Repositories</Text>
					</Link>
				</View>
				<View style={styles.tab}>
					<Link to={"/signin"}>
						<Text fontWeight="bold" style={{ color: "white" }} fontSize="subheading">Sign in</Text>
					</Link>
				</View>
				
			</ScrollView>
		</View>
	);
};

export default AppBar;