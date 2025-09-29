Ever asked why/how the lecture have the bias -1.5 for AND, -0.5 for OR and such?
- We use Backpropagation

We have learned something opposite of this before -> Feedforward
- This process use the weight instead of calculating it
- For every neuron, the output is the sigmoid of its weighted sum

Loss function
- Input -> Expected output -> Actual output -> Loss function -> Gradient descent

From the Actual Output, if it differ from the Expected Output, we update every neuron of last neuron layer, and from the last neuron layer we update the 2nd last neuron layer -> Backpropagation