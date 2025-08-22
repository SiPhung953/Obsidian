Why do we study Theory of Computation?
What is a computer?
	It's an **automatic** machine (with **hardware and algorithm**) that gives an output when given an input
From the First Industry Revolution, the UK developed the first steam engine, thus we first met the term "automation"
What is automation?
	Automatic operation/control of equipment
		Mostly importantly, this operation can run forever, when given the correct resources
Alan Turing - Turing Machine

In this first lesson, we'll learn:
- Re-introduction to Algorithm
- How to represent Algorithm formally - in Mathematical Terms
#### An algorithm is a [finite] sequence of [precise] instruction for performing a computation or for solving a problem
Properties of Algorithms
- Input
- Output
- Definiteness: The steps must be defined clearly
- Correctness: Algorithms should produce the correct output
- Finiteness: Algorithms should produce the output after a finite number off steps
- Effectiveness: 
- Generality: Works with abstract types of data

### Greed and Optimization
- Brute force

### Halting Problem
- Question: Is there and existence of super algorithm?
	- One of the most famous theorem in computer science
	- From this question, we got a definition of Halting Problem
		- Is there exist a procedure to determine a computer program will stop or enter into an infinite loop with a specific input
		- Based on Alan Turing proof from 1936

### Complexity of a function & Growth of function
Big-O notation
- Mathematically, it should be Big-Theta notation
E.g. Algorithm 1 can be represented by the function f(x)
g(x) = O(f(x))
Worst case scenario

E.g. Show that f(x) = $x^{2}+2x+1$ is O($x^{2}$)
We choose C = 2, k = 2
Then we have to show that x > 2
$(x+1)^{2}\leq2x^{2}|\forall x>2$
