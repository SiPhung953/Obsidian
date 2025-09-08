Deep Learning $\in$ Machine Learning $\in$ Artificial Intelligence
Is Generative AI actually AI? Or is it Generative Deep Learning?
When a machine mimic human behaviour (playing game, playing chess) -> It's AI by definition
What might be the difference between AI and Machine Learning?
AI refers to the general concept of making a machine behave like a human, and ML is a method of making such thing

Classification and Clustering?
- Classification focus on **predicting** labels based on labeled data
- Another way to understand is that, classification is classifying the data based on their label
	- Supervised learning
- Clustering focus on **grouping** unlabeled data based on **similarity**
	- Unsupervised learning

There's no best line, because it depends much on the needs/requirement
- Say we have a red line right above of the green light, in some cases it's better since it's less risk in general
	- The HR could request more experienced people, then we push the line up
- We can also have a blue line below the the green light, it could be better when the economy is blooming
w1 is the salary, w2 is the experience

- So given the salary and the experience, we could judge how trustworthy is the person ($\hat{y}$)
- And from this probability, we could make the Loss function

Sigmoid function
- It compress the domain from -inf to +inf into the range 0,1
- the x-axis represents the input values that ranges from -inf to +inf and y-axis represents the output values which always lie in 0,1

Q: Given a trained model with weight ($w_{0}, w_{1}, w_{2}$), how can the we predict what is the input data and what is the output data?
- Note: The training data is already used to make the trained model
- op: I think the input is a dataset consist of random numbers, with the amount of column = the coefficient of the model that being $x_{1},x_{2}$
- the output is the probability of class