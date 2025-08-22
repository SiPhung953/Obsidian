#Homework #CompArchi
#### Ex 12
Given info
- CPIs:
	- Arithmetic: 1
	- Load/Store: 12
	- Branch: 5
- Instruction Execution:
	- Arithmetic: $2,56.10^9$
	- Load/Store: $1,28.10^9$
	- Branch: $2,56.10^8$
- Clock frequency (f): 2Ghz ($2.10^9$ Hz)
- Arithmetic and Load/Store is divided by a factor of 0.7p

- Formula
	From the CPU performance equation$$T = N_{instr}\times CPI\times t_{cycle}=\frac{N_{instr} \times CPI}{f}$$We can note down some important formula:
	
	Total clock cycle for a given number of instruction is the sum of the clock cycle for every type of instruction$$CC = N_{instr}\times CPI$$$$TCC = CC_{instr1}+CC_{instr2}+...+CC_{instrn}$$ Execution time$$\text{Execution time}=\frac{TCC}{f}$$ Total execution time = Sum of every execution time for each type of instruction$$\text{Total execution time} = \frac{TCC_{Arith}+TCC_{L/S}+TCC_{Branch}}{f}$$
##### a) Total Execution Time and Speedup
For 1 processor
- Total clock cycle
	- $CC_{Arith}=2,56.10^9\times1=2,56.10^9$
	- $CC_{L/S}=1,28.10^9\times12=1,536.10^{10}$
	- $CC_{Branch}=12,56.10^8\times5=1,28.10^9$
- Total execution time
	- $\text{Total execution time}=\frac{2,56.10^9+1,536.10^10+1,28.10^9}{2.10^9}=9,6(s)$

For 2 processors
- Note: arithmetic and load/store instructions are divided by 0.7p
- Total clock cycle
	- $CC_{Arith}=\frac{2,56.10^9}{0,7\times2}\approx1,82.10^9$
	- $CC_{L/S}=\frac{1,536.10^{10}}{0,7\times2}\approx{1,097.10^{10}}$
	- $CC_{Branch}=1,28.10^9$
- Total execution time $=\frac{1.407.10^{10}}{2.10^{9}}\approx{7,03(s)}$

For 4 processors
- Total clock cycle
	- $CC_{Arith}=\frac{2,56.10^9}{0,7\times4}\approx{0,914.10^9}$
	- $CC_{L/S}=\frac{1,536.10^{10}}{0,7\times4}\approx{5,48.10^9}$
	- $CC_{Branch}=1,28.10^9$
- Total execution time $=\frac{7,674.10^9}{2.10^{9}}\approx3,837(s)$

For 8 processors
- Total clock cycle
	- $CC_{Arith}=\frac{2,56.10^9}{0,7\times8}\approx{0,457.10^9}$
	- $CC_{L/S}=\frac{1,536.10^{10}}{0,7\times8}\approx{2,47.10^9}$
	- $CC_{Branch}=1,28.10^9$
- Total execution time $=\frac{4,477.10^9}{2.10^{9}}\approx2,24(s)$

Speedup time (The change in execution time)$$Speedup_p=\frac{\text{Execution time(1)}}{\text{Execution time(p)}}$$
2 processors$$Speedup_2=\frac{9,6}{7,03}\approx{1,36}$$4 processors$$Speedup_4=\frac{9,6}{3,837}\approx{2,502}$$8 processors$$Speedup_8=\frac{9,6}{2,24}\approx{4,285}$$
##### b) Doubling the CPI of Arithmetic
For 1 processor
- $CC_{Arith}=2,56.10^{9}\times2=5,12.10^{9}$
- Total execution time $=\frac{2,176.10^{9}}{2.10^{9}}=10,88(s)$

For 2 processor
- $CC_{Arith}=\frac{5,12.10^9}{1,4}\approx3,657.10^{9}$
- Total execution time $=\frac{15,91.10^{9}}{2.10^{9}}=\approx7,953(s)$

