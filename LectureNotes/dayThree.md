# **COM S 319: Day Three - Operating Systems | 1/24/22 |**

## **Basics of Operating Systems:**
* Operating systems are considered system software.
* What are some reasons that a program cannot execute an instruction immediately?
    * The program is waiting for:
        * Memory to be allocated.
        * Data to be fetched from the server.
        * Another process to be completed.
            * Asynchronus operation.
            * Intense calculation.
* What is a process?
    * A executable file with its own memory space - a program.
    * A process has several states.
        * New, Ready, Waiting, Running, or Terminated.

    ![](https://i.gyazo.com/a3c65dcd2370c596b19d72a771d31a99.png)

* How do so many processes execute at the same time?
    * Multi-processors, multi-core processors, and because the OS can distribute the processes.
* Processes in memory:
    * Stack - temporary data; function parameters, return addresses, local variables.
    * Heap - dynamically allocated memory.
    * Data - global variables.
    * Text - program code.
* Threads:
    * What is a thread?
        * A thread is a unit of scheduling and execution. It is a path of execution within a process.
    * What are the differences between a process and a thread?
        * A process can have multiple threads, meaning that a process is memory-intensive than a thread. A thread is a part of a process.
    * Why do we need a thread?
        * Threads allow multi-tasking among processes, and better use of resources. 
        * Ex) without multi-threading, you would have to wait for an entire website to load all of its content before being able to see any of it. With multi-threading, the loadout of the page may load first, and then the text on the webpage, and then finally the images and videos. 
        * Threads allow multiple tasks to be completed simutaneously.
    * What does a thread include?
        * Thread ID
        * Program counter
        * Register set
        * Stack

## **Vocab:**
* Process - executing program.
* Thread - a unit of CPU utilization; flow of control within a process.
---