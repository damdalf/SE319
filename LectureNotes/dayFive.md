# **SE 319: Day Four - Basics of Networking and JavaScript | 1/31/22 |**

## **BASICS OF NETWORKING:**
* ssh - Secure Shell
    * Ex)
    * ssh <ISU_NetID>@pyrite.cs.iastate.edu
    * ssh <ISU_NetID>@pronto.las.iastate.edu
        * ```ctrl + d``` - usually allows you to exit ssh session.
        * ```exit``` - exits the current ssh session.
* The web browser (Client) makes HTTP requests, and the Server fills these requests with HTTP responses. 
    * Generally, these requests are of the form ```GET someFile.fileType```.
    * Common Client languages:
        * HTML, CSS, JavaScript, JavaFX, Applets.
    * Common Server languages:
        * CGI, Node.js, ASP/JSP, PhP, Java, Servlets.
* HTTP Status Response Codes:
    * 200
        * Request succeeded, requested object later in this message.
    * 301
        * Requested object moved, new location specified later in this message.
    * 400
        * Bad request. The request message was not understood by the server.
    * 404
        * Not found. The requested document was not found on this server.
    * 505
        * HTTP version not supported.

![](https://i.gyazo.com/7bff346d4a0a64e8ba29f1030f2ed98e.png)
![](https://i.gyazo.com/1179ac40238c97e3ab03e7b6d9f3af8a.png)
![](https://i.gyazo.com/67f82d7ba7ce1c4f2ffd3862b22163cf.png)
![](https://i.gyazo.com/50aa46ab8e71972d806a8eaef1eeb190.png)
![](https://i.gyazo.com/4db71adc87684690dbd18f943b921341.png)
---

## **BASICS OF JAVASCRIPT:**
* JavaScript is an interpreted language.
    * What is the difference between a compiler and interpreter?
        * Compiler:
            * A compiler scans the entire program and translates the code into machine code. While this takes a large amount of time to analyze the source code, the overall execution time is comparatively faster than interpreters.
            * A compiler generates immediate object code and requires linking, which leads to larger allocations of memory.
            * A compiler provides debugging messages after scanning the entire program, so debugging is often harder with a compiler. 
        * Interpreter:
            * An interpreter translates program one statement at a time. Thus, the overal execution time is generally slower than a compiler.
            * An interpeter does not convert source code into object code. Instead, it scans it line by line. This leads to smaller allocations of memory.
            * An interpreter provides debugging messages as they appear, which makes debugging with an interpreter easier than done so with a compiler.
* JavaScript's basic syntax is similar to C# and Java:
    * Operators: ```+, *, =, !=, &&, ++```
    * Variables are typeless.
        * Meaning that the types of variables are not declared, and that variables can store any type of data.
    * Conditional statements: ```if, else```
    * Loops: ```for, while```
    * Arrays: ```my_array[]```
    * Associative arrays: ```my_array['abc']```
    * Functions are also declared and used similarly.

![](https://i.gyazo.com/b3848fcf2a1485fc6f8b28e87eb93ac6.png)
![](https://i.gyazo.com/a3023f499d5ea7771c8fefb47c53a4f2.png)
--- 