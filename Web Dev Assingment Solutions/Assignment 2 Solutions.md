# Assignment 2

## Q.1 What’s Box Model in CSS ?

- The CSS box model is essentially a box that wraps around every HTML element. It is used to create the design and layout of web pages. According to the CSS box model, the web browser supplies each element as a square prism. The CSS box model is a container that contains multiple properties including borders, margins, padding, and the content itself.

## Q.2 What are the Different Types of Selectors in CSS & what are the advantages of them?

1. Element selector: The element selector selects HTML elements based on the element name (or tag) for example p, h1, div, span, etc.

2. Id selector: The id selector uses the id attribute of an HTML element to select a specific element. id of an HTML element should be unique on a page

3. Class-selector: The class selector selects HTML elements with a specific class attribute.

4. Universal-selector: The Universal selector (*) in CSS is used to select all the elements in an HTML document.

5. Group selector: This selector is used to style all comma-separated elements with the same style.

6. Attribute Selector: The attribute selector [attribute] selects the elements with a specified attribute or attribute value.

7. Pseudo-Class Selector: It is used to style a special type of state of any element. For example- It is used to style an element when a mouse cursor hovers over it.

8. Pseudo-Element Selector: It is used to style any specific part of the element. For Example- It is used to style the first letter or the first line of any element.

## Q.3 What is VW/VH ?

- vw stands for Viewport Width whereas vh stands for Viewport Height. px stands for pixel. The HTML elements whose dimensions are defined in pixels will take the same dimensions irrespective of the screen size whereas vw & vh are used to define the dimensions of an element relative to the percentage(%) of width or height of the viewport respectively

## Q.4 Whats difference between Inline, Inline Block and block ?

1. display:block adds a line break after the element forcing the next element to sit on the next line

2. display:inline does not add a line-break after the element, so the element can sit next to other elements but this does not let the width and height, top and bottom padding/margin be individually set for each element.

3. display: inline-block does not add a line-break after the element, so the element can sit next to other elements and also lets you define their width and height, top and bottom padding/margin

## Q.5 How is Border-box different from Content Box?

- In the content box model, the content inside of the element will have the same dimension as the element. In the border box model, the content's dimension has to subtract the border and padding from the element's dimension.

## Q.6 What’s z-index and How does it Function ?

- Z Index is a CSS property that defines the order of overlapping HTML elements. Elements with a higher index will be placed on top of elements with a lower index. Z index only works on positioned elements ( position: absolute, position: relative, or position: fixed ).

## Q.7 What’s Grid & Flex and difference between them?

1. Layout approach: Flexbox focuses on arranging elements along a single axis, while Grid allows for two-dimensional layouts with rows and columns.
2. Complexity: Grid is generally more powerful and complex, suitable for creating overall page layouts, whereas Flexbox is often used for simpler component-level layouts or aligning items within a container.
3. Alignment control: Flexbox provides precise control over the alignment and distribution of items along a single axis, while Grid provides control over both axes.
4. Content order: Flexbox allows you to easily reorder elements using order, while Grid relies on the source order of elements.
5. Browser support: Flexbox has better browser support, including older versions, while Grid has good support in modern browsers but may require fallbacks for older ones.

## Q.8 Difference between absolute and relative and sticky and fixed position explain with example

- Relative Position: With relative positioning, the element retains its flow in the document and occupies as much space as needed by default, but you can use positioning properties. The idea here is that the element is relative to its default position. Using these positioning elements moves the element around the default position without affecting others

- Absolute Position: Elements with the absolute position are positioned elements that are removed from the flow of the document--like they are not there. Their space on the screen is taken away from them and assigned to other elements. Absolute elements are positioned within the closest relatively positioned parent, and if none, they are placed within the viewport (browser window).

- Fixed Position: The fixed position is similar to the absolute position. The difference is that the fixed position does not respect any relative parents (or ancestors). It only respects the viewport.

- Sticky Position: The sticky position makes an element stick to a container. The sticky position toggles between the relative and fixed position in a scrolling container. An element of this position style starts with the relative position, retaining its flow in the document. Upon scrolling in the container, if the specified positioning distance (with top, for example) is met, the element becomes fixed until the scrolling container is out of view.

## Q.9 Build Periodic Table as shown in the below image

- [Github repo link](https://github.com/Steevel/Placement-Assignment-Steevel/tree/master/02_CSS/Question%208)

## Q.10 Build Responsive Layout both desktop and mobile and Tablet, see below image for reference ?

- [Github repo link](https://github.com/Steevel/Placement-Assignment-Steevel/tree/master/02_CSS/Question%2010)
