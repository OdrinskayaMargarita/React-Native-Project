import * as React from 'react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import Navigator from 'src/navigations';

import { PreloaderItem } from './src/shared/components/atoms/Preloader/Preloader.component';
import { store } from './src/store/configureStore';
import './src/locales/i18n';

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: '#FAFAFA',
	},
};

const App = () => (
	<Provider store={store}>
		<NativeBaseProvider>
			<NavigationContainer theme={MyTheme}>
				<PreloaderItem />
				<Navigator />
			</NavigationContainer>
		</NativeBaseProvider>
	</Provider>
);

export default App;
