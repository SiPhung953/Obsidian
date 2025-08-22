#Lecture #OOP
### Intro, probably
- In this course, we will study with the Java programming language
- Using the Java Development Kit (JDK) as both a compiler and a interpreter
	**javac**: compiler
	**java**: interpreter and application loader
	**jdb**: debugger
- Java source code is compiled into <mark style="background: #FFB86CA6;">bytecode</mark>
	- Bytecode is executed in an interpreter environment, called **Java Virtual Machine**

~~~ Compiling
Java program -> Compiler -> Java bytecode program -> JVM
~~~
### Writing your first Java program
- In Java, everything goes in a **class**
- When you run a program, you run a class:
	- You have to load the class, then start executing the class's main() method 
	- Every Java program must have a main()

``` java
HelloWorld.java:

public class HelloWorld {
	public static void main (String[] args) {
		System.out.println("Hello, world");
	}
}
```

- To compile

```
javac HelloWorld.java -> Compile -> HelloWorld.class -> Run -> java HelloWorld
```

