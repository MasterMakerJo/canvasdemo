window.onload=init;


var canvas_01;
var context;
var poss=[];
function init(){
	canvas_01=document.getElementById("canvas-01");
	context=canvas_01.getContext("2d");
	//设置画布的大小
	canvas_01.width=window.innerWidth;
	canvas_01.height=window.innerHeight;

    setInterval(loop,1000/20);
}

//绘制刷新
function loop(){
	context.clearRect(0,0,canvas_01.width,canvas_01.height);
	var x=canvas_01.width*0.5;
	var y=canvas_01.height*0.5;
	//生成圆形粒子，并存放到集合中
	var po=new particle(x,y);
	poss.push(po);
	for(var i=0;i<poss.length;i++){
		var item=poss[i];//提取出一个圆对象
		item.drawpos();//先绘制一个圆
		item.updatepos();
	}
}
//绘制一个圆形
function particle(x,y){
	this.xpos=x;
	this.ypos=y;
	//定义一个y方向的速度
	this.yspeed=-10;
	//定义一个x方向的速度
	this.xspeed=Math.random()*6-3;
	//定义一个加速度
	this.gra=0.1;
	//小球自己更新状态的方法
	this.updatepos=function(){
		this.ypos+=this.yspeed;
		this.xpos+=this.xspeed;
		//更新y方向的速度，逐渐0
		this.yspeed+=this.gra;
		if(this.ypos>canvas_01.height){
			this.yspeed=-5;
		}
	}
		//画圆
		this.drawpos=function(){
			//获取起始路径
			context.beginPath();
			context.arc(this.xpos,this.ypos,(Math.random()*10+10),0,Math.PI*2,true);
			//结束绘制路径
			context.closePath();
			context.fillStyle=getcolor();//填充颜色
			context.fill();//填充类型
		}
	
	//随机产生一个颜色编码#000000-#ffffff
function getcolor(){
	
	
	//return "#"+Math.floor(Math.random()*0xffffff).toString(16);
	var R=Math.floor(Math.random()*255);
	var G=Math.floor(Math.random()*255);
	var B=Math.floor(Math.random()*255);
	return "rgba("+R+","+G+","+B+","+Math.random()+")";
}
}
