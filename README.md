# dlMetro
Simple and responsive metro ui with no dependencies.
Build in pure javascript ad plain css.

## Dress a Website with Windows 8 Metro ui
TODO

## Getting started

1. Start from an empty html file like this
```html
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    </head>
    <body>
    </body>
</html>
```

2. Add dlMetro in head (both javascript and css)
```html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" type="text/css" href="../core/css/dlMetro.css">
    <script src="./core/js/dlMetro.js"></script>
</head>
```

3. Create into the body the minimal configuration
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

TODO


## Responsive




See dlMetro in action [here](http://www.develost.com) - in development