For 4 processor
- $CC_{Arith}=\frac{5,12.10^9}{2,8}\approx1,83.10^{9}$
- Total execution time $=\frac{8,6.10^9}{2.20^9}=4,3(s)$

For 8 processor
- $CC_{Arith}=\frac{5,12.10^9}{5,6}\approx0,914.10^{9}$
- Total execution time $=\frac{4,934.10^9}{2.20^9}=2,467(s)$

##### c) Load/Store CPI change for 1 processor to match with 4 processor
We know that the execution time on 4 processor is 3,84s
For a single processor to match, we got the function:$$\frac{(2,56.10^{9}\times1)+(1,28.10^{9}\times x)+(2,56.10^{8}\times5)}{2.10^{9}}=3,84$$consider the New CPI Value as x$$2,56.10^{9}+1,28.10^{9}\times x+1.28.10^{9}=7,68.10^{9}$$$$x=\frac{3,84.10^{9}}{1,28.10^{9}}=3$$So for a single processor to match the performance of a 4 processor, the CPI of Load/Store should be reduced to 3

#### Ex 13
Given info
- AMD Barcelona processor with f = 4Ghz 
- New Instr reduced by 15%
- Execution time reduced to 700s
- New SPECratio is 13,7
##### a) New CPI?
Since the number of instruction is reduced by 15%, we can say that:$$\text{New Number of Instr}=0,85\times\text{Old Number of Instr}$$
We use $Instr_{new}$ and $Instr_{old}$ for the convenience 
Using the CPU performance equation$$T=\frac{Instr\times CPI}{f}$$We know that the new execution time $T_{new}=700s$ and $f_{new}=4GHz$$$700=\frac{Instr_{new}\times CPI_{new}}{4.10^9}$$We can rewrite the function and substitute $Instr_{new}=0,85\times Instr_{old}$$$CPI_{new}=\frac{700\times4.10^9}{0,85\times Instr_{old}}$$
##### b) compare CPI to clock rate increase
It is given that the clock rate increase from 3GHz to 4GHz, we can calculate the increase factor/ratio$$\frac{4}{3}\approx1,(3)$$We know that the CPI is inversely proportional to the clock frequency, assuming that there's no reduction in the number of instruction, we can conclude that$$CPI_{new}= CPI_{old}\times\frac{3}{4}$$
##### c) CPU time reduction
SPECratio can be calculated by the formula:$$SPECratio=\frac{\text{Reference Time}}{\text{Execution Time (T)}}$$
We can calculate the Reference Time from $SPECratio_{new}=13,7$ and $T_{new}=700$$$\text{Reference Time} = 13,7 \times 700 = 9590(s)$$We calculate $\triangle T = T_{old}-T_{new}$$$= \frac{9590}{SPECratio_{old}}-700$$
#### d) Number of instruction
- Given info for second benchmark
	- Execution time (T) = 960ns = $960.10^{-9}s$
	- CPI: 1,61
	- Clock frequency (f): 3GHz
- Determine $instr_{new}$ when execution time reduced 10%, clock rate increase to 4GHz$$T_{new}=0,9\times960.10^{-9}=8,64.10^{-7}$$We can calculate $instr_{new}$$$instr_{new}=\frac{8,64.10^{-7}\times4.10^{9}}{1,61}=2,146.10^{9}$$
#### e) Execution time further 10% reduction
$$T_{new,new}=0,9\times8,64.10^{-7}=7,776.10^{-7}$$Given that the instruction count and CPI don't change$$f=\frac{2,146.10^{9}\times1,61}{7,776.10^{-7}}\approx4,44GHz$$
#### f) CPI 15% reduction, Execution time 20% reduction
$$CPI_{new}=0.85\times1,61=1,3685$$$$T_{new}=0,8\times960.10^{-9}=7,68.10^{-7}$$
Keeping the instruction count = $7,776.10^{-7}$$$f = \frac{7,776.10^{-7}\times1,3685}{7,68.10^{-7}}=3GHz$$