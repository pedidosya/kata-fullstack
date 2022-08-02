# Contributing

Thanks for taking the time to contribute. The following is a set of guidelines for contributing to this project. These are mostly guidelines, feel free to propose changes to this document in a pull request.

#### Table Of Contents

[What should I know before I get started?](#what-should-i-know-before-i-get-started)

[How Can I Contribute?](#how-can-i-contribute)
  * [Your First Code Contribution](#your-first-code-contribution)
  * [Pull Requests](#pull-requests)

[General Rules](#general-rules)
  * [Design Rules](#design-rules)
  * [Understandability Tips](#understandability-tips)
  * [Names Rules](#names-rules)
  * [Functions Rules](#functions-rules)
  * [Comments Rules](#comments-rules)
  * [Source code structure](#source-code-structure)
  * [Objects And Data Structures](#objects-and-data-structures)
  * [Tests](#tests)
  * [Resilience Rules](#resilience-rules)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [JavaScript Styleguide](#javascript-styleguide)
  * [Java Styleguide](#java-styleguide)
  * [Kotlin Styleguide](#kotlin-styleguide)
  * [Groovy Styleguide](#groovy-styleguide)
  * [Golang Styleguide](#golang-styleguide)

## What should I know before I get started?

Please read [this document](../README.md) before starting, you will find relevant information there.

## How Can I Contribute?

### Your First Code Contribution

Unsure where to begin contributing to this project?, you can start by writing the project owner. All code owners emails are present in the [README](../README.md) file section [FAQ](../README.md#faq).

### Pull Requests

The process described here has several goals:

- Maintain project quality
- Fix problems that are important
- Engage the developers in working toward the best possible code and practices
- Enable a sustainable system for maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md)
2. Follow the [general rules](#general-rules) and the [styleguides](#styleguides)
3. If the reviewer(s) ask you to complete additional design work, tests, or other changes please do it in order to your pull request be accepted.

## General Rules

Code is clean if it can be understood easily by everyone on the team. Clean code can be read and enhanced by a developer other than its original author. With understandability comes readability, changeability, extensibility and maintainability.

1. Follow standard conventions.
2. Keep it simple stupid. Simpler is always better. Reduce complexity as much as possible.
3. Boy scout rule. Leave the campground cleaner than you found it.
4. Always find root cause. Always look for the root cause of a problem.
5. Avoid code smells:
	- Rigidity. The software is difficult to change. A small change causes a cascade of subsequent changes.
	- Fragility: The software breaks in many places due to a single change.
	- Immobility: You cannot reuse parts of the code in other projects because of involved risks and high effort.
	- Needless Complexity.
	- Needless Repetition.
	- Opacity: The code is hard to understand.

### Design Rules

- Keep configurable data at high levels.
- Prefer polymorphism to if/else or switch/case.
- Separate multi-threading code.
- Prevent over-configurability.
- Use dependency injection.
- Follow Law of Demeter. A class should know only its direct dependencies.

### Understandability Tips

- Be consistent. If you do something a certain way, do all similar things in the same way.
- Use explanatory variables.
- Encapsulate boundary conditions. Boundary conditions are hard to keep track of. Put the processing for them in one place.
- Prefer dedicated value objects to primitive type.
- Avoid logical dependency. Don't write methods which works correctly depending on something else in the same class.
- Avoid negative conditionals.

### Names Rules

- Choose descriptive and unambiguous names.
- Make meaningful distinction.
- Use pronounceable names.
- Use searchable names.
- Replace magic numbers with named constants.
- Avoid encodings. Don't append prefixes or type information.

### Functions Rules

- Small.
- Do one thing.
- Use descriptive names.
- Prefer fewer arguments.
- Have no side effects.
- Don't use flag arguments. Split method into several independent methods that can be called from the client without the flag.

### Comments Rules

- Always try to explain yourself in code.
- Don't be redundant.
- Don't add obvious noise.
- Don't use closing brace comments.
- Don't comment out code. Just remove.
- Use as explanation of intent.
- Use as clarification of code.
- Use as warning of consequences.

### Source Code Structure

- Separate concepts vertically.
- Related code should appear vertically dense.
- Declare variables close to their usage.
- Dependent functions should be close.
- Similar functions should be close.
- Place functions in the downward direction.
- Keep lines short.
- Don't use horizontal alignment.
- Use white space to associate related things and disassociate weakly related.
- Don't break indentation.

### Objects And Data Structures

- Hide internal structure.
- Prefer data structures.
- Avoid hybrids structures (half object and half data).
- Should be small.
- Do one thing.
- Small number of instance variables.
- Base class should know nothing about their derivatives.
- Better to have many functions than to pass some code into a function to select a behavior.
- Prefer non-static methods to static methods.

### Tests

- High Coverage
- One assert per test.
- Readable.
- Fast.
- Independent.
- Repeatable.

### Resilience Rules

- Timeouts
- Retry
- Fallback
- Bulkhead
- Circuit-Breaker
- Asynchronous

## Styleguides

### Git Commit Messages

* Use English language
* Use the present tense ("Add feature" not "Added feature", "Fix bug" instead of "Fixed bug")
* Limit the first line to 72 characters or less
* Reference to the story/task/bug present in Jira
* Consider starting the commit message with an applicable emoji:
    * :art: `:art:` when improving the format/structure of the code
    * :racehorse: `:racehorse:` when improving performance
    * :non-potable_water: `:non-potable_water:` when plugging memory leaks
    * :memo: `:memo:` when writing docs
    * :bug: `:bug:` when fixing a bug
    * :fire: `:fire:` when removing code or files
    * :white_check_mark: `:white_check_mark:` when adding tests
    * :lock: `:lock:` when dealing with security
    * :arrow_up: `:arrow_up:` when upgrading dependencies
    * :arrow_down: `:arrow_down:` when downgrading dependencies
    * :shirt: `:shirt:` when removing linter warnings

### JavaScript Styleguide
All JavaScript code must adhere to [JavaScript Standard Style](https://standardjs.com/).

### Java Styleguide
All Java code must adhere to [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html).

### Kotlin Styleguide
All Kotlin code must adhere to [Kotlin Coding Conventions](https://kotlinlang.org/docs/reference/coding-conventions.html).

### Groovy Styleguide
All Groovy code must adhere to [Groovy Style Guide](http://groovy-lang.org/style-guide.html).

### Golang Styleguide
All Golang code must adhere to [Effective Go](https://golang.org/doc/effective_go.html).