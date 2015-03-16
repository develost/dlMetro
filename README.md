# dlMetro: dress a Website with Windows 8 Metro ui

## Getting started

* Download at least dlMetro.js and dlMetro.css from the repository

* Start from an empty html file like this
```html
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    </head>
    <body>
    </body>
</html>
```

* Add dlMetro in head (both javascript and css)
```html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" type="text/css" href="../core/css/dlMetro.css">
    <script src="../core/js/dlMetro.js"></script>
</head>
```
* Create into the body the minimal configuration
```html
<body>
    <div class="main"> 
        <div class="flow">
            <div class="content all-size">
            </div>            
        </div>
        <div class="debug all-size" onclick="this.style.display='none';">
            <div class="fallback-size">fallback version <br> with<noscript>out</noscript> javascript</div>
            <div class="min-size">min version <br> with<noscript>out</noscript> javascript</div>
            <div class="mid-size">mid version <br> with<noscript>out</noscript> javascript</div>
            <div class="large-size">large version <br> with<noscript>out</noscript> javascript</div>
            <div class="xlarge-size">xlarge version <br> with<noscript>out</noscript> javascript</div>
            <div class="xxlarge-size">xxlarge version <br> with<noscript>out</noscript> javascript</div>
            <script>document.write("click to hide");</script>
        </div>
    </div>
</body>
```
and test resizing your browser

* Add Header, footer and some cells
```html
<div class="main">
        <div class="fixed-header fallback-size xlarge-size xxlarge-size">
            This is a fixed header
        </div>
        <div class="flow">
            <div class="flow-header min-size mid-size large-size">
                This header flows with content
            </div>
            <div class="content all-size">
                <div class="c6-all-size c3-xlarge-size c2-xxlarge-size"><div class="cell"><br><br><br><br><br><br><br><br><br></div></div>
                <div class="c6-all-size c3-xlarge-size c2-xxlarge-size"><div class="cell"><br><br><br><br><br><br><br><br><br></div></div>
                <div class="c6-all-size c3-xlarge-size c2-xxlarge-size"><div class="cell"><br><br><br><br><br><br><br><br><br></div></div>
                <div class="c6-all-size c3-xlarge-size c2-xxlarge-size"><div class="cell"><br><br><br><br><br><br><br><br><br></div></div>
                <div class="c6-all-size c3-xlarge-size c2-xxlarge-size"><div class="cell"><br><br><br><br><br><br><br><br><br></div></div>
                <div class="c6-all-size c3-xlarge-size c2-xxlarge-size"><div class="cell"><br><br><br><br><br><br><br><br><br></div></div>
            </div>
            <div class="flow-footer min-size mid-size large-size">
                This footer flows with content
            </div>
        </div>
        <div class="fixed-footer fallback-size xlarge-size xxlarge-size">
            This is a fixed footer
        </div>
        ...
    </div>
```

* Create a new CSS file (00custom.css in this example) to set the height of headers and footers

```css
/*.debug{display:none;} *//* decomment in production environment */

/* fallback */
.fixed-header   {height: 100px;}
.flow                  {top: 100px;bottom:50px}
.flow-header     {height:0px;}
.flow-footer     {height:0px;}
.fixed-footer   {height: 50px;}

/* min */
@media only screen and (max-width: 320px) {
    .fixed-header   {height: 0px;}
    .flow                 {top: 0px;bottom:0px}
    .flow-header     {height:50px;}
    .flow-footer     {height:55px;}
    .fixed-footer   {height: 0px;}
}

/* mid */
@media only screen and (min-width: 320px) and (max-width: 640px) {
    .fixed-header   {height: 0px;}
    .flow                 {top: 0px;bottom:0px}
    .flow-header     {height:60px;}
    .flow-footer     {height:55px;}
    .fixed-footer   {height: 0px;}
}

/* large */
@media only screen and (min-width: 640px) and (max-width: 960px) {
    .fixed-header   {height: 0px;}
    .flow                   {top: 0px;bottom:0px}
    .flow-header     {height:70px;}
    .flow-footer     {height:55px;}
    .fixed-footer   {height: 0px;}
}

/* xlarge */
@media only screen and (min-width: 960px) and (max-width: 1280px) {
    .fixed-header   {height: 100px;}
    .flow                   {top: 100px;bottom:50px}
    .flow-header     {height:0px;}
    .flow-footer     {height:0px;}
    .fixed-footer   {height: 50px;}
}

/* xxlarge */
@media only screen and (min-width: 1280px){
    .fixed-header   {height: 100px;}
    .flow                  {top: 100px;bottom:50px}
    .flow-header     {height:0px;}
    .flow-footer     {height:0px;}
    .fixed-footer   {height: 50px;}
}
```

* Do not forget to include css in html file

```html
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" type="text/css" href="../core/css/dlMetro.css">
        <link rel="stylesheet" type="text/css" href="./css/00custom.css">
        <script src="../core/js/dlMetro.js"></script>
    </head>
```

Optional: add colors to html file to see what you are doing
```html
    ...
    <script src="./js/addSomeFun.js"></script>        
    </body>
</html>
```
    
* Now you should see something like this
TODO
    

* Done!
Congratulation you 
TODO

* See more examples
take a tour of \examples\ to see more.
The file 00_readme.html is this example 

## My playgound
TODO


See dlMetro in action [here](http://www.develost.com) - in development
