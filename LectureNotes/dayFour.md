# **COM S 319: Day Three - Processes vs. Threads & Servers And Clients | 1/26/22 |**

## **Processes and Threads:**

![](https://i.gyazo.com/915a56bef4d2081399336c1c0027574e.jpg)

* What are some problems with multi-level threading / concurrency?
    * Data races.
    * Deadlocks.

### **Parallelism vs. Concurrency:**
* Parallelism:
    * Parallel processing of subtasks for the purpose of speedup.
    * Requires parallel hardware.
* Concurrency:
    * Overlapping but potentially unrelated activities.
    * Access to shared resources possible.
    * Does not require parallel hardware.
* Concurrent Programming (Separation of Concerns):
    * Group related code, and keep unrelated code apart.
    * Ex)
        * Waiting for input vs. processing input in interactive applications.
        * Waiting for requests vs. proessing requests in server.
---

## **Servers and Clients:**
* Server - A database of information.
* Client - the app or program that connects (sends and receives information) to the server, and uses the services provided by the server.
    * MAC ID - the unique physical hard-coded address of an internet-capable device.
    * ID Address - an address that is assigned to computers when they connect to the internet (or a local network).
    * Hostname - a human-readable address (like www.google.com). Servers typically have hostnames.
        * DNS (Domain Name Sever) - similar to a phone book; maps hostnames to IP addresses when you want to connect to a website by entering a hostname.
        * Localhost - each computer can use the hostname ```localhost``` to talk to itself.
        * Port - a number that refers to a specific process running on a computer. Once a port is being used by a server, you cannot use that same port for other programs.
            * Reserved ports:
                * 80: http
                * 23: telnet (communication for computers on internet / local area networks)
                * 22: ssh
                * 110: pop3 (for email delivery)
            * Free ports:
                * ports 1024 and onwards.
        * Socket - IP address + port; it is a pipe-like connection between two computers.
            * Local address
                * Local computer's IP address and local program's port number.
            * Remote address
                * Remote computer's IP address and the remote computer's port number.
            * Protocol
                * The 'language' or 'rules' that the two computers will use to communicate. 
                * Usually this is TCP/IP protocol.