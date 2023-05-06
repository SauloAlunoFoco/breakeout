var tijolo, bola, raquete , estadoJogo , bordas,tijolos,vidas,pontuacao

function setup(){
  
createCanvas(400,400)
  
 

 estadoJogo = 'parado'
   
  
montarJogo()
  
 pontuacao = 0
 vidas = 3
 
}

function draw(){
  background(0)
   
  textSize(15)
  text('pontuacao: '+ pontuacao, 40, 25)
  text('vida: '+ vidas, 300, 25)
  
   if (estadoJogo == 'parado'){
     
     
           bola.velocityX = 0
      bola.velocityY = 0
      bola.y = 250   
      bola.x = 200
          
          
                    
      raquete.velocityX = 0
      raquete.velocityY = 0  
      raquete.y = 350
      raquete.x = 200
     
     
   
   tijolos.setVelocityYEach(0)
     
     
  textSize(20) 
  text('pressione "ESPACO" para inciar', 60, 200)
     
  
          if (keyDown("SPACE")){
           
            tijolos.setVelocityYEach(0.2)
     
            
          estadoJogo = "play";
          bola.velocityY = -5;
          bola.velocityX = -6;
          }
     
 }
   
  
   
 if (estadoJogo == 'play'){
   
   if(!tijolos[0]){
     
    textSize(25)   
     
     text('PARABENS VOCE CONSEGIU', 10, 220 )
     
     bola.remove()
     raquete.remove()
   }
     
   
   
     if(tijolos.isTouching(bordas[3])){
     estadoJogo = `gameOver`
     
   }
        fimDejogo()
   
   for (i = 0; i< 3; i ++){
     
       bola.bounceOff(bordas[i]);
     
   }
     
     if(keyDown('left')){
     raquete.velocityX = -5
     }
     
     
    if(keyDown('right')){
    raquete.velocityX = +5

   }
 
  
      raquete.collide(bordas)
      
    bola.bounceOff(raquete)
   
      
    bola.bounceOff(tijolos,removerTijolo)
   
 }
  
  

if (estadoJogo == 'gameover'){
  
  tijolos.destroyEach(0)
  
    textSize(30)
    text('GAME OVER' ,  110, 220)
    bola.remove()
    raquete.remove()
 } 
  
  drawSprites()
  
}


  function fimDejogo(){

    
    if(bola.y > 400){
    
        vidas = vidas - 1
      
      
    if(vidas < 1){
    estadoJogo = 'gameover'
      textSize(30)
      text('GAME OVER')
      
      tijolos.destroyEach()
      
      bola.remove()
      raquete.remove()
      
      
        }else{
        estadoJogo = 'parado'
          
          tijolos.setVelocityYEach(0)
          
          
      bola.velocityX = 0
      bola.velocityY = 0
      bola.y = 250   
      bola.x = 200
          
          
                    
      raquete.velocityX = 0
      raquete.velocityY = 0  
      raquete.y = 350
      raquete.x = 200
        
        
        }
  
    }  
  
 }   

  function removerTijolo(bola,tijolo){
    
    tijolo.remove()
    
    pontuacao = pontuacao + 1
  }




function montarJogo(){
  
  tijolos = createGroup()
  
 criarLinha(0,"red")
 criarLinha(29,"blue")
 criarLinha(29+29,"yellow")
 criarLinha(29+29+29,"green")
  
  bordas=createEdgeSprites()
  
  bola=createSprite(200,250,20,20)
  bola.shapeColor="white(255,250,250)"
  
  raquete=createSprite(200,350,120,10)
  raquete.shapeColor='white'
  
}






 function criarLinha(y,cor){
   
   
   
     for(i= 0; i<=5; i++){
  tijolo = createSprite(65 +54 *  i ,50 + y,  50,25)
  tijolo.shapeColor = cor
       tijolos.add(tijolo)
  
     }
 }