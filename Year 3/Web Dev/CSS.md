Quick refresh:
- A webpage is simply a HTML document

#### 1) Definition
CSS: Cascading Style Sheet
CSS is a **style language** for defining layout of HTML document
- Those layout go from fonts, colors, margins, lines, height, background images, advanced position, etc.
[W3School](https://www.w3schools.com/Css/css_intro.asp): CSS describes how HTML elements are to be displayed on screen, paper, or in other media

#### 2) Basic CSS syntax
A CSS rule consist of a **selector** and a **declaration block**
```CSS
h1 {color:blue;font-size:12px}
```
- h1: the Selector
- color:blue & font-size:12px: the Declaration (Block)
	- color & font-size: Property
	- blue & 12px: Value
The Selector points to the HTML element that you want to style

#### 3) Adding CSS to HTML
There a 3 ways of inserting a style sheet: Inline CSS, Embedded CSS (or Internal CSS), External CSS
##### Inline CSS
Internal CSS is used when you wanted to specify property for each element
```HTML
<h1 style="color:blue;margin-left:30px;">
This is a heading.
</h1>
```

##### Embedded CSS / Internal CSS
When you embed your CSS document in an HTML document's <head> </head> section
```HTML
<!DOCTYPE html>  
<html>  
	<head>  
		<style>  
		body {
			background-color: linen;
		}  
		  
		h1 {
			color: maroon;  
			margin-left: 40px;
		}  
		</style>  
	</head>  
	<body>  
	  
		<h1>This is a heading</h1>  
		<p>This is a paragraph.</p>  
	  
	</body>  
</html>
```

##### External CSS
External CSS is when you separate the CSS sheet and HTML file into each of their own
```HTML
<!DOCTYPE html>  
<html>  
	<head>  
		<link rel="stylesheet" href="mystyle.css">  
	</head>  
	<body>  
	  
		<h1>This is a heading</h1>  
		<p>This is a paragraph.</p>  
	  
	</body>  
</html>
```
Each HTML page must include a reference to the external style sheet inside the <link> element (inside the <head> </head> section)

An external style sheet must be saved with a .css extension
```mystyle.css
body {
	background-color: lightblue;
}  
  
h1 {
	color: navy;  
	margin-left: 20px;
}
```
