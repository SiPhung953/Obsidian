### Linear Regression
- Is a type of **Supervised Learning** algorithm
- The input can be any value, and the output is a continuous linear function
	- Assume that the output y is a linear function of x$$y=h(x)=a*x+b$$
- Exercise:
![[Pasted image 20250211082002.png]]
- First, it's given that x1 = 30, y1 = 2.5
- 1st question: Cost Function
	- We can calculate the Cost Function for each iteration
	- $E_{1}=\frac{1}{2}*(30*a+b-2.5)^2$
		- Knowing that a = b = 0 -> $E_{1}=\frac{1}{2}*(-2.5)^{2}$
	- $E_{2}=\frac{1}{2}*(43*a+b-3.4)^2$
		- -> $E_{2}=\frac{1}{2}*(-3.4)^2$
	- $E=\frac{1}{2*m}*\text{sum of every E}$
	- With m being the amount of iteration, or just, there are 6 couple of x and y, so 2.2.2.2.2.2
	- $E = \frac{1}{2*6}*(2.5^{2}+3.4^{2}+1.8^{2}+...+1.6^{2})$

### Gradient Descent
- Batch gradient descent
	- The previous exercise is an example of Batch grad Descent, taking the summation of all the cost function of every iteration and update a and b accordingly
- Stochastic gradient descent
	- Updating a and b every iteration, this method is (seemingly) faster
	- But there's a catch
	- ...
		- Cuz we only use 1 set/iteration to update a and b, then the cost function formula can assure that the 1st iteration will reduce, but not for the other iterations. Given that the cost function is the summation of every iteration, then we can observe a increase or decrease in the error

$\theta_{0}=\theta_{i}=\theta_{2}=\theta_{3}=0$
Theta Transpose x = $\theta^{T}x=y=\theta_{0}x_{0}+\theta_{0}x_{1}+\theta_{0}x_{2}+...$
$\theta_{0}=\theta_{0}-\alpha\frac{dE}{d\theta_{j}}=\frac{1}{m}\sum_{i=1}^{m}(\theta^{T}x^{(i)}-y^{(i)})x^{(i)}_{j}$
- Note that the $x_{j}$ on the outside goes with $\theta_{j}$, so for $\theta_{1}$ we get $x_{1}=30$
Given coefficient = 0, $\alpha = 0.01$
![[Pasted image 20250218084443.png]]$(0*1 + 0*30 + 0*3 + 0*6)*1$
