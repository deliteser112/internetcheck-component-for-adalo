import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import NetInfo from "@react-native-community/netinfo";

class Internetcheck extends Component {

	constructor(props){
		super(props);
		this.state={
			isActive:true,
			isType:""
		}
	}

	componentDidMount(){
		NetInfo.fetch().then(state => {
			this.setState({
				isActive:state.isConnected,
				isType:state.type
			})
		  });
	}


	render() {
		const { color, text } = this.props

		return (
			<View style={styles.wrapper}>
				{
					this.state.isActive==true?
					
					<Text style={{ color:"green" }}>{"internet is working"}</Text>
					:
					<Text style={{ color:"red" }}>{"internet is not working"}</Text>
				}

			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default Internetcheck
