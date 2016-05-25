function paintcircle() {
    var can = document.getElementById('can');
    //document.write(can.nodeName);
    if (!can.nodeName == 'CANVAS') {
        alert('this element is not a canvas');
    }
    var cans = can.getContext('2d');
    cans.beginPath();
    cans.arc(100, 100, 80, 0, Math.PI, 1);
    cans.closePath();
    cans.strokeStyle = 'red';
    cans.lineWidth = 10;
    cans.stroke();

}

function painttrangle() {
    var can = document.getElementById('trangle');
    if (!can.nodeName == 'CANVAS') {
        alert('this element is not a canvas');
    }
    var cans = can.getContext('2d');
    cans.beginPath();
    cans.moveTo(10, 10);
    cans.lineTo(10, 100);
    cans.lineTo(100, 100);
    cans.fillStyle = 'green';
    cans.fill();
}
function paintline() {
	
    var can = document.getElementById('line');
    if (!can.nodeName == 'CANVAS') {
        alert('this element is not a canvas');
    }
    //alert(can.nodeName);
    var cans = can.getContext('2d');
    cans.beginPath();
    cans.moveTo(130, 120);
    cans.lineTo(200, 200);
    cans.strokeStyle = 'red';
    cans.stroke();
    cans.lineWidth=6;
    cans.beginPath();
    cans.moveTo(200, 200);
    cans.lineTo(230, 300);
    cans.strokeStyle = 'green';
    cans.stroke();

}
function paintrect() {
    var can = document.getElementById('rect');
    if (!can.nodeName == 'CANVAS') {
        alert('this element is not a canvas');
    }
    var cans = can.getContext('2d');
    cans.beginPath();
    cans.rect(20,20,250,100);
    cans.lineWidth=2;
    cans.fillStyle = 'blue';
    cans.fill();
}
function painttask4() {
    var can = document.getElementById('task4');
    var cans = can.getContext('2d');
    cans.beginPath();
    cans.rect(0,0,400,200);
    cans.fillStyle='#ccc';
    cans.fill();
    cans.beginPath();
    cans.fillStyle = '#fc0';
    cans.translate(0,0);
    cans.moveTo(0,0);
    cans.arc(0,0,50,Math.PI,0,Math.PI*0.5,0);
    cans.closePath();
    cans.fill();
    cans.translate(400,200);
    cans.moveTo(0,0);
    cans.arc(0,0,50,Math.PI*1.5,Math.PI*2,1);
    cans.closePath();
    cans.fill();

}

function addEvent(func) {
    var oldload = window.onload;
    if (typeof oldload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldload();
            func();
        }
    }

}
function conloge(){
	var bb=document.getElementByTagName('body')[0];
	alert(window.innerWidth);

}
//addEvent(paintcircle);
//addEvent(painttrangle);
//addEvent(paintline);
//addEvent(paintrect);
addEvent(painttask4);
addEvent(conloge)

