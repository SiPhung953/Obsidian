90% of working-set is stored within 10% of the memory

If Page Fault occur
- Because a page not loaded in the memory
- So to counteract this, a page will always be loaded, and a LRU selection might be used (Depending on [[#^1|whether the memory is full or not]])

LRU (Least Recently Used)
- What it does
	- If a page fault occur -> Send the pages that is the least recently used to disk
- When is it used ^1
	- Firstly, the page must be [[#^4e6d9e|invalidated]] first from/by the [[#^e980a5|page table]]
		- It is used **only** when the memory is full
		- It **can** be used when the memory is empty
			- What if a page fault occur when the memory is empty?
				- The page will be loaded from disk, and memory is allocated for it
					- No need for kicking anything out, Yay!
- Goal
	- Keep the working-set in memory, send LRU'd to disk
- Implementation
	- lru_select() -> Looks for page with minimal access date

Page table?
- A data structure used by virtual memory system (in a computer) to store the mapping between virtual addresses and physical addresses ^e980a5
- For a page to be selected for LRU from the page table ^4e6d9e
	- It has to be invalidated first