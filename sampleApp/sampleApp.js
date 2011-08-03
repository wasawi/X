goog.provide('sampleApp');
goog.provide('sampleApp.init');

goog.require('X.renderer2D');
goog.require('X.renderer3D');

sampleApp.init = function() {

  console.log('Starting sampleApp.init..');
  
  try {
    
    // create a red 2D renderer in the div with id '2d' (see ../index.html)
    var r2d = new X.renderer2D(100, 100);
    r2d.setContainerById('2d');
    r2d.setBackgroundColor('#ff0000');
    r2d.init();
    console.log(r2d.print());

    // create a green 3D renderer in the div with id '3d' (see ../index.html)
    var r3d = new X.renderer3D(200, 200);
    r3d.setContainerById('3d');
    r3d.setBackgroundColor('green');
    r3d.init();    
    console.log(r3d.print());
    
    // create a default colored (black) 2D renderer without container specification which should
    // create it directly in <body></body>
    var r2dWithoutHome = new X.renderer2D(10,10);
    r2dWithoutHome.init();
    console.log(r2dWithoutHome.print());
    
  } catch (e) {
    
    // catch any X.exception and print the error to the error log
    
    if (e instanceof X.exception) {
      console.error(e.print());
    }
    
  }  
  
};
