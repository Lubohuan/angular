
<?php

header('Content-Type:application/json');

$stuArray = [];

$stuArray[] = [
'name'=>'Lucy',
'age'=>20
];

$stuArray[] = [
'name'=>'Mary',
'age'=>40
];

$stuArray[] = [
'name'=>'Michael',
'age'=>29
];

echo json_encode($stuArray);

?>