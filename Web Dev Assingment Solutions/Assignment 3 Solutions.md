# Assignment 3

## Q.1 What is a Media Query in CSS, and what is its purpose?

- A media query in CSS is a feature that allows you to apply different styles and layout adjustments based on certain conditions, such as the characteristics of the device or the viewport size. It enables you to create responsive designs that adapt to different screen sizes, orientations, device capabilities, and other specific conditions.

## Q.2 How do you define a media query in CSS?

- In CSS, you can define a media query using the @media rule. The @media rule allows you to specify different styles and layout adjustments based on specific conditions, such as the characteristics of the device or the viewport size

```css
@media media_type and (media_feature: value) {
  /* CSS rules to be applied when the media query matches */
}
```

## Q.3 Explain the concept of Breakpoints in Responsive Web Design and How They are used in Media Queries

- Breakpoints are used in media queries to target specific viewport widths or device characteristics and apply appropriate styles accordingly. Media queries with breakpoints allow you to define different sets of CSS rules based on the screen size or other conditions, ensuring that the layout adapts smoothly as the viewport changes.

```css
/* Default styles for all screen sizes */

@media (min-width: 768px) {
  /* Styles for screens with a minimum width of 768 pixels (small to medium screens) */
  /* Adjustments for small and medium screens */
}

@media (min-width: 992px) {
  /* Styles for screens with a minimum width of 992 pixels (medium to large screens) */
  /* Adjustments for medium and large screens */
}

@media (min-width: 1200px) {
  /* Styles for screens with a minimum width of 1200 pixels (large screens) */
  /* Adjustments for large screens */
}

```

## Q.4 What is the purpose of using Media Queries for Print Media?

- Media queries for print media allow you to define specific styles and layout adjustments that are applied when a document is printed or viewed in print preview mode. They help optimize the content for printing by adjusting the layout, font sizes, margins, controlling page breaks, hiding irrelevant elements, and adjusting backgrounds/colors. Using print media queries ensures that the printed version of a document is well-formatted, readable, and free from unnecessary elements, enhancing the overall printing experience.

## Q.5 What is the purpose of the **`orientation`** media feature?

- The orientation media feature is used in CSS media queries to target the orientation of a device or browser window. It allows you to apply different styles based on whether the device is in portrait mode (vertical orientation) or landscape mode (horizontal orientation).

- The purpose of the orientation media feature is to provide the ability to customize the layout and styles of a web page based on the orientation of the device. This is particularly useful for optimizing the presentation and usability of a web page on different screen orientations.

```css
@media (orientation: landscape) {
  /* Styles applied when the device is in landscape mode */
  /* e.g., repositioning, adjusting sizes, or changing the layout */
}

@media (orientation: portrait) {
  /* Styles applied when the device is in portrait mode */
  /* e.g., repositioning, adjusting sizes, or changing the layout */
}
```

## Q.6 Imagine you are a web developer working for a creative agency that specializes in building visually appealing and interactive websites. The agency has recently received a client request to create a landing page similar to the design of the one-page website: <https://www.getonecard.app/>. The client wants to showcase a video prominently on the page to engage visitors. Your task is to create a simple webpage that replicates the one-page landing page design, including a responsive layout and an HTML video. The below images are for your reference. Some browsers don’t allow you to play videos without the controls attribute. So, you can add controls here, we will learn how to play a video without the controls attribute in the later sections

- We can play a video on a website without using `controls` attribute by adding 3 other attributes `autoplay` for automatically playing the video when the website is loaded. We also need to add `muted` attribute otherwise some browsers will not play the video and to play the video in loop we should add `loop` attribute. Example in github repo below:
- [Github repo link](https://github.com/Steevel/DSA-Assignment-Solutions/tree/master/Web%20Dev%20Assingment%20Solutions/Projects/Assignment%203%20-%20Question%206)

## Q.7 You are tasked with building a webpage that displays an image gallery using a grid layout. The challenge is to ensure the gallery is visually appealing and functional on both large and small screens. On large screens, the gallery should display multiple images per row, while on small screens, it should collapse into a single column for optimal viewing. Refer to the attached images for visual reference. Implement this using CSS Grid and media queries for responsiveness

- [Github repo link](https://github.com/Steevel/DSA-Assignment-Solutions/tree/master/Web%20Dev%20Assingment%20Solutions/Projects/Assignment%203%20-%20Question%207%20-%20Grid)

## Q.8 In this coding challenge, your task is to create an information section for the previously built OneCard webpage clone, focusing on the different modes like dark and light modes. The webpage should look different depending on the screen size: dark mode for larger screens and light mode for smaller devices. The reference images are attached below

- [Github repo link](https://github.com/Steevel/DSA-Assignment-Solutions/tree/master/Web%20Dev%20Assingment%20Solutions/Projects/Assignment%203%20-%20Question%208)

## Q.9 You have reached the final task of learning responsive web design, which involves designing a responsive footer. Your goal is to build a simple webpage footer that matches the design shown in the attached image. The footer should adapt to different screen sizes, ensuring optimal visibility and alignment of the content. Refer to the attached image for a visual reference

- [Github repo link](https://github.com/Steevel/DSA-Assignment-Solutions/tree/master/Web%20Dev%20Assingment%20Solutions/Projects/Assignment%203%20-%20Question%209)

## Q.10 You have been given to create a student dashboard page that includes a student details table. The challenge lies in handling the table's display on different screen sizes. On large screens, the table should be fully visible, while on small screens, it should have an internal scroll to ensure proper visibility of information. Refer to the attached images for visual reference

- [Github repo link](https://github.com/Steevel/DSA-Assignment-Solutions/tree/master/Web%20Dev%20Assingment%20Solutions/Projects/Assignment%203%20-%20Question%2010)
