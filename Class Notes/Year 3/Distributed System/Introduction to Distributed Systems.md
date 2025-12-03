[[DistributedSystem]] 
## Distributed Architecture
### Definition and Studies
- A Distributed System is **a collection of hardware and software of independent computers working together to achieve a shared goal**.
	(Multiple processor/machine that work together, handling work parallelly to finish it.)
- The complexity of Distributed System can be defined as:
	"A distributed system is one in which the **failure of a computer you didn't even know existed can render your own computer unusable**"
- Distributed System is learning about mechanism and algorithm that allow computers to communicate with each other.
	- Mechanism: The hardware and software that connect independent computers.
	- Algorithm: For the Mechanism to achieve its goal, distributed system relies on Algorithms.
	Combining the mechanisms and algorithms to create a unified system.
	In real life: A computer is an encapsulated system of Processors, the Processor communicate with I/O Device, the Memory, and Storage.

- Over time, with better processor, it allow for more transistor at a time; more transistor = more computation, but also more heat -> We have to create better cooling system -> Up to a point that there's so much transistor and heat that they started to fry each other (We can see the drop in Performance and Frequency after 2005).

### Abstraction of distribution
- Abstraction is the process of hiding/separating internal details from the (simplified) interface, and only show the appearance and function for what it is.
	- In this case, the abstraction is the process of **hiding the complexity and challenge of having multiple independent, geographically separated computers from the user and making the distributed system appear like a single unified system**
- A Distributed System has 3 requirement/abstraction that is to be distributed:
	- **Storage**: 
		- To distribute data stores, file can be split across multiple machine, and each part of the file can be indexed to re-create the file.
		- Users don't need to know which machine holds which piece of data; or how many copies of the file (part) exist, since they only need to see one logical copy.
	- **Communication**: 
		- The ability to communicate from anywhere in the world and send messages with little to no delay, making communication between different machines appear as simple and reliable as communication within a single machine
	- **Computation**: 
		- To make a task that is executed across multiple machines look like a single flow, a big task/computation can be divided/split into smaller tasks and distributed to multiple processors.
- The common factor among those abstraction is that it needs a coordinator, you need a way to define the index/message/task to distribute it

#### Parallel System
Multiprocessor systems
- They have direct access to shared memory (Called UMA)
	- E.g: You have one instruction in Processor1, another in Processor2. Since they have access to shared memory, they can understand the instruction even when one of the instruction is not in the processor itself.

Multicomputer parallel systems
- This thing have delays
	- Back to the example, for the Multiprocessor systems, a variable declaration can be done very quickly; it is not the case for Multicomputer parallel systems, where you can declare a variable and it will still have nothing since the value haven't been passed through the network yet.

Example: Intel Coffee Lake
- The Intel Chip is the coordinator, and the Chipset is the "worker" (In this case, I/O Handler), while the Chipset do all the reading and writing into I/O devices, and worker and coordinator will communicate back and forth: If the chipset is finished with its task, the coordinator will allocate the resource for another task.

8700K
One line connect between cores together, every one burst, one "piece" of information is transferred -> Inefficient

EP Xeons
Instead of one line, we have 2 line of connection, one sending information clockwise, and the other counterclockwise. With 4 total lines, and each 2 line can communicate with each other -> Abit more efficient

Sp Xeons
Many lines tightly connect with each other and memory controllers on the side, more efficient, but create problems of pathfinding

AMD Threadripper
Instead of using the "line", these use a new connection technology called Fabric, it still does the job of connecting the cores together. The design of Intra-Socket


### Parallel Models
PRAM Models
- In a PRAM Models, the abstract definition is that we have an infinite amount of processors and shared memory
- How the data can be accessed is divided into 4 models
- How the data can be 
	- SISD: Each Processor, Receive one instruction, and the Processor will only handle one Data at a time
	- SIMD: Each Processor, Receive one instruction, and the Processor can handle multiple Data at a time
	- 