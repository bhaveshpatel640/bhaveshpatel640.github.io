<?php
echo $_SERVER['REQUEST_URI'];
if(strcmp($_SERVER['REQUEST_URI'],'/administrator/')==0){
	header("Location: http://".$_SERVER['HTTP_HOST']);
}
