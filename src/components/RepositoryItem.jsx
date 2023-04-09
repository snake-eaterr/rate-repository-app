import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
	container: {
		padding: 15,
		backgroundColor: "white"
	},
	firstRow: {
		flexDirection: "row"
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 10
	},
	fullName: {
		marginLeft: 20
	},
	rightColumn: {
		alignSelf: "flex-start",
	},
	languageBadge: {
		backgroundColor: "cyan",
		flexGrow: 0,
		alignSelf: "flex-start",
		padding: 4,
		borderRadius: 3
	},
	secondRow:  {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 10
		
	},
	description: {
		padding: 5,
		flex: 1,
		flexWrap: "wrap"
	},
	statBox: {

	}

})

const RepositoryItem = ({ props }) => {
	const  formatCount = (count) => {
		if (count >= 1000) {
			return (count / 1000).toFixed(1) + "k";
		} else {
			return count;
		}
	};
	return (
		<View style={styles.container}>
			<View style={styles.firstRow}>
				<Image
					style={styles.avatar}
					source={{
						uri: props.ownerAvatarUrl
					}}
				/>
				<View style={styles.rightColumn}>
					<Text style={styles.fullName} fontSize="subheading" fontWeight="bold">{props.fullName}</Text>
					<Text style={[styles.fullName, styles.description]} color="textSecondary">{props.description}</Text>
					<View style={styles.fullName}>
						<Text style={styles.languageBadge}>
							{props.language}
						</Text>
					</View>
				</View>

			</View>
			<View style={styles.secondRow}>
				<View style={styles.statBox}>
					<Text fontWeight="bold">{formatCount(props.stargazersCount)}</Text>
					<Text>Stars</Text>
				</View>
				<View style={styles.statBox}>
					<Text fontWeight="bold">{formatCount(props.forksCount)}</Text>
					<Text>Forks</Text>
				</View>
				<View style={styles.statBox}>
					<Text fontWeight="bold">{formatCount(props.reviewCount)}</Text>
					<Text>Reviews</Text>
				</View>
				<View style={styles.statBox}>
					<Text fontWeight="bold">{formatCount(props.ratingAverage)}</Text>
					<Text>Rating</Text>
				</View>
			</View>

			
		</View>
	);
}

export default RepositoryItem;