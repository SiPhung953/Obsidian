### Overfitting problem
- Is a problem when the model fit perfectly with the training data, but performance drop when given new/actual data
- This could happen when the model's function become overcomplicated (AKA the model learning the "noise" instead of the curve), and the model rely on unnecessary coefficient that would have been ~0
- So how can we solve the problem?

### Regularization
- Is done by reducing the magnitude of some coefficient $\theta_{j}$
- 