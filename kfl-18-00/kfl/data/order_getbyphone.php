<?php

header("Content-Type:application/json");

@$phone = $_REQUEST["phone"];

if(empty($phone))
{
    echo '[]';
    return;
}

$conn = mysqli_connect("127.0.0.1","root","","kaifanla");
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql = "SELECT kf_order.phone,kf_order.oid,kf_order.user_name,kf_order.addr,kf_order.order_time,kf_order.did,kf_dish.img_sm
FROM kf_dish,kf_order WHERE kf_order.phone=$phone AND kf_order.did=kf_dish.did";

$result = mysqli_query($conn,$sql);

$output = [];
while(true)
{
    $row = mysqli_fetch_assoc($result);
    if(!$row)
    {
        break;
    }
    $output[] = $row;
}

echo json_encode($output);


?>











