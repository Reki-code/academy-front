import React from 'react'
import { View, Text } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'

const Me = () => {
	return (
		<View>
			<AtAvatar circle image='https://jdc.jd.com/img/200' />
			<Text>
				This is ME!!!
			</Text>
		</View>
	)
}

export default Me