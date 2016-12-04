<?php
require_once '../libs/unirest-php/src/Unirest.php';

$response = Unirest\Request::get("https://webcamstravel.p.mashape.com/webcams/list/limit=50?show=webcams:image,location",
  array(
    "X-Mashape-Key" => "htUCHqGsPjmshR7wxtM6RVw7sZnsp1ssPZ8jsnsEOkkGd0eA25"
  )
);

header('Content-type: application/json');
echo json_encode($response->body, true);
