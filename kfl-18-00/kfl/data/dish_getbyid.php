<?php

header("Content-Type:application/json");

@$id = $_REQUEST["id"];

if(empty($id))
{
    echo '[]';
    return;
}

$conn = mysqli_connect("127.0.0.1","root","","kaifanla");
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql = "SELECT did,name,price,material,detail,img_lg FROM kf_dish WHERE did=$id ";
$result = mysqli_query($conn,$sql);

$output = [];

$row = mysqli_fetch_assoc($result);
if(empty($row))
{
    echo '[]';
}
else
{
    $output[] = $row;
    echo json_encode($output);
}




?>











