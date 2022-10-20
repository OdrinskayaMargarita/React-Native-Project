import AsyncStorage from '@react-native-async-storage/async-storage';

class SecureStorage {
	async setDeviceToken(data: string) {
		return await AsyncStorage.setItem('deviceToken', data);
	}
	async getDeviceToken() {
		return await AsyncStorage.getItem('deviceToken');
	}

	async setUserToken(data: string) {
		return await AsyncStorage.setItem('tokenUser', data);
	}
	async getUserToken() {
		return await AsyncStorage.getItem('tokenUser');
	}
	async removeUserToken() {
		return await AsyncStorage.removeItem('tokenUser');
	}
}

export const secureStorage = new SecureStorage();
