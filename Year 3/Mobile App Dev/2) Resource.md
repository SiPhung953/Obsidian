### Reminder
What's the base View class for layouting in android? (Which base class do all layout containers in Android extend from?)
- ViewGroup

What's the hierarchy of the View class?
```
View
├── TextView
│   ├── Button
│   │   └── CheckBox
│   └── EditText
├── ImageView
└── ViewGroup
    ├── FrameLayout
    ├── LinearLayout
    ├── RelativeLayout
    ├── RecyclerView
    └── AbsListView
        ├── GridView
        └── ListView
```
Everything derive from `View`

### Layout
Layout is a way to organize Views inside an UI, located in `res/layout` 
Every UI is a hierarchical structure, as in layout is built as a tree of nested containers and elements
- The Root: The layout container (ConstrainLayout, LinearLayout, FrameLayout)
- The Branches: Child ViewGroup (a container within a container)
- The Leaves: Individual View (TextView, ImageView, Button)
```Example
LinearLayout (root/parent)
└── LinearLayout (child ViewGroup)
	 ├── TextView ("Weather Report") (grandchild View)
	 ├── ImageView (sunny_icon) (grandchild View)
	 └── Button ("Refresh") (grandchild View)
```
So what if the tree doesn't have root? (ViewGroup(s) but no outside container)
- The View simply won't render/appear

A layout can be changed by the WYSIWYG editor or manually coded

##### XML of a Layout
- Required properties: layout_width, layout_height

How can the layout adapt to different device size and orientation? -> Adaptive Layout
We use different layout XMLs in different directory `res/...`
- Size: `layout-large`, `layout-xlarge`, `layout-normal`, `layout-small`
- Orientation: `layout-land`, `layout-port`

##### Layout Classes
`FrameLayout`
- Multiple layers, Z-based order
- First child start at the bottom, going up like writing Z backward

`LinearLayout`
- One direction
- With `orientation:"vertical"` or `orientation"horizontal"` property, you can have Views go from top-bot or left-right
- Use `layout_weight`, Views will be width or height stretched based on the orientation
	- And the width/height $\omega_{i}$ of child $i$ is calculated based on weight $\gamma_{i}$ as
$$\omega_{i}=\frac{\gamma_{i}}{\sum_{j=0}^{n-1}\limits{\gamma_{j}}}\times(\omega_{parent}-\sum_{k=0}^{n-1}\limits{\omega_{k}}|\gamma_{k}=0)$$
- With $(\sum_{j=0}^{n-1}\limits{\gamma_{j}})$ as the total weight of all children
- And $(\sum_{k=0}^{n-1}\limits{\omega_{k}}|\gamma_{k}=0)$ is the space taken by children with no weight (fixed size)

Example: Given $\omega_{parent}=720px, \omega_{1}=1, \omega_{2}=0, \omega_{3}=1, \textit{Child 2 = 100px}$
$$\omega_{\textit{1 or 3}}=\frac{1}{1+0+1}\times(720-100)=310px$$

`RelativeLayout`
- Multiple layers, Z-order based
	- Going from bottom to top like `FrameLayout`
- Children's position and size related to parent and each other
![[Pasted image 20250930164750.png]]