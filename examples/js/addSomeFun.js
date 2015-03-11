/**
 * Cicle through all "headers cells footers" setting background color
 * just for fun
 */
function debugColors(){
    var fixedHeaders = document.getElementsByClassName("fixed-header");
    for(var i = 0; i < fixedHeaders.length; i++){
        fixedHeaders[i].style.background=getRandomColor();
    }
    var flowHeaders = document.getElementsByClassName("flow-header");
    for(var i = 0; i < flowHeaders.length; i++){
        flowHeaders[i].style.background=getRandomColor();
    }
    var cells = document.getElementsByClassName("cell");
    for(var i = 0; i < cells.length; i++){
        cells[i].style.background=getRandomColor();
    }
    var flowFooters = document.getElementsByClassName("flow-footer");
    for(var i = 0; i < flowFooters.length; i++){
        flowFooters[i].style.background=getRandomColor();
    }             
    var fixedFooters = document.getElementsByClassName("fixed-footer");
    for(var i = 0; i < fixedFooters.length; i++){
        fixedFooters[i].style.background=getRandomColor();
    }
}


/**
 * Return a random color
 */
function getRandomColor() {
    var letters = '89ABCDE'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 7)];
    }
    return color;
}

debugColors();
