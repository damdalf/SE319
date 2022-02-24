# **SE 319: DAY ELEVEN - TDD CONTINUED | 02/24/2022 |**

## **NOTES:**
* Again, the central idea behind TDD is that we think FIRST about test cases...
    * What test cases could we have? How would we like our code to eventually function? Let's write these test cases first.
    * Now, let's write our code to PASS these test cases. Focus on a single functionality until it works.
        * Once we pass this test case, NOW let's move onto the next test case that most furthers the development of our design. Rinse and repeat.
* From here, let's optimize these code solutions (REFACTOR!).
---

## **JEST:**
* JS testing framework.
    * Works with projects using Babel, TS, Node.js, React, Angular, and Vue.js.
* Installation:
    * ```npm install --save-dev jest```
* Ex)

```sum.js```
```js
function sun(a, b){
    return a + b;
}
module.exports = sum;
```

```sum.test.js```
```js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

// Test is written wrong purposefully (0 + 1) should not be expected to equal 0, only written like this to show you how Jest appears when a test is failed.
test('adds 0 + 1 to equal 1', () => {
    expect(sum(0, 1)).toBe(0);
});
```
* Test Suites.
    * Test files.
* Test.
    * The individual tests that are actually ran.
* Snapshots:
    * Ensures that the UI does not change unexpectedly.
* Jest uses several 'matchers':
    * ```toBe```, ```toEqual```, ```not.toBe```
    * ```toBeNull```, ```toBeDefined```, ```toBeUndefined```, ```toBeTruthy```, ```toBeFalsy```
    * ```toBeGreaterThan```, ```toBeGreaterThanOrEqual```, ```toBeLessThan```, ```toBeLessThanOrEqual```
    * ```toBeCloseTo```
    * ```toMatch```
    * ```toContain```
    * ```toThrow```
* Setup and Teardown:
    * ```beforeEach```, ```afterEach```
        * Same setup and teardown method called for each test.
    * ```beforeAll```, ```afterAll```
        * One-time setup and teardown called for all tests.
---

## **EVENT-DRIVEN PROGRAMMING:**
* A programming paradigm in which the flow of the program is determined by events such as:
    * User actions (mouse clicks, key presses, motion / talking).
    * Sensor outputs (mostly in embedded systems).
    * Messages from other programs / threads (device drivers).
    * Dominant paradigm used in graphical user interfaces.
    * Widely used in HCI.
* The programmer does not control when code is executed, the user controls that.
    * The programmer provides capabilities for when the user invokes them.
* Event Handlers.
    * Small bits of code that the application calls when certain events occur.
* Sequence of events:
    * An application waits (idles) after initialization until the user generates an event through an input device (keyboard, mouse, etc.).
    * The OS dispatches the event to the application who owns the active window.
    * The corresponding event handler(s) of the application is invoked to process the event.
---

## **HUMAN COMPUTER INTERACTION:**
* HCI: Interactive computing systems for human use.
    * CLI: Command line interface.
    * GUI: Graphical user interface.
    * NUI: Natural user interface (audio / video / motion, such as Xbox's Kinect).
* Four main components of HCI:
    * User interaction.
    * Event.
    * Event handling.
    * Output.
---
