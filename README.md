<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="./css.svg" alt="Project logo"></a>
</p>

<h3 align="center">Css stuff</h3>

<div align="center">

</div>

---

<p align="center"> small CSS examples that can be useful iin different projects ore just for some kind of inspiration.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Selectors](#selectors)
- [Margin Collapse](#margin-collapse)

## 🧐 About <a name = "about"></a>

CSS tips and tricks, smaller projects for learning purpose.
pick your `sick pick` and use it, if you want! 💪

<hr/>

## Selectors <a name = "selectors"></a>

How we can style different elements using `CSS` with using different selectors.

#### Pseudo classes

We can use Pseudo classes to target a specific element without using traditional classes ore id's

The most basic or common example of interactive styling are state pseudo classes.

<ul>
  <li><a href="http://some-url.io">Website</a></li>
  <li><a href="http://some-ur2.io">Website</a></li>
  <li><a href="http://some-ur3.io">Website</a></li>
  <li><a href="http://some-ur4.io"> Website</a></li>
  <li><button>Click it!</button></li>
  <li><a id="named-anchor">Named Anchor</a></li>
</ul>

```css
a:visited {
  color: peru;
}

a:link {
  color: #fe3;
  background: #333;
}

a[href]:hover {
  transform: scale(1.2);
  display: block;
}
```

#### Adjacent Sibling Selector

Select an element that directly follows another element.

selects every element with `class=some-div` that directly follows a `<p>`

```css
p + .some-div {
  /*css code here*/
}
```

select first sibling _(paragraph)_

```css
.sibling-to-paragraphs + p {
  color: red;
}
```

<hr/>

## Margin Collapse <a name ="margin-collapse"></a>

The Top and bottom margins will sometimes be combined `(collapse/merged)`
into a single margin. The element with the largest margin wins and we get the behavior of margin collapse.

There are some reason for `margin collapsing`. **Like Mozilla says**!

<!-- intilligande -->

- Adjacent sibling
  The margins of an adjacent sibling will collapse to the sibling with a higher margin.

<!-- efterkommande -->

- Nothing that separates parent element and descendants
  Like using border,padding, inline part, block to separate the `margin-top`.

- Empty blocks
  - If there is no border, padding, inline content, height, or min-height to separate a block's margin-top from its margin-bottom, then its top and bottom margins collapse.

_Some things to note:_

\*More complex margin collapsing (of more than two margins) occurs when the above cases are combined.

- These rules apply even to margins that are zero, so the margin of a descendant ends up outside its parent (according to the rules above) whether or not the parent's margin is zero.

- When negative margins are involved, the size of the collapsed margin is the sum of the largest positive margin and the smallest (most negative) negative margin.

- When all margins are negative, the size of the collapsed margin is the smallest (most negative) margin. This applies to both adjacent elements and nested elements.

```css
p {
  font-size: 2rem;
  margin-top: 24px;
  margin-bottom: 24px;
}

p:first-child {
  background-color: palevioletred;
  margin-bottom: 79px;
}

p ~ p {
  background-color: powderblue;
  margin-bottom: 45px;
}
```

<hr/>

## ✍️ Author <a name = "author"></a>

- [@masiucd](https://github.com/masiucd) - Idea & Initial work
