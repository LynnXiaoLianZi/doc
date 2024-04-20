window.onload = function(){
   if (window.innerWidth <= 720){ 
   } else {
   //document.getElementById("totopbutton").style.marginLeft = "350px";
   document.getElementById("navbutton").style.marginLeft = "350px";
   document.getElementById("mySidenav").style.width = "350px";
   $('#navbutton').css({opacity: 0}).animate({opacity: 1}, 2800);
   }
}

window.onresize = function(){
    if (window.innerWidth <= 720){ closeNav() };
    if (window.innerWidth >= 721){ openNav() };
}

function toTop() {
   $('html, body').animate({ scrollTop: 0 }, 'fast');
}

function doNav() {
  var x = document.getElementById("mySidenav").style.width;
  if (x == "350px") {
  closeNav();
  }
  else {
  openNav();
  }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
    document.getElementById("navbutton").style.marginLeft = "350px";
    //document.getElementById("totopbutton").style.marginLeft = "350px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    //document.getElementById("totopbutton").style.marginLeft= "0";
    document.getElementById("navbutton").style.marginLeft= "0";
}

var f = document.getElementById('toctobj2');
var t = window.location.href;
// have to check against all first-level folders 
if (t.lastIndexOf('flac3d/') > 1){t = t.substring(t.lastIndexOf('flac3d/'))};
if (t.lastIndexOf('common/') > 1){t = t.substring(t.lastIndexOf('common/'))};
if (t.lastIndexOf('pfc/') > 1){t = t.substring(t.lastIndexOf('pfc/'))};
if (t.lastIndexOf('udec/') > 1){t = t.substring(t.lastIndexOf('udec/'))};
if (t.lastIndexOf('3dec/') > 1){t = t.substring(t.lastIndexOf('3dec/'))};
f.src = f.src + '?' + t;

//dynamic swap of swap of logo + name when in code section + set logo-link to 'home' page for code + set "alpha/prerelease" watermark as needed
f = document.getElementById('cornerlogo');
t = window.location.href;
if (t.lastIndexOf('/html/flac3d/') > 0 || t.lastIndexOf('/doc/flac3d/') > 0 || t.lastIndexOf('/flac3d/docproject/') > 0) {
  f.src = f.src.substring(0,f.src.lastIndexOf('/')) + '/flac3d32.png';
  document.getElementById('cornercodename').innerHTML = 'FLAC3D';
  document.getElementById('cornerlink').href = t.substring(0,t.lastIndexOf('/flac3d/')) + '/flac3d/docproject/source/flac3dhome.html';
}
//if (t.lastIndexOf('/html/pfc/') > 0 || t.lastIndexOf('/doc/pfc/') > 0 || t.lastIndexOf('/pfc/docproject/') > 0) {
if (t.lastIndexOf('/html/pfc/') > 0 || t.lastIndexOf('/doc/pfc/') > 0 > 0) {   
  f.src = f.src.substring(0,f.src.lastIndexOf('/')) + '/pfc3d32.png';
  document.getElementById('cornercodename').innerHTML = 'PFC';
  document.getElementById('cornerlink').href = t.substring(0,t.lastIndexOf('/pfc/')) + '/pfc/docproject/source/manual/pfchome.html';
  //special little hack for pfc home page to put alpha tag below splash image - remove when not in alpha
}
//if (t.lastIndexOf('/html/3dec/') > 0 || t.lastIndexOf('/doc/3dec/') > 0 || t.lastIndexOf('/3dec/docproject/') > 0) {    // suspended until third term is understood
if (t.lastIndexOf('/html/3dec/') > 0 || t.lastIndexOf('/doc/3dec/') > 0) {
  f.src = f.src.substring(0,f.src.lastIndexOf('/')) + '/3dec32.png';
  document.getElementById('cornercodename').innerHTML = '3DEC';
  document.getElementById('cornerlink').href = t.substring(0,t.lastIndexOf('/3dec/')) + '/3dec/docproject/source/3dechome.html';
  // var p = document.getElementById('cornerlink').href = t.substring(0,t.lastIndexOf('/3dec/')) + '/_static/prerel.png';   //delete when not in alpha/prerelease
  // document.getElementById('mainbody').innerHTML = '<img src="'+p+'" style="position: absolute; margin-left: 27em; margin-top: 2em;" id="alphatag">' + document.getElementById('mainbody').innerHTML; //delete when not in alpha
}


