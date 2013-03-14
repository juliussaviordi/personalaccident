// function.js
// dipanggil dari index.html dan content.html
// project: catalogue

title = new Array();
arfileimage = new Array();
title[  1]      ='Personal Accident';
arfileimage[  1]='Slide1.JPG';
title[  2]      ='Manfaat Resiko Meninggal Dunia';
arfileimage[  2]='Slide2.JPG';
title[  3]      ='Manfaat Resiko Cacat Tetap';
arfileimage[  3]='Slide3.JPG';
title[  4]      ='Manfaat Resiko Biaya Pengobatan dan Perawatan';
arfileimage[  4]='Slide4.JPG';
title[  5]      ='Ketentuan Umum';
arfileimage[  5]='Slide5.JPG';
title[  6]      ='Ketentuan Underwriting';
arfileimage[  6]='Slide6.JPG';
title[  7]      ='Premi';
arfileimage[  7]='Slide7.JPG';
title[  8]      ='Penggolongan Jenis Pekerjaan';
arfileimage[  8]='Slide8.JPG';
title[  9]      ='Terima kasih';
arfileimage[  9]='Slide9.JPG';
	
		
var fileimage = arfileimage[1];
var maxpage = 9;









function displaytopscreen(indexpage,sliding) {
var nextpage = Number(indexpage)+1;	
if (nextpage > maxpage) {nextpage = maxpage;}

var prevpage = Number(indexpage)-1;	
if (prevpage == 0) {prevpage = 1;}

//if (indexpage == maxpage) {sliding=0;}

var slidingstatus = '';
var slidingbutton = '';
if (sliding == 1) 
	{
	slidingstatus= "&sliding=1";
	slidingbutton= "<input type='button' value='Stop'  onclick=\"location.href='content.html?page="+indexpage+"&sliding=0';\">";
	}
else
	{
	slidingstatus= "&sliding=0";
	slidingbutton= "<input type='button' value='Play'  onclick=\"location.href='content.html?page="+nextpage+"&sliding=1';\">";
	}

document.getElementById("topscreen").innerHTML = 
//		"<div class='logo'>"+
//		"</div>"+
//		"<div class='titlebar'>"+
//		"<div id='title' width='30%' style='float: left'>"+
//		"judul</div>"+
//		"<div id='page' width='30%' align='right'>"+
//		"halaman</div>"+
//		"<div style='clear: both' ></div>"+
//		"</div>"+
		"<div class='navbar'>"+
		"<form method='post' name='form' id='form'>"+
		"<div width='30%' style='float: left'>"+
		"<input type='button' value='1x' onclick='return normal(fileimage);'>"+
		"<input type='button' value='2x' onclick='return zoom2x(fileimage);'>"+
		"<input type='button' value='3x' onclick='return zoom3x(fileimage);'>"+
		"<input type='button' value='4x' onclick='return zoom4x(fileimage);'>"+
		"</div>"+
		"<div width='30%' align='right'>"+
		"<input type='button' value='Menu'  onclick=\"location.href='index.html';\">"+
		slidingbutton+
		"<input type='button' value='<'  onclick=\"location.href='content.html?page="+prevpage+slidingstatus+"';\">"+
		"<input type='button' value='>'  onclick=\"location.href='content.html?page="+nextpage+slidingstatus+"';\">"+	
		//"<input type='image' src='images/next.png' width='30' height='30' onclick=\"location.href='content.html?page="+nextpage+slidingstatus+"';\">"+	
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id='page' width='30%'>"+
		"halaman</span>"+
		"</div>"+
		"<div style='clear: both' ></div>"+
		"</div>";
		
		
		document.getElementById("page").innerHTML = indexpage;	
		//document.getElementById("title").innerHTML = "<b>"+title[indexpage]+"</b>";
}












function displaybottomscreen(indexpage,sliding) {
var nextpage = Number(indexpage)+1;	
if (nextpage > maxpage) {nextpage = maxpage;}

var prevpage = Number(indexpage)-1;	
if (prevpage == 0) {prevpage = 1;}

//if (indexpage == maxpage) {sliding=0;}

var slidingstatus = '';
var slidingbutton = '';
if (sliding == 1) 
	{
	slidingstatus= "&sliding=1";
	slidingbutton= "<input type='button' value='Stop'  onclick=\"location.href='content.html?page="+indexpage+"&sliding=0';\">";
	}
else
	{
	slidingstatus= "&sliding=0";
	slidingbutton= "<input type='button' value='Play'  onclick=\"location.href='content.html?page="+nextpage+"&sliding=1';\">";
	}

document.getElementById("bottomscreen").innerHTML = 
		"<div class='navbar' align='right'>"+
		"<input type='button' value='Menu'  onclick=\"location.href='index.html';\">"+
		slidingbutton+
		"<input type='button' value='<'  onclick=\"location.href='content.html?page="+prevpage+slidingstatus+"';\">"+
		"<input type='button' value='>'  onclick=\"location.href='content.html?page="+nextpage+slidingstatus+"';\">"+		
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id='pagebottom' width='30%'>"+
		"halaman</span>"+
		"</form>"+
		"</div>";

		document.getElementById("pagebottom").innerHTML = indexpage;	

}



function normal(fileimage){
	//if(window.screen.availHeight > window.screen.availWidth)
	//if(screen.height > screen.width)
	if(document.body.clientHeight > document.body.clientWidth)
		{
		document.getElementById("gambar").innerHTML = "<img class='image' src='images/"+fileimage+"' />"
		}
	else
		{
		document.getElementById("gambar").innerHTML = "<img class='imagevertical' src='images/"+fileimage+"' />"
		}
}
function zoom2x(fileimage){
	document.getElementById("gambar").innerHTML = "<img class='imagezoom2x' src='images/"+fileimage+"' />";
}
function zoom3x(fileimage){
	document.getElementById("gambar").innerHTML = "<img class='imagezoom3x' src='images/"+fileimage+"' />";
}
function zoom4x(fileimage){
	document.getElementById("gambar").innerHTML = "<img class='imagezoom4x' src='images/"+fileimage+"' />";
}
function zoom5x(fileimage){
	document.getElementById("gambar").innerHTML = "<img class='imagezoom5x' src='images/"+fileimage+"' />";
}




function right(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}

function slideshow(indexpage,sliding){
	if (sliding==1)
		{
		var nextpage = Number(indexpage)+1;	
		if (nextpage > maxpage) {nextpage = 1;}	
		setTimeout ( "window.open('content.html?page="+nextpage+"&sliding=1','_self')", 5000 );
		}
}


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


