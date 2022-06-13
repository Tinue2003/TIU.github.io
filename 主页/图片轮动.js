window.onload = function(){
//轮播初始化
var lunbo = document.getElementById('content');
var imgs = lunbo.getElementsByTagName('img'); 
var uls = lunbo.getElementsByTagName('ul');
var lis = lunbo.getElementsByTagName('li');
//初始状态下，⼀个圆圈为⾼亮模式
lis[0].style.fontSize = '26px';
lis[0].style.color = '#fff';
//定义⼀个全局变量，⽤来进⾏⾃动轮播图⽚顺序的变化
var pic_index = 1;
//⾃动轮播.使⽤pic_time记录播放，可以随时使⽤clearInterval()清除掉。
var pic_time = setInterval(autobofang,3000);
//⼿动轮播
for(var i=0;i<lis.length;i++){ 
lis[i].addEventListener("mouseover",change,false);
}
function change(event){ 
var event=event||window.event;
var target=event.target||event.srcElement; 
var children = target.parentNode.children; 
for(var i=0;i<children.length;i++){
if(target == children[i]){ 
picChange(i); 
} 
}
} 
//图⽚切换函数
function picChange(i){ 
//让所有图⽚都不显⽰，所有圆圈都为普通样式
for(var j=0;j<imgs.length;j++){
imgs[j].style.display = 'none'; lis[j].style.fontSize = '24px';
lis[j].style.color = '#999';
}
//让选中的索引的图⽚显⽰，对应的圆圈⾼亮
imgs[i].style.display = 'block'; 
lis[i].style.fontSize = '26px';
lis[i].style.color = '#fff'; 
}
//⾃动播放的事件处理
function autobofang(){
if(pic_index >= lis.length){
pic_index = 0;
}
change1(pic_index);
pic_index++;
}
//⾃动播放的图⽚转化中的事件
function change1(index){ 
picChange(index);
//⿏标移⼊ul标签，⾃动播放图⽚暂停
uls[0].addEventListener("mouseover",pause,false);
//⿏标移出ul标签，⾃动播放图⽚继续
uls[0].addEventListener("mouseout",go,false);
}
//⾃动播放暂停函数
function pause(event){
var event=event||window.event;
var target=event.target||event.srcElement;
switch(target.id){
case "pic1":
clearInterval(pic_time); 
break;
case "pic2":
clearInterval(pic_time);
break;
case "pic3":
clearInterval(pic_time);
break;
}
}
//⾃动播放图⽚继续函数
function go(event){
var event=event||window.event;
var target=event.target||event.srcElement; 
switch(target.id){
case "pic1":
pic_index = 1; 
pic_time = setInterval(autobofang,3000);
break;
case "pic2":
pic_index = 2; 
pic_time = setInterval(autobofang,3000);
break;
case "pic3":
pic_index = 3; 
pic_time = setInterval(autobofang,3000); 
break;
}
}
}
