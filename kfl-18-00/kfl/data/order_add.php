<?php

header("Content-Type:application/json");

@$user_name = $_REQUEST["user_name"];
@$sex = $_REQUEST["sex"];
@$phone = $_REQUEST["phone"];
@$address = $_REQUEST["address"];
@$did = $_REQUEST["did"];


if(empty($user_name) || empty($sex) || empty($phone) || empty($address)
|| empty($did))
{
    echo '[]';
    return;
}

$order_time = time()*1000;


$conn = mysqli_connect("127.0.0.1","root","","kaifanla");
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql = "INSERT INTO kf_order VALUES(NULL,'$phone','$user_name','$sex','$order_time','$address','$did')";
$result = mysqli_query($conn,$sql);

$output = [];

if($result)
{
    $arr['msg'] = 'succ';
    $arr['oid'] = mysqli_insert_id($conn);
}
else
{
    $arr['msg'] = 'err';
}

$output[] = $arr;

echo json_encode($output);


?>











