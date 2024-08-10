const { expect } = require('chai');
const sinon = require('sinon'); // Add this line to require sinon
const displayMessage = require('../0-console'); // Ensure the correct path

describe('displayMessage', () => {
  it('should print the message to the console', () => {
    // Mock console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function with a test message
    const testMessage = 'Hello NodeJS!';
    displayMessage(testMessage);

    // Assert that console.log was called with the test message
    expect(consoleLogSpy.calledWith(testMessage)).to.be.true;

    // Restore the original console.log function
    consoleLogSpy.restore();
  });
});
