import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorageException from '../../utils/exceptions/AsyncStorageException';

const pathHeader = '@Auth/';

export const setToken = async (loggedInUsername: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(`${pathHeader}token`, loggedInUsername);
  } catch (err) {
    throw new AsyncStorageException(err);
  }
};

export const getToken = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(`${pathHeader}token`);
  } catch (err) {
    return null;
  }
};

export const removeToken = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(`${pathHeader}token`);
  } catch (err) {
    throw new AsyncStorageException(err);
  }
};
