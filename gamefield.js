window.onload = function(){
            var stage = new Kinetic.Stage("gameField", 800, 200);
            var layer = new Kinetic.Layer();
 
            var box = new Kinetic.Rect({
                x: 0,
                y: 0,
                width: 100,
                height: 50,
                fill: "#00D2FF",
                stroke: "black",
                strokeWidth: 4,
                draggable: true
            });
            
            box.draggable(true);
            // add cursor styling             
            box.on("mouseover", function(){
                document.body.style.cursor = "pointer";
            });
            box.on("mouseout", function(){
                document.body.style.cursor = "default";
            });
 
            layer.add(box);
            stage.add(layer);
        };