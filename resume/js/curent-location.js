/**
 * Created by littleRich on 2017/2/8.
 */
window.onload = initBaiDuMapSdk();


function initBaiDuMapSdk(){
    src="http://api.map.baidu.com/api?v=2.0&ak=SUDyBS9KMMkvvBcpgxYzPiSAy38sO8L2"
}

// 百度地图API功能
function setCurentPositon(){
    //var view = document.getElementById("baidu_map");
    var map = new BMap.Map("baidu_map");
    var point = new BMap.Point(104.057430, 30.645729);
    map.centerAndZoom(point, 15);

//创建小狐狸
    var pt = new BMap.Point(104.057430, 30.645729);
    var myIcon = new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/fox.gif", new BMap.Size(300,157));
    var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
    map.addOverlay(marker2);              // 将标注添加到地图中
}

setCurentPositon();
