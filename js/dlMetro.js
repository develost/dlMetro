/**
 * Implement document.getElementsByClassName if not present
 */
if (!document.getElementsByClassName) {
    document.getElementsByClassName=function(cn) {
        var allT=document.getElementsByTagName('*'), allCN=[], i=0, a;
        while(a=allT[i++]) {
            a.className==cn ? allCN[allCN.length]=a : null;
        }
        return allCN;
    }
}

/**
 * Get scrollbar size cross browser
 */
function getScrollBarSize () {  
    var inner = document.createElement('p');  
    inner.style.width = "100%";  
    inner.style.height = "100%";  
    var outer = document.createElement('div');  
    outer.style.position = "absolute";  
    outer.style.top = "0px";  
    outer.style.left = "0px";  
    outer.style.visibility = "hidden";  
    outer.style.width = "100px";  
    outer.style.height = "100px";  
    outer.style.overflow = "hidden";  
    outer.appendChild (inner);  
    document.body.appendChild (outer);  
    var w1 = inner.offsetWidth;  
    outer.style.overflow = 'scroll';  
    var w2 = inner.offsetWidth;  
    if (w1 == w2) w2 = outer.clientWidth;
    document.body.removeChild (outer);  
    //alert("w:" + (w1-w2));
    return (w1 - w2);  
};

function hideFlowScrollBar(){
    document.getElementsByClassName("flow");
    var flows = document.getElementsByClassName("flow");
    for(var i=0; i<flows.length; i++){
        flows[i].style.right = -getScrollBarSize() + "px";
    }
}
        
function arrangeGui(){
    hideFlowScrollBar();
    pairHeights();
    //debugColors();
}
        
/**
 * cells with same top becomes equals in height, max height of them
 * containers div are resized too
 */
function pairHeights(){
    var cellsOnSameRow = new Array();
    var cellsMaxHeight = 0;
    var cellsCurrentTop = 0;
    var cells = document.getElementsByClassName("cell");
    var paddingTop = 0;
    var paddingBottom = 0;
    for(var i = 0; i < cells.length; i++){
        cells[i].style.height="auto";
        // se il top della cella corrente e' uguale a quella precedente allora immeterla nel vettore e controllare l'altezza massima
        if (cells[i].offsetTop == cellsCurrentTop){
            cellsOnSameRow.push(cells[i]);
            if (cells[i].scrollHeight > cellsMaxHeight){
                cellsMaxHeight = cells[i].scrollHeight;
            }
        } else {
            for (var j = 0; j<cellsOnSameRow.length ; j++){
                paddingTop = parseFloat(window.getComputedStyle(cellsOnSameRow[j], null).getPropertyValue('padding-top'));
                paddingBottom = parseFloat(window.getComputedStyle(cellsOnSameRow[j], null).getPropertyValue('padding-bottom'));
                cellsOnSameRow[j].style.height = (cellsMaxHeight-paddingTop-paddingBottom) + "px";
            }
            // empty array
            while(cellsOnSameRow.length > 0) {cellsOnSameRow.pop();}
            // add current node
            cellsOnSameRow.push(cells[i]);
            cellsMaxHeight = cells[i].scrollHeight;
            cellsCurrentTop = cells[i].offsetTop;
        }
    }
    // settare le ultime celle ad altezza massima
    for (var j = 0; j<cellsOnSameRow.length ; j++){
        paddingTop = parseFloat(window.getComputedStyle(cellsOnSameRow[j], null).getPropertyValue('padding-top'));
        paddingBottom = parseFloat(window.getComputedStyle(cellsOnSameRow[j], null).getPropertyValue('padding-bottom'));
        cellsOnSameRow[j].style.height = (cellsMaxHeight-paddingTop-paddingBottom) + "px";
    }
}
        
/**
 * Handle page resize
 */
var resizeTimeOut;
function onBodyResize(){
    clearTimeout(resizeTimeOut);
    resizeTimeOut = setTimeout(arrangeGui, 1);
}
window.onload=function(){onBodyResize();};
window.onresize=function(){onBodyResize();};
        
        
        
        
