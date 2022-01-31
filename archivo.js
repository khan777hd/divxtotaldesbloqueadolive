var ajaxurl = 'https://www.divxtotal.nl/wp-admin/admin-ajax.php';
div.wpcf7 .ajax-loader {
				background-image: url('https://www.divxtotal.nl/wp-content/plugins/contact-form-7/images/ajax-loader.gif');
			}
			if(top.location!=this.location) top.location=this.location;
			function CheckCookie(telegram){
   if (cookie(telegram)){
    document.getElementById(telegram).style.display='none';
    document.getElementById("telegram_popup").style.display='none';   
   }
  }
  function setcookie(telegram,days){
   document.cookie=telegram+'=true;expires='+(new Date(new Date().getTime()+days*1728000000) .toGMTString())+';path=/';
   document.getElementById(telegram).style.display='none';
   document.getElementById("telegram_popup").style.display='none';   
  }
  function cookie(telegram){
   var re=new RegExp(telegram+'[^;]+','i');
   if (document.cookie.match(re)){
    return document.cookie.match(re)[0].split("=")[1];
   }
   return null;
  }



function showIt2(){
    if(document.getElementById("DivxTelegram")) {
    document.getElementById("DivxTelegram").style.display = "block";
    }
}
setTimeout("showIt2()", 1000);



</script>



<script>
var template = "https://www.divxtotal.nl/wp-content/themes/DivxTotal";
jQuery(function($) {
 if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  var data = '<div class="container-telegram" id="DivxTelegram"><div id="telegram"><i style="width: 40%;text-align: center;margin-bottom:45px;margin-left:30%;background:#000;cursor:pointer;" id="Close_fa" class="fa fa-times" aria-hidden="true" onmouseup="setcookie(\'telegram\',1)" title="Ocultar Mensaje"></i><div class="chat"><div class="mine"><a href="https://t.me/divxtotal2" target="_blank"><div class="message last" style="font-size:18px;box-shadow:0 5px 15px 0px rgb(0 0 0 / 60%);">Pulsa aquí para entrar a nuestro CANAL de telegram</div></a></div></div></div></div>';   
  document.getElementById("bloque_telegram").innerHTML = data;
  CheckCookie('telegram');   
 } else {
  var data = '<div class="container-telegram" id="DivxTelegram"><div id="telegram"><i style="font-size:15px;text-align: center;margin-bottom:45px;margin-left:77%;background:#000;cursor:pointer;" id="Close_fa" class="fa fa-times" aria-hidden="true" onmouseup="setcookie(\'telegram\',1)" title="Ocultar Mensaje"></i><div class="avatar" style="box-shadow:none;"><a href="https://t.me/divxtotal2" target="_blank"><img style="width:150px;" src="'+template+'/qr-code2.jpg" alt="Divxtotal" /></a></div></div></div>';    
  document.getElementById("bloque_telegram").innerHTML = data;
  CheckCookie('telegram');   
 }
 
});
</script>

	<script>
/*	
jQuery(function($) {	
$(document).ready(function(){
    $(".telegram-popup").delay(0).show(0);
}); 
});
*/
	</script>
