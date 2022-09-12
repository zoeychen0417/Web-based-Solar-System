////////////////////////////////////////////////////
// universe is our main scene
// count : the number of cube
// position: position of orbit
// width: width of orbit
// orbit: planet orbit array
////////////////////////////////////////////////////
function addOrbit(scene,count,position,width,orbit,moonRings){
    let surrogateRings;
    if(moonRings!=null){
        surrogateRings = moonRings;
}else{
    surrogateRings = new THREE.Object3D();
}
let ring;
let ringSleeve;
let uni = scene;
let geometry = new THREE.BoxGeometry(1,1,1);
let cubeMaterial = new THREE.MeshPhongMaterial({
      flatShading: true,
      transparent: true,
      color: 0x00FFFFFF	
});      

let buildRing = function(currentRing) {
    var cube = [];
    var cubeSleeve = [];
    var cubeCount = count; // Reducing cubeCount reduces number of cubes in each ring
    var cubeDist = cubeCount; // Can be used to modify distribution of cubes in each ring, try commented out line below...
    // var cubeCount = 7; var cubeDist = 26;
  for (var i=0; i < cubeCount; i++) {
    cube[i] = new THREE.Mesh(geometry, cubeMaterial);
    cube[i].position.x = position;
    cube[i].scale.set( Math.random()*1, Math.random()*1, Math.random()*1 );
    cubeSleeve[i] = new THREE.Object3D();
    cubeSleeve[i].add(cube[i]);
    cubeSleeve[i].rotation.z = i*(360/cubeDist)*Math.PI/180;
    var y = Math.random() * width;
    var x = Math.random() * width;
    var speed = Math.random();
    cubeSleeve[i].position.y = y;
    cubeSleeve[i].position.x = x;
    cubeSleeve[i].speed = speed;
    orbit.push( cubeSleeve[i] );
    currentRing.add(cubeSleeve[i]);    	
    }
};   

// Create Geometry
ring = new THREE.Object3D();
// Build and position a single ring.
buildRing(ring);
ring.rotation.x = Math.PI/2;
// ring.rotation.y = 30*Math.PI/180;
// Position each ring instance in a circle formation
ringSleeve = new THREE.Object3D();
ringSleeve.add(ring);
ringSleeve.rotation.z = 360*Math.PI/180;
// Collect everything in a final object
surrogateRings.add(ringSleeve);
    
// Add final parent object to scene
uni.add(surrogateRings);

}

////////////////////////////////////////////
// function of animation for orbit
////////////////////////////////////////////
function animateOrbit(planetOrbit,speed){
for (let i=0; i<planetOrbit.length; i++) {
let obj = planetOrbit[i];
obj.rotation.z -= speed;
}
}

////////////////////////////////////////////
// function of zooming in planets
////////////////////////////////////////////
function followUp(planet){
    let aabb = new THREE.Box3().setFromObject(planet);
    let center = aabb.getCenter(new THREE.Vector3());
    let size = aabb.getSize(new THREE.Vector3());
    gsap.to(control.target, {
        duration:0.5,
        ease: "power2.in",
        x:center.x,
        y:center.y,
        z:center.z,
        onUpdate: function(){
            control.update();
        }
    });
    gsap.to(camera.position, {
        delete:0.6,
        duration:2,
        ease: "power2.out",
        x:center.x,
        y:center.y+size.y*1.2,
        z:center.z+size.z*1.5,
        onUpdate:function(){
            camera.lookAt(center);
            // control.update();
        }
    });
}
////////////////////////////////////////////
// function of zooming out planets
////////////////////////////////////////////
function stepBack(){
    gsap.to(camera.position, {
        duration: 1,
        x:0,
        y:100,
        z:400,
        onUpdate: function(){
            camera.updateProjectionMatrix();
            camera.lookAt(origin);
            control.update();
        }
    });
    gsap.to(control.target, {
        duration:1,
        x:0,
        y:0,
        z:0,
        onUpdate: function(){
           control.update();
        }
    });
 }


 function mouseMove(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  function pick() {
    raycaster.setFromCamera(mouse, camera);
    let intersects = raycaster.intersectObjects(universe.children);
    if (intersects.length > 0) {
      if (currentObject !== intersects[0].object) {
        if (currentObject) {
          currentObject.material.emissive.setHex(currentObject.currentHex);
        }
        currentObject = intersects[0].object;
        currentObject.currentHex = currentObject.material.emissive.getHex();
        currentObject.material.emissive.setHex(0x444444);
      }
    } else {
      if (currentObject) {
        currentObject.material.emissive.setHex(currentObject.currentHex);
      }
      currentObject = null;
    }
    control.update();
  }