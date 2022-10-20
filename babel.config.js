module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			// {
			// 	alias: {
			// 		'@': './src',
			// 	},
			// },
			{
				root: ['./src'],
				alias: {
					src: './src',
					assets: './src/assets',
					'@lib': './src/lib',
					'@images': './src/assets/images',
				},
			},
		],
		[
			'module:react-native-dotenv',
			{
				moduleName: '_env',
				path: '.env',
			},
		],
	],
};
