<?php
function comefrom() {
	$lang = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
	if (substr($lang, 0, 2) == 'pt') { header("Location: /pt/");}
	else { header("Location: /en/");}
	}
comefrom();
?>