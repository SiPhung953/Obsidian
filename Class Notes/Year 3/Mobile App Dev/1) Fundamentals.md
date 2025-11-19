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
1. Context
- Context is the handle to the system, the central command center
- It gives access to 
	- System services, resources, databases, etc.
	- Application-specific data (your settings, private files, assets, etc.)
2. Application
- Is a Context -> It can access app resources, system services, files, preferences, etc.
- Application represent the whole Android app process, and it is instantize it before any activity
- It can be subclassed -> You can access and inject/override certain elements of your app
	- E.g: Storing current user session, early initialization of libraries, track whether the app is in the background or foreground, override onCreate()
- Your activity must be registered in AndroidManifest.xml
	- Some of the information that should be registered being: App metadata, target SDK, permissions, services
- How does your application manage its memory?
	- Android apps runs on the Dalvik VM, it is responsible for handling GC at runtime, not by Activities.
	- Activities does have a role in helping GC works efficiently, such as Lifecycle callbacks (declaring how activities behaves when user leaves and re-enter the activity)
	- An app process is enforced by Heap size limit

3. Activity
- Activity control one UI per full screen/a single screen with a UI
- Activities inherit from Application inherit from Content => They can access system resources
- Each Activity has its own Lifecycle: 
	- onCreate: Initialization of activity's layout and component
	- onStart
	- onPause: When the activity is on the background, this is where animation are stopped, resource released
	- onResume: When the activity comes to foreground, this is where resource acquiring resume
	- onStop
	- onDestroy
	- onRestart

> [!NOTE] Screen Orientation of Activity Lifecycle
> When you rotate your screen, that is a configuration change
> When configuration changes, Android destroy and recreate your Activity to apply the new resources, being: Layouts, drawables
> onSaveInstanceState -> onDestroy -> Android create new Activity -> onCreate -> onRestoreInstanceState

4. Services
- Service is the background component that perform tasks without a UI
5. View
- If Activity control one UI for a single screen, then View is the UI
- More specifically, the UI elements, being: Buttons, Input fields, Loading icons
6. Fragments
- Fragment can be known as the sub-activity, a part of an activity -> It has similar lifecycle as Activity
- Different to Activity, which is unique to a single screen, Fragments can be reused across different Activities
	- E.g: In the Gmail app, on the Inbox Activity, we can access the side Menu Bar, if we jump to the Setting Activity, we can still see/access the side Menu Bar

### Intent
An intent is a messaging mechanism/messaging object that is used to request action from another app component
Deliver data to the specified component
The Intent operations are asynchronous -> They don't wait for results, they deliver the message and immediately give back control to the program, allowing the program to start/finish initialization/tasks
Fragments can be Dynamically created using codes or Static created in XML

### Views
View is the basic building block of the UI, it is what the user can see and interact
We can have a View that contain other Views -> ViewGroup (LinearLayout, RelativeLayout, etc.) -> Used to define how child views are arranged