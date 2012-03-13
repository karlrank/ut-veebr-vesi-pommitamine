//Drawing
function draw(canvas) {	
	//Load (and draw) play field images
	var ctx=canvas.getContext("2d");
	var img=new Image();
	img.onload = function(){
	ctx.drawImage(img,545,170);
	};
	img.src="img/play_field.png"
	
	var img_own=new Image();
	img_own.onload = function(){
	ctx.drawImage(img_own,0,0);
	};
	img_own.src="img/own_field.png"
	
	//Load (and draw) Ship images
	var shipImg=new Array();
	for (i=0;i<=9;i++) {
		shipImg[i]=new Image();		
	}
	
	shipImg[0].onload = function(){
		ctx.drawImage(shipImg[0],300,(40 + 25*0));
		};
	shipImg[1].onload = function(){
		ctx.drawImage(shipImg[1],300,(40 + 25*1));
		};
	shipImg[2].onload = function(){
		ctx.drawImage(shipImg[2],300,(40 + 25*2));
		};
	shipImg[3].onload = function(){
		ctx.drawImage(shipImg[3],300,(40 + 25*3));
		};
	shipImg[4].onload = function(){
		ctx.drawImage(shipImg[4],300,(40 + 25*4));
		};
	shipImg[5].onload = function(){
		ctx.drawImage(shipImg[5],300,(40 + 25*5));
		};
	shipImg[6].onload = function(){
		ctx.drawImage(shipImg[6],365,(40 + 25*2));
		};
	shipImg[7].onload = function(){
		ctx.drawImage(shipImg[7],365,(40 + 25*3));
		};
	shipImg[8].onload = function(){
		ctx.drawImage(shipImg[8],365,(40 + 25*4));
		};
	shipImg[9].onload = function(){
		ctx.drawImage(shipImg[9],365,(40 + 25*5));
		};
	
	shipImg[0].src="img/4sqship.png"
	shipImg[1].src="img/3sqship.png"
	shipImg[2].src="img/3sqship.png"
	
	for (i=3;i<=5;i++) {
		shipImg[i].src="img/2sqship.png"
	}
	
	for (i=6;i<=9;i++) {
		shipImg[i].src="img/1sqship.png"
	}
	
	ctx.strokeRect(290,30,110,170)
	
}
