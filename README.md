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

sel first sibling _(paragraph)_

```css
.sibling-to-paragraphs + p {
  color: red;
}
```

<hr/>
## ✍️ Author <a name = "author"></a>

- [@masiucd](https://github.com/masiucd) - Idea & Initial work
