For the first example in page 5
Given the y = 0.5, and the point x0
If x0 goes up -> Hoan Kien, x0 goes down -> Thanh Xuan
y only take on 2 value: 0 or 1
Now, say there's a location as expensive as Hoan Kien - Ham Ca Map
Same y = 0.5, but we change the point to a value x1
So for this price, is the house in Hoan Kiem or Ham Ca Map?

Thus, we need a better hypothesis for this problem, as such:$$0\leq h(x)\leq 1$$
![[Pasted image 20250218091358.png]]
$\theta^{T}=\theta_{0}*x_{0}+\theta_{1}*x_{1}$
$=0.5*1 + 0.7*2.5 =2.25$
$h(x)=\frac{1}{1+e^{-2.25}}=0.904$
This means, there is a 90.4% chance that the house is located in Hoan Kiem
-> Which is wrong
? So how can we fix this
We need to create a cost function, in order to create $\alpha$ 