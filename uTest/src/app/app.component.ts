import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  selected = "side";
  DefaultTheme:boolean=true;
  DarkTheme:boolean=false;
  DefaultThemeFun(){
    this.DefaultTheme = true;
    this.DarkTheme = false;
  }
  DarkThemeFun(){
    this.DefaultTheme = false;
    this.DarkTheme = true;
  }
  mousedownfun(){
    var container = document.getElementById("container");
    var backrop = container.children[0];
    backrop.setAttribute("class","mat-drawer-backdrop ng-star-inserted");
    var sidenav = document.getElementById("sidemodel");

    console.log(sidenav.style.visibility);
    var content = document.getElementById("content");
   if(sidenav.style.visibility=="hidden"){
    console.log("hidden status");
    sidenav.setAttribute("class","mat-drawer mat-sidenav ng-tns-c4-0 ng-trigger ng-trigger-transform mat-drawer-end ng-star-inserted mat-drawer-side mat-drawer-opened");
    content.style.width = '68%';
    sidenav.style.width = "32%";
    sidenav.style.left = '68%';
   }else{
    console.log("hidden status");
    content.style.width = "100%";

   }
   
  }
 
  resizefun(e){
    console.log("resizefun");
    var max_width = 742.69;
    var min_width = 500;
    var right = document.getElementById("sidemodel");
    var rerightwidth = right.offsetWidth;
    console.log("右边盒子原本的宽度"+rerightwidth);
    var left = document.getElementById("content");
    var releftwidth = left.offsetWidth;
    console.log("左边盒子原先的宽度"+releftwidth);
    /*console.log(releftwidth);*/
    /*记录鼠标相对于左盒子x轴的位置*/
    var mouse_x = 0;
    var e = e || window.event;
    //阻止默认事件
    e.preventDefault();
    console.log(e);

    /*鼠标移动事件*/
    document.onmousemove = function mouseMove(e) {
      console.log("onmousemove thing is already start");
      console.log(e);
      var nav = document.getElementById("nav");
      var navwidth = nav.offsetWidth;
      console.log("左侧菜单的宽度"+navwidth);
      /*console.log("记录鼠标相对于左盒子x轴的位置"+mouse_x);*/
      var left_width = e.clientX - mouse_x - navwidth -3.7;
      console.log("点击的位置-左侧菜单栏的位置-鼠标对于左盒子x轴的位置"+left_width);
      console.log(left_width);
      left_width = left_width < min_width ? min_width : left_width;
      left_width = left_width > max_width ? max_width : left_width;
      left.style.width = left_width + 'px';
      right.style.left = left_width + 'px';
      var movepx = releftwidth - left_width;
      right.style.width = rerightwidth + movepx + 'px';
    
      if(left.offsetWidth<600){
         var container = document.getElementById("container");
         var backrop = container.children[0];
         backrop.setAttribute("class","mat-drawer-backdrop ng-star-inserted mat-drawer-shown");
         var sidenav = document.getElementById('sidemodel');
         console.log(sidenav);
         sidenav.setAttribute("class","mat-drawer mat-sidenav ng-tns-c4-0 ng-trigger ng-trigger-transform mat-drawer-end ng-star-inserted mat-drawer-over mat-drawer-opened");
         sidenav.setAttribute("ng-reflect-mode","over");
         var content = document.getElementById("content");
         content.style.marginRight = "0";
         content.style.width = "100%"; 
         
      }
      else{
         var container = document.getElementById("container");
         var backrop = container.children[0];
         backrop.setAttribute("class","mat-drawer-backdrop ng-star-inserted");
         var sidenav = document.getElementById('sidemodel');
         console.log(sidenav);
         sidenav.setAttribute("class","mat-drawer mat-sidenav ng-tns-c4-0 ng-trigger ng-trigger-transform mat-drawer-end ng-star-inserted mat-drawer-side mat-drawer-opened");
         sidenav.setAttribute("ng-reflect-mode","side");
         var content = document.getElementById("content");
         var sidenavwidth = container.offsetWidth - content.offsetWidth;
         console.log(sidenavwidth);
         sidenav.style.width = sidenavwidth + 'px';
      }
     

    }
    /*鼠标放下事件*/
    document.onmouseup = function mouseUp() {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  }
  removedemobtn(){
   /* console.log("removedemo()");*/
    var remove = document.getElementById("remove");
    var current = remove.style.display;
    if(current==""){
      remove.style.display = "block";
    }
    else{
      remove.style.display = "";
    }
    
  }
  removedown(e){
    var x = 0,y=0;
    console.log("removedown()");
    var e = e || window.event;

    console.log(e);
    /*获取点击的左边*/
    x = e.clientX;
    y = e.clientY;
    console.log(x+"---"+y);
    var remove = document.getElementById("remove");
    var rex = x - remove.offsetLeft;
    var rey = y - remove.offsetTop;
    console.log(rex+"--"+rey);
    /*设置一个变量来查看是否可以移动*/
    document.onmousemove=function(ee){
      var e:any = ee || window.event;
      console.log(e);
      var moveX:any = e.clientX - rex; //得到距离左边移动距离                    　　
      var moveY:any = e.clientY - rey; //得到距离上边移动距离
      console.log(moveY+"---"+moveX);
      remove.style.left = moveX + "px";　　
      remove.style.top = moveY + "px";　　
  
    }
    document.onmouseup = function() {
        document.onmousemove = null; //设置为false不可移动
    }

  }
  
  
}
