// JavaScript Document
window.onload=function(){
	//让时钟动起来
	drawClock();
	setInterval("drawClock()",1000);
}
function drawClock(){
	var clock=document.getElementById("clock");
	var cxt=clock.getContext("2d");
	cxt.clearRect(0,0,500,500);	
	var now=new Date();
	var sec=now.getSeconds();
	var min=now.getMinutes();
	var hour=now.getHours();
	//小时必须获取浮点类型（小时加分钟转换成小时）
	hour=hour+min/60;
	//将24小时进制计算转换成12小时
	hour=hour>12?hour-12:hour;
	//表盘
	cxt.lineWidth=10;
	cxt.strokeStyle="blue";
	cxt.beginPath();
	cxt.arc(250,250,200,0,360,false);
	cxt.closePath();
	cxt.stroke();
	//刻度
	//时刻度
	for(var i=0;i<12;i++){
		cxt.save();
		cxt.lineWidth=7;
		cxt.strokeStyle="black";
		cxt.translate(250,250);
		cxt.rotate(i*30*Math.PI/180);
		cxt.beginPath();
		cxt.moveTo(0,-170);
		cxt.lineTo(0,-190);
		cxt.closePath();
		cxt.stroke();
		cxt.restore();
	}
	//分刻度
	for(var i=0;i<60;i++){
		cxt.save();
		cxt.lineWidth=5;
		cxt.strokeStyle="black";
		cxt.translate(250,250);
		cxt.rotate(i*6*Math.PI/180);
		cxt.beginPath();
		cxt.moveTo(0,-180);
		cxt.lineTo(0,-190);
		cxt.closePath();
		cxt.stroke();
		cxt.restore();
	}
	//时针
	cxt.save();
	cxt.lineWidth=7;
	cxt.strokeStyle="black";
	cxt.translate(250,250);
	cxt.rotate(hour*30*Math.PI/180);
	cxt.beginPath();
	cxt.moveTo(0,-140);
	cxt.lineTo(0,10);
	cxt.closePath();
	cxt.stroke();
	cxt.restore();
	//分针
	cxt.save();
	cxt.lineWidth=5;
	cxt.strokeStyle="black";
	cxt.translate(250,250);
	cxt.rotate(min*6*Math.PI/180);
	cxt.beginPath();
	cxt.moveTo(0,-160);
	cxt.lineTo(0,15);
	cxt.closePath();
	cxt.stroke();
	cxt.restore();
	//秒针
	cxt.save();
	cxt.lineWidth=3;
	cxt.strokeStyle="red";
	cxt.translate(250,250);
	cxt.rotate(sec*6*Math.PI/180);
	cxt.beginPath();
	cxt.moveTo(0,-170);
	cxt.lineTo(0,20);
	cxt.closePath();
	cxt.stroke();
	//画出交叉点
	cxt.beginPath();
	cxt.arc(0,0,5,0,360,false);
	cxt.closePath();
	cxt.fillStyle="black";
	cxt.fill();
	cxt.stroke();
	//秒针小圆点
	cxt.beginPath();
	cxt.arc(0,-150,5,0,360,false);
	cxt.closePath();
	cxt.fillStyle="black";
	cxt.fill();
	cxt.stroke();
	cxt.restore();
}