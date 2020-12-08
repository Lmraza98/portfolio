
import styled from 'styled-components';
import React, { useRef, useEffect, useLayoutEffect } from 'react'

const StyledDiv = styled.div`
  //boreder:1px solid black;
  position: relative;
  height: 100%;
   //width: 100%;
   display: inline;
   top:0;
`;

const BackgroundGlow = styled.nav`
//z-index: 1;
//position: absolute;
//top:0;left:0;
// height: 100%;
// width: 100%;
`;
const OverLay = styled.nav`
//background: radial-gradient(ellipse at center, rgba(0,0,0,.0) 10%, rgba(0,0,0,.8) 80%, rgba(1,1,1,1) 90%, rgba(0,0,0,1) 100%);
 //z-index: 5;
//position: absolute;
//top:0;left:0;
// height: 100%;
// width: 100%;
`;

const StyledCanvas = styled.canvas`
position: absolute;
width: 100%;
height: 100%;
top:0;
`


const Canvas = props => {
    const canvasRef= useRef(null)
    let requestId;


    
    useEffect(() => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      let bgg = document.getElementById("bg_glow")
      let w = ctx.canvas.width = window.innerWidth
      let h = ctx.canvas.height = window.innerHeight

      window.onresize = ()=> {
          w = ctx.canvas.width = window.innerWidth;
          h = ctx.canvas.height = window.innerHeight;
          maxHeight = h*.9;
          minHeight = h*5;
          dots = [];
          pushDots();
          ctx.globalCompositeOperation = "lighter";
      }

      document.getElementById("styledIconContainer").onclick = () => {
        hue = Math.random()*360;
        bgg.style.background = "radial-gradient(ellipse at center, hsla("+hue+",50%,50%,.8) 0%,rgba(0,0,0,0) 100%)";
        dots = [];
        pushDots();
      }

      let dots=[{}];
      let mx = 0; 
      let my = 0;
      let md = 100;
      let maxWidth = 15;
      let minWidth = 2;
      let maxHeight = h*.9
      let minHeight = h*.5;
      let maxSpeed = 35;
      let minSpeed = 6;
      let hue = 120;
      let hueDif = 20; // Hue +/-
      let glow = 0; // Set to 0 for better performance
      ctx.globalCompositeOperation = "lighter";

      function pushDots(num){
          for(let i=1; i<md; i++){
            dots.push({
              x:Math.random()*w,
              y:Math.random()*h/2,
              h:Math.random()*(maxHeight-minHeight)+minHeight,
              w:Math.random()*(maxWidth-minWidth)+minWidth,
              c:Math.random()*((hue+hueDif)-(hue-hueDif))+(hue-hueDif),
              m:Math.random()*(maxSpeed-minSpeed)+minSpeed
            });
          }
      }pushDots();
        
        const render = () => {
          ctx.clearRect(0,0,w,h);
          for(let i=1; i<dots.length; i++){
            ctx.beginPath();
            let grd;
            //if(i%2==0){
              grd = ctx.createLinearGradient(dots[i].x, dots[i].y, dots[i].x+dots[i].w, dots[i].y+dots[i].h);
            //}else{
             // grd = ctx.createLinearGradient(dots[i].y, dots[i].x, dots[i].y+dots[i].w, dots[i].x+dots[i].h);
           // }
            grd.addColorStop(.0, "hsla("+dots[i].c+",50%,50%,.0)");
            
            grd.addColorStop(.2, "hsla("+dots[i].c+20+",50%,50%,.5)");
            
            grd.addColorStop(.5, "hsla("+dots[i].c+50+",70%,60%,.8)");
            
            grd.addColorStop(.8, "hsla("+dots[i].c+80+",50%,50%,.5)");
            
            grd.addColorStop(1., "hsla("+(dots[i].c+100)+",50%,50%,.0)");
            
            ctx.shadowBlur = glow;
            ctx.shadowColor = "hsla("+(dots[i].c)+",50%,50%,1)";
            ctx.fillStyle=grd;
            ctx.fillRect(dots[i].x,dots[i].y,dots[i].w,dots[i].h);
            ctx.closePath();
            dots[i].x += dots[i].m/100;
            if(dots[i].x > w+maxWidth){
              dots.splice(i,1);
              dots.push({
                x:0,
                y:Math.random()*h,
                h:Math.random()*(maxHeight-minHeight)+minHeight,
                w:Math.random()*(maxWidth-minWidth)+minWidth,
                c:Math.random()*((hue+hueDif)-(hue-hueDif))+(hue-hueDif),
                m:Math.random()*(maxSpeed-minSpeed)+minSpeed
              });
            }
          }
          requestId = requestAnimationFrame(render);
        }
        
        //bgg.style.background = "radial-gradient(ellipse at center, hsla("+hue+",50%,50%,.8) 0%,rgba(0,0,0,0) 100%)";
        render();

        return () => {
          cancelAnimationFrame(requestId)
        }


  })
    return (
      <StyledDiv id="styledIconContainer">
        
        {props.children}
        <StyledCanvas id="canvas" ref={canvasRef} {...props}/>
      
      
      <BackgroundGlow id="bg_glow"></BackgroundGlow>
      <OverLay id="overlay"></OverLay>
     </StyledDiv>
      )


  }

export default Canvas

  