#Self-Study #Linear 
### Vector Space
- A Vector space is a collection of vectors (V) and two operators (+,.) such that the following hold for $\vec{u},\vec{v},\vec{w}\in{V}$ and $c,d\in{\mathbb{R}}$ :
	1) ${u + v \in{V}}$<mark style="background: #BBFABBA6;"></mark>
	2) $u + v = v + u$
	3) $u + (v + w) = (u = v) = w$
	4) $0 \in{V} \mbox{ where } 0 + u = u$<mark style="background: #BBFABBA6;"></mark>
	5) $\forall{u}\in{V}, u + (-u) = 0$
	6) $c.u\in{V}$<mark style="background: #BBFABBA6;"></mark>
	7) $c(u + v) = cu + cv$
	8) $(c + d)u = cu + du$
	9) $c(du) = (cd)u$
	10) $1u = u$
- Another way of say: A vector space consists of four entities
	1) V: non-empty set (tập không rỗng)
	2) c: scalar (hằng số) $\in{\mathbb{R}}\mbox{ (maybe} \in{\mathbb{C}})$
	3) (+) $(\vec{u},\vec{v} = \vec{u}+\vec{v})$: addition
	4) (.) $(c,u) = c.u$: multiplication
	$\rightarrow$ (V, +, .): Vector Space
- Questions:
	- [[Vector Space Q1.excalidraw]]
	- [[Vector Space Q2.excalidraw]]
	- Is the zero vector in your vector space? Cuz you may be given vector space where you can't get the zero vector, and those are not V-Space
	  __NOTE__: These are used to solve very simple function
- Example
	- n-tuple space: $\mathbb{R}^n$ (Set of all real number)
		e.g: $(u_{1},u_{2},\dots ,u_{n}) + (v_{1},v_{2},\dots ,v_{n}) = (u_{1}+v_{1},u_{2}+v_{2},\dots u_{n}+v_{n})$ $\rightarrow$ Vector Addition
		$k(u_{1},u_{2},\dots ,u_{n}) = (ku_{1},ku_{2},\dots ku_{n})$
		$\rightarrow$ Scalar Multiplication
		E.g: 
		u + v: 64 + (-10) ; 2 + 4/5 ; $\pi + \mathcal{e}$
		k . u: 6 . 10 ; 2 . $\pi$ ; 5 . 3/4
		$\rightarrow$ Notice how our answer is always a Real number
	- Matrix space: $V = M_{m \mbox{x} n}$ (The set of all mxn matrices)
		- $\begin{bmatrix} u11 & u12 \\ u21 & u22 \end{bmatrix} +\begin{bmatrix} v11 & v12 \\ v21 & v22 \end{bmatrix} = \begin{bmatrix} u11+v11 & u12+v12 \\ u21+v21 & u22+v22 \end{bmatrix}$
		- $k \begin{bmatrix} u11 & u12 \\ u21 & u22 \end{bmatrix} = \begin{bmatrix} ku11 & ku12 \\ ku21 & ku22 \end{bmatrix}$  
		E.g:
		U + V: $\begin{bmatrix} 1  &  2 \\ 3 & 4 \end{bmatrix}+\begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}=\begin{bmatrix} 6 & 8 \\ 10 & 12 \end{bmatrix}$ 
		k . U: $\mbox{5 }.\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}=\begin{bmatrix} 5 & 10 \\ 15 & 20 \end{bmatrix}$
		$\rightarrow$ Notice that our product matrices is always another matrices with the same dimension
	- n-th degree polynomial space (Không gian đa thức bậc n): $V = P_{n}(x)$ (The set of all $\mathbb{R}$ poly of degree $\le$ n)
		- The degree of a polynomial is the highest power of t with non-zero coefficient (bậc của đa thức là hệ số mũ khác 0 cao nhất của t)
			- Ex: What is deg(p) where p(t) = $43t^{3}+6+2t^{4}+6t^{\frac{7}{2}}$
				- The highest nonzero coefficient is 4 $\Rightarrow deg(p)=4$
			- Note: The polynomial with zero degree is the zero polynomial p = 0
		- So, we know that the highest coefficient is the degree. So how do we prove that polynomials are vector space?
			- Say we have: $p(t)=a_{0}+a_{1}t+a_{2}t^{2}+\dots+a_{n}t^{n}$ $q(t)=b_{0}+b_1t+b_2t^2+\dots+b_{n}t^{n}$
			- Prove: [[Proving Polynomial Space]]
	- Function space
		- Say, let's take set set of Linear Polynomials (PT Đường Thẳng) in the form of ax+b
			- If we multiply with a scalar c, we can distribute:
			$c(ax+b)=(ca)x+(bc)$
			$\rightarrow$ Since we are dealing with real number, (ca) and (bc) will create a new real number, thus making a new a and b
			- The same if we plus them together:
			$(a_{1}x+b_{1})+(a_{2}x+b_{2})$
			Now we group terms together
			$(a_{1}+a_{2})x+(b_{1}+b_{2})$
			$\rightarrow$ We then again make new a and b, thus coming back to a Linear Polynomial form
### Subspace
- A subspace is a smaller set within a Vector space
	- A subspace is a Vector space in it self
	- Let's say we have V as a Vector space, now we can make a smaller section of V and call it W
	  $\rightarrow$ Every element of W is also an element of V
	  $\Rightarrow$ Then we only need to verify 2 axiom $\downarrow$ 
- A subspace of a vector space V is a subset W that satisfies 2 (or 3) conditions:
	1) The __0__ vector is in W ($0 \in W$)
	2) If $\vec{u}$ and $\vec{v} \in W \Rightarrow \vec{u}+\vec{v}\in W$ <mark style="background: #BBFABBA6;"></mark>
	3) If $\vec{u}\in W,c \in{\mathbb{R}}\Rightarrow c.\vec{u}\in W$ <mark style="background: #BBFABBA6;"></mark>
	   $\rightarrow$ When we can verify these axioms, W is considered closed and is a subspace of V
	   E.g:
	   - Say we have a Vector space $\mathbb{R}^{3}$, now we're gonna check for a potential subspace S made of vectors that have the form $\vec{x}=\begin{bmatrix} x \\ 0 \\ -x \end{bmatrix}\rightarrow$ We can see that the potential subspace still follow the rules of the Vector space ($\mathbb{R}^{3}$) 
	   - Now we have to check whether these vector satisfy the axiom:
	   $c.\begin{bmatrix} x \\ 0 \\ -x \end{bmatrix}=\begin{bmatrix} c.x \\ 0 \\ -(c.x) \end{bmatrix}$
	   $\rightarrow$ We can see that the new vector still retain the form of S, so the 3rd axiom is true
	   Say we have another vector of the same potential subspace
	   $\vec{y}=\begin{bmatrix} y \\ 0 \\ -y \end{bmatrix}$
	   $\begin{bmatrix} x \\ 0 \\ -x \end{bmatrix}+\begin{bmatrix} y \\ 0 \\ -y \end{bmatrix}=\begin{bmatrix} x+y \\ 0 \\ -(x+y) \end{bmatrix}$
	   $\Rightarrow$ We have verified the axiom, hence S is a Vector space, and because S is contain within V. We can say that S is a subspace of V
End.
Next: [[Linear Independence]]