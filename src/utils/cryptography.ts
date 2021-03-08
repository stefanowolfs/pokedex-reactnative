import { sha256 } from 'react-native-sha256';

export const encryptWithSha256 = async (text: string): Promise<string> => {
  return sha256(text);
};
