#Self-Study 
# Class and Objects
- A java program
	- When written -> classes
	- When run -> objects
		- objects has their method (what they do) and they can ask other objects to do things (calling methods)
- **Objects**?
	- Includes data (properties/attributes) and functions (methods/behaviors)
	- 3 essential features
		- **State**: What objects have
			- AKA Attributes of the objects and what Values does these attributes have
		- **Behavior**: What object do in response to message/signal
		- **Identity**: What makes objects unique
- **Classes**?
	- **Blueprint/template** that is used to construct objects
- **Classes vs. Objects**
	- Objects have the same **structure** and **behavior** as the class from which it was created
	- Each object is an **instance** of the class
		- E.g: 
		  Class: Person
		  Data: Name, Age, Height
		  Methods: exercise()
		  **instantiate**
		  - Objects1: Dave
		  Age: 32
		  Height: 1m80
		  - Object2: Peter
		  Age: 36
		  Height: 1m75
	- Class and Object = Data type and Variable
- Designing a class
	- Think about the objects that will be created from that class
		- What the object knows (instance variable) -> state
		- What the object do (method) -> behavior
- Writing a class
- class
```Java
class Dog {
	int size;
	String breed;
	String name;
	void bark() {
		System.out.println("Ruff! Ruff!");
	}
}```
- tester class
```Java
public class DogTestDrive {
	public static void main(String [] args) {
		Dog d = new Dog();
		d.name = "Bruno";
		d.bark();
	}
}```
- run
```cmd
java DogTestDrive
```

# Encapsulation
- Function:
	- Group related things together
		- **Function** encapsulate **instructions**
		- **Objects** encapsulate **data and functions** 
	- Hide internal implementation details from outsiders
		- Outsiders can only see **interface**
		- Programmers **implement** details
- Exposed instance variables can lead to invalid states of objects
```Java
class Dog {
	int size;
	String breed;
	String name;
	...
}
	... // another piece of code that access and modify the size
	Dog d = new Dog();
	d.size = -1; // No validation of size
	// size is accessible from outsider
	// outsider as in another class outside of Dog
```
- To fix this we can
	- Write **setter** for instance variables
	- Force other codes to **use the set method instead of accessing them directly**
```Java
class Dog {
	private int size;
	public void setSize(int s) {
		if (s > 0) size = s; // data validity in setter
	}
	
	public int getSize() {
		return size; // send the value
	}
...
```
- Rule of thumb
	- instance variable = private
	- setters and getters = public
- Class access control
	- **public**: accessible anywhere by anyone
	- **private**: only accessible within the current class
	- **protected**: accessible to the class itself and its subclasses