
### Instruction
---
1. Run ```git clone https://github.com/kateamethyst/frontend-assessment.git```
2. cd frontend-assestment/exercise
3. Run ```npm install```
4. Run ```npm serve```

> You can also visit the deployed version [here](https://fe-assestment.herokuapp.com/).

###### Frontend Assestment
> [https://github.com/mindarc/frontend-assessment](https://github.com/mindarc/frontend-assessment)


### Bonus
---
#### Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana.

When we are concatenating ```'a' + +``` javascript will try to concatenate the string but it will be failed since there are no value. Javascript will try to convert the value in ```+ +``` to number but it will not be converted. The Javascript engine will return Nan. Nan refers to not a number.

![https://imgur.com/a/RDrrhsh](https://i.imgur.com/dyGVqnp.png)

