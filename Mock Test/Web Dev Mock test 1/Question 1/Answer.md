# CSS Positions

1. Relative Position: With relative positioning, the element retains its flow in the document and occupies as much space as needed by default, but you can use positioning properties. The idea here is that the element is relative to its default position. Using these positioning elements moves the element around the default position without affecting others.

    ```css
    .blue-block {
      position: relative;
      top: 20px;
      left: 50px;
    }
    ```

2. Absolute Position: Elements with the absolute position are positioned elements that are removed from the flow of the document--like they are not there. Their space on the screen is taken away from them and assigned to other elements. Absolute elements are positioned within the closest relatively positioned parent, and if none, they are placed within the viewport (browser window).

    ```css
    .blue-block {
      /**/
      position: absolute;
      top: 40px;
      left: 50px;
    }
    ```

3. Fixed Position: The fixed position is similar to the absolute position. The difference is that the fixed position does not respect any relative parents (or ancestors). It only respects the viewport.

    ```css
    .container {
      /**/
      position: relative;
    }

    .blue-block {
      /**/
      position: fixed;
      top: 0;
      left: 0;
    }
    ```

4. Sticky Position: The sticky position makes an element stick to a container. The sticky position toggles between the relative and fixed position in a scrolling container. An element of this position style starts with the relative position, retaining its flow in the document. Upon scrolling in the container, if the specified positioning distance (with top, for example) is met, the element becomes fixed until the scrolling container is out of view.

```html
<div class="container">
  <div class="red-block"></div>
  <div class="blue-block"></div>
  <div class="green-block"></div>
  <div class="other-block"></div>
</div>
```

```css
.container {
  width: 400px;
  height: 200px;
  border: 1px solid black;
  overflow-y: auto;
  margin: 20px;
  padding: 20px;
}

.red-block,
.blue-block,
.green-block {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}

.red-block {
  background-color: red;
}

.blue-block {
  background-color: blue;
  position: sticky;
  top: 10px;
}

.green-block {
  background-color: green;
}

.other-block {
  height: 500px;
  margin-top: 20px;
  width: 100%;
  background-color: rgb(61, 61, 61);
}
```
