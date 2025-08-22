Definition
```C
int factorial (int n) {
	int fac = 1;
	int i;
	for (i=1, i<=n, i++)
		fac = fac*i
	return fac;
}
```

~~~ C
int fac (int n) {
	if (n==1)
		return 1;
	else
		return n*fac(n-1);
}
~~~

Recursion: Repeating object in a similar way

~~~ TodayILearned
Why does 0! = 1?
Because (n-1)! = n! / 1!
For 0! = (1-1)! = 1! / 1! = 1
~~~

Read more: Fractal generation

Strategy: Divide and Conquer
- Look at how a recursive algorithm can make the problem smaller
	- Or, how can we divide the problem into sub-problems?

~~~ Attention
Recursive funtion have to be clear and precise
And do exactly what you want it to do
~~~

Example: Program to calculate GCD
```C
int gcd(int a, int b) {
	printf("%d %d\n",a,b) // For observing change in value
	if (b == 0)
		return a;
	else
		return gcd(a, a%b);
}

int main() {
	printf("GCD of %d is: ",gcd(24,9))
	return 0;
}
// Some note on the complexity of the program
// % ~= / , a%b ~= a/b , a ~ inf (denoted by n)
// b = 2, This operation repeat k times, 2^k = n
// k = log2(n) => O(logn)
```

Example: Fibonacci
```C
int fibo(int n) {
	if ((n == 0) || )
}
```
