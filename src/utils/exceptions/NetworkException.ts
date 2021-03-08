export default class NetworkException extends Error {
  constructor(message = 'Unknown error') {
    super(`NetworkException: ${message}`);
    this.message = message;
  }
}
