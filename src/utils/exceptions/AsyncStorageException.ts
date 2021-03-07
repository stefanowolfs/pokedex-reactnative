export default class AsyncStorageException extends Error {
  constructor(message: string) {
    super(`AsyncStorageException: ${message || 'Unknown error'}`);
    this.message = message;
  }
}
