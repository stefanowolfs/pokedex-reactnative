export default class UnauthorizedCredentials extends Error {
  constructor() {
    const message = 'Unauthorized credentials!';
    super(message);
    this.message = message;
  }
}
