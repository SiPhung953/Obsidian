### Architecture
- Linux Kernel
	When we talk about the Linux Kernel, we talk about the mechanism to wake up compartments (camera, display, I/O) of your device
	We use an application -> The app will communicate with the Kernel -> The kernel will activate the compartment needed -> The signal from the compartment can be transferred to the app
	The Linux Kernel is programmed by the C language. Even though C++ existed and allow for OOP then, the capabilities comes with a cost -> To support these capabilities, the data structure required is complicated, and you don't want something hard to control to be at the Kernel level
- Libraries
- Application Frameworks
- Application (Where we will spend most of our time on)
	We will be using Java to create applications

### Compilation
Why do we use Java in the first place?
	In the past, Java is very memory inefficient (and still is), thus we have the Dex Compiler to reduce Java bytecode to be more memory (storage) efficient -> Dalvik VM
	Nowadays we use the Android RunTime VM (ART VM) given the better performance
Java is popular by Just-In-Time Compilation (JIT)

### Context & Application
When developing a program, the developer will separate 3 things:
- Data
- UI
- The connection between Data and UI
This is called the MVC Model 
- The Model represents the data and logic of the application
- The View responsible for displaying the data to the user
- The Controller acts as the middleman, it tells the View what to display and updates the Model when the user interact with the UI
Common workflow of the MVC Model (Page 15)

Let's talk about the component of an application
~~~
                  ┌───────────┐
                  │  Context  │
                  └─────▲─────┘
                        │
        ┌───────────────┼─────────────────┐
        │               │                 │
 ┌──────┴─────┐   ┌─────┴─────┐     ┌─────┴─────┐
 │  Service   │-->│Application│<----│ Activity  │
 └────────────┘   └─────┬─────┘     └─────┬─────┘
                                          │
                                          │
                                          │
                                  ┌───────┴───────┐
                                  │               │
                              ┌───▼───┐      ┌────▼────┐
                              │ View  │      │ Fragment│
                              └───────┘      └─────────┘
~~~
1) Context
- Context is the handle to the system, the central command center
- It gives access to 
	- System services, resources, databases, etc.
	- Application-specific data (your settings, private files, assets, etc.)
2) Application
- Is a Context -> It can access app resources, system services, files, preferences, etc.
- It can be subclassed -> You can 