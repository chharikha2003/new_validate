<?php
   $server="localhost";
   $username="root";
   $password="";
   $con=mysqli_connect($server,$username,$password,'project');
   if(!$con){
      die("connection to this databse failed");
   }
   
   
   

?>