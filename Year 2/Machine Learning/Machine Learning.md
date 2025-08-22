#Lecture 
### Notes
- [[Score Evaluation and Classes]] 
---
### What is Artificial Intelligence? Machine Learning?
- In a sense, we can understand AI as a machine that behave/understand like a human
- But as a human, when we were born, we have yet to understand language, things, phenomenon, … -> So how did we understand
	- We learn by experience: We go to school, look at the world, …
- The definition of Machine Learning is the same
- There are 2 approach to a problem:
	- Traditional: We provide the machine with a program and then run it whilst we give it the input to the program for it to give back an output
	- Machine Learning: We still provide a program/machine learning model, and we give it the **training data**, and the machine will give back the **expected outcome** when given any input

### Machine Learning Algorithm
- Supervised Learning
	- Algorithm are trained using **labeled examples** - when the input and the output is known. Predict output for given input
		- Regression: The output is continuous, it can be any value
			- E.g. House price can range from …$ - …$
		- Classification: The output is discrete, it only can be some specific values
			- E.g. An email is either spam or not spam
- Unsupervised Learning
	- Is used with data that has **no historical labels**, the input/training data does not provide the correct answer or yield any output at all
		- Clustering: Similar inputs is group into the same group
- Semi-supervised Learning
	- Is used for the same applications as supervised learning. But used both **labeled and unlabeled data** for training (Typically a small amount of labeled data and mostly unlabeled data)
- Reinforcement Learning
	- The system is not told which is the correct output, but instead must discover which output yield the most reward by trying them
		- E.g. Training a dog to catch the ball when thrown, the dog can try to lay down, only look at the ball fly away,... But only when it goes out of its way to catch the ball do we give it treats