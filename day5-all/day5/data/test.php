
<?php

header("Content-Type:application/json");

$array = [];

$array[] = [
"price"=>4.5,
"count"=>5
];

$array[] = [
"price"=>5,
"count"=>10
];

echo json_encode($array);

?>