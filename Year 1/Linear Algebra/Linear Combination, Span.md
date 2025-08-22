#Self-Study #Linear 
### Linear Combination
- Anytime we scale 2 vectors and adding them to each other, we call that a Linear Combination
$$a \overrightarrow{v} + b \overrightarrow{w}$$
$\circledast$ Why "Linear"?
	- If we fix one of the scalar and let the other one change its value freely, the tip of the resulting Vectors will make a straight line
- If we let both scalar range freely and consider every vector we can get, there are 2 things that can happen 
	- For most pair of vector, you'll be able to get anywhere on the dimension plane
	- But if you are unlucky, the 2 vector can line up, and your resulting vector is only a straight line
### Span
- The set of all possible vector that you can reach with a linear combination of a given pair of vector is called the "Span"
$\Rightarrow$ The span of a pair of vectors is all vectors of 2D space
	$\rightarrow$ But when they line up, their span if all vectors whose tip sits on a certain line
	$\rightarrow$ Or the span of the Zero vector is just 0
$\circledast$ What if we were to ask "What is the span($\vec{a}$)?"
	$\rightarrow$ It just scaling and forming a line, not really L.C anymore
$$span(v_{1},v_{2},\cdots,v_{n}) = (c_{1}v_{1}+c_{2}v_{2}+\cdots c_{n}v_{n} \mid c_{i} \in \mbox{for } 1 \le i \le n)$$
### Extra: $\hat{i} \mbox{ and } \hat{j}$
- These two vector can be represented as:
$$\hat{i} = \begin{bmatrix} 1 \\ 0 \end{bmatrix} \mbox{ and } \hat{j} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$$
- We can represent any vector in $R^2$ by these two vectors. And these form the basis for $R^2$ 
End.
Next: [[Vector Space, Subspace]]