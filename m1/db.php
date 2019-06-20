 <?php
  session_start();
  
  $db = new mysqli("localhost","clnicole","dh150769","clnicole");
  $db->set_charset("utf8");

  function mq($sql){
    global $db;
    return $db->query($sql);
  }

  ?>