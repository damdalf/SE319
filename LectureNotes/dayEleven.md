# **SE 319 - DAY ELLEVEN: INTRODUCTION TO TEST-DRIVEN DEVELOPMENT | 02/22/2022 |**

## **OUTLINE:**
* Introduction to software process:
    * Waterfall model.
    * Agile process.
* Test-driven development (TDD):
    * XP development practices.
    * TDD.
    * Unit Testing Frameworks:
        * JUnit
        * Jest
            * JavaScript testing framework for Web UI.
        * XP / TDD mini project (Example).

---

## **SOFTWARE ENGINEERING PROCESS MODELS:**
* A sequence of activities that lead to the production of a software product.
    * Waterfall.
    * Agile.
    * Scrum (NOT COVERED).
### **WATERFALL:**
* A sequence of separates phases.
     * **Requirements / analysis.**
         * Where do we obtain the requirements?
            * Interview with customer.
            * Questionaires.
            * On-site observations.
         * Should we modify or refine the requirements?
            * What should we consider?
         * Output?
            * Requirement documents.
            * Actors and use case diagrams.
    * **Design.**
         * What needs to be designed?
            * User interfaces (GUI).
            * Data structure (component design).
            * Module, API interface (architecture design / style).
         * Output?
            * Design document.
            * Class diagram.
            * Component diagrams.
            * GUI's, etc.
    * **Coding.**
        * Implementation?
            * Programming language, tools, frameworks, IDE's.
            * Platforms, hardware, etc.
        * Output?
            * Source code.
    * **Testing.**
        * What kinds of tests?
            * Unit (module) test.
                * Testing a single component (function).
            * Integration test.
                * Integrating functionalitiies (such as a Student and Teacher class) and testing combined functionality.
            * System test.
                * Testing all components:
                    * User, hardware, embedded device I/O, mobile devices, etc.
            * Acceptance test.
                * Allowing the customer(s) to test the entire program.
        * Output?
                * Deployment.
    * **Maintenance.**
        * New changes.
        * New bugs, etc.
        * Regression tests.
            * Verifies if the changed software still performs the same way.
        * Ratio of cost among phases.
            * Maintenance costs 2/3's of your overall cost.
* **Shortcomings:**
    * Not getting user-feedback until late in the software's development, difficult to handle changes.
    * Testing is after coding, not during. Maintenance is extremely expensive.
    * More expensive with such spaced-out developmental stages.
    * Hard to estimate time to completion. 

---
### **AGILE:**
* This Software Engineering Process Model is all about planning, planning, and planning. 
* Introduced in 2001.
* The Agile Manifesto:
    * https://agilemanifesto.org/
* Core Values:
    * **Individuals and interactions** over processes and tools.
    * **Working software** over comprehensive documentation.
    * **Customer collaboration** over contract negotiation.
    * **Responding to change** over following a plan.
* Culture of the whole team, with shared responsibility and accountability.
* **XP Process Model (a.k.a TDD):**
    * Intended to improve software quality and responsiveness to changing customer requirements.
    * Each release occurs every two weeks (a.k.a **Sprint**). 
    * For each release:
        * Review and planning.
        * Design (simple).
        * Implementation (TDD).
        * Following 12 key XP practices.
    * **12 Key XP Practices:**
        * Planning game.
        * Small releases.
        * Metaphor.
        * Simple design.
        * Testing.
        * Refactoring.
        * Pair programming.
        * Collective code ownership.
        * Continuous integration.
        * 40-hour week.
        * On-site customer.
        * Coding standards.

---

## **TEST-DRIVEN DEVELOPMENT:**
* TDD:
    * Unit tests.
    * Test suite.
    * Regression testing and continuous integration.
* Teams practice TDD by working in short cycles of adding a test, and then making it work.
    * Test / Code / Refactor Cycle:
        * Motivate any behavioral change to the code through an automated test.
        * Always put the code in the simplest form.
    * Test code written before application code.
        * Small steps.
        * Incremental design.
        * Make it fail -> Make it work -> Make it better.
    * Refactoring.
        * Simplifying a piece of code without changing its functionality.

---
## **UNIT TESTING FRAMEWORKS:**
* JUnit.
    * Java framework.
    * Only can be contained in Test classes.
    * Test methods are annotated with the ```@Test``` annotation.
    * You use an ```asert``` method, provided by JUnit to check an expected result versus the actual result.
        * ```assertEquals```.
        * ```asertTrue```.

