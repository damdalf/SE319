# **SE 319 - DAY THIRTEEN: EVENT-DRIVEN PROGRAMMING: | 03/02/2022 |**

## **EVENT-DRIVEN PROGRAMMING:**
* Event-driven programming has two main components:
    * The event.
        * Often user input.
    * The event handler.
        * Often what is done in response to the user's input.
        * Generally a function.
* Inner components consist of things such as:
    * Listener.
        * Generally an event loop.
    * Event mapping / dispatching / scheduling:
        * Something that connects the event to the event handler, such as a switch case.
* Benefits of event-driven programming:
    * GUI applications experience the most benefits.
        * Inuitive, responsive, and flexible.
        * Compatible with OO programming.
        * Naturally well-suited to applications whose control flow are based on internal or external events.
        * Leads to better software design.
        * Speeds up processing.
        * Ideal for RAD (rapid application development):
            * Less planning and more working prototypes.
        * Improves application scalability.
        * Increases loose coupling.
            * Loose coupling - a method of interconnecting components 'loosely' within a system so that changes to these components least affect performance of the other components.
                * More modular design.
        * Serverless computing.
            * Write your functions, upload the code on cloud providers (AWS Lambda), and let them handle all the backend work.
---

## **WEB UI AND EVENT-DRIVEN PROGRAMMING WITH JAVASCRIPT:**
* Model-View-Controller:
    * View - browser presentation (HTML).
    * Model - data (backend database / embedded / simple).
    * Controller - Client (JS) and server (Node.js) scripts.
* Client-side programming:
    * Validating user input.
    * Prompting users for confirmation, presenting quick information.
    * Calculations on the client side.
    * Preparing user-oriented presentation.
    * Any function that does not require server-side information.
* Server-side programming:
    * Maintaining data across sessions, clients, and applications.
    * CGI - Common Gateway Interface:
        * Classic method for server-side programming.
            * Standard for the server to communicate with external applications.
            * Server receives a client (HTTP) request to access a CGI program.
            * Server creates a new process to execute the program.
            * Server passes client request data to the program.
            * Program executes, terminates, produces data (HTML page).
            * Server sends back (HTTP response) the HTML page with result to the client.
    * GET - the GET method is used to retrieve information from the server using a given URL.
        * Requests using GET should only retrieve data and should have no other effect on the data.
* HTML + JavaScript.
* HTML elements: forms.
* HTML style elements: fonts, headings, breaks.
* CSS: uniformly manipulate styles.
    * Looks and feel of webpages.
    * Layouts, fonts, text, image size, location.
    * Objective: Uniform update.
* JavaScript:
    * Manipulate styles (CSS).
    * Manipulate HTML elements.
    * Validate user data.
    * Communicate with the server-side programs.
---

## **UI AND EVENT-DRIVEN PROGAMMING WITH NODE.JS:**
* Event-driven architecture.
    * Ansynchronous I/O.
    * Scalability with many input / output operations.
    * Real-time web applications.
        * Real-time communication programs, browser games, and data streaming, etc.
* Node.js functions are non-blocking:
    * Commands execute concurrently or even in parralel (unlike PHP that commands execute only after previous commands finish).
        * Node.js uses callbacks to signal completion for failure.
* When to use Node.js?
    * Creation of web servers and networking tools.
        * Ideal for applications that serve a lot of requerst but don't use / need a lot of computational power per request.
    * Using JS and a collection of mudles that handle various core functionality.
        * File system I/O, networking (DNS, HTTP, TCP, TLS / SSL, or UDP), binary data (buffers), cryptography functions, data streams, etc.
        * Modules use an API dsigned to reduce the complexity of writing server applications.
* Archtectural styles: n-tier / layered architecture:
    * Layering the architecture of your program into different levels that build on top of one another.
    * 2-tier architecture:
        * Client / Server.
            * One or more servers provide servi es for the other subsystems called clients.
            * Each client invokes a function of the server which performs the desired service and returns the result.
                * The client must know the interface of the server!
                * Conversely, the server does not need to know the client's interface!
            * Event-driven architecture: A single thread (server) of the event loop process all of the requests from clients (event queue).
                * Service-Oriented Architecture (SOA):
                    * Services can be activated by triggers fired on incoming events.
                        * SOA is an architecture style that assembles applications from (independent) services.
                        * Services are considered as central elements of a company.
                        * Provide encapsulated functionality to other services and applications.
                    * Observer design pattern is implemented in event-driven architecture.
* The main components of event-driven architecture:
    * Processing (event) loop.
    * Event queue.
    * Callback.
        * A thread pool handles execution of parallel tasks in Node.js.
        * The main thread (event loop) posts tasks to the shared task queue, where threads in the thread pool pull and execute.
            * A task goes tot he file system, the system is ready for next requests. When a file is opened and read, the system sends the content to the client.
            * Inherently blocking system functions such as file I/O run in a blocking way on their own threads.
---

## **DESIGN PATTERNS:**
* Design pattern:
    * A software design pattern describes a family of solutions to a software design problem.
        * The purpose of design patterns is the reuse of design knowledge.
        * Patterns improve communication in the team.
            * Design patterns provide useful terminology (terms and shorthands) for discussion between developers about complex concepts.
        * Patterns capture essential concepts and bring them into an understandable form.
            * Patterns help to understand designs.
            * Patterns document designs in a nutshell.
            * Patterns prevent architecture-drift (degdradation of original architecture in case of changes).
            * Patterns clarify design knowledge.
        * Patterns document and promote the state of the art.
            * Patterns help less experienced designers.
            * Patterns avoid the reinvention of the wheel.
            * A pattern is not a fixed rule to follow blindly, but a suggestion and set of alternatives to solve a problem. Adaptation is required.
        * Patterns can improve code quality and code structure.
            * Patterns promote good design and good code by providing constructive examples.