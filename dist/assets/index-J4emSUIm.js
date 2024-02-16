(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();class yc{constructor(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=320,this.canvas.height=320,this.score=0,this.gameover=!1,this.scale=1,this.standardCanvasWidth=320,this.standardCanvasHeight=320,this.time=0,this.pause=!1,this.gameStarted=!1,this.timePaused=0,this.timeWhenPaused=0,this.scoreToFinish=20,this.timeFinished=null,this.highscore=null,this.isNewHighscore=!1,this.lasttime=0,this.deltatime=1,Ae.isHighscoreSet()&&(this.highscore=Ae.loadHighscore())}newScale(t){this.scale=t,this.canvas.width=320*this.scale,this.canvas.height=320*this.scale}startGame(){this.gameStarted=!0,this.time=Date.now()}restartGame(){this.score=0,this.time=0,this.time=Date.now(),this.gameover=!1}}class Ve{constructor(t,n,r,s){this.height=s,this.width=r,this.x=t,this.y=n}draw(t){t.fillStyle="yellow",t.fillRect(this.x,this.y,this.width,this.height)}}function Fe(e,t){return e.y+e.height<=t.y||e.y>=t.y+t.height||e.x+e.width<=t.x?!1:!(e.x>=t.x+t.width)}function Cn(e){let t=[];for(let n=0;n<e.length;n+=20)t.push(e.slice(n,n+20));return t}function Be(e){return((Date.now()-e)/1e3).toFixed(1)}const $={levelOne:{map:Cn([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,14,15,16,1,1,1,1,1,1,1,1,14,15,16,1,1,1,1,1,1,58,59,60,1,1,1,1,1,1,1,1,58,59,60,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,14,15,15,15,15,16,1,1,1,1,1,1,1,1,1,1,1,1,1,1,58,59,59,59,59,60,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,14,15,16,1,1,1,1,1,1,1,1,14,15,16,1,1,1,1,1,1,58,59,60,1,1,1,1,1,1,1,1,58,59,60,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]),image:document.getElementById("bg1"),loaded:!1},levelTwo:{map:Cn([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,15,15,15,1,1,1,1,1,2147483663,2147483663,2147483663,2147483663,1,1,1,1,1,1,1,37,1,1,1,1,1,1,1,1,1,1,1,2147483685,1,1,1,1,1,1,1,37,1,1,1,1,1,1,1,1,1,1,1,37,1,1,1,1,1,1,1,37,1,1,1,1,1,1,1,1,1,1,1,37,1,1,1,1,1,1,1,37,1,1,1,1,1,1,1,1,1,1,1,37,1,1,2147483676,1,1,1,1,15,15,15,15,1,1,1,1,1,15,15,15,15,1,1,2147483687,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2147483698,28,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,39,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,50,1,1,1,1,1,1,1,1,14,15,16,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,24,25,26,27,28,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,35,36,37,38,39,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,46,47,48,49,50,1,1,1,1,1,1,1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1]),image:document.getElementById("bg2"),loaded:!1},levelThree:{map:Cn([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,32,1,1,1,1,1,1,1,32,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,32,1,1,1,1,1,1,1,1,1,1,1,1,32,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,32,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,32,1,1,1,1,1,1,32,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]),image:document.getElementById("bg3"),loaded:!1},levelFour:{map:Cn([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,19,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,19,1,1,1,1,1,1,1,1,1,30,1,1,1,1,1,1,1,1,1,19,19,19,19,19,1,1,1,1,1,30,1,1,1,1,1,1,1,1,1,19,1,1,1,1,1,1,1,1,1,30,1,1,1,1,1,1,1,1,1,19,1,1,1,1,1,1,1,1,1,30,1,1,1,1,1,1,19,19,19,19,1,1,1,1,1,1,1,1,1,30,30,1,1,1,1,1,1,1,1,19,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,19,1,1,1,1,1,19,19,19,19,1,1,1,1,1,1,1,1,1,1,19,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,19,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,19,19,19,19,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,19,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,19,19,19,19,19,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,19,1,1,1,1,1,1,1,1,1,28,1,1,1,1,1,1,1,1,1,19,1,1,1,1,1,1,1,1,24,39,1,1,1,1,1,1,1,1,1,19,1,1,1,1,1,1,1,1,35,27,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,25]),image:document.getElementById("bg4"),loaded:!1}};let Ec=class{constructor(t){this.tiles=[],this.levelBackground,this.standardCanvasWidth=t.standardCanvasWidth,this.standardCanvasHeight=t.standardCanvasHeight,this.loadLevelOne(t.canvas)}reset(){$.levelTwo.loaded=!1,$.levelThree.loaded=!1,$.levelFour.loaded=!1}loadLevelOne(t){this.createBorderAroundCanvas(t),this.createTilesFrom2dArray($.levelOne.map),this.levelBackground=$.levelOne.image,$.levelOne.loaded=!0}loadLevelTwo(t){this.createBorderAroundCanvas(t),this.createTilesFrom2dArray($.levelTwo.map),this.levelBackground=$.levelTwo.image,$.levelTwo.loaded=!0}loadLevelThree(t){this.createBorderAroundCanvas(t),this.createTilesFrom2dArray($.levelThree.map),this.levelBackground=$.levelThree.image,$.levelThree.loaded=!0}loadLevelFour(t){this.createBorderAroundCanvas(t),this.createTilesFrom2dArray($.levelFour.map),this.levelBackground=$.levelFour.image,$.levelFour.loaded=!0}createTilesFrom2dArray(t){t.forEach((n,r)=>{n.forEach((s,i)=>{if(s!=1){const o=new Ve(i*16,r*16,16,16);this.tiles.push(o)}})})}createBorderAroundCanvas(t){this.tiles=[new Ve(0,-10,this.standardCanvasWidth,10),new Ve(-10,0,10,this.standardCanvasHeight),new Ve(0,this.standardCanvasHeight,this.standardCanvasWidth,10),new Ve(this.standardCanvasWidth,0,10,this.standardCanvasHeight)]}};const vc=document.getElementById("char1");document.getElementById("char2");class Ac{constructor(){this.spriteWidth=50,this.spriteHeight=50,this.frameX=0,this.frameY=0,this.image=vc,this.maxFrames=0,this.counter=0,this.intervall=2,this.lastDirection="right"}idleRight(){this.frameY=0,this.maxFrames=4}idleLeft(){this.frameY=1,this.maxFrames=4}jumpRight(){this.frameY=2,this.maxFrames=2}jumpLeft(){this.frameY=3,this.maxFrames=2}goRight(){this.frameY=4,this.maxFrames=6,this.lastDirection="right"}goLeft(){this.frameY=5,this.maxFrames=6,this.lastDirection="left"}fallRight(){this.frameY=8,this.maxFrames=2}fallLeft(){this.frameY=9,this.maxFrames=2}}class Tc{constructor(t,n,r){this.x=t,this.y=n,this.height=60,this.width=60,this.vy=0,this.vx=0,this.weight=.5,this.ctx=r,this.sprite=new Ac,this.onGround=!1,this.hitbox={x:this.x+20,y:this.y+12,width:this.width-40,height:this.height-25}}draw(){this.ctx.drawImage(this.sprite.image,this.sprite.spriteWidth*this.sprite.frameX,this.sprite.spriteHeight*this.sprite.frameY,this.sprite.spriteWidth,this.sprite.spriteHeight,this.x,this.y,this.width,this.height)}reset(){this.vx=0,this.vy=0}handleJump(t){this.vy=-12*v.deltatime*(1/16),t.isJumping=!0,this.onGround=!1,this.sprite.lastDirection==="right"?this.sprite.jumpRight():this.sprite.lastDirection==="left"&&this.sprite.jumpLeft()}handleGoRight(){this.vx=2.5*v.deltatime*(1/16),this.sprite.goRight()}handleGoLeft(){this.vx=-2.5*v.deltatime*(1/16),this.sprite.goLeft()}update(t,n){this.draw(),this.updateHitbox(),this.applyGravity(),n.right?this.handleGoRight():n.left?this.handleGoLeft():(this.vx=0,this.sprite.lastDirection==="right"&&!n.isJumping?this.sprite.idleRight():this.sprite.lastDirection==="left"&&!n.isJumping&&this.sprite.idleLeft()),n.up&&!n.isJumping&&this.handleJump(n),this.vy>0&&!this.onGround&&(this.sprite.lastDirection==="right"?this.sprite.fallRight():this.sprite.lastDirection==="left"&&this.sprite.fallLeft());const r={x:this.hitbox.x+this.vx,y:this.hitbox.y,width:this.hitbox.width,height:this.hitbox.height},s={x:this.hitbox.x,y:this.hitbox.y+this.vy,width:this.hitbox.width,height:this.hitbox.height};for(let i=0;i<t.length;i++){const o=t[i];if(Fe(s,o)){if(this.vy>=0){const a=this.hitbox.y-this.y+this.hitbox.height;n.isJumping=!1,this.onGround=!0,this.y=o.y-a-.02}else if(this.vy<0){const a=this.hitbox.y-this.y;this.y=o.y+o.height-a+.02}this.vy=0;break}}for(let i=0;i<t.length;i++){const o=t[i];if(Fe(r,o)){if(this.vx>0){const a=this.x+this.width-this.hitbox.x-this.hitbox.width;this.x=o.x-this.width+a-.02}else if(this.vx<0){const a=this.hitbox.x-this.x;this.x=o.x+o.width-a+.02}this.vx=0;break}}this.sprite.counter>this.sprite.intervall?(this.sprite.counter=0,this.sprite.frameX++,this.sprite.frameX>=this.sprite.maxFrames&&(this.sprite.frameX=0)):this.sprite.counter++,this.y+=this.vy,this.x+=this.vx,this.updateHitbox()}applyGravity(){this.vy+=this.weight*v.deltatime*(1/16)}updateHitbox(){this.hitbox.x=this.x+20,this.hitbox.y=this.y+12}}const Ic="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAJxJREFUOI1jZGBgYFBUVP7PQCa4f/8uI4uiovJ/ZycnBgYGBoaHD18RrVleXoyBgYGBYe8+hv8syJphEsQAZAtZsCno622As4uKG7ApQQEYhvT1NqBoROcTZQi6S4gBWA1BdwkhwESSlTgAo6Ki8n8VZR0GBgbyYufO3SvUcckwMwQexfLyYiTnHZh6JnIMYGCAxA4sNhkZGCgvCgByUjZ8gI/HTAAAAABJRU5ErkJggg==",wc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAI1JREFUOI1jZGBgYFBUVP7PQCa4f/8uI4uiovJ/ZycnBgYGBoaHD18RrVleXoyBgYGBYe8+hv8syJphEsQAZAtZ0CX7ehtQ+EXFDehKMACGIega+3obCBrERNAaIgBVDMHqHeRwIStMiNGEDgZPmAweQ+ABKy8vRnLegalnIscABgZI3oHlNUYGBsqLAgA/my1IP21kIAAAAABJRU5ErkJggg==",Rc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAQCAYAAABN0MIqAAAAAXNSR0IArs4c6QAAAJxJREFUWIXtl8EJhDAQRV8kNXgNwU7cjrQBG9jtyO1kkVxtInsQddzTHkIiZN4xGcjMYwh8A+B9F6mcZfkY630XH30PQAhr4Zby41wLwPwmWjgl7Bc1IRegKdjH7VAZApUhUBkClSFQGYLsMl7PKWldSmz2Fykz6D9klzGM9xQB+mdcODbDubbabLLP3fwe1EYI65HJDGiEhy3CfwG9BiewcDH6NwAAAABJRU5ErkJggg==",Sc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAIpJREFUOI1jZGBgYEhJTv3PQCaYM3c2I0tKcur/kKAQBgYGBoZzZ84TrdnIxBDG/M+CrBlJgiBAtpAFm4Le/mlwdnFhFkEDMQzp7Z+GohGdT5Qh6C4hBmA1BN0lhAATSVYSawi6/4kJWNq4ZGgbAo9iIxNDkvMOTD0TOQYwMEDyDiyvMTIwUF4UAAAr4TEIx+KLAAAAAABJRU5ErkJggg==",Pc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAIZJREFUOI1jZGBgYEhJTv3PQCaYM3c2I0tKcur/kKAQBgYGBoZzZ84TrdnIxBDG/M+CrBlJgiBAtpAFXbK3fxoKv7gwi6CBGIaga+ztn0bQICaC1hABqGIIVu8ghwtZYUKMJnQweMJk8BgCD1gjE0OS8w5MPRM5BjAwQPIOLK8xMjBQXhQAAILuLFY+uqodAAAAAElFTkSuQmCC",Cc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAQCAYAAABN0MIqAAAAAXNSR0IArs4c6QAAAJ1JREFUWIXtlzEKhDAQRV8kF1I8iXgDtdlu2XOI3TarNxI9UrZYdAcrC5kImVeFJDCZxxD4DqBtukDijNPH+bbpQl3VACzzGvlJ+hRlvi2Dh78EcZAMcgCyiO+4HSZDYDIEJkNgMgQmQ6Auox/el967Eq9ekTiNnkFdxuv50C55GvszBPtkFGWebDbZ+s6OG6mxzOueyRxYhIdfhP8CYdonGhlrD2sAAAAASUVORK5CYII=",Zt=document.getElementById("space"),te=document.getElementById("dButton"),ee=document.getElementById("aButton");class Vc{constructor(){this.left=!1,this.right=!1,this.up=!1,this.isJumping=!1,this.setupMovement()}setupMovement(){document.addEventListener("keydown",t=>{switch(t.key.toLowerCase()){case"d":this.handleGoRight();break;case"arrowright":this.handleGoRight();break;case"arrowleft":this.handleGoLeft();break;case"a":this.handleGoLeft();break;case"w":this.handleJump();break;case" ":this.handleJump();break;case"arrowup":this.handleJump();break}}),document.addEventListener("keyup",t=>{switch(t.key.toLowerCase()){case"d":this.handleGoRightKeyup();break;case"arrowright":this.handleGoRightKeyup();break;case"arrowleft":this.handleGoLeftKeyup();break;case"a":this.handleGoLeftKeyup();break;case"w":this.handleJumpKeyup();break;case" ":this.handleJumpKeyup();break;case"arrowup":this.handleJumpKeyup();break}}),Zt.addEventListener("touchstart",t=>{t.preventDefault(),this.handleJump()},{passive:!0}),Zt.addEventListener("touchend",t=>{t.preventDefault(),this.handleJumpKeyup()}),Zt.addEventListener("mousedown",t=>{t.preventDefault(),this.handleJump()}),Zt.addEventListener("mouseup",t=>{t.preventDefault(),this.handleJumpKeyup()}),te.addEventListener("touchstart",t=>{t.preventDefault(),this.handleGoRight()},{passive:!0}),te.addEventListener("touchend",t=>{t.preventDefault(),this.handleGoRightKeyup()}),te.addEventListener("mousedown",t=>{t.preventDefault(),this.handleGoRight()}),te.addEventListener("mouseup",t=>{t.preventDefault(),this.handleGoRightKeyup()}),ee.addEventListener("touchstart",t=>{t.preventDefault(),this.handleGoLeft()},{passive:!0}),ee.addEventListener("touchend",t=>{t.preventDefault(),this.handleGoLeftKeyup()}),ee.addEventListener("mousedown",t=>{t.preventDefault(),this.handleGoLeft()}),ee.addEventListener("mouseup",t=>{t.preventDefault(),this.handleGoLeftKeyup()})}handleJump(){this.up=!0,Zt.src=Rc}handleJumpKeyup(){this.up=!1,Zt.src=Cc}handleGoRight(){this.right=!0,te.src=wc}handleGoRightKeyup(){this.right=!1,te.src=Pc}handleGoLeft(){this.left=!0,ee.src=Ic}handleGoLeftKeyup(){this.left=!1,ee.src=Sc}}const Dc=""+new URL("../audio/coin.mp3",import.meta.url).href,bc=document.getElementById("coin"),Vn=new Audio(Dc);class kc{constructor(t){this.width=16,this.height=16,this.canvas=t.canvas,this.x=Math.random()*this.canvas.width-this.width,this.y=Math.random()*this.canvas.height-this.height,this.ctx=t.ctx,this.spriteWidth=16,this.spriteHeight=16,this.frameX=0,this.maxFrames=4,this.counter=0,this.intervall=10,this.standardCanvasWidth=t.standardCanvasWidth,this.standardCanvasHeight=t.standardCanvasHeight,this.soundOn=!0}draw(){this.ctx.drawImage(bc,this.spriteWidth*this.frameX,0,this.width,this.height,this.x,this.y,this.width,this.height)}update(t,n,r){for(let i=0;i<n.length;i++)if(Fe(this,n[i])){this.resetPosition(n);break}this.draw();const s={x:t.hitbox.x,y:t.hitbox.y,width:t.hitbox.width,height:t.hitbox.height};Fe(s,this)&&(r.score++,this.soundOn&&(Vn.play().catch(i=>console.log(i)),Vn.paused?Vn.play().catch(i=>console.log(i)):Vn.currentTime=0),this.resetPosition(n)),this.counter>this.intervall?(this.counter=0,this.frameX++,this.frameX>=this.maxFrames&&(this.frameX=0)):this.counter++}resetPosition(t){const n={x:Math.random()*this.standardCanvasWidth-this.width,y:Math.random()*this.standardCanvasHeight-this.height,height:this.height,width:this.width};for(let r=0;r<t.length;r++)if(Fe(n,t[r])){this.resetPosition(t);break}else this.x=n.x,this.y=n.y}}const Di=""+new URL("sound-1Q5r8J-T.png",import.meta.url).href,bi=""+new URL("sound_off-zQm9jbrA.png",import.meta.url).href,ki=document.querySelector(".shopScreen"),ne=document.querySelector(".menuScreen"),Ni=document.querySelector(".leaderboardScreen"),Nc=document.getElementById("startGameBtn"),xc=document.getElementById("submitBtn"),Or=document.getElementById("nameInput"),Lc=document.getElementById("char1"),Oc=document.getElementById("char2"),Mr=document.querySelector(".input"),Mc=document.getElementById("controlsContainer"),xi=document.querySelector(".canvasWrapper"),Fc=document.getElementById("tableBody"),Bc=document.getElementById("pauseBtn"),Uc=document.getElementById("timer"),jc=document.querySelector(".timerWrapper"),qc=document.getElementById("score"),De=document.getElementById("soundBtn"),$c=document.getElementById("shopBtn"),Gc=document.getElementById("closeShopBtn"),zc=document.getElementById("closeLeaderboardBtn"),Fr=document.getElementById("char1Shop"),Br=document.getElementById("char2Shop"),Kc=document.getElementById("yourTime"),Li=document.getElementById("yourHighscore"),Hc=document.getElementById("leaderboardBtn"),Ur=document.querySelector(".restartScreen"),Qc=document.querySelector("#restartBtn");class Wc{constructor(t){this.game=t,this.shopOpen=!1,this.menuOpen=!0,this.leaderboardOpen=!1,this.addListeners()}resize(){Mc.style.width=this.game.canvas.width+"px",xi.style.width=this.game.canvas.width+"px",xi.style.height=this.game.canvas.height+"px",ne.style.height=this.game.canvas.height+"px",ne.style.width=this.game.canvas.height+"px",jc.style.width=this.game.canvas.width+"px"}addListeners(){Nc.addEventListener("click",()=>{this.game.gameStarted&&this.game.pause?(this.handleUnpause(),this.closeAllScreens()):this.game.gameover?(this.restartGame(),this.closeAllScreens()):(this.game.startGame(),this.closeAllScreens(),He())}),Bc.addEventListener("click",()=>{!this.game.gameStarted||this.game.gameover||(this.game.pause?(this.handleUnpause(),ne.classList.add("inactive")):(this.game.pause=!0,this.game.timeWhenPaused=Date.now(),ne.classList.remove("inactive")),(this.shopOpen||this.menuOpen||this.leaderboardOpen)&&this.closeAllScreens())}),De.addEventListener("click",()=>{console.log("ah"),Pt.soundOn?(Pt.soundOn=!1,De.src=bi,Ae.storeAudioSettings(Pt.soundOn)):(Pt.soundOn=!0,De.src=Di,Ae.storeAudioSettings(Pt.soundOn))}),$c.addEventListener("click",()=>{this.openShopScreen()}),zc.addEventListener("click",()=>{this.openMenuScreen()}),Gc.addEventListener("click",()=>{this.shopOpen&&this.openMenuScreen()}),Fr.addEventListener("click",()=>{Fr.classList.add("selected"),Br.classList.remove("selected"),Ke.sprite.image=Lc}),Br.addEventListener("click",()=>{Br.classList.add("selected"),Fr.classList.remove("selected"),Ke.sprite.image=Oc}),Qc.addEventListener("click",()=>{Ur.classList.toggle("inactive"),Mr.classList.add("inactive"),this.restartGame()}),Hc.addEventListener("click",async()=>{this.openLeaderboardScreen()}),xc.addEventListener("click",t=>{if(t.preventDefault(),!Or.value||!Or.value.trim()){alert("Please enter a name");return}const n={name:Or.value.trim(),time:this.game.timeFinished};qo.add(n),Ur.classList.toggle("inactive"),Mr.classList.add("inactive"),this.openLeaderboardScreen()})}updateSoundBtn(){Pt.soundOn?De.src=Di:De.src=bi}openShopScreen(){this.closeAllScreens(),this.shopOpen=!0,ki.classList.remove("inactive")}async openLeaderboardScreen(){this.closeAllScreens();const r=(await qo.load()).sort((s,i)=>s.time-i.time).slice(0,10).map((s,i)=>`<tr>
          <td>${i+1}</td>
          <td>${s.name}</td>
          <td>${s.time}s</td>
        </tr>`);Fc.innerHTML=r.join(""),this.leaderboardOpen=!0,Ni.classList.remove("inactive")}openMenuScreen(){this.closeAllScreens(),this.menuOpen=!0,ne.classList.remove("inactive")}closeAllScreens(){this.shopOpen=!1,this.menuOpen=!1,this.leaderboardOpen=!1,ki.classList.add("inactive"),ne.classList.add("inactive"),Ni.classList.add("inactive")}restartGame(){v.lasttime=0,v.restartGame(),Ct.reset(),Ct.loadLevelOne(v.canvas),Ke.reset(),He()}setYourTime(){Kc.innerHTML=`Your time:  ${Be(this.game.time)}s`,this.game.isNewHighscore?(Mr.classList.remove("inactive"),Li.innerHTML=`New highscore: ${this.game.highscore}s`,this.game.isNewHighscore=!1):Li.innerHTML=`Your highscore: ${this.game.highscore}s`}handleUnpause(){this.game.pause=!1,this.game.timePaused=Date.now()-this.game.timeWhenPaused,this.game.time=this.game.time+this.game.timePaused,v.lasttime=0,He()}toggleRestartScreen(){Ur.classList.toggle("inactive")}updateScore(t){qc.innerHTML=`Score: ${t}`}setTimer(){Uc.innerHTML=`Time: ${Be(this.game.time)}s`}}class Yc{constructor(){}loadHighscore(){if(localStorage.getItem("highscore"))return parseFloat(JSON.parse(localStorage.getItem("highscore")))}isHighscoreSet(){if(localStorage.getItem("highscore"))return!0}store(t){localStorage.setItem("highscore",JSON.stringify(t))}storeAudioSettings(t){localStorage.setItem("audio",t)}loadAudioSettings(){return localStorage.getItem("audio")?localStorage.getItem("audio")!="false":!0}}var Oi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Jc=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],h=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Go={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,h=s+2<e.length,c=h?e[s+2]:0,u=i>>2,l=(i&3)<<4|a>>4;let m=(a&15)<<2|c>>6,g=c&63;h||(g=64,o||(m=64)),r.push(n[u],n[l],n[m],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray($o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Jc(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const l=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||c==null||l==null)throw new Xc;const m=i<<2|a>>4;if(r.push(m),c!==64){const g=a<<4&240|c>>2;if(r.push(g),l!==64){const C=c<<6&192|l;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Xc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zc=function(e){const t=$o(e);return Go.encodeByteArray(t,!0)},$n=function(e){return Zc(e).replace(/\./g,"")},tu=function(e){try{return Go.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=()=>eu().__FIREBASE_DEFAULTS__,ru=()=>{if(typeof process>"u"||typeof Oi>"u")return;const e=Oi.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},su=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&tu(e[1]);return t&&JSON.parse(t)},ks=()=>{try{return nu()||ru()||su()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},iu=e=>{var t,n;return(n=(t=ks())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ou=e=>{const t=iu(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},zo=()=>{var e;return(e=ks())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[$n(JSON.stringify(n)),$n(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cu(){var e;const t=(e=ks())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uu(){return!cu()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ko(){try{return typeof indexedDB=="object"}catch{return!1}}function lu(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="FirebaseError";class Te extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=du,Object.setPrototypeOf(this,Te.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ho.prototype.create)}}class Ho{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?fu(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Te(s,a,r)}}function fu(e,t){return e.replace(mu,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const mu=/\{\$([^}]+)}/g;function rs(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Mi(i)&&Mi(o)){if(!rs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Mi(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(e){return e&&e._delegate?e._delegate:e}class We{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new au;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(_u(t))try{this.getOrInitializeService({instanceIdentifier:Ft})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Ft){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ft){return this.instances.has(t)}getOptions(t=Ft){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pu(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ft){return this.component?this.component.multipleInstances?t:Ft:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pu(e){return e===Ft?void 0:e}function _u(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new gu(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(D||(D={}));const Eu={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},vu=D.INFO,Au={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Tu=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Au[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Qo{constructor(t){this.name=t,this._logLevel=vu,this._logHandler=Tu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in D))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Eu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...t),this._logHandler(this,D.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...t),this._logHandler(this,D.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,D.INFO,...t),this._logHandler(this,D.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,D.WARN,...t),this._logHandler(this,D.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...t),this._logHandler(this,D.ERROR,...t)}}const Iu=(e,t)=>t.some(n=>e instanceof n);let Fi,Bi;function wu(){return Fi||(Fi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ru(){return Bi||(Bi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wo=new WeakMap,ss=new WeakMap,Yo=new WeakMap,jr=new WeakMap,Ns=new WeakMap;function Su(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Dt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Wo.set(n,e)}).catch(()=>{}),Ns.set(t,e),t}function Pu(e){if(ss.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});ss.set(e,t)}let is={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ss.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Yo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Cu(e){is=e(is)}function Vu(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(qr(this),t,...n);return Yo.set(r,t.sort?t.sort():[t]),Dt(r)}:Ru().includes(e)?function(...t){return e.apply(qr(this),t),Dt(Wo.get(this))}:function(...t){return Dt(e.apply(qr(this),t))}}function Du(e){return typeof e=="function"?Vu(e):(e instanceof IDBTransaction&&Pu(e),Iu(e,wu())?new Proxy(e,is):e)}function Dt(e){if(e instanceof IDBRequest)return Su(e);if(jr.has(e))return jr.get(e);const t=Du(e);return t!==e&&(jr.set(e,t),Ns.set(t,e)),t}const qr=e=>Ns.get(e);function bu(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Dt(o);return r&&o.addEventListener("upgradeneeded",h=>{r(Dt(o.result),h.oldVersion,h.newVersion,Dt(o.transaction),h)}),n&&o.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),a.then(h=>{i&&h.addEventListener("close",()=>i()),s&&h.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ku=["get","getKey","getAll","getAllKeys","count"],Nu=["put","add","delete","clear"],$r=new Map;function Ui(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if($r.get(t))return $r.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Nu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ku.includes(n)))return;const i=async function(o,...a){const h=this.transaction(o,s?"readwrite":"readonly");let c=h.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&h.done]))[0]};return $r.set(t,i),i}Cu(e=>({...e,get:(t,n,r)=>Ui(t,n)||e.get(t,n,r),has:(t,n)=>!!Ui(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lu(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Lu(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const os="@firebase/app",ji="0.9.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new Qo("@firebase/app"),Ou="@firebase/app-compat",Mu="@firebase/analytics-compat",Fu="@firebase/analytics",Bu="@firebase/app-check-compat",Uu="@firebase/app-check",ju="@firebase/auth",qu="@firebase/auth-compat",$u="@firebase/database",Gu="@firebase/database-compat",zu="@firebase/functions",Ku="@firebase/functions-compat",Hu="@firebase/installations",Qu="@firebase/installations-compat",Wu="@firebase/messaging",Yu="@firebase/messaging-compat",Ju="@firebase/performance",Xu="@firebase/performance-compat",Zu="@firebase/remote-config",tl="@firebase/remote-config-compat",el="@firebase/storage",nl="@firebase/storage-compat",rl="@firebase/firestore",sl="@firebase/firestore-compat",il="firebase",ol="10.7.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="[DEFAULT]",al={[os]:"fire-core",[Ou]:"fire-core-compat",[Fu]:"fire-analytics",[Mu]:"fire-analytics-compat",[Uu]:"fire-app-check",[Bu]:"fire-app-check-compat",[ju]:"fire-auth",[qu]:"fire-auth-compat",[$u]:"fire-rtdb",[Gu]:"fire-rtdb-compat",[zu]:"fire-fn",[Ku]:"fire-fn-compat",[Hu]:"fire-iid",[Qu]:"fire-iid-compat",[Wu]:"fire-fcm",[Yu]:"fire-fcm-compat",[Ju]:"fire-perf",[Xu]:"fire-perf-compat",[Zu]:"fire-rc",[tl]:"fire-rc-compat",[el]:"fire-gcs",[nl]:"fire-gcs-compat",[rl]:"fire-fst",[sl]:"fire-fst-compat","fire-js":"fire-js",[il]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new Map,hs=new Map;function hl(e,t){try{e.container.addComponent(t)}catch(n){zt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Kn(e){const t=e.name;if(hs.has(t))return zt.debug(`There were multiple attempts to register component ${t}.`),!1;hs.set(t,e);for(const n of zn.values())hl(n,e);return!0}function cl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bt=new Ho("app","Firebase",ul);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new We("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=ol;function Jo(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:as,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw bt.create("bad-app-name",{appName:String(s)});if(n||(n=zo()),!n)throw bt.create("no-options");const i=zn.get(s);if(i){if(rs(n,i.options)&&rs(r,i.config))return i;throw bt.create("duplicate-app",{appName:s})}const o=new yu(s);for(const h of hs.values())o.addComponent(h);const a=new ll(n,r,o);return zn.set(s,a),a}function fl(e=as){const t=zn.get(e);if(!t&&e===as&&zo())return Jo();if(!t)throw bt.create("no-app",{appName:e});return t}function ce(e,t,n){var r;let s=(r=al[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),zt.warn(a.join(" "));return}Kn(new We(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="firebase-heartbeat-database",gl=1,Ye="firebase-heartbeat-store";let Gr=null;function Xo(){return Gr||(Gr=bu(ml,gl,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ye)}catch(n){console.warn(n)}}}}).catch(e=>{throw bt.create("idb-open",{originalErrorMessage:e.message})})),Gr}async function pl(e){try{return await(await Xo()).transaction(Ye).objectStore(Ye).get(Zo(e))}catch(t){if(t instanceof Te)zt.warn(t.message);else{const n=bt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});zt.warn(n.message)}}}async function qi(e,t){try{const r=(await Xo()).transaction(Ye,"readwrite");await r.objectStore(Ye).put(t,Zo(e)),await r.done}catch(n){if(n instanceof Te)zt.warn(n.message);else{const r=bt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zt.warn(r.message)}}}function Zo(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=1024,yl=30*24*60*60*1e3;class El{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Al(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=$i();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=yl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$i(),{heartbeatsToSend:r,unsentEntries:s}=vl(this._heartbeatsCache.heartbeats),i=$n(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function $i(){return new Date().toISOString().substring(0,10)}function vl(e,t=_l){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Gi(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Gi(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Al{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ko()?lu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pl(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Gi(e){return $n(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(e){Kn(new We("platform-logger",t=>new xu(t),"PRIVATE")),Kn(new We("heartbeat",t=>new El(t),"PRIVATE")),ce(os,ji,e),ce(os,ji,"esm2017"),ce("fire-js","")}Tl("");var Il="firebase",wl="10.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ce(Il,wl,"app");var Rl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_,xs=xs||{},I=Rl||self;function hr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function dn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Sl(e){return Object.prototype.hasOwnProperty.call(e,zr)&&e[zr]||(e[zr]=++Pl)}var zr="closure_uid_"+(1e9*Math.random()>>>0),Pl=0;function Cl(e,t,n){return e.call.apply(e.bind,arguments)}function Vl(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function nt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?nt=Cl:nt=Vl,nt.apply(null,arguments)}function Dn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function K(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Ot(){this.s=this.s,this.o=this.o}var Dl=0;Ot.prototype.s=!1;Ot.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Dl!=0)&&Sl(this)};Ot.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ta=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ls(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function zi(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(hr(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function rt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}rt.prototype.h=function(){this.defaultPrevented=!0};var bl=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};I.addEventListener("test",n,t),I.removeEventListener("test",n,t)}catch{}return e}();function Je(e){return/^[\s\xa0]*$/.test(e)}function cr(){var e=I.navigator;return e&&(e=e.userAgent)?e:""}function ft(e){return cr().indexOf(e)!=-1}function Os(e){return Os[" "](e),e}Os[" "]=function(){};function kl(e,t){var n=wd;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Nl=ft("Opera"),fe=ft("Trident")||ft("MSIE"),ea=ft("Edge"),cs=ea||fe,na=ft("Gecko")&&!(cr().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge"))&&!(ft("Trident")||ft("MSIE"))&&!ft("Edge"),xl=cr().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge");function ra(){var e=I.document;return e?e.documentMode:void 0}var us;t:{var Kr="",Hr=function(){var e=cr();if(na)return/rv:([^\);]+)(\)|;)/.exec(e);if(ea)return/Edge\/([\d\.]+)/.exec(e);if(fe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(xl)return/WebKit\/(\S+)/.exec(e);if(Nl)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Hr&&(Kr=Hr?Hr[1]:""),fe){var Qr=ra();if(Qr!=null&&Qr>parseFloat(Kr)){us=String(Qr);break t}}us=Kr}var ls;if(I.document&&fe){var Ki=ra();ls=Ki||parseInt(us,10)||void 0}else ls=void 0;var Ll=ls;function Xe(e,t){if(rt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(na){t:{try{Os(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Ol[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Xe.$.h.call(this)}}K(Xe,rt);var Ol={2:"touch",3:"pen",4:"mouse"};Xe.prototype.h=function(){Xe.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var fn="closure_listenable_"+(1e6*Math.random()|0),Ml=0;function Fl(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++Ml,this.fa=this.ia=!1}function ur(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ms(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Bl(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function sa(e){const t={};for(const n in e)t[n]=e[n];return t}const Hi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ia(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<Hi.length;i++)n=Hi[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function lr(e){this.src=e,this.g={},this.h=0}lr.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=fs(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Fl(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function ds(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=ta(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ur(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function fs(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Fs="closure_lm_"+(1e6*Math.random()|0),Wr={};function oa(e,t,n,r,s){if(r&&r.once)return ha(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)oa(e,t[i],n,r,s);return null}return n=js(n),e&&e[fn]?e.O(t,n,dn(r)?!!r.capture:!!r,s):aa(e,t,n,!1,r,s)}function aa(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=dn(s)?!!s.capture:!!s,a=Us(e);if(a||(e[Fs]=a=new lr(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=Ul(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)bl||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(ua(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ul(){function e(n){return t.call(e.src,e.listener,n)}const t=jl;return e}function ha(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)ha(e,t[i],n,r,s);return null}return n=js(n),e&&e[fn]?e.P(t,n,dn(r)?!!r.capture:!!r,s):aa(e,t,n,!0,r,s)}function ca(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)ca(e,t[i],n,r,s);else r=dn(r)?!!r.capture:!!r,n=js(n),e&&e[fn]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=fs(i,n,r,s),-1<n&&(ur(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Us(e))&&(t=e.g[t.toString()],e=-1,t&&(e=fs(t,n,r,s)),(n=-1<e?t[e]:null)&&Bs(n))}function Bs(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[fn])ds(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ua(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Us(t))?(ds(n,e),n.h==0&&(n.src=null,t[Fs]=null)):ur(e)}}}function ua(e){return e in Wr?Wr[e]:Wr[e]="on"+e}function jl(e,t){if(e.fa)e=!0;else{t=new Xe(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Bs(e),e=n.call(r,t)}return e}function Us(e){return e=e[Fs],e instanceof lr?e:null}var Yr="__closure_events_fn_"+(1e9*Math.random()>>>0);function js(e){return typeof e=="function"?e:(e[Yr]||(e[Yr]=function(t){return e.handleEvent(t)}),e[Yr])}function z(){Ot.call(this),this.i=new lr(this),this.S=this,this.J=null}K(z,Ot);z.prototype[fn]=!0;z.prototype.removeEventListener=function(e,t,n,r){ca(this,e,t,n,r)};function J(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new rt(t,e);else if(t instanceof rt)t.target=t.target||e;else{var s=t;t=new rt(r,e),ia(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=bn(o,r,!0,t)&&s}if(o=t.g=e,s=bn(o,r,!0,t)&&s,s=bn(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=bn(o,r,!1,t)&&s}z.prototype.N=function(){if(z.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ur(n[r]);delete e.g[t],e.h--}}this.J=null};z.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};z.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function bn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,h=o.la||o.src;o.ia&&ds(e.i,o),s=a.call(h,r)!==!1&&s}}return s&&!r.defaultPrevented}var qs=I.JSON.stringify;class ql{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function $l(){var e=$s;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Gl{constructor(){this.h=this.g=null}add(t,n){const r=la.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var la=new ql(()=>new zl,e=>e.reset());class zl{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Kl(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Hl(e){I.setTimeout(()=>{throw e},0)}let Ze,tn=!1,$s=new Gl,da=()=>{const e=I.Promise.resolve(void 0);Ze=()=>{e.then(Ql)}};var Ql=()=>{for(var e;e=$l();){try{e.h.call(e.g)}catch(n){Hl(n)}var t=la;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}tn=!1};function dr(e,t){z.call(this),this.h=e||1,this.g=t||I,this.j=nt(this.qb,this),this.l=Date.now()}K(dr,z);_=dr.prototype;_.ga=!1;_.T=null;_.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),J(this,"tick"),this.ga&&(Gs(this),this.start()))}};_.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gs(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}_.N=function(){dr.$.N.call(this),Gs(this),delete this.g};function zs(e,t,n){if(typeof e=="function")n&&(e=nt(e,n));else if(e&&typeof e.handleEvent=="function")e=nt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(e,t||0)}function fa(e){e.g=zs(()=>{e.g=null,e.i&&(e.i=!1,fa(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Wl extends Ot{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:fa(this)}N(){super.N(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function en(e){Ot.call(this),this.h=e,this.g={}}K(en,Ot);var Qi=[];function ma(e,t,n,r){Array.isArray(n)||(n&&(Qi[0]=n.toString()),n=Qi);for(var s=0;s<n.length;s++){var i=oa(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function ga(e){Ms(e.g,function(t,n){this.g.hasOwnProperty(n)&&Bs(t)},e),e.g={}}en.prototype.N=function(){en.$.N.call(this),ga(this)};en.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function fr(){this.g=!0}fr.prototype.Ea=function(){this.g=!1};function Yl(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var u=c[0];c=c[1];var l=u.split("_");o=2<=l.length&&l[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function Jl(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function ae(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Zl(e,n)+(r?" "+r:"")})}function Xl(e,t){e.info(function(){return"TIMEOUT: "+t})}fr.prototype.info=function(){};function Zl(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return qs(n)}catch{return t}}var Wt={},Wi=null;function mr(){return Wi=Wi||new z}Wt.Ta="serverreachability";function pa(e){rt.call(this,Wt.Ta,e)}K(pa,rt);function nn(e){const t=mr();J(t,new pa(t))}Wt.STAT_EVENT="statevent";function _a(e,t){rt.call(this,Wt.STAT_EVENT,e),this.stat=t}K(_a,rt);function it(e){const t=mr();J(t,new _a(t,e))}Wt.Ua="timingevent";function ya(e,t){rt.call(this,Wt.Ua,e),this.size=t}K(ya,rt);function mn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){e()},t)}var gr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ea={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ks(){}Ks.prototype.h=null;function Yi(e){return e.h||(e.h=e.i())}function va(){}var gn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Hs(){rt.call(this,"d")}K(Hs,rt);function Qs(){rt.call(this,"c")}K(Qs,rt);var ms;function pr(){}K(pr,Ks);pr.prototype.g=function(){return new XMLHttpRequest};pr.prototype.i=function(){return{}};ms=new pr;function pn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new en(this),this.P=td,e=cs?125:void 0,this.V=new dr(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Aa}function Aa(){this.i=null,this.g="",this.h=!1}var td=45e3,Ta={},gs={};_=pn.prototype;_.setTimeout=function(e){this.P=e};function ps(e,t,n){e.L=1,e.A=yr(Rt(t)),e.u=n,e.S=!0,Ia(e,null)}function Ia(e,t){e.G=Date.now(),_n(e),e.B=Rt(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),ba(n.i,"t",r),e.o=0,n=e.l.J,e.h=new Aa,e.g=Xa(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Wl(nt(e.Pa,e,e.g),e.O)),ma(e.U,e.g,"readystatechange",e.nb),t=e.I?sa(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),nn(),Yl(e.j,e.v,e.B,e.m,e.W,e.u)}_.nb=function(e){e=e.target;const t=this.M;t&&mt(e)==3?t.l():this.Pa(e)};_.Pa=function(e){try{if(e==this.g)t:{const u=mt(this.g);var t=this.g.Ia();const l=this.g.da();if(!(3>u)&&(u!=3||cs||this.g&&(this.h.h||this.g.ja()||to(this.g)))){this.J||u!=4||t==7||(t==8||0>=l?nn(3):nn(2)),_r(this);var n=this.g.da();this.ca=n;e:if(wa(this)){var r=to(this.g);e="";var s=r.length,i=mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ut(this),Ue(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Jl(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Je(a)){var c=a;break e}}c=null}if(n=c)ae(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_s(this,n);else{this.i=!1,this.s=3,it(12),Ut(this),Ue(this);break t}}this.S?(Ra(this,u,o),cs&&this.i&&u==3&&(ma(this.U,this.V,"tick",this.mb),this.V.start())):(ae(this.j,this.m,o,null),_s(this,o)),u==4&&Ut(this),this.i&&!this.J&&(u==4?Qa(this.l,this):(this.i=!1,_n(this)))}else Ad(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),Ut(this),Ue(this)}}}catch{}finally{}};function wa(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function Ra(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=ed(e,n),s==gs){t==4&&(e.s=4,it(14),r=!1),ae(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Ta){e.s=4,it(15),ae(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ae(e.j,e.m,s,null),_s(e,s);wa(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,it(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ti(t),t.M=!0,it(11))):(ae(e.j,e.m,n,"[Invalid Chunked Response]"),Ut(e),Ue(e))}_.mb=function(){if(this.g){var e=mt(this.g),t=this.g.ja();this.o<t.length&&(_r(this),Ra(this,e,t),this.i&&e!=4&&_n(this))}};function ed(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?gs:(n=Number(t.substring(n,r)),isNaN(n)?Ta:(r+=1,r+n>t.length?gs:(t=t.slice(r,r+n),e.o=r+n,t)))}_.cancel=function(){this.J=!0,Ut(this)};function _n(e){e.Y=Date.now()+e.P,Sa(e,e.P)}function Sa(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=mn(nt(e.lb,e),t)}function _r(e){e.C&&(I.clearTimeout(e.C),e.C=null)}_.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(Xl(this.j,this.B),this.L!=2&&(nn(),it(17)),Ut(this),this.s=2,Ue(this)):Sa(this,this.Y-e)};function Ue(e){e.l.H==0||e.J||Qa(e.l,e)}function Ut(e){_r(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Gs(e.V),ga(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function _s(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||ys(n.i,e))){if(!e.K&&ys(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Wn(n),Tr(n);else break t;Zs(n),it(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=mn(nt(n.ib,n),6e3));if(1>=xa(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else jt(n,11)}else if((e.K||n.g==e)&&Wn(n),!Je(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const l=c[4];l!=null&&(n.Ga=l,n.l.info("SVER="+n.Ga));const m=c[5];m!=null&&typeof m=="number"&&0<m&&(r=1.5*m,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const C=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(C){var i=r.i;i.g||C.indexOf("spdy")==-1&&C.indexOf("quic")==-1&&C.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ws(i,i.h),i.h=null))}if(r.F){const S=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.Da=S,x(r.I,r.F,S))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Ja(r,r.J?r.pa:null,r.Y),o.K){La(r.i,o);var a=o,h=r.L;h&&a.setTimeout(h),a.C&&(_r(a),_n(a)),r.g=o}else Ka(r);0<n.j.length&&Ir(n)}else c[0]!="stop"&&c[0]!="close"||jt(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?jt(n,7):Xs(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}nn(4)}catch{}}function nd(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(hr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function rd(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(hr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Pa(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(hr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=rd(e),r=nd(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var Ca=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sd(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Gt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Gt){this.h=e.h,Hn(this,e.j),this.s=e.s,this.g=e.g,Qn(this,e.m),this.l=e.l;var t=e.i,n=new rn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ji(this,n),this.o=e.o}else e&&(t=String(e).match(Ca))?(this.h=!1,Hn(this,t[1]||"",!0),this.s=xe(t[2]||""),this.g=xe(t[3]||"",!0),Qn(this,t[4]),this.l=xe(t[5]||"",!0),Ji(this,t[6]||"",!0),this.o=xe(t[7]||"")):(this.h=!1,this.i=new rn(null,this.h))}Gt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Le(t,Xi,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Le(t,Xi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Le(n,n.charAt(0)=="/"?ad:od,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Le(n,cd)),e.join("")};function Rt(e){return new Gt(e)}function Hn(e,t,n){e.j=n?xe(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Qn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ji(e,t,n){t instanceof rn?(e.i=t,ud(e.i,e.h)):(n||(t=Le(t,hd)),e.i=new rn(t,e.h))}function x(e,t,n){e.i.set(t,n)}function yr(e){return x(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function xe(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Le(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,id),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function id(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Xi=/[#\/\?@]/g,od=/[#\?:]/g,ad=/[#\?]/g,hd=/[#\?@]/g,cd=/#/g;function rn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Mt(e){e.g||(e.g=new Map,e.h=0,e.i&&sd(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}_=rn.prototype;_.add=function(e,t){Mt(this),this.i=null,e=Ie(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Va(e,t){Mt(e),t=Ie(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Da(e,t){return Mt(e),t=Ie(e,t),e.g.has(t)}_.forEach=function(e,t){Mt(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};_.ta=function(){Mt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};_.Z=function(e){Mt(this);let t=[];if(typeof e=="string")Da(this,e)&&(t=t.concat(this.g.get(Ie(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};_.set=function(e,t){return Mt(this),this.i=null,e=Ie(this,e),Da(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};_.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function ba(e,t,n){Va(e,t),0<n.length&&(e.i=null,e.g.set(Ie(e,t),Ls(n)),e.h+=n.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function Ie(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ud(e,t){t&&!e.j&&(Mt(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Va(this,r),ba(this,s,n))},e)),e.j=t}var ld=class{constructor(e,t){this.g=e,this.map=t}};function ka(e){this.l=e||dd,I.PerformanceNavigationTiming?(e=I.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(I.g&&I.g.Ka&&I.g.Ka()&&I.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dd=10;function Na(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function xa(e){return e.h?1:e.g?e.g.size:0}function ys(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ws(e,t){e.g?e.g.add(t):e.h=t}function La(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}ka.prototype.cancel=function(){if(this.i=Oa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Oa(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Ls(e.i)}var fd=class{stringify(e){return I.JSON.stringify(e,void 0)}parse(e){return I.JSON.parse(e,void 0)}};function md(){this.g=new fd}function gd(e,t,n){const r=n||"";try{Pa(e,function(s,i){let o=s;dn(s)&&(o=qs(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function pd(e,t){const n=new fr;if(I.Image){const r=new Image;r.onload=Dn(kn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Dn(kn,n,r,"TestLoadImage: error",!1,t),r.onabort=Dn(kn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Dn(kn,n,r,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function kn(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Er(e){this.l=e.ec||null,this.j=e.ob||!1}K(Er,Ks);Er.prototype.g=function(){return new vr(this.l,this.j)};Er.prototype.i=function(e){return function(){return e}}({});function vr(e,t){z.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Ys,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}K(vr,z);var Ys=0;_=vr.prototype;_.open=function(e,t){if(this.readyState!=Ys)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,sn(this)};_.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||I).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yn(this)),this.readyState=Ys};_.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,sn(this)),this.g&&(this.readyState=3,sn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ma(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Ma(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}_.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?yn(this):sn(this),this.readyState==3&&Ma(this)}};_.Za=function(e){this.g&&(this.response=this.responseText=e,yn(this))};_.Ya=function(e){this.g&&(this.response=e,yn(this))};_.ka=function(){this.g&&yn(this)};function yn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,sn(e)}_.setRequestHeader=function(e,t){this.v.append(e,t)};_.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function sn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(vr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var _d=I.JSON.parse;function M(e){z.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Fa,this.L=this.M=!1}K(M,z);var Fa="",yd=/^https?$/i,Ed=["POST","PUT"];_=M.prototype;_.Oa=function(e){this.M=e};_.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ms.g(),this.C=this.u?Yi(this.u):Yi(ms),this.g.onreadystatechange=nt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Zi(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=I.FormData&&e instanceof I.FormData,!(0<=ta(Ed,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ja(this),0<this.B&&((this.L=vd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nt(this.ua,this)):this.A=zs(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Zi(this,i)}};function vd(e){return fe&&typeof e.timeout=="number"&&e.ontimeout!==void 0}_.ua=function(){typeof xs<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,J(this,"timeout"),this.abort(8))};function Zi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ba(e),Ar(e)}function Ba(e){e.F||(e.F=!0,J(e,"complete"),J(e,"error"))}_.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,J(this,"complete"),J(this,"abort"),Ar(this))};_.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ar(this,!0)),M.$.N.call(this)};_.La=function(){this.s||(this.G||this.v||this.l?Ua(this):this.kb())};_.kb=function(){Ua(this)};function Ua(e){if(e.h&&typeof xs<"u"&&(!e.C[1]||mt(e)!=4||e.da()!=2)){if(e.v&&mt(e)==4)zs(e.La,0,e);else if(J(e,"readystatechange"),mt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(Ca)[1]||null;!s&&I.self&&I.self.location&&(s=I.self.location.protocol.slice(0,-1)),r=!yd.test(s?s.toLowerCase():"")}n=r}if(n)J(e,"complete"),J(e,"success");else{e.m=6;try{var i=2<mt(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Ba(e)}}finally{Ar(e)}}}}function Ar(e,t){if(e.g){ja(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||J(e,"ready");try{n.onreadystatechange=r}catch{}}}function ja(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(I.clearTimeout(e.A),e.A=null)}_.isActive=function(){return!!this.g};function mt(e){return e.g?e.g.readyState:0}_.da=function(){try{return 2<mt(this)?this.g.status:-1}catch{return-1}};_.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),_d(t)}};function to(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Fa:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Ad(e){const t={};e=(e.g&&2<=mt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Je(e[r]))continue;var n=Kl(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}Bl(t,function(r){return r.join(", ")})}_.Ia=function(){return this.m};_.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function qa(e){let t="";return Ms(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Js(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=qa(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):x(e,t,n))}function be(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function $a(e){this.Ga=0,this.j=[],this.l=new fr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=be("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=be("baseRetryDelayMs",5e3,e),this.hb=be("retryDelaySeedMs",1e4,e),this.eb=be("forwardChannelMaxRetries",2,e),this.xa=be("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new ka(e&&e.concurrentRequestLimit),this.Ja=new md,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}_=$a.prototype;_.ra=8;_.H=1;function Xs(e){if(Ga(e),e.H==3){var t=e.W++,n=Rt(e.I);if(x(n,"SID",e.K),x(n,"RID",t),x(n,"TYPE","terminate"),En(e,n),t=new pn(e,e.l,t),t.L=2,t.A=yr(Rt(n)),n=!1,I.navigator&&I.navigator.sendBeacon)try{n=I.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&I.Image&&(new Image().src=t.A,n=!0),n||(t.g=Xa(t.l,null),t.g.ha(t.A)),t.G=Date.now(),_n(t)}Ya(e)}function Tr(e){e.g&&(ti(e),e.g.cancel(),e.g=null)}function Ga(e){Tr(e),e.u&&(I.clearTimeout(e.u),e.u=null),Wn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&I.clearTimeout(e.m),e.m=null)}function Ir(e){if(!Na(e.i)&&!e.m){e.m=!0;var t=e.Na;Ze||da(),tn||(Ze(),tn=!0),$s.add(t,e),e.C=0}}function Td(e,t){return xa(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=mn(nt(e.Na,e,t),Wa(e,e.C)),e.C++,!0)}_.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new pn(this,this.l,e);let i=this.s;if(this.U&&(i?(i=sa(i),ia(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=za(this,s,t),n=Rt(this.I),x(n,"RID",e),x(n,"CVER",22),this.F&&x(n,"X-HTTP-Session-Id",this.F),En(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(qa(i)))+"&"+t:this.o&&Js(n,this.o,i)),Ws(this.i,s),this.bb&&x(n,"TYPE","init"),this.P?(x(n,"$req",t),x(n,"SID","null"),s.aa=!0,ps(s,n,null)):ps(s,n,t),this.H=2}}else this.H==3&&(e?eo(this,e):this.j.length==0||Na(this.i)||eo(this))};function eo(e,t){var n;t?n=t.m:n=e.W++;const r=Rt(e.I);x(r,"SID",e.K),x(r,"RID",n),x(r,"AID",e.V),En(e,r),e.o&&e.s&&Js(r,e.o,e.s),n=new pn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=za(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ws(e.i,n),ps(n,r,t)}function En(e,t){e.na&&Ms(e.na,function(n,r){x(t,r,n)}),e.h&&Pa({},function(n,r){x(t,r,n)})}function za(e,t,n){n=Math.min(e.j.length,n);var r=e.h?nt(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let h=0;h<n;h++){let c=s[h].g;const u=s[h].map;if(c-=i,0>c)i=Math.max(0,s[h].g-100),a=!1;else try{gd(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Ka(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ze||da(),tn||(Ze(),tn=!0),$s.add(t,e),e.A=0}}function Zs(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=mn(nt(e.Ma,e),Wa(e,e.A)),e.A++,!0)}_.Ma=function(){if(this.u=null,Ha(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=mn(nt(this.jb,this),e)}};_.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,it(10),Tr(this),Ha(this))};function ti(e){e.B!=null&&(I.clearTimeout(e.B),e.B=null)}function Ha(e){e.g=new pn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Rt(e.wa);x(t,"RID","rpc"),x(t,"SID",e.K),x(t,"AID",e.V),x(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&x(t,"TO",e.qa),x(t,"TYPE","xmlhttp"),En(e,t),e.o&&e.s&&Js(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=yr(Rt(t)),n.u=null,n.S=!0,Ia(n,e)}_.ib=function(){this.v!=null&&(this.v=null,Tr(this),Zs(this),it(19))};function Wn(e){e.v!=null&&(I.clearTimeout(e.v),e.v=null)}function Qa(e,t){var n=null;if(e.g==t){Wn(e),ti(e),e.g=null;var r=2}else if(ys(e.i,t))n=t.F,La(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=mr(),J(r,new ya(r,n)),Ir(e)}else Ka(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&Td(e,t)||r==2&&Zs(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:jt(e,5);break;case 4:jt(e,10);break;case 3:jt(e,6);break;default:jt(e,2)}}}function Wa(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function jt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=nt(e.pb,e);n||(n=new Gt("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||Hn(n,"https"),yr(n)),pd(n.toString(),r)}else it(2);e.H=0,e.h&&e.h.za(t),Ya(e),Ga(e)}_.pb=function(e){e?(this.l.info("Successfully pinged google.com"),it(2)):(this.l.info("Failed to ping google.com"),it(1))};function Ya(e){if(e.H=0,e.ma=[],e.h){const t=Oa(e.i);(t.length!=0||e.j.length!=0)&&(zi(e.ma,t),zi(e.ma,e.j),e.i.i.length=0,Ls(e.j),e.j.length=0),e.h.ya()}}function Ja(e,t,n){var r=n instanceof Gt?Rt(n):new Gt(n);if(r.g!="")t&&(r.g=t+"."+r.g),Qn(r,r.m);else{var s=I.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Gt(null);r&&Hn(i,r),t&&(i.g=t),s&&Qn(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&x(r,n,t),x(r,"VER",e.ra),En(e,r),r}function Xa(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new M(new Er({ob:n})):new M(e.va),t.Oa(e.J),t}_.isActive=function(){return!!this.h&&this.h.isActive(this)};function Za(){}_=Za.prototype;_.Ba=function(){};_.Aa=function(){};_.za=function(){};_.ya=function(){};_.isActive=function(){return!0};_.Va=function(){};function Yn(){if(fe&&!(10<=Number(Ll)))throw Error("Environmental error: no available transport.")}Yn.prototype.g=function(e,t){return new at(e,t)};function at(e,t){z.call(this),this.g=new $a(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Je(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Je(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new we(this)}K(at,z);at.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;it(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Ja(e,null,e.Y),Ir(e)};at.prototype.close=function(){Xs(this.g)};at.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=qs(e),e=n);t.j.push(new ld(t.fb++,e)),t.H==3&&Ir(t)};at.prototype.N=function(){this.g.h=null,delete this.j,Xs(this.g),delete this.g,at.$.N.call(this)};function th(e){Hs.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}K(th,Hs);function eh(){Qs.call(this),this.status=1}K(eh,Qs);function we(e){this.g=e}K(we,Za);we.prototype.Ba=function(){J(this.g,"a")};we.prototype.Aa=function(e){J(this.g,new th(e))};we.prototype.za=function(e){J(this.g,new eh)};we.prototype.ya=function(){J(this.g,"b")};function Id(){this.blockSize=-1}function dt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}K(dt,Id);dt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Jr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}dt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)Jr(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){Jr(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){Jr(this,r),s=0;break}}this.h=s,this.i+=t};dt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function k(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var wd={};function ei(e){return-128<=e&&128>e?kl(e,function(t){return new k([t|0],0>t?-1:0)}):new k([e|0],0>e?-1:0)}function gt(e){if(isNaN(e)||!isFinite(e))return ue;if(0>e)return W(gt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Es;return new k(t,0)}function nh(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return W(nh(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=gt(Math.pow(t,8)),r=ue,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=gt(Math.pow(t,i)),r=r.R(i).add(gt(o))):(r=r.R(n),r=r.add(gt(o)))}return r}var Es=4294967296,ue=ei(0),vs=ei(1),no=ei(16777216);_=k.prototype;_.ea=function(){if(ht(this))return-W(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Es+r)*t,t*=Es}return e};_.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Tt(this))return"0";if(ht(this))return"-"+W(this).toString(e);for(var t=gt(Math.pow(e,6)),n=this,r="";;){var s=Xn(n,t).g;n=Jn(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,Tt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};_.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Tt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ht(e){return e.h==-1}_.X=function(e){return e=Jn(this,e),ht(e)?-1:Tt(e)?0:1};function W(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new k(n,~e.h).add(vs)}_.abs=function(){return ht(this)?W(this):this};_.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new k(n,n[n.length-1]&-2147483648?-1:0)};function Jn(e,t){return e.add(W(t))}_.R=function(e){if(Tt(this)||Tt(e))return ue;if(ht(this))return ht(e)?W(this).R(W(e)):W(W(this).R(e));if(ht(e))return W(this.R(W(e)));if(0>this.X(no)&&0>e.X(no))return gt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,h=e.D(s)&65535;n[2*r+2*s]+=o*h,Nn(n,2*r+2*s),n[2*r+2*s+1]+=i*h,Nn(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Nn(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Nn(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new k(n,0)};function Nn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ke(e,t){this.g=e,this.h=t}function Xn(e,t){if(Tt(t))throw Error("division by zero");if(Tt(e))return new ke(ue,ue);if(ht(e))return t=Xn(W(e),t),new ke(W(t.g),W(t.h));if(ht(t))return t=Xn(e,W(t)),new ke(W(t.g),t.h);if(30<e.g.length){if(ht(e)||ht(t))throw Error("slowDivide_ only works with positive integers.");for(var n=vs,r=t;0>=r.X(e);)n=ro(n),r=ro(r);var s=re(n,1),i=re(r,1);for(r=re(r,2),n=re(n,2);!Tt(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=re(r,1),n=re(n,1)}return t=Jn(e,s.R(t)),new ke(s,t)}for(s=ue;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=gt(n),o=i.R(t);ht(o)||0<o.X(e);)n-=r,i=gt(n),o=i.R(t);Tt(i)&&(i=vs),s=s.add(i),e=Jn(e,o)}return new ke(s,e)}_.gb=function(e){return Xn(this,e).h};_.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new k(n,this.h&e.h)};_.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new k(n,this.h|e.h)};_.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new k(n,this.h^e.h)};function ro(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new k(n,e.h)}function re(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new k(s,e.h)}Yn.prototype.createWebChannel=Yn.prototype.g;at.prototype.send=at.prototype.u;at.prototype.open=at.prototype.m;at.prototype.close=at.prototype.close;gr.NO_ERROR=0;gr.TIMEOUT=8;gr.HTTP_ERROR=6;Ea.COMPLETE="complete";va.EventType=gn;gn.OPEN="a";gn.CLOSE="b";gn.ERROR="c";gn.MESSAGE="d";z.prototype.listen=z.prototype.O;M.prototype.listenOnce=M.prototype.P;M.prototype.getLastError=M.prototype.Sa;M.prototype.getLastErrorCode=M.prototype.Ia;M.prototype.getStatus=M.prototype.da;M.prototype.getResponseJson=M.prototype.Wa;M.prototype.getResponseText=M.prototype.ja;M.prototype.send=M.prototype.ha;M.prototype.setWithCredentials=M.prototype.Oa;dt.prototype.digest=dt.prototype.l;dt.prototype.reset=dt.prototype.reset;dt.prototype.update=dt.prototype.j;k.prototype.add=k.prototype.add;k.prototype.multiply=k.prototype.R;k.prototype.modulo=k.prototype.gb;k.prototype.compare=k.prototype.X;k.prototype.toNumber=k.prototype.ea;k.prototype.toString=k.prototype.toString;k.prototype.getBits=k.prototype.D;k.fromNumber=gt;k.fromString=nh;var Rd=function(){return new Yn},Sd=function(){return mr()},Xr=gr,Pd=Ea,Cd=Wt,so={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},xn=va,Vd=M,Dd=dt,le=k;const io="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Re="10.7.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new Qo("@firebase/firestore");function Ne(){return Kt.logLevel}function p(e,...t){if(Kt.logLevel<=D.DEBUG){const n=t.map(ni);Kt.debug(`Firestore (${Re}): ${e}`,...n)}}function yt(e,...t){if(Kt.logLevel<=D.ERROR){const n=t.map(ni);Kt.error(`Firestore (${Re}): ${e}`,...n)}}function me(e,...t){if(Kt.logLevel<=D.WARN){const n=t.map(ni);Kt.warn(`Firestore (${Re}): ${e}`,...n)}}function ni(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e="Unexpected state"){const t=`FIRESTORE (${Re}) INTERNAL ASSERTION FAILED: `+e;throw yt(t),new Error(t)}function N(e,t){e||A()}function R(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Te{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class bd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class kd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Nd{constructor(t){this.t=t,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=h=>this.i!==r?(r=this.i,n(h)):Promise.resolve();let i=new It;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new It,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const h=i;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},a=h=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(h=>a(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?a(h):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new It)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(N(typeof r.accessToken=="string"),new rh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return N(t===null||typeof t=="string"),new tt(t)}}class xd{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ld{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new xd(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Od{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Md{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,p("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(N(typeof n.token=="string"),this.R=n.token,new Od(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Fd(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function b(e,t){return e<t?-1:e>t?1:0}function ge(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return q.fromMillis(Date.now())}static fromDate(t){return q.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new q(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?b(this.nanoseconds,t.nanoseconds):b(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.timestamp=t}static fromTimestamp(t){return new w(t)}static min(){return new w(new q(0,0))}static max(){return new w(new q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,n,r){n===void 0?n=0:n>t.length&&A(),r===void 0?r=t.length-n:r>t.length-n&&A(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return on.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof on?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class L extends on{construct(t,n,r){return new L(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new L(n)}static emptyPath(){return new L([])}}const Bd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Y extends on{construct(t,n,r){return new Y(t,n,r)}static isValidIdentifier(t){return Bd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Y.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Y(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new y(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new y(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new y(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Y(n)}static emptyPath(){return new Y([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(L.fromString(t))}static fromName(t){return new E(L.fromString(t).popFirst(5))}static empty(){return new E(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&L.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return L.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new L(t.slice()))}}function Ud(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=w.fromTimestamp(r===1e9?new q(n+1,0):new q(n,r));return new Nt(s,E.empty(),t)}function jd(e){return new Nt(e.readTime,e.key,-1)}class Nt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Nt(w.min(),E.empty(),-1)}static max(){return new Nt(w.max(),E.empty(),-1)}}function qd(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:b(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==$d)throw e;p("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,r)=>{n(t)})}static reject(t){return new d((n,r)=>{r(t)})}static waitFor(t){return new d((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},h=>r(h))}),o=!0,i===s&&n()})}static or(t){let n=d.resolve(!1);for(const r of t)n=n.next(s=>s?d.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new d((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let h=0;h<i;h++){const c=h;n(t[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(t,n){return new d((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new It,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new je(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=si(r.target.error);this.V.reject(new je(t,s))}}static open(t,n,r,s){try{return new ri(n,t.transaction(s,r))}catch(i){throw new je(n,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(p("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new Kd(n)}}class qt{constructor(t,n,r){this.name=t,this.version=n,this.p=r,qt.S(Gn())===12.2&&yt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return p("SimpleDb","Removing database:",t),Bt(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Ko())return!1;if(qt.C())return!0;const t=Gn(),n=qt.S(t),r=0<n&&n<10,s=qt.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new je(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new y(f.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(f.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new je(t,o))},s.onupgradeneeded=i=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=ri.open(this.db,t,i?"readonly":"readwrite",r),h=s(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),d.reject(c))).toPromise();return h.catch(()=>{}),await a.m,h}catch(a){const h=a,c=h.name!=="FirebaseError"&&o<3;if(p("SimpleDb","Transaction failed with error:",h.message,"Retrying:",c),this.close(),!c)return Promise.reject(h)}}}close(){this.db&&this.db.close(),this.db=void 0}}class zd{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Bt(this.k.delete())}}class je extends y{constructor(t,n){super(f.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function An(e){return e.name==="IndexedDbTransactionError"}class Kd{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(p("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Bt(r)}add(t){return p("SimpleDb","ADD",this.store.name,t,t),Bt(this.store.add(t))}get(t){return Bt(this.store.get(t)).next(n=>(n===void 0&&(n=null),p("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return p("SimpleDb","DELETE",this.store.name,t),Bt(this.store.delete(t))}count(){return p("SimpleDb","COUNT",this.store.name),Bt(this.store.count())}W(t,n){const r=this.options(t,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new d((o,a)=>{i.onerror=h=>{a(h.target.error)},i.onsuccess=h=>{o(h.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,h)=>{o.push(h)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new d((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,n){p("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const s=this.cursor(r);return this.G(s,n)}Z(t){const n=this.cursor({});return new d((r,s)=>{n.onerror=i=>{const o=si(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new d((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const h=new zd(a),c=n(a.primaryKey,a.value,h);if(c instanceof d){const u=c.catch(l=>(h.done(),d.reject(l)));r.push(u)}h.isDone?s():h.$===null?a.continue():a.continue(h.$)}}).next(()=>d.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function Bt(e){return new d((t,n)=>{e.onsuccess=r=>{const s=r.target.result;t(s)},e.onerror=r=>{const s=si(r.target.error);n(s)}})}let oo=!1;function si(e){const t=qt.S(Gn());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return oo||(oo=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}ii._e=-1;function wr(e){return e==null}function Zn(e){return e===0&&1/e==-1/0}function Hd(e){return typeof e=="number"&&Number.isInteger(e)&&!Zn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Se(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ih(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,n){this.comparator=t,this.root=n||Q.EMPTY}insert(t,n){return new O(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Q.BLACK,null,null))}remove(t){return new O(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Q.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ln(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ln(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ln(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ln(this.root,t,this.comparator,!0)}}class Ln{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Q{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Q.RED,this.left=s??Q.EMPTY,this.right=i??Q.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Q(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Q.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Q.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Q.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const t=this.left.check();if(t!==this.right.check())throw A();return t+(this.isRed()?0:1)}}Q.EMPTY=null,Q.RED=!0,Q.BLACK=!1;Q.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Q(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.comparator=t,this.data=new O(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new ho(this.data.getIterator())}getIteratorFrom(t){return new ho(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof X)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new X(this.comparator);return n.data=t,n}}class ho{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.fields=t,t.sort(Y.comparator)}static empty(){return new ut([])}unionWith(t){let n=new X(Y.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ut(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ge(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new oh("Invalid base64 string: "+i):i}}(t);return new st(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new st(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return b(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}st.EMPTY_BYTE_STRING=new st("");const Qd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xt(e){if(N(!!e),typeof e=="string"){let t=0;const n=Qd.exec(e);if(N(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:U(e.seconds),nanos:U(e.nanos)}}function U(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ht(e){return typeof e=="string"?st.fromBase64String(e):st.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ai(e){const t=e.mapValue.fields.__previous_value__;return oi(t)?ai(t):t}function an(e){const t=xt(e.mapValue.fields.__local_write_time__.timestampValue);return new q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,n,r,s,i,o,a,h,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=h,this.useFetchStreams=c}}class hn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new hn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof hn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?oi(e)?4:Yd(e)?9007199254740991:10:A()}function Et(e,t){if(e===t)return!0;const n=Qt(e);if(n!==Qt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return an(e).isEqual(an(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=xt(s.timestampValue),a=xt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Ht(s.bytesValue).isEqual(Ht(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return U(s.geoPointValue.latitude)===U(i.geoPointValue.latitude)&&U(s.geoPointValue.longitude)===U(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return U(s.integerValue)===U(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=U(s.doubleValue),a=U(i.doubleValue);return o===a?Zn(o)===Zn(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return ge(e.arrayValue.values||[],t.arrayValue.values||[],Et);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(ao(o)!==ao(a))return!1;for(const h in o)if(o.hasOwnProperty(h)&&(a[h]===void 0||!Et(o[h],a[h])))return!1;return!0}(e,t);default:return A()}}function cn(e,t){return(e.values||[]).find(n=>Et(n,t))!==void 0}function pe(e,t){if(e===t)return 0;const n=Qt(e),r=Qt(t);if(n!==r)return b(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return b(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=U(i.integerValue||i.doubleValue),h=U(o.integerValue||o.doubleValue);return a<h?-1:a>h?1:a===h?0:isNaN(a)?isNaN(h)?0:-1:1}(e,t);case 3:return co(e.timestampValue,t.timestampValue);case 4:return co(an(e),an(t));case 5:return b(e.stringValue,t.stringValue);case 6:return function(i,o){const a=Ht(i),h=Ht(o);return a.compareTo(h)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),h=o.split("/");for(let c=0;c<a.length&&c<h.length;c++){const u=b(a[c],h[c]);if(u!==0)return u}return b(a.length,h.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=b(U(i.latitude),U(o.latitude));return a!==0?a:b(U(i.longitude),U(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],h=o.values||[];for(let c=0;c<a.length&&c<h.length;++c){const u=pe(a[c],h[c]);if(u)return u}return b(a.length,h.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===On.mapValue&&o===On.mapValue)return 0;if(i===On.mapValue)return 1;if(o===On.mapValue)return-1;const a=i.fields||{},h=Object.keys(a),c=o.fields||{},u=Object.keys(c);h.sort(),u.sort();for(let l=0;l<h.length&&l<u.length;++l){const m=b(h[l],u[l]);if(m!==0)return m;const g=pe(a[h[l]],c[u[l]]);if(g!==0)return g}return b(h.length,u.length)}(e.mapValue,t.mapValue);default:throw A()}}function co(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return b(e,t);const n=xt(e),r=xt(t),s=b(n.seconds,r.seconds);return s!==0?s:b(n.nanos,r.nanos)}function _e(e){return As(e)}function As(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=xt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Ht(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return E.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=As(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${As(n.fields[o])}`;return s+"}"}(e.mapValue):A()}function Ts(e){return!!e&&"integerValue"in e}function hi(e){return!!e&&"arrayValue"in e}function uo(e){return!!e&&"nullValue"in e}function lo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Bn(e){return!!e&&"mapValue"in e}function qe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Se(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=qe(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=qe(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Yd(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.value=t}static empty(){return new ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Bn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=qe(n)}setAll(t){let n=Y.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const h=this.getFieldsMap(n);this.applyChanges(h,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=qe(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Bn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Et(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Bn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Se(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new ct(qe(this.value))}}function ah(e){const t=[];return Se(e.fields,(n,r)=>{const s=new Y([n]);if(Bn(r)){const i=ah(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new ut(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new et(t,0,w.min(),w.min(),w.min(),ct.empty(),0)}static newFoundDocument(t,n,r,s){return new et(t,1,n,w.min(),r,s,0)}static newNoDocument(t,n){return new et(t,2,n,w.min(),w.min(),ct.empty(),0)}static newUnknownDocument(t,n){return new et(t,3,n,w.min(),w.min(),ct.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(w.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=w.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,n){this.position=t,this.inclusive=n}}function fo(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),n.key):r=pe(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function mo(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Et(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,n="asc"){this.field=t,this.dir=n}}function Jd(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{}class j extends hh{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Zd(t,n,r):n==="array-contains"?new nf(t,r):n==="in"?new rf(t,r):n==="not-in"?new sf(t,r):n==="array-contains-any"?new of(t,r):new j(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new tf(t,r):new ef(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(pe(n,this.value)):n!==null&&Qt(this.value)===Qt(n)&&this.matchesComparison(pe(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vt extends hh{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new vt(t,n)}matches(t){return ch(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function ch(e){return e.op==="and"}function uh(e){return Xd(e)&&ch(e)}function Xd(e){for(const t of e.filters)if(t instanceof vt)return!1;return!0}function Is(e){if(e instanceof j)return e.field.canonicalString()+e.op.toString()+_e(e.value);if(uh(e))return e.filters.map(t=>Is(t)).join(",");{const t=e.filters.map(n=>Is(n)).join(",");return`${e.op}(${t})`}}function lh(e,t){return e instanceof j?function(r,s){return s instanceof j&&r.op===s.op&&r.field.isEqual(s.field)&&Et(r.value,s.value)}(e,t):e instanceof vt?function(r,s){return s instanceof vt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&lh(o,s.filters[a]),!0):!1}(e,t):void A()}function dh(e){return e instanceof j?function(n){return`${n.field.canonicalString()} ${n.op} ${_e(n.value)}`}(e):e instanceof vt?function(n){return n.op.toString()+" {"+n.getFilters().map(dh).join(" ,")+"}"}(e):"Filter"}class Zd extends j{constructor(t,n,r){super(t,n,r),this.key=E.fromName(r.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.matchesComparison(n)}}class tf extends j{constructor(t,n){super(t,"in",n),this.keys=fh("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class ef extends j{constructor(t,n){super(t,"not-in",n),this.keys=fh("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function fh(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>E.fromName(r.referenceValue))}class nf extends j{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return hi(n)&&cn(n.arrayValue,this.value)}}class rf extends j{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&cn(this.value.arrayValue,n)}}class sf extends j{constructor(t,n){super(t,"not-in",n)}matches(t){if(cn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!cn(this.value.arrayValue,n)}}class of extends j{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!hi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>cn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function go(e,t=null,n=[],r=[],s=null,i=null,o=null){return new af(e,t,n,r,s,i,o)}function ci(e){const t=R(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Is(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),wr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>_e(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>_e(r)).join(",")),t.ce=n}return t.ce}function ui(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Jd(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!lh(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!mo(e.startAt,t.startAt)&&mo(e.endAt,t.endAt)}function ws(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,h=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=h,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function hf(e,t,n,r,s,i,o,a){return new Rr(e,t,n,r,s,i,o,a)}function mh(e){return new Rr(e)}function po(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function cf(e){return e.collectionGroup!==null}function $e(e){const t=R(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new X(Y.comparator);return o.filters.forEach(h=>{h.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new er(i,r))}),n.has(Y.keyField().canonicalString())||t.le.push(new er(Y.keyField(),r))}return t.le}function pt(e){const t=R(e);return t.he||(t.he=uf(t,$e(e))),t.he}function uf(e,t){if(e.limitType==="F")return go(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new er(s.field,i)});const n=e.endAt?new tr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new tr(e.startAt.position,e.startAt.inclusive):null;return go(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Rs(e,t,n){return new Rr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Sr(e,t){return ui(pt(e),pt(t))&&e.limitType===t.limitType}function gh(e){return`${ci(pt(e))}|lt:${e.limitType}`}function se(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>dh(s)).join(", ")}]`),wr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>_e(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>_e(s)).join(",")),`Target(${r})`}(pt(e))}; limitType=${e.limitType})`}function Pr(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):E.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of $e(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,h){const c=fo(o,a,h);return o.inclusive?c<=0:c<0}(r.startAt,$e(r),s)||r.endAt&&!function(o,a,h){const c=fo(o,a,h);return o.inclusive?c>=0:c>0}(r.endAt,$e(r),s))}(e,t)}function lf(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ph(e){return(t,n)=>{let r=!1;for(const s of $e(e)){const i=df(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function df(e,t,n){const r=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,o,a){const h=o.data.field(i),c=a.data.field(i);return h!==null&&c!==null?pe(h,c):A()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return A()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Se(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return ih(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=new O(E.comparator);function St(){return ff}const _h=new O(E.comparator);function Oe(...e){let t=_h;for(const n of e)t=t.insert(n.key,n);return t}function yh(e){let t=_h;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function $t(){return Ge()}function Eh(){return Ge()}function Ge(){return new Pe(e=>e.toString(),(e,t)=>e.isEqual(t))}const mf=new O(E.comparator),gf=new X(E.comparator);function P(...e){let t=gf;for(const n of e)t=t.add(n);return t}const pf=new X(b);function _f(){return pf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zn(t)?"-0":t}}function Ah(e){return{integerValue:""+e}}function yf(e,t){return Hd(t)?Ah(t):vh(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this._=void 0}}function Ef(e,t,n){return e instanceof nr?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&oi(i)&&(i=ai(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof un?Ih(e,t):e instanceof ln?wh(e,t):function(s,i){const o=Th(s,i),a=_o(o)+_o(s.Ie);return Ts(o)&&Ts(s.Ie)?Ah(a):vh(s.serializer,a)}(e,t)}function vf(e,t,n){return e instanceof un?Ih(e,t):e instanceof ln?wh(e,t):n}function Th(e,t){return e instanceof rr?function(r){return Ts(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class nr extends Cr{}class un extends Cr{constructor(t){super(),this.elements=t}}function Ih(e,t){const n=Rh(t);for(const r of e.elements)n.some(s=>Et(s,r))||n.push(r);return{arrayValue:{values:n}}}class ln extends Cr{constructor(t){super(),this.elements=t}}function wh(e,t){let n=Rh(t);for(const r of e.elements)n=n.filter(s=>!Et(s,r));return{arrayValue:{values:n}}}class rr extends Cr{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function _o(e){return U(e.integerValue||e.doubleValue)}function Rh(e){return hi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Af(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof un&&s instanceof un||r instanceof ln&&s instanceof ln?ge(r.elements,s.elements,Et):r instanceof rr&&s instanceof rr?Et(r.Ie,s.Ie):r instanceof nr&&s instanceof nr}(e.transform,t.transform)}class Tf{constructor(t,n){this.version=t,this.transformResults=n}}class wt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new wt}static exists(t){return new wt(void 0,t)}static updateTime(t){return new wt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Un(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Vr{}function Sh(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Ch(e.key,wt.none()):new Tn(e.key,e.data,wt.none());{const n=e.data,r=ct.empty();let s=new X(Y.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Yt(e.key,r,new ut(s.toArray()),wt.none())}}function If(e,t,n){e instanceof Tn?function(s,i,o){const a=s.value.clone(),h=Eo(s.fieldTransforms,i,o.transformResults);a.setAll(h),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Yt?function(s,i,o){if(!Un(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Eo(s.fieldTransforms,i,o.transformResults),h=i.data;h.setAll(Ph(s)),h.setAll(a),i.convertToFoundDocument(o.version,h).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function ze(e,t,n,r){return e instanceof Tn?function(i,o,a,h){if(!Un(i.precondition,o))return a;const c=i.value.clone(),u=vo(i.fieldTransforms,h,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof Yt?function(i,o,a,h){if(!Un(i.precondition,o))return a;const c=vo(i.fieldTransforms,h,o),u=o.data;return u.setAll(Ph(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(e,t,n,r):function(i,o,a){return Un(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function wf(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Th(r.transform,s||null);i!=null&&(n===null&&(n=ct.empty()),n.set(r.field,i))}return n||null}function yo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ge(r,s,(i,o)=>Af(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Tn extends Vr{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Yt extends Vr{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ph(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Eo(e,t,n){const r=new Map;N(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,vf(o,a,n[s]))}return r}function vo(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Ef(i,o,t))}return r}class Ch extends Vr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rf extends Vr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&If(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=ze(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=ze(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Eh();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const h=Sh(o,a);h!==null&&r.set(s.key,h),o.isValidDocument()||o.convertToNoDocument(w.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),P())}isEqual(t){return this.batchId===t.batchId&&ge(this.mutations,t.mutations,(n,r)=>yo(n,r))&&ge(this.baseMutations,t.baseMutations,(n,r)=>yo(n,r))}}class li{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){N(t.mutations.length===r.length);let s=function(){return mf}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new li(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B,V;function Vf(e){switch(e){default:return A();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Vh(e){if(e===void 0)return yt("GRPC error has no .code"),f.UNKNOWN;switch(e){case B.OK:return f.OK;case B.CANCELLED:return f.CANCELLED;case B.UNKNOWN:return f.UNKNOWN;case B.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case B.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case B.INTERNAL:return f.INTERNAL;case B.UNAVAILABLE:return f.UNAVAILABLE;case B.UNAUTHENTICATED:return f.UNAUTHENTICATED;case B.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case B.NOT_FOUND:return f.NOT_FOUND;case B.ALREADY_EXISTS:return f.ALREADY_EXISTS;case B.PERMISSION_DENIED:return f.PERMISSION_DENIED;case B.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case B.ABORTED:return f.ABORTED;case B.OUT_OF_RANGE:return f.OUT_OF_RANGE;case B.UNIMPLEMENTED:return f.UNIMPLEMENTED;case B.DATA_LOSS:return f.DATA_LOSS;default:return A()}}(V=B||(B={}))[V.OK=0]="OK",V[V.CANCELLED=1]="CANCELLED",V[V.UNKNOWN=2]="UNKNOWN",V[V.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",V[V.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",V[V.NOT_FOUND=5]="NOT_FOUND",V[V.ALREADY_EXISTS=6]="ALREADY_EXISTS",V[V.PERMISSION_DENIED=7]="PERMISSION_DENIED",V[V.UNAUTHENTICATED=16]="UNAUTHENTICATED",V[V.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",V[V.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",V[V.ABORTED=10]="ABORTED",V[V.OUT_OF_RANGE=11]="OUT_OF_RANGE",V[V.UNIMPLEMENTED=12]="UNIMPLEMENTED",V[V.INTERNAL=13]="INTERNAL",V[V.UNAVAILABLE=14]="UNAVAILABLE",V[V.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=new le([4294967295,4294967295],0);function Ao(e){const t=Df().encode(e),n=new Dd;return n.update(t),new Uint8Array(n.digest())}function To(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new le([n,r],0),new le([s,i],0)]}class di{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Me(`Invalid padding: ${n}`);if(r<0)throw new Me(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Me(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Me(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=le.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(le.fromNumber(r)));return s.compare(bf)===1&&(s=new le([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Ao(t),[r,s]=To(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new di(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Ao(t),[r,s]=To(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Me extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,In.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Dr(w.min(),s,new O(b),St(),P())}}class In{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new In(r,n,P(),P(),P())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class Dh{constructor(t,n){this.targetId=t,this.fe=n}}class bh{constructor(t,n,r=st.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Io{constructor(){this.ge=0,this.pe=Ro(),this.ye=st.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=P(),n=P(),r=P();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:A()}}),new In(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=Ro()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,N(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class kf{constructor(t){this.Le=t,this.ke=new Map,this.qe=St(),this.Qe=wo(),this.Ke=new O(b)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:A()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(ws(i))if(r===0){const o=new E(i.path);this.We(n,o,et.newNoDocument(o,w.min()))}else N(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),h=a?this.et(a,t,o):1;if(h!==0){this.He(n);const c=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Ht(r).toUint8Array()}catch(h){if(h instanceof oh)return me("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{a=new di(o,s,i)}catch(h){return me(h instanceof Me?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&ws(a.target)){const h=new E(a.target.path);this.qe.get(h)!==null||this.st(o,h)||this.We(o,h,et.newNoDocument(h,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=P();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(h=>{const c=this.Ye(h);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new Dr(t,n,this.Ke,this.qe,r);return this.qe=St(),this.Qe=wo(),this.Ke=new O(b),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new Io,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new X(b),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||p("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Io),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function wo(){return new O(E.comparator)}function Ro(){return new O(E.comparator)}const Nf={asc:"ASCENDING",desc:"DESCENDING"},xf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Lf={and:"AND",or:"OR"};class Of{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ss(e,t){return e.useProto3Json||wr(t)?t:{value:t}}function sr(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function kh(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Mf(e,t){return sr(e,t.toTimestamp())}function _t(e){return N(!!e),w.fromTimestamp(function(n){const r=xt(n);return new q(r.seconds,r.nanos)}(e))}function fi(e,t){return Ps(e,t).canonicalString()}function Ps(e,t){const n=function(s){return new L(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Nh(e){const t=L.fromString(e);return N(Fh(t)),t}function Cs(e,t){return fi(e.databaseId,t.path)}function Zr(e,t){const n=Nh(t);if(n.get(1)!==e.databaseId.projectId)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(Lh(n))}function xh(e,t){return fi(e.databaseId,t)}function Ff(e){const t=Nh(e);return t.length===4?L.emptyPath():Lh(t)}function Vs(e){return new L(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Lh(e){return N(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function So(e,t,n){return{name:Cs(e,t),fields:n.value.mapValue.fields}}function Bf(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:A()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(N(u===void 0||typeof u=="string"),st.fromBase64String(u||"")):(N(u===void 0||u instanceof Uint8Array),st.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:Vh(c.code);return new y(u,c.message||"")}(o);n=new bh(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Zr(e,r.document.name),i=_t(r.document.updateTime),o=r.document.createTime?_t(r.document.createTime):w.min(),a=new ct({mapValue:{fields:r.document.fields}}),h=et.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new jn(c,u,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Zr(e,r.document),i=r.readTime?_t(r.readTime):w.min(),o=et.newNoDocument(s,i),a=r.removedTargetIds||[];n=new jn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Zr(e,r.document),i=r.removedTargetIds||[];n=new jn([],i,s,null)}else{if(!("filter"in t))return A();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Cf(s,i),a=r.targetId;n=new Dh(a,o)}}return n}function Uf(e,t){let n;if(t instanceof Tn)n={update:So(e,t.key,t.value)};else if(t instanceof Ch)n={delete:Cs(e,t.key)};else if(t instanceof Yt)n={update:So(e,t.key,t.data),updateMask:Wf(t.fieldMask)};else{if(!(t instanceof Rf))return A();n={verify:Cs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof nr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof un)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ln)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof rr)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw A()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Mf(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:A()}(e,t.precondition)),n}function jf(e,t){return e&&e.length>0?(N(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?_t(s.updateTime):_t(i);return o.isEqual(w.min())&&(o=_t(i)),new Tf(o,s.transformResults||[])}(n,t))):[]}function qf(e,t){return{documents:[xh(e,t.path)]}}function $f(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=xh(e,s);const i=function(c){if(c.length!==0)return Mh(vt.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(u=>function(m){return{field:ie(m.field),direction:Kf(m.dir)}}(u))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ss(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ut:n,parent:s}}function Gf(e){let t=Ff(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){N(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(l){const m=Oh(l);return m instanceof vt&&uh(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(l){return l.map(m=>function(C){return new er(oe(C.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(l){let m;return m=typeof l=="object"?l.value:l,wr(m)?null:m}(n.limit));let h=null;n.startAt&&(h=function(l){const m=!!l.before,g=l.values||[];return new tr(g,m)}(n.startAt));let c=null;return n.endAt&&(c=function(l){const m=!l.before,g=l.values||[];return new tr(g,m)}(n.endAt)),hf(t,s,o,i,a,"F",h,c)}function zf(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Oh(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=oe(n.unaryFilter.field);return j.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=oe(n.unaryFilter.field);return j.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=oe(n.unaryFilter.field);return j.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=oe(n.unaryFilter.field);return j.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(e):e.fieldFilter!==void 0?function(n){return j.create(oe(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return vt.create(n.compositeFilter.filters.map(r=>Oh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return A()}}(n.compositeFilter.op))}(e):A()}function Kf(e){return Nf[e]}function Hf(e){return xf[e]}function Qf(e){return Lf[e]}function ie(e){return{fieldPath:e.canonicalString()}}function oe(e){return Y.fromServerFormat(e.fieldPath)}function Mh(e){return e instanceof j?function(n){if(n.op==="=="){if(lo(n.value))return{unaryFilter:{field:ie(n.field),op:"IS_NAN"}};if(uo(n.value))return{unaryFilter:{field:ie(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(lo(n.value))return{unaryFilter:{field:ie(n.field),op:"IS_NOT_NAN"}};if(uo(n.value))return{unaryFilter:{field:ie(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ie(n.field),op:Hf(n.op),value:n.value}}}(e):e instanceof vt?function(n){const r=n.getFilters().map(s=>Mh(s));return r.length===1?r[0]:{compositeFilter:{op:Qf(n.op),filters:r}}}(e):A()}function Wf(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Fh(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,n,r,s,i=w.min(),o=w.min(),a=st.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=h}withSequenceNumber(t){return new Vt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t){this.ct=t}}function Jf(e){const t=Gf({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Rs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this._n=new Zf}addToCollectionParentIndex(t,n){return this._n.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}deleteAllFieldIndexes(t){return d.resolve()}createTargetIndexes(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getIndexType(t,n){return d.resolve(0)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,n){return d.resolve(Nt.min())}getMinOffsetFromCollectionGroup(t,n){return d.resolve(Nt.min())}updateCollectionGroup(t,n,r){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class Zf{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new X(L.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new X(L.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new ye(0)}static Bn(){return new ye(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(){this.changes=new Pe(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,et.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?d.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&ze(r.mutation,s,ut.empty(),q.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,P()).next(()=>r))}getLocalViewOfDocuments(t,n,r=P()){const s=$t();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=Oe();return i.forEach((a,h)=>{o=o.insert(a,h.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=$t();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,P()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=St();const o=Ge(),a=function(){return Ge()}();return n.forEach((h,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Yt)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),ze(u.mutation,c,u.mutation.getFieldMask(),q.now())):o.set(c.key,ut.empty())}),this.recalculateAndSaveOverlays(t,i).next(h=>(h.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var l;return a.set(c,new em(u,(l=o.get(c))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Ge();let s=new O((o,a)=>o-a),i=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(h=>{const c=n.get(h);if(c===null)return;let u=r.get(h)||ut.empty();u=a.applyToLocalView(c,u),r.set(h,u);const l=(s.get(a.batchId)||P()).add(h);s=s.insert(a.batchId,l)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const h=a.getNext(),c=h.key,u=h.value,l=Eh();u.forEach(m=>{if(!i.has(m)){const g=Sh(n.get(m),r.get(m));g!==null&&l.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,l))}return d.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return E.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):cf(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):d.resolve($t());let a=-1,h=i;return o.next(c=>d.forEach(c,(u,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),i.get(u)?d.resolve():this.remoteDocumentCache.getEntry(t,u).next(m=>{h=h.insert(u,m)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,h,c,P())).next(u=>({batchId:a,changes:yh(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(r=>{let s=Oe();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=Oe();return this.indexManager.getCollectionParents(t,i).next(a=>d.forEach(a,h=>{const c=function(l,m){return new Rr(m,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,h.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r,s).next(u=>{u.forEach((l,m)=>{o=o.insert(l,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((h,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,et.newInvalidDocument(u)))});let a=Oe();return o.forEach((h,c)=>{const u=i.get(h);u!==void 0&&ze(u.mutation,c,ut.empty(),q.now()),Pr(n,c)&&(a=a.insert(h,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return d.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:_t(s.createTime)}}(n)),d.resolve()}getNamedQuery(t,n){return d.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:Jf(s.bundledQuery),readTime:_t(s.readTime)}}(n)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(){this.overlays=new O(E.comparator),this.hr=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}getOverlays(t,n){const r=$t();return d.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),d.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),d.resolve()}getOverlaysForCollection(t,n,r){const s=$t(),i=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const h=a.getNext().value,c=h.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&h.largestBatchId>r&&s.set(h.getKey(),h)}return d.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new O((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=$t(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=$t(),h=i.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return d.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Pf(n,r));let i=this.hr.get(n);i===void 0&&(i=P(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.Pr=new X(G.Ir),this.Tr=new X(G.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new G(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new G(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new E(new L([])),r=new G(n,t),s=new G(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new E(new L([])),r=new G(n,t),s=new G(n,t+1);let i=P();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new G(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class G{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return E.comparator(t.key,n.key)||b(t.pr,n.pr)}static Er(t,n){return b(t.pr,n.pr)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new X(G.Ir)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Sf(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new G(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return d.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new G(n,0),s=new G(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),d.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new X(b);return n.forEach(s=>{const i=new G(s,0),o=new G(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),d.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;E.isDocumentKey(i)||(i=i.child(""));const o=new G(new E(i),0);let a=new X(b);return this.wr.forEachWhile(h=>{const c=h.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(h.pr)),!0)},o),d.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){N(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return d.forEach(n.mutations,s=>{const i=new G(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new G(n,0),s=this.wr.firstAfterOrEqual(r);return d.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(t){this.vr=t,this.docs=function(){return new O(E.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return d.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(t,n){let r=St();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():et.newInvalidDocument(s))}),d.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=St();const o=n.path,a=new E(o.child("")),h=this.docs.getIteratorFrom(a);for(;h.hasNext();){const{key:c,value:{document:u}}=h.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||qd(jd(u),r)<=0||(s.has(u.key)||Pr(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return d.resolve(i)}getAllFromCollectionGroup(t,n,r,s){A()}Fr(t,n){return d.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new am(this)}getSize(t){return d.resolve(this.size)}}class am extends tm{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),d.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(t){this.persistence=t,this.Mr=new Pe(n=>ci(n),ui),this.lastRemoteSnapshotVersion=w.min(),this.highestTargetId=0,this.Or=0,this.Nr=new mi,this.targetCount=0,this.Br=ye.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),d.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new ye(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.qn(n),d.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),d.waitFor(i).next(()=>s)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return d.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),d.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),d.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),d.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return d.resolve(r)}containsKey(t,n){return d.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(t,n){this.Lr={},this.overlays={},this.kr=new ii(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new hm(this),this.indexManager=new Xf,this.remoteDocumentCache=function(s){return new om(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Yf(n),this.$r=new rm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new sm,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new im(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){p("MemoryPersistence","Starting transaction:",t);const s=new um(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return d.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class um extends Gd{constructor(t){super(),this.currentSequenceNumber=t}}class gi{constructor(t){this.persistence=t,this.zr=new mi,this.jr=null}static Hr(t){return new gi(t)}get Jr(){if(this.jr)return this.jr;throw A()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),d.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),d.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Jr,r=>{const s=E.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,w.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return d.or([()=>d.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=P(),s=P();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new pi(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return uu()?8:qt.v(Gn())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ji(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new lm;return this.Ji(t,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>i.result)}Yi(t,n,r,s){return r.documentReadCount<this.Wi?(Ne()<=D.DEBUG&&p("QueryEngine","SDK will not create cache indexes for query:",se(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),d.resolve()):(Ne()<=D.DEBUG&&p("QueryEngine","Query:",se(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Ne()<=D.DEBUG&&p("QueryEngine","The SDK decides to create cache indexes for query:",se(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,pt(n))):d.resolve())}ji(t,n){if(po(n))return d.resolve(null);let r=pt(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Rs(n,null,"F"),r=pt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=P(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(h=>{const c=this.Zi(n,a);return this.Xi(n,c,o,h.readTime)?this.ji(t,Rs(n,null,"F")):this.es(t,c,n,h)}))})))}Hi(t,n,r,s){return po(n)||s.isEqual(w.min())?d.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?d.resolve(null):(Ne()<=D.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),se(n)),this.es(t,o,n,Ud(s,-1)).next(a=>a))})}Zi(t,n){let r=new X(ph(t));return n.forEach((s,i)=>{Pr(t,i)&&(r=r.add(i))}),r}Xi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,n,r){return Ne()<=D.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",se(n)),this.zi.getDocumentsMatchingQuery(t,n,Nt.min(),r)}es(t,n,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(t,n,r,s){this.persistence=t,this.ts=n,this.serializer=s,this.ns=new O(b),this.rs=new Pe(i=>ci(i),ui),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new nm(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function mm(e,t,n,r){return new fm(e,t,n,r)}async function Bh(e,t){const n=R(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let h=P();for(const c of s){o.push(c.batchId);for(const u of c.mutations)h=h.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)h=h.add(u.key)}return n.localDocuments.getDocuments(r,h).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function gm(e,t){const n=R(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,h,c,u){const l=c.batch,m=l.keys();let g=d.resolve();return m.forEach(C=>{g=g.next(()=>u.getEntry(h,C)).next(S=>{const T=c.docVersions.get(C);N(T!==null),S.version.compareTo(T)<0&&(l.applyToRemoteDocument(S,c),S.isValidDocument()&&(S.setReadTime(c.commitVersion),u.addEntry(S)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(h,l))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let h=P();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(h=h.add(a.batch.mutations[c].key));return h}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Uh(e){const t=R(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function pm(e,t){const n=R(e),r=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];t.targetChanges.forEach((u,l)=>{const m=s.get(l);if(!m)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,l).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,l)));let g=m.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(l)!==null?g=g.withResumeToken(st.EMPTY_BYTE_STRING,w.min()).withLastLimboFreeSnapshotVersion(w.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(l,g),function(S,T,F){return S.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(m,g,u)&&a.push(n.Qr.updateTargetData(i,g))});let h=St(),c=P();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(_m(i,o,t.documentUpdates).next(u=>{h=u.cs,c=u.ls})),!r.isEqual(w.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(l=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return d.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h)}).then(i=>(n.ns=s,i))}function _m(e,t,n){let r=P(),s=P();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=St();return n.forEach((a,h)=>{const c=i.get(a);h.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),h.isNoDocument()&&h.version.isEqual(w.min())?(t.removeEntry(a,h.readTime),o=o.insert(a,h)):!c.isValidDocument()||h.version.compareTo(c.version)>0||h.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(h),o=o.insert(a,h)):p("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",h.version)}),{cs:o,ls:s}})}function ym(e,t){const n=R(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Em(e,t){const n=R(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,d.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Vt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function Ds(e,t,n){const r=R(e),s=r.ns.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!An(o))throw o;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function Po(e,t,n){const r=R(e);let s=w.min(),i=P();return r.persistence.runTransaction("Execute query","readwrite",o=>function(h,c,u){const l=R(h),m=l.rs.get(u);return m!==void 0?d.resolve(l.ns.get(m)):l.Qr.getTargetData(c,u)}(r,o,pt(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(h=>{i=h})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?s:w.min(),n?i:P())).next(a=>(vm(r,lf(t),a),{documents:a,hs:i})))}function vm(e,t,n){let r=e.ss.get(t)||w.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.ss.set(t,r)}class Co{constructor(){this.activeTargetIds=_f()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Am{constructor(){this.no=new Co,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Co,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn=null;function ts(){return Mn===null?Mn=function(){return 268435456+Math.round(2147483648*Math.random())}():Mn++,"0x"+Mn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z="WebChannelConnection";class Rm extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=ts(),h=this.bo(n,r.toUriEncodedString());p("RestConnection",`Sending RPC '${n}' ${a}:`,h,s);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,i,o),this.Co(n,h,c,s).then(u=>(p("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw me("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",h,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Re}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=Im[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,s){const i=ts();return new Promise((o,a)=>{const h=new Vd;h.setWithCredentials(!0),h.listenOnce(Pd.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Xr.NO_ERROR:const u=h.getResponseJson();p(Z,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case Xr.TIMEOUT:p(Z,`RPC '${t}' ${i} timed out`),a(new y(f.DEADLINE_EXCEEDED,"Request time out"));break;case Xr.HTTP_ERROR:const l=h.getStatus();if(p(Z,`RPC '${t}' ${i} failed with status:`,l,"response text:",h.getResponseText()),l>0){let m=h.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const C=function(T){const F=T.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(F)>=0?F:f.UNKNOWN}(g.status);a(new y(C,g.message))}else a(new y(f.UNKNOWN,"Server responded with status "+h.getStatus()))}else a(new y(f.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{p(Z,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(s);p(Z,`RPC '${t}' ${i} sending request:`,s),h.send(n,"POST",c,r,15)})}Fo(t,n,r){const s=ts(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Rd(),a=Sd(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(h.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Do(h.initMessageHeaders,n,r),h.encodeInitMessageHeaders=!0;const u=i.join("");p(Z,`Creating RPC '${t}' stream ${s}: ${u}`,h);const l=o.createWebChannel(u,h);let m=!1,g=!1;const C=new wm({lo:T=>{g?p(Z,`Not sending because RPC '${t}' stream ${s} is closed:`,T):(m||(p(Z,`Opening RPC '${t}' stream ${s} transport.`),l.open(),m=!0),p(Z,`RPC '${t}' stream ${s} sending:`,T),l.send(T))},ho:()=>l.close()}),S=(T,F,H)=>{T.listen(F,ot=>{try{H(ot)}catch(At){setTimeout(()=>{throw At},0)}})};return S(l,xn.EventType.OPEN,()=>{g||p(Z,`RPC '${t}' stream ${s} transport opened.`)}),S(l,xn.EventType.CLOSE,()=>{g||(g=!0,p(Z,`RPC '${t}' stream ${s} transport closed`),C.Vo())}),S(l,xn.EventType.ERROR,T=>{g||(g=!0,me(Z,`RPC '${t}' stream ${s} transport errored:`,T),C.Vo(new y(f.UNAVAILABLE,"The operation could not be completed")))}),S(l,xn.EventType.MESSAGE,T=>{var F;if(!g){const H=T.data[0];N(!!H);const ot=H,At=ot.error||((F=ot[0])===null||F===void 0?void 0:F.error);if(At){p(Z,`RPC '${t}' stream ${s} received error:`,At);const Sn=At.status;let Xt=function(_c){const Vi=B[_c];if(Vi!==void 0)return Vh(Vi)}(Sn),Pn=At.message;Xt===void 0&&(Xt=f.INTERNAL,Pn="Unknown error status: "+Sn+" with message "+At.message),g=!0,C.Vo(new y(Xt,Pn)),l.close()}else p(Z,`RPC '${t}' stream ${s} received:`,H),C.mo(H)}}),S(a,Cd.STAT_EVENT,T=>{T.stat===so.PROXY?p(Z,`RPC '${t}' stream ${s} detected buffering proxy`):T.stat===so.NOPROXY&&p(Z,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.Ro()},0),C}}function es(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(e){return new Of(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-r);s>0&&p("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t,n,r,s,i,o,a,h){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=h,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new jh(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(yt(n.toString()),yt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{t(()=>{const s=new y(f.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return p("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Sm extends qh{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=Bf(this.serializer,t),r=function(i){if(!("targetChange"in i))return w.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?w.min():o.readTime?_t(o.readTime):w.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=Vs(this.serializer),n.addTarget=function(i,o){let a;const h=o.target;if(a=ws(h)?{documents:qf(i,h)}:{query:$f(i,h).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=kh(i,o.resumeToken);const c=Ss(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(w.min())>0){a.readTime=sr(i,o.snapshotVersion.toTimestamp());const c=Ss(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=zf(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=Vs(this.serializer),n.removeTarget=t,this.t_(n)}}class Pm extends qh{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,n){return this.connection.Fo("Write",t,n)}onMessage(t){if(N(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const n=jf(t.writeResults,t.commitTime),r=_t(t.commitTime);return this.listener.T_(r,n)}return N(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=Vs(this.serializer),this.t_(t)}I_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>Uf(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,Ps(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(f.UNKNOWN,i.toString())})}vo(t,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,Ps(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new y(f.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class Vm{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(yt(n),this.g_=!1):p("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Jt(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(h){const c=R(h);c.v_.add(4),await wn(c),c.x_.set("Unknown"),c.v_.delete(4),await kr(c)}(this))})}),this.x_=new Vm(r,s)}}async function kr(e){if(Jt(e))for(const t of e.F_)await t(!0)}async function wn(e){for(const t of e.F_)await t(!1)}function $h(e,t){const n=R(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),Ei(n)?yi(n):Ce(n).Jo()&&_i(n,t))}function Gh(e,t){const n=R(e),r=Ce(n);n.C_.delete(t),r.Jo()&&zh(n,t),n.C_.size===0&&(r.Jo()?r.Xo():Jt(n)&&n.x_.set("Unknown"))}function _i(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(w.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ce(e).c_(t)}function zh(e,t){e.O_.Oe(t),Ce(e).l_(t)}function yi(e){e.O_=new kf({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Ce(e).start(),e.x_.p_()}function Ei(e){return Jt(e)&&!Ce(e).Ho()&&e.C_.size>0}function Jt(e){return R(e).v_.size===0}function Kh(e){e.O_=void 0}async function bm(e){e.C_.forEach((t,n)=>{_i(e,t)})}async function km(e,t){Kh(e),Ei(e)?(e.x_.S_(t),yi(e)):e.x_.set("Unknown")}async function Nm(e,t,n){if(e.x_.set("Online"),t instanceof bh&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(e,t)}catch(r){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ir(e,r)}else if(t instanceof jn?e.O_.$e(t):t instanceof Dh?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(w.min()))try{const r=await Uh(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((h,c)=>{if(h.resumeToken.approximateByteSize()>0){const u=i.C_.get(c);u&&i.C_.set(c,u.withResumeToken(h.resumeToken,o))}}),a.targetMismatches.forEach((h,c)=>{const u=i.C_.get(h);if(!u)return;i.C_.set(h,u.withResumeToken(st.EMPTY_BYTE_STRING,u.snapshotVersion)),zh(i,h);const l=new Vt(u.target,h,c,u.sequenceNumber);_i(i,l)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){p("RemoteStore","Failed to raise snapshot:",r),await ir(e,r)}}async function ir(e,t,n){if(!An(t))throw t;e.v_.add(1),await wn(e),e.x_.set("Offline"),n||(n=()=>Uh(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await kr(e)})}function Hh(e,t){return t().catch(n=>ir(e,n,t))}async function Nr(e){const t=R(e),n=Lt(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;xm(t);)try{const s=await ym(t.localStore,r);if(s===null){t.D_.length===0&&n.Xo();break}r=s.batchId,Lm(t,s)}catch(s){await ir(t,s)}Qh(t)&&Wh(t)}function xm(e){return Jt(e)&&e.D_.length<10}function Lm(e,t){e.D_.push(t);const n=Lt(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function Qh(e){return Jt(e)&&!Lt(e).Ho()&&e.D_.length>0}function Wh(e){Lt(e).start()}async function Om(e){Lt(e).d_()}async function Mm(e){const t=Lt(e);for(const n of e.D_)t.I_(n.mutations)}async function Fm(e,t,n){const r=e.D_.shift(),s=li.from(r,t,n);await Hh(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Nr(e)}async function Bm(e,t){t&&Lt(e).P_&&await async function(r,s){if(function(o){return Vf(o)&&o!==f.ABORTED}(s.code)){const i=r.D_.shift();Lt(r).Zo(),await Hh(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Nr(r)}}(e,t),Qh(e)&&Wh(e)}async function Do(e,t){const n=R(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=Jt(n);n.v_.add(3),await wn(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await kr(n)}async function Um(e,t){const n=R(e);t?(n.v_.delete(2),await kr(n)):t||(n.v_.add(2),await wn(n),n.x_.set("Unknown"))}function Ce(e){return e.N_||(e.N_=function(n,r,s){const i=R(n);return i.R_(),new Sm(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:bm.bind(null,e),To:km.bind(null,e),u_:Nm.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),Ei(e)?yi(e):e.x_.set("Unknown")):(await e.N_.stop(),Kh(e))})),e.N_}function Lt(e){return e.B_||(e.B_=function(n,r,s){const i=R(n);return i.R_(),new Pm(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:Om.bind(null,e),To:Bm.bind(null,e),E_:Mm.bind(null,e),T_:Fm.bind(null,e)}),e.F_.push(async t=>{t?(e.B_.Zo(),await Nr(e)):(await e.B_.stop(),e.D_.length>0&&(p("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new It,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new vi(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ai(e,t){if(yt("AsyncQueue",`${t}: ${e}`),An(e))return new y(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this.comparator=t?(n,r)=>t(n,r)||E.comparator(n.key,r.key):(n,r)=>E.comparator(n.key,r.key),this.keyedMap=Oe(),this.sortedSet=new O(this.comparator)}static emptySet(t){return new de(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof de)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new de;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.L_=new O(E.comparator)}track(t){const n=t.doc.key,r=this.L_.get(n);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(n,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(n):t.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):A():this.L_=this.L_.insert(n,t)}k_(){const t=[];return this.L_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Ee{constructor(t,n,r,s,i,o,a,h,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=h,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ee(t,n,de.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Sr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.q_=void 0,this.Q_=[]}}class qm{constructor(){this.queries=new Pe(t=>gh(t),Sr),this.onlineState="Unknown",this.K_=new Set}}async function $m(e,t){const n=R(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new jm),s)try{i.q_=await n.onListen(r)}catch(o){const a=Ai(o,`Initialization of query '${se(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.Q_.push(t),t.U_(n.onlineState),i.q_&&t.W_(i.q_)&&Ti(n)}async function Gm(e,t){const n=R(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),s=i.Q_.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function zm(e,t){const n=R(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.W_(s)&&(r=!0);o.q_=s}}r&&Ti(n)}function Km(e,t,n){const r=R(e),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(t)}function Ti(e){e.K_.forEach(t=>{t.next()})}class Hm{constructor(t,n,r){this.query=t,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ee(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.z_?this.H_(t)&&(this.G_.next(t),n=!0):this.J_(t,this.onlineState)&&(this.Y_(t),n=!0),this.j_=t,n}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),n=!0),n}J_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(t){t=Ee.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t){this.key=t}}class Jh{constructor(t){this.key=t}}class Qm{constructor(t,n){this.query=t,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=P(),this.mutatedKeys=P(),this.ua=ph(t),this.ca=new de(this.ua)}get la(){return this.oa}ha(t,n){const r=n?n.Pa:new bo,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,l)=>{const m=s.get(u),g=Pr(this.query,l)?l:null,C=!!m&&this.mutatedKeys.has(m.key),S=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let T=!1;m&&g?m.data.isEqual(g.data)?C!==S&&(r.track({type:3,doc:g}),T=!0):this.Ia(m,g)||(r.track({type:2,doc:g}),T=!0,(h&&this.ua(g,h)>0||c&&this.ua(g,c)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),T=!0):m&&!g&&(r.track({type:1,doc:m}),T=!0,(h||c)&&(a=!0)),T&&(g?(o=o.add(g),i=S?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,Xi:a,mutatedKeys:i}}Ia(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((u,l)=>function(g,C){const S=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return S(g)-S(C)}(u.type,l.type)||this.ua(u.doc,l.doc)),this.Ta(r),s=s!=null&&s;const a=n&&!s?this.Ea():[],h=this.aa.size===0&&this.current&&!s?1:0,c=h!==this._a;return this._a=h,o.length!==0||c?{snapshot:new Ee(this.query,t.ca,i,o,t.mutatedKeys,h===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new bo,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=P(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return t.forEach(r=>{this.aa.has(r)||n.push(new Jh(r))}),this.aa.forEach(r=>{t.has(r)||n.push(new Yh(r))}),n}Ra(t){this.oa=t.hs,this.aa=P();const n=this.ha(t.documents);return this.applyChanges(n,!0)}Va(){return Ee.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class Wm{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Ym{constructor(t){this.key=t,this.ma=!1}}class Jm{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Pe(a=>gh(a),Sr),this.pa=new Map,this.ya=new Set,this.wa=new O(E.comparator),this.Sa=new Map,this.ba=new mi,this.Da={},this.Ca=new Map,this.va=ye.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function Xm(e,t){const n=hg(e);let r,s;const i=n.ga.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await Em(n.localStore,pt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Zm(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&$h(n.remoteStore,o)}return s}async function Zm(e,t,n,r,s){e.Ma=(l,m,g)=>async function(S,T,F,H){let ot=T.view.ha(F);ot.Xi&&(ot=await Po(S.localStore,T.query,!1).then(({documents:Pn})=>T.view.ha(Pn,ot)));const At=H&&H.targetChanges.get(T.targetId),Sn=H&&H.targetMismatches.get(T.targetId)!=null,Xt=T.view.applyChanges(ot,S.isPrimaryClient,At,Sn);return No(S,T.targetId,Xt.da),Xt.snapshot}(e,l,m,g);const i=await Po(e.localStore,t,!0),o=new Qm(t,i.hs),a=o.ha(i.documents),h=In.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),c=o.applyChanges(a,e.isPrimaryClient,h);No(e,n,c.da);const u=new Wm(t,n,o);return e.ga.set(t,u),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),c.snapshot}async function tg(e,t){const n=R(e),r=n.ga.get(t),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!Sr(i,t))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ds(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Gh(n.remoteStore,r.targetId),bs(n,r.targetId)}).catch(vn)):(bs(n,r.targetId),await Ds(n.localStore,r.targetId,!0))}async function eg(e,t,n){const r=cg(e);try{const s=await function(o,a){const h=R(o),c=q.now(),u=a.reduce((g,C)=>g.add(C.key),P());let l,m;return h.persistence.runTransaction("Locally write mutations","readwrite",g=>{let C=St(),S=P();return h.os.getEntries(g,u).next(T=>{C=T,C.forEach((F,H)=>{H.isValidDocument()||(S=S.add(F))})}).next(()=>h.localDocuments.getOverlayedDocuments(g,C)).next(T=>{l=T;const F=[];for(const H of a){const ot=wf(H,l.get(H.key).overlayedDocument);ot!=null&&F.push(new Yt(H.key,ot,ah(ot.value.mapValue),wt.exists(!0)))}return h.mutationQueue.addMutationBatch(g,c,F,a)}).next(T=>{m=T;const F=T.applyToLocalDocumentSet(l,S);return h.documentOverlayCache.saveOverlays(g,T.batchId,F)})}).then(()=>({batchId:m.batchId,changes:yh(l)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,h){let c=o.Da[o.currentUser.toKey()];c||(c=new O(b)),c=c.insert(a,h),o.Da[o.currentUser.toKey()]=c}(r,s.batchId,n),await Rn(r,s.changes),await Nr(r.remoteStore)}catch(s){const i=Ai(s,"Failed to persist write");n.reject(i)}}async function Xh(e,t){const n=R(e);try{const r=await pm(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(N(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?N(o.ma):s.removedDocuments.size>0&&(N(o.ma),o.ma=!1))}),await Rn(n,r,t)}catch(r){await vn(r)}}function ko(e,t,n){const r=R(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const h=R(o);h.onlineState=a;let c=!1;h.queries.forEach((u,l)=>{for(const m of l.Q_)m.U_(a)&&(c=!0)}),c&&Ti(h)}(r.eventManager,t),s.length&&r.fa.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ng(e,t,n){const r=R(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Sa.get(t),i=s&&s.key;if(i){let o=new O(E.comparator);o=o.insert(i,et.newNoDocument(i,w.min()));const a=P().add(i),h=new Dr(w.min(),new Map,new O(b),o,a);await Xh(r,h),r.wa=r.wa.remove(i),r.Sa.delete(t),Ii(r)}else await Ds(r.localStore,t,!1).then(()=>bs(r,t,n)).catch(vn)}async function rg(e,t){const n=R(e),r=t.batch.batchId;try{const s=await gm(n.localStore,t);tc(n,r,null),Zh(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Rn(n,s)}catch(s){await vn(s)}}async function sg(e,t,n){const r=R(e);try{const s=await function(o,a){const h=R(o);return h.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return h.mutationQueue.lookupMutationBatch(c,a).next(l=>(N(l!==null),u=l.keys(),h.mutationQueue.removeMutationBatch(c,l))).next(()=>h.mutationQueue.performConsistencyCheck(c)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>h.localDocuments.getDocuments(c,u))})}(r.localStore,t);tc(r,t,n),Zh(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Rn(r,s)}catch(s){await vn(s)}}function Zh(e,t){(e.Ca.get(t)||[]).forEach(n=>{n.resolve()}),e.Ca.delete(t)}function tc(e,t,n){const r=R(e);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Da[r.currentUser.toKey()]=s}}function bs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach(r=>{e.ba.containsKey(r)||ec(e,r)})}function ec(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);n!==null&&(Gh(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),Ii(e))}function No(e,t,n){for(const r of n)r instanceof Yh?(e.ba.addReference(r.key,t),ig(e,r)):r instanceof Jh?(p("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||ec(e,r.key)):A()}function ig(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(p("SyncEngine","New document in limbo: "+n),e.ya.add(r),Ii(e))}function Ii(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new E(L.fromString(t)),r=e.va.next();e.Sa.set(r,new Ym(n)),e.wa=e.wa.insert(n,r),$h(e.remoteStore,new Vt(pt(mh(n.path)),r,"TargetPurposeLimboResolution",ii._e))}}async function Rn(e,t,n){const r=R(e),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,h)=>{o.push(r.Ma(h,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(h.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=pi.Ki(h.targetId,c);i.push(u)}}))}),await Promise.all(o),r.fa.u_(s),await async function(h,c){const u=R(h);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>d.forEach(c,m=>d.forEach(m.qi,g=>u.persistence.referenceDelegate.addReference(l,m.targetId,g)).next(()=>d.forEach(m.Qi,g=>u.persistence.referenceDelegate.removeReference(l,m.targetId,g)))))}catch(l){if(!An(l))throw l;p("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const m=l.targetId;if(!l.fromCache){const g=u.ns.get(m),C=g.snapshotVersion,S=g.withLastLimboFreeSnapshotVersion(C);u.ns=u.ns.insert(m,S)}}}(r.localStore,i))}async function og(e,t){const n=R(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const r=await Bh(n.localStore,t);n.currentUser=t,function(i,o){i.Ca.forEach(a=>{a.forEach(h=>{h.reject(new y(f.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Rn(n,r.us)}}function ag(e,t){const n=R(e),r=n.Sa.get(t);if(r&&r.ma)return P().add(r.key);{let s=P();const i=n.pa.get(t);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function hg(e){const t=R(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Xh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ag.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ng.bind(null,t),t.fa.u_=zm.bind(null,t.eventManager),t.fa.xa=Km.bind(null,t.eventManager),t}function cg(e){const t=R(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=rg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=sg.bind(null,t),t}class xo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=br(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return mm(this.persistence,new dm,t.initialUser,this.serializer)}createPersistence(t){return new cm(gi.Hr,this.serializer)}createSharedClientState(t){return new Am}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ug{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ko(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=og.bind(null,this.syncEngine),await Um(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new qm}()}createDatastore(t){const n=br(t.databaseInfo.databaseId),r=function(i){return new Rm(i)}(t.databaseInfo);return function(i,o,a,h){return new Cm(i,o,a,h)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new Dm(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>ko(this.syncEngine,n,0),function(){return Vo.D()?new Vo:new Tm}())}createSyncEngine(t,n){return function(s,i,o,a,h,c,u){const l=new Jm(s,i,o,a,h,c);return u&&(l.Fa=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const s=R(r);p("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await wn(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):yt("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=sh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{p("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(p("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new It;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Ai(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ns(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Bh(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Lo(e,t){e.asyncQueue.verifyOperationInProgress();const n=await mg(e);p("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Do(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Do(t.remoteStore,s)),e._onlineComponents=t}function fg(e){return e.name==="FirebaseError"?e.code===f.FAILED_PRECONDITION||e.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function mg(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){p("FirestoreClient","Using user provided OfflineComponentProvider");try{await ns(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!fg(n))throw n;me("Error using user provided cache. Falling back to memory cache: "+n),await ns(e,new xo)}}else p("FirestoreClient","Using default OfflineComponentProvider"),await ns(e,new xo);return e._offlineComponents}async function nc(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(p("FirestoreClient","Using user provided OnlineComponentProvider"),await Lo(e,e._uninitializedComponentsProvider._online)):(p("FirestoreClient","Using default OnlineComponentProvider"),await Lo(e,new ug))),e._onlineComponents}function gg(e){return nc(e).then(t=>t.syncEngine)}async function pg(e){const t=await nc(e),n=t.eventManager;return n.onListen=Xm.bind(null,t.syncEngine),n.onUnlisten=tg.bind(null,t.syncEngine),n}function _g(e,t,n={}){const r=new It;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,h,c){const u=new lg({next:m=>{o.enqueueAndForget(()=>Gm(i,l)),m.fromCache&&h.source==="server"?c.reject(new y(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),l=new Hm(a,u,{includeMetadataChanges:!0,Z_:!0});return $m(i,l)}(await pg(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(e,t,n){if(!n)throw new y(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function yg(e,t,n,r){if(t===!0&&r===!0)throw new y(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Mo(e){if(!E.isDocumentKey(e))throw new y(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Fo(e){if(E.isDocumentKey(e))throw new y(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function wi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":A()}function or(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wi(e);throw new y(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}yg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class xr{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bo(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bd;switch(r.type){case"firstParty":return new Ld(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Oo.get(n);r&&(p("ComponentProvider","Removing Datastore"),Oo.delete(n),r.terminate())}(this),Promise.resolve()}}function Eg(e,t,n,r={}){var s;const i=(e=or(e,xr))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&me("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,h;if(typeof r.mockUserToken=="string")a=r.mockUserToken,h=tt.MOCK_USER;else{a=hu(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new y(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new tt(c)}e._authCredentials=new kd(new rh(a,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Lr(this.firestore,t,this._query)}}class lt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new lt(this.firestore,t,this._key)}}class kt extends Lr{constructor(t,n,r){super(t,n,mh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new lt(this.firestore,null,new E(t))}withConverter(t){return new kt(this.firestore,t,this._path)}}function Uo(e,t,...n){if(e=Qe(e),sc("collection","path",t),e instanceof xr){const r=L.fromString(t,...n);return Fo(r),new kt(e,null,r)}{if(!(e instanceof lt||e instanceof kt))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(L.fromString(t,...n));return Fo(r),new kt(e.firestore,null,r)}}function vg(e,t,...n){if(e=Qe(e),arguments.length===1&&(t=sh.newId()),sc("doc","path",t),e instanceof xr){const r=L.fromString(t,...n);return Mo(r),new lt(e,null,new E(r))}{if(!(e instanceof lt||e instanceof kt))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(L.fromString(t,...n));return Mo(r),new lt(e.firestore,e instanceof kt?e.converter:null,new E(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new jh(this,"async_queue_retry"),this._u=()=>{const n=es();n&&p("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=es();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const n=es();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const n=new It;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!An(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const n=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw yt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(t,n,r){this.au(),this.ou.indexOf(t)>-1&&(n=0);const s=vi.createAndSchedule(this,t,n,r,i=>this.lu(i));return this.nu.push(s),s}au(){this.ru&&A()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const n of this.nu)if(n.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const n=this.nu.indexOf(t);this.nu.splice(n,1)}}class Ri extends xr{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new Ag}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oc(this),this._firestoreClient.terminate()}}function Tg(e,t){const n=typeof e=="object"?e:fl(),r=typeof e=="string"?e:t||"(default)",s=cl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ou("firestore");i&&Eg(s,...i)}return s}function ic(e){return e._firestoreClient||oc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function oc(e){var t,n,r;const s=e._freezeSettings(),i=function(a,h,c,u){return new Wd(a,h,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,rc(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new dg(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ve(st.fromBase64String(t))}catch(n){throw new y(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ve(st.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Y(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return b(this._lat,t._lat)||b(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=/^__.*__$/;class wg{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Yt(t,this.data,this.fieldMask,n,this.fieldTransforms):new Tn(t,this.data,n,this.fieldTransforms)}}function hc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class Ci{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new Ci(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Au({path:r,Vu:!1});return s.mu(t),s}fu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Au({path:r,Vu:!1});return s.Eu(),s}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return ar(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(t.length===0)throw this.pu("Document fields must not be empty");if(hc(this.du)&&Ig.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class Rg{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||br(t)}Su(t,n,r,s=!1){return new Ci({du:t,methodName:n,wu:r,path:Y.emptyPath(),Vu:!1,yu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sg(e){const t=e._freezeSettings(),n=br(e._databaseId);return new Rg(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Pg(e,t,n,r,s,i={}){const o=e.Su(i.merge||i.mergeFields?2:0,t,n,s);dc("Data must be an object, but it was:",o,r);const a=uc(r,o);let h,c;if(i.merge)h=new ut(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const l of i.mergeFields){const m=Cg(t,l,n);if(!o.contains(m))throw new y(f.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Dg(u,m)||u.push(m)}h=new ut(u),c=o.fieldTransforms.filter(l=>h.covers(l.field))}else h=null,c=o.fieldTransforms;return new wg(new ct(a),h,c)}function cc(e,t){if(lc(e=Qe(e)))return dc("Unsupported field value:",t,e),uc(e,t);if(e instanceof ac)return function(r,s){if(!hc(s.du))throw s.pu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.pu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Vu&&t.du!==4)throw t.pu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let h=cc(a,s.gu(o));h==null&&(h={nullValue:"NULL_VALUE"}),i.push(h),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=Qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=q.fromDate(r);return{timestampValue:sr(s.serializer,i)}}if(r instanceof q){const i=new q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sr(s.serializer,i)}}if(r instanceof Pi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ve)return{bytesValue:kh(s.serializer,r._byteString)};if(r instanceof lt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:fi(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.pu(`Unsupported field value: ${wi(r)}`)}(e,t)}function uc(e,t){const n={};return ih(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Se(e,(r,s)=>{const i=cc(s,t.Ru(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function lc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof q||e instanceof Pi||e instanceof ve||e instanceof lt||e instanceof ac)}function dc(e,t,n){if(!lc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=wi(n);throw r==="an object"?t.pu(e+" a custom object"):t.pu(e+" "+r)}}function Cg(e,t,n){if((t=Qe(t))instanceof Si)return t._internalPath;if(typeof t=="string")return fc(e,t);throw ar("Field path arguments must be of type string or ",e,!1,void 0,n)}const Vg=new RegExp("[~\\*/\\[\\]]");function fc(e,t,n){if(t.search(Vg)>=0)throw ar(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Si(...t.split("."))._internalPath}catch{throw ar(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ar(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(i||o)&&(h+=" (found",i&&(h+=` in field ${r}`),o&&(h+=` in document ${s}`),h+=")"),new y(f.INVALID_ARGUMENT,a+e+h)}function Dg(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new bg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(gc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bg extends mc{data(){return super.data()}}function gc(e,t){return typeof t=="string"?fc(e,t):t instanceof Si?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new y(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ng{convertValue(t,n="none"){switch(Qt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return U(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ht(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw A()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Se(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new Pi(U(t.latitude),U(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=ai(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(an(t));default:return null}}convertTimestamp(t){const n=xt(t);return new q(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=L.fromString(t);N(Fh(r));const s=new hn(r.get(1),r.get(3)),i=new E(r.popFirst(5));return s.isEqual(n)||yt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Lg extends mc{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(gc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qn extends Lg{data(t={}){return super.data(t)}}class Og{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Fn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new qn(this._firestore,this._userDataWriter,r.key,r,new Fn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const h=new qn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Fn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:h,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const h=new qn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Fn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Mg(a.type),doc:h,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Mg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}class Fg extends Ng{constructor(t){super(),this.firestore=t}convertBytes(t){return new ve(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function Bg(e){e=or(e,Lr);const t=or(e.firestore,Ri),n=ic(t),r=new Fg(t);return kg(e._query),_g(n,e._query).then(s=>new Og(t,r,e,s))}function Ug(e,t){const n=or(e.firestore,Ri),r=vg(e),s=xg(e.converter,t);return jg(n,[Pg(Sg(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,wt.exists(!1))]).then(()=>r)}function jg(e,t){return function(r,s){const i=new It;return r.asyncQueue.enqueueAndForget(async()=>eg(await gg(r),s,i)),i.promise}(ic(e),t)}(function(t,n=!0){(function(s){Re=s})(dl),Kn(new We("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Ri(new Nd(r.getProvider("auth-internal")),new Md(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new y(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hn(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ce(io,"4.4.1",t),ce(io,"4.4.1","esm2017")})();const qg={apiKey:"AIzaSyAbNDxVpZR8QyTP052CVfl6C3krj_7E4qE",authDomain:"scratchy-leaderboard.firebaseapp.com",projectId:"scratchy-leaderboard",storageBucket:"scratchy-leaderboard.appspot.com",messagingSenderId:"278611233682",appId:"1:278611233682:web:9e592fa9501261864acf4b",measurementId:"G-GERG3MNYS7"},$g=Jo(qg),jo=Tg($g);class Gg{constructor(){}async add(t){try{const n=await Ug(Uo(jo,"leaderboard"),{name:t.name,time:t.time});console.log("Document written with ID: ",n.id)}catch(n){console.error("Error adding document: ",n)}}async load(){const t=[];return(await Bg(Uo(jo,"leaderboard"))).forEach(r=>{t.push({name:r.data().name,time:r.data().time})}),t}}const Ae=new Yc,v=new yc,Pt=new kc(v);Pt.soundOn=Ae.loadAudioSettings();const Ct=new Ec(v),Ke=new Tc(100,50,v.ctx),zg=new Vc,he=new Wc(v),qo=new Gg;he.updateSoundBtn();window.addEventListener("load",pc);window.addEventListener("resize",pc);function pc(){let e=window.innerWidth/v.standardCanvasWidth;e>1.7&&(e=1.7),v.newScale(e*.92),he.resize()}function He(e=0){v.deltatime=e-v.lasttime,v.deltatime>100&&(v.deltatime=20),v.lasttime=e,v.ctx.clearRect(0,0,v.canvas.width,v.canvas.height),he.updateScore(v.score),!(v.pause||v.gameover||!v.gameStarted)&&(v.score>=v.scoreToFinish&&(v.timeFinished=Be(v.time),(Be(v.time)<v.highscore||!v.highscore)&&(v.isNewHighscore=!0,v.highscore=Be(v.time),Ae.store(v.highscore)),v.gameover=!0,he.setYourTime(),he.toggleRestartScreen()),v.score>=5&&!$.levelTwo.loaded?Ct.loadLevelTwo(v.canvas):v.score>=10&&!$.levelThree.loaded?Ct.loadLevelThree(v.canvas):v.score>=15&&!$.levelFour.loaded&&Ct.loadLevelFour(v.canvas),he.setTimer(),v.ctx.save(),v.ctx.scale(v.scale,v.scale),Ke.update(Ct.tiles,zg),Pt.update(Ke,Ct.tiles,v),v.ctx.drawImage(Ct.levelBackground,0,0),v.ctx.restore(),requestAnimationFrame(He))}He();