document.getElementById("navbutton").onclick = function() {
   doNav();
}

//document.getElementById("totopbutton").onclick = function() { toTop(); }

//the iffyness
if ($('#pagecodeid').length > 0){
   if ($('#pagecodeid').html() == "common") {
      codeis = $('#codeid')[0].innerHTML; //common pages derive code from build
   } else {
      codeis = $('#pagecodeid').html();   //non-common pages derive code from tag
   }
   console.log(codeis);
   //codeis = $('#pagecodeid').html();
   
   //swap codename into span tags as needed
   $('span.codeis').text(codeis);
   //cleanup classname as needed
   if (codeis != '3DEC') {codeclass = '.' + codeis.toLowerCase();} //all but 3dec
   if (codeis == '3DEC') {codeclass = '.dec';}  //can't start a class name with a digit
   //show divs
   $('div'+codeclass).css('display', 'block');
   //show spans
   $('span'+codeclass).css('display', 'inline');
   }


//show ids of and around clicked object
$('h1,h2,h3,h4,.h1,.h2,.h3,.h4,table,p').dblclick(function() {
   // 0- only run if on local machine
   if(window.location.href.indexOf("/wad700/") == -1) {
      return;
      }
   // 1- check if uilib is loaded, load ONCE if not
   var head_tag = document.getElementsByTagName("head")[0];
   if (head_tag.innerHTML.indexOf("jquery-ui.js") == -1) {
      $(this).prop('title', 'That was the first double-click');
      var script_tag = document.createElement('script');
      script_tag.setAttribute("src", "https://code.jquery.com/ui/1.12.1/jquery-ui.js");
      head_tag.appendChild(script_tag);
      var link_tag = document.createElement('link');
      link_tag.setAttribute("rel", "stylesheet");
      link_tag.setAttribute("href", "https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css");
      head_tag.appendChild(link_tag);
      $("<style type='text/css'> .superlocal{ font-size:1em; font-family: unset;} </style>").appendTo("head");
      return;
      } else {
      $(this).prop('title', ' ');
      };
   // 2- get info and put in dialog
   var par = (this.parentElement) ? [this.parentElement.tagName, this.parentElement.id] : ['none', '(n/a)'] ;
   var pre = (this.previousElementSibling) ? [this.previousElementSibling.tagName, this.previousElementSibling.id] : ['none', '(n/a)'] ;
   var nex = (this.nextElementSibling) ? [this.nextElementSibling.tagName, this.nextElementSibling.id] : ['none', '(n/a)'];
   var chi = (this.firstElementChild) ? [this.firstElementChild.tagName, this.firstElementChild.id] : ['none', '(n/a)'];
   
   var f = '\xa0\u2196\xa0\xa0' + par[0] + ": " + par[1] +  '<br>' + 
           '\xa0\u2191\xa0\xa0' + pre[0] + ": " + pre[1] + '<br>' +
           '\u2192 '+ this.tagName + ': ' + this.id + '<br>' + 
           '\xa0\u2193\xa0\xa0' + nex[0] + ": " + nex[1] + '<br>' +
           '\xa0\u2198\xa0\xa0' + chi[0] + ": " + chi[1] ;
   $( "<div>" + f + "</div>" ).dialog({
     title: "Local IDs",
     width: 400,
     dialogClass: 'superlocal'
     });
  });
  
//change target of wth if page is in code to prevent attempt to open new tab
//if(window.location.href.indexOf("/doc/") == -1){alert('fred')}

