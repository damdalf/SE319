# **SE 319 - DAY FOURTEEN: EVENT-DRIVEN PROGRAMMING CONTINUED & INTRO TO MYSQL: | 03/02/2025 |**

## **DESIGN PATTERNS:**
* Observer:
    * Required when working with Objects.
        * Applicability:
            * If changing an object requires altering other Objects and you do not know how many and which Objects need to be changed.
            * When an Object needs to notify other Objects without making assumptions about those objects.
            * If an abstraction has two aspects, one depends on the other. Encapsulating these aspects in separate Objects allows for independent reusability.
    * Sharing a single thread among all the requests.
    * Defines a 1-to-n dependency between Objects so that changing a state of an Object causes all dependent object*s to be notified and updated automatically.
    * One to many relationship.
    * The many need to know changes in "one" immediately.
    * Also known as:
        * Dependence.
        * Publisher-subscriber.
        * Subject-observer.
* Observer in Event-Driven Architecture:
    * An Object, called the subject, does the following:
        * Maintains a list of its dependents, which are called observers, and notifies them of any state changes.
    * Subjects and observers can be reused independently.
    * Observers can be added or removed without changing the subject or other observers.
    * Making use of events and observers makes services (Objects) even more loosely coupled.

![](https://i.gyazo.com/4ff47df220b18f82d2a873be6dcde8e2.png)
* In Java, for example, events are handled with observers.
---

## **EVENT-DRIVEN ARCHITECTURE USING NODE.JS AND JSON:**
* Node.js file contains tasks and executes them upon a set of events.
* Node.js allows you to keep data in native JSON (JavaScript Object Notation, similar to XML) format in your database.
    * JSON - a data format.
        * Makes your life easy.
* JSON:
    * Syntax for storing and exchanging data (text written with JS object notation).
        * Convert any JS Object into JSON, and send JSON to the server.
        * Convert any JSON received from the server into JS Objects.
    * Works with data as JS Objects (no complicated parsing and translations).
* Node.js:
    * Attaching an event handler:
        * ```on```
        * Ex) ``` file.on('error', function(err)
        {
            console.log("Error: + err)
        });```
    * Threading:
        * A single thread, using non-blocking I/O calls.
            * Support tens of thousands of concurrent connections without the cost of thread context switching.
            * Building highly concurrent applications.
            * A thread pool (event handlers) handles execution of parallel tasks.
        * Good for horizontal scaling (lots of requests!)
            * Highly scalable servers without using threading, by using a simplified model of event-driven architecture / programming that uses callbacks to signal the completion of a task.
        * Drawbacks of the single-threaded approach:
            * No vertical scaling by increasing the number of CPU cores of the system.
            * Not good for massive parallel computing.
            * Needs additional module.
                * Such as cluster, StrongLoop, Process Manager, Pm2, etc.
        * Mitigation:
            * Developers can increase the default number of threads in the thread pool.
            * The server OS distributes the threads across multiple cores (event handlers running on multiple cores).
---

## **DATABASE SERVER - NODE.JS MYSQL:**
* Relational database:
    * Collection of tables.
* Module to manipulate the MySQL database.
``var myswl = require('mysql');``
* Creating a connection to the database.
```js
var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
```
* Creating a database named 'mydb'.
```js
var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function(err, result) {
        if (err) throw err;
        console.log("Database created!");
    });
});
```
* Creating a table in "mydb" databse.
```js
var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created!");
    });
});
// Create a primary key when creating the table.
// A column with a unique key for each record.
// A column as "INT AUTO_INCREMENT PRIMARY KEY" which will insert a unique number for each record.
// Starting at 1, and increased by one for each new record.
```
* Inserting a record in the table.
```js
var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc.', 'Highway 37')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("One record inserted!");
    });
});
```
* Important SQL Commands:
    * SELECT - extracts data from a database.
    * UPDATE - updates data in a database.
    * DELETE - deletes data from a database.
    * INSERT INTO - inserts new data into a database.
    * CREATE DATABASE - creates a new database.
    * ALTER DATABASE - modifies a database.
    * CREATE TABLE - creates a new table.
    * ALTER TABLE - modifies a table.
    * DROP TABLE - deletes a table.
    * CREATE INDEX - creates an index (search key).
    * DROP INDEX - deletes an index.