### About Cookies
- Cookies are "files" that store authorization, user state information
- Take an example:
	- something.com
		- session_id
		- ip
		- expired time
	- -> These information are stored into something like "cookie.dat"
- What if someone got hold of your cookies?
	- They can impersonate you, and potentially steal your login information
#### - Homework: Use cookie to gain access to login/website


### About SMTP
- Use TC, port 25
- Three phases of transfer:
	- handshaking
	- message transfer
	- closure
- Message must be in 7-bit ASCI
	- But how can we fit special character (like Vietnamese character) in to those mail
		- We use different encoding (UTF - 8 or UTF - 16 AKA Unicode)
			- But Unicode is 16-bit, but every character must be in 7-bit
				- You use 2 7-bit characters
- When using mail application, we often see
	- HTTP: pull
	- SMTP: push


### About DNS
- Interesting: If you know a game IP address, you can configure to connect straight to it instead of connect through abuncha DNS server