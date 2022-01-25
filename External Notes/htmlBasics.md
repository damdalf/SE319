# **COM S 319: HTML Basics | 1/22/22 |**
## **Introduction to HTML:**
* HTML is short for Hyper Text Markup Language.
* HTML is the standard markup language used for creating websites, and dictates how a website is structured.
    * Think of it likes this: if your website was a house, HTML creates the literal building, but nothing more than that. It dictates where a door, window, or garage may be, but that's all. It doesn't actually make their functionality exist, but it does dictate their location.
* Basic example of an HTML document:
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
<title>Page Title</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
```
![](https://i.gyazo.com/9c4c1b79562c099a079f731718c462ec.png)

* As you can see, an HTML element is defined by a start tag, some form of content, and end tag.
    * However, some HTML elements exist that do not have any form of content, (such as the ```<br>``` element). These elements are called 'empty elements', and do not have an end tag.
        * ```<br>``` - line break element.
        * ```<hr>``` - creates a horizontal line to separate content.

![](https://i.gyazo.com/60560cf32279a6975d476fab4d39f29d.png)

---

## **HMTL Documents:**
* All HTML documents must begin with the ```<!DOCTYPE html>``` document type declaration.
    * In earlier versions of HTML the document declaration, ```<!DOCTYPE>``` was not case sensitive, but in HTML5 it is.
* The HTML document itself must begin with ```<html>``` and end with ```</html>```. 
* The visible part of the HTML document resides between ```<body>``` and ```</body>```.

---

## **HTML Comments, Headings, Paragraphs, Links, and Images:**
* Comments in HTML begin with ```<!--``` and end with ```-->```.
* Headings in HTML are defined with the ```<h1>``` to ```<h6>``` element tags.
    * ```<h1>``` defines the most important heading, and ```<h6>``` defines the least important heading. 
* Paragraphs in HTML are defined with the ```<p>``` tag.
    * HTML automatically removes extra spaces or lines in your HTML code.
    * However, you can use the ```<pre>``` element to define preformatted text, preserving both extra spaces and lines.
* Links in HTML are defined with the ```<a>``` tag.
    * However, the link destination is specified in the ```href``` attribute:
```HTML
<a href="https://www.YouTube.com"> Welcome to YouTube.</a>
```
![](https://i.gyazo.com/e4440dfe12ecfcd8bde0015b1bb487af.png)

* Images in HTML are defined with the ```<img>``` tag.
    * However, there are multiple attributes that are included:
        * ```src``` - the path to the source file.
            * It is best to use relative URL's.
        * ```alt``` - the alternate text.
            * This text is displayed if for some reason the image cannot be displayed.
        * ```width``` - the width of the image (in pixels).
        * ```height``` - the height of the image (in pixels).
```HTML
<img src="somePicture.png" alt="someWebsite.com" width="104" height="142">
```

![](https://i.gyazo.com/1d20014b039f3b18f14d06164ce9214b.png)

---

## **HTML Attributes:**
* HTML attribute - provides additional information about HTML elements. 
    * They are always specified in the start tag.
    * They tend to come in name / value pairs like: ```name="value"```.
    * ```style``` - used to add styles to an element, such as color, font, size, and more.
    * ```lang``` - shoulf always be included within the ```<html>``` tag to declare the language of the web page.
        * This is meant to assist search engines and browsers. 
    * ```title``` - defines some extra information about an element. 
        * The value of the ```title``` attribute will be displayed as a tooltip when you hover your mouse over the element. 

![](https://i.gyazo.com/48478efd76004614cae0b85968593df6.png)

---

## **HTML Style Attribute:**
```html
<tagName style="property:value;">
```
* The ```property``` is a CSS property.
* The ```value``` is a CSS property.

![](https://i.gyazo.com/23ec4c80f84298d062ed56174500c795.png)

---

## **HTML Text Formatting Elements:**
![](https://i.gyazo.com/e101eadad633a58cbddf80766dfa8f1a.png)

---

## **HTML Quotation and Citation Elements:**
 ![](https://i.gyazo.com/126acdb87a1e010d0a0c55963dd4a90d.png)

 ---

 ## **HTML Colors:**
 ![](https://i.gyazo.com/1d955d703b66fe00eaad006a08866859.png)

* Colors can also be set using RGB, HEX, HSL, RGBA, and HSLA values.
    * RGBA and HSLA allow the transparency to be set.

 ---

 ## **HTML and CSS:**
![](https://i.gyazo.com/bc880b3577a7b594601b095ad4b6ad6d.png)

 ---

 ## **HTML Tables:**
![](https://i.gyazo.com/e922fb81e4086d0e20ceca7b3561bc11.png)

 ---

 ## **HTML Lists:**
![](https://i.gyazo.com/a93b34ebbdd673d350ac41d759d5517a.png)

 ---

## **HTML Block vs. Inline:**
![](https://i.gyazo.com/e15100dc742c8be9846b0a6e27298918.png)

---

## **HTML Head:**
![](https://i.gyazo.com/58ff25995f7c4b540a792e1261383d72.png)

---