/* istanbul ignore file */
class MockedLocalStorage {
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = `${value}`;
  }
}

export { MockedLocalStorage };
