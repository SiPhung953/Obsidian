#Lecture #IntroToInfo 
## UTF-8 and UTF-16
- UTF: *Unicode transformation format*
- Though the example, we can see that the same word "USTH" have different size for different encoding (4b for UTF-8 and 10b for UTF-16)
	- UTF-8: USTH = 55 53 54 48
	- UTF-16: USTH = 55 00 53 00 54 00 48 00
## BMP (Bitmap file): 24-bit and 8-bit
- The start hex number of a Bitmap file is always 42 4D
- Calculation: Hex: 007B69F6 $\to$ Dec: 8088054
- $0.16^{7} + 0.16^{6} + 7.16^{5} + 11.16^{4} + 6.16^{3} + 9.16^{2} + 15.16^{1} + 6.16^{0}$
- $= 8088054$
###### Decimal vs. Hexadecimal vs. Binary
- Now, a computer only has 2 states of On and Off (Or 1 and 0), which is why binary is such a popular system for computers
- But, Binary is just too long for most humans to remember, hence we create Decimal and Hexadecimal
- Now we have another problem: Binary Addition Overflow
- 