        ////////////////////////
        // click-Events
        ////////////////////////            
        let earthOn = true, mercuryOn=true,venusOn=true,
        marsOn=true, jupiterOn=true,saturnOn=true,
        uranusOn=true, neptuneOn=true,plutoOn=true;
        let clickedEarth = false, clickedMercury = false, clickedVenus=false,
        clickedMars=false, clickedJupiter=false,clickedSaturn=false,
        clickedUranus=false,clickedNeptune=false,clickedPluto=false,
        clickedSun=false;
        let planetInfo=[];
        planetInfo = [
        {
            name: "SUN", 
            temp: "5,778 K",
            mass: "1.989 x 10^30 kg",
            radius: "696,340 km",
            age: "4.603 billion years",
            distance: "149.6 million km",
            gravity: "27.94 g",
            volume: "1.412 x 10^18 km^3",
            density: "1.622 x 10^5 kg/m^3"
        },
        {
            name: "EARTH",
            age: "4.543 billion years",
            radius: "6371 km",
            mass:"5.972 x 10^24 kg",
            distance: "149.6 million km",
            sur_area: "510.1 million km^2",
            land_area: "148.9 million km^2",
            population: "7.674 billion",
        },
        {
            name: "MERCURY",
            distance: "57.91 million km",
            period: "88 days",
            radius: "2,439.7 km",
            length_of_day: "58d 15h 30m",
            area: "74.8 million km^2",
            mass: "3.285 x 10^23 kg (0.055 M)"

        },
        {
            name: "VENUS",
            area: "460.2 million km^2",
            period: "225 days",
            distance: "108.2 million km",
            length_of_day: "116d 18h 0m",
            radius: "6,051.8 km",
            gravity: "8.87 m/s^2",
            pressure: "93 bar"

        },
        {
            name: "MARS",
            gravity: "3.721 m/s^2",
            period: "687 days",
            distance: "227.9 million km",
            area: "144.8 million km^2",
            radius: "3,389.5 km",
            length_of_day: "24h 37m"
        },
        {
            name: "JUPITER",
            period: "12 years",
            area: "61.42 billion km^2",
            radius: "69,911 km",
            mass: "1.898*10^27 kg",
            distance: "778.5 million km",
            gravity: "24.79 m/s^2"
        },
        {
            name: "SATURN",
            distance: "1.434 billion km",
            period: "29 years",
            radius: "58,232 km",
            area: "42.7 billion km^2",
            mass: "5.683*10^26 kg",
            length_of_day: "0d 10h 42m"
        },
        {
            name: "URANUS",
            period: "84 years",
            distance: "2.871 billion km",
            radius: "25,362 km",
            length_of_day: "0d 17h 14m",
            mass: "8,681*10^25 kg"

        },
        {
            name: "NEPTUNE",
            distance: "4.495 billion km",
            period: "165 years",
            area: "7.618 billion km^2",
            radius: "24,622 km",
            length_of_day: "0dd 16h 6m",
            mass: "1.024*10^26 kg"
        },
        {
            name: "PLUTO",
            period: "248 years",
            radius: "1,188.3 km",
            length_of_day: "6.4 Earth Days",
            discover: "1930/2/18"
        }
        
        ];
        
        function clickSun(){
            let domEvent = new THREEx.DomEvents(camera,renderer.domElement);
            domEvent.addEventListener(sunObj,"click",function(){
                if(!clickedSun){
                    clickedSun=true;
                    stepBack();
                    document.querySelector(".info").style.visibility="visible";
                    document.querySelector(".info").innerHTML=
                    "<b><i>" + planetInfo[0].name + "</i></b>" + "<br>" + "Temperature: " + planetInfo[0].temp + "<br>" + "Mass: " +planetInfo[0].mass + "<br>" +
                    "Radius: " + planetInfo[0].radius + "<br>" + "Age: " + planetInfo[0].age + "<br>" + "Distance from Earth: " + planetInfo[0].distance + "<br>" +
                    "Gravity: " + planetInfo[0].gravity + "<br>" + "Volume: " + planetInfo[0].volume + "<br>" + "Density " + planetInfo[0].density;

                    if(clickedEarth==true){
                        earthOn=true;
                        earthRevolution();
                        clickedEarth=false;
                    }else if(clickedMercury==true){
                        mercuryOn=true;
                        mercuryRevolution();
                        clickedMercury=false;
                    }else if(clickedVenus==true){
                        venusOn=true;
                        venusRevolution();
                        clickedVenus=false;
                    }else if(clickedMars==true){
                        marsOn=true;
                        marsRevolution();
                        clickedMars=false;
                    }else if(clickedJupiter==true){
                        jupiterOn=true;
                        jupiterRevolution();
                        clickedJupiter=false;
                    }else if(clickedSaturn==true){
                        saturnOn=true;
                        saturnRevolution();
                        clickedSaturn=false;
                    }else if(clickedUranus==true){
                        uranusOn=true;
                        uranusRevolution();
                        clickedUranus=false;
                    }else if(clickedNeptune==true){
                        neptuneOn=true;
                        neptuneRevolution();
                        clickedNeptune=false;
                    }else if(clickedPluto==true){
                        plutoOn=true;
                        plutoRevolution();
                        clickedPluto=false;
                    }
                }else{
                    document.querySelector(".info").style.visibility="hidden";
                    clickedSun=false;
                }
            })
        }
    ////////
    //Earth
    ////////
    function clickEarth(){
       let domEvent = new THREEx.DomEvents(camera,renderer.domElement);
       domEvent.addEventListener(earth,"click",function(){
         if(!clickedEarth){
            clickedEarth=true;
            earthOn=false;
            earthRevolution();
            followUp(earth);
            document.querySelector(".info").style.visibility="visible";
            document.querySelector(".info").innerHTML= 
                    "<b><i>" + planetInfo[1].name + "</i></b>" + "<br>" + "Mass: " +planetInfo[1].mass + "<br>" +
                    "Radius: " + planetInfo[1].radius + "<br>" + "Age: " + planetInfo[1].age + "<br>" + "Distance from Sun: " + planetInfo[1].distance + "<br>" +
                    "Surface Area: " + planetInfo[1].sur_area + "<br>" + "Land Area: " + planetInfo[1].land_area + "<br>" + "Population " + planetInfo[1].population;
            if(clickedMercury==true){
                mercuryOn=true;
                mercuryRevolution();
                clickedMercury=false;
            }else if(clickedVenus==true){
                venusOn=true;
                venusRevolution();
                clickedVenus=false;
            }else if(clickedMars==true){
                marsOn=true;
                marsRevolution();
                clickedMars=false;
            }else if(clickedJupiter==true){
                jupiterOn=true;
                jupiterRevolution();
                clickedJupiter=false;
            }else if(clickedSaturn==true){
                saturnOn=true;
                saturnRevolution();
                clickedSaturn=false;
            }else if(clickedUranus==true){
                uranusOn=true;
                uranusRevolution();
                clickedUranus=false;
            }else if(clickedNeptune==true){
                neptuneOn=true;
                neptuneRevolution();
                clickedNeptune=false;
            }else if(clickedPluto==true){
                plutoOn=true;
                plutoRevolution();
                clickedPluto=false;
            }
         }else{
            earthRevolution();
            earthOn=true;
            stepBack();
            clickedEarth=false;
            document.querySelector(".info").style.visibility="hidden";

         }
       })
    }
    ////////
    //Mercury
    ////////
    function clickMercury(){
       let domEvent = new THREEx.DomEvents(camera,renderer.domElement);
       domEvent.addEventListener(mercury,"click",function(){
         if(!clickedMercury){
            clickedMercury=true;
            mercuryOn=false;
            mercuryRevolution();
            followUp(mercury);
            document.querySelector(".info").style.visibility="visible";
            document.querySelector(".info").innerHTML= 
                    "<b><i>" + planetInfo[2].name + "</i></b>" + "<br>" + "Distance from Sun: " +planetInfo[2].distance + "<br>" +
                    "Orbit Period: " + planetInfo[2].period + "<br>" + "Radius: " + planetInfo[2].radius + "<br>" + "Length of Day: " + planetInfo[2].length_of_day + "<br>" +
                    "Surface Area: " + planetInfo[2].area + "<br>" + "Mass: " + planetInfo[2].mass ;
            if(clickedEarth==true){
                earthOn=true;
                earthRevolution();
                clickedEarth=false;
            }else if(clickedVenus==true){
                venusOn=true;
                venusRevolution();
                clickedVenus=false;
            }else if(clickedMars==true){
                marsOn=true;
                marsRevolution();
                clickedMars=false;
            }else if(clickedJupiter==true){
                jupiterOn=true;
                jupiterRevolution();
                clickedJupiter=false;
            }else if(clickedSaturn==true){
                saturnOn=true;
                saturnRevolution();
                clickedSaturn=false;
            }else if(clickedUranus==true){
                uranusOn=true;
                uranusRevolution();
                clickedUranus=false;
            }else if(clickedNeptune==true){
                neptuneOn=true;
                neptuneRevolution();
                clickedNeptune=false;
            }else if(clickedPluto==true){
                plutoOn=true;
                plutoRevolution();
                clickedPluto=false;
            }
         }else{
            mercuryRevolution();
            mercuryOn=true;
            stepBack();
            clickedMercury=false;
            document.querySelector(".info").style.visibility="hidden";

         }
       })
    }
    ////////
    //Venus
    ////////
    function clickVenus(){
       let domEvent = new THREEx.DomEvents(camera,renderer.domElement);
       domEvent.addEventListener(venus,"click",function(){
         if(!clickedVenus){
            clickedVenus=true;
            venusOn=false;
            venusRevolution();
            followUp(venus);
            document.querySelector(".info").style.visibility="visible";
            document.querySelector(".info").innerHTML= 
                    "<b><i>" + planetInfo[3].name + "</i></b>" + "<br>" + "Surface Area: " +planetInfo[3].area + "<br>" +
                    "Orbit Period: " + planetInfo[3].period + "<br>" + "Distance from Sun: " + planetInfo[3].distance + "<br>" +
                     "Length of Day: " + planetInfo[3].length_of_day + "<br>" +
                    "Radius: " + planetInfo[3].radius + "<br>" + "Gravity: " + planetInfo[3].gravity + "<br>" + "Surface Pressure: " + planetInfo[3].pressure ;

            if(clickedMercury==true){
                mercuryOn=true;
                mercuryRevolution();
                clickedMercury=false;
            }else if(clickedEarth==true){
                earthOn=true;
                earthRevolution();
                clickedEarths=false;
            }else if(clickedMars==true){
                marsOn=true;
                marsRevolution();
                clickedMars=false;
            }else if(clickedJupiter==true){
                jupiterOn=true;
                jupiterRevolution();
                clickedJupiter=false;
            }else if(clickedSaturn==true){
                saturnOn=true;
                saturnRevolution();
                clickedSaturn=false;
            }else if(clickedUranus==true){
                uranusOn=true;
                uranusRevolution();
                clickedUranus=false;
            }else if(clickedNeptune==true){
                neptuneOn=true;
                neptuneRevolution();
                clickedNeptune=false;
            }else if(clickedPluto==true){
                plutoOn=true;
                plutoRevolution();
                clickedPluto=false;
            }
            
        }else{
            venusRevolution();
            venusOn=true;
            stepBack();
            clickedVenus=false;
            document.querySelector(".info").style.visibility="hidden";
        }
       })
    }
    ////////
    //Mars
    ////////
    function clickMars(){
       let domEvent = new THREEx.DomEvents(camera,renderer.domElement);
       domEvent.addEventListener(mars,"click",function(){
         if(!clickedMars){
            clickedMars=true;
            marsOn=false;
            marsRevolution();
            followUp(mars);
            document.querySelector(".info").style.visibility="visible";
            document.querySelector(".info").innerHTML= 
                    "<b><i>" + planetInfo[4].name + "</i></b>" + "<br>" + "Gravity: " +planetInfo[4].gravity + "<br>" +
                    "Orbit Period: " + planetInfo[4].period + "<br>" + "Distance from Sun: " + planetInfo[4].distance + "<br>" +
                     "Surface Area: " + planetInfo[4].area + "<br>" +
                    "Radius: " + planetInfo[4].radius + "<br>" + "Length of Day: " + planetInfo[4].length_of_day ;
            if(clickedMercury==true){
                mercuryOn=true;
                mercuryRevolution();
                clickedMercury=false;
            }else if(clickedVenus==true){
                venusOn=true;
                venusRevolution();
                clickedVenus=false;
            }else if(clickedEarth==true){
                earthOn=true;
                earthRevolution();
                clickedEarth=false;
            }else if(clickedJupiter==true){
                jupiterOn=true;
                jupiterRevolution();
                clickedJupiter=false;
            }else if(clickedSaturn==true){
                saturnOn=true;
                saturnRevolution();
                clickedSaturn=false;
            }else if(clickedUranus==true){
                uranusOn=true;
                uranusRevolution();
                clickedUranus=false;
            }else if(clickedNeptune==true){
                neptuneOn=true;
                neptuneRevolution();
                clickedNeptune=false;
            }else if(clickedPluto==true){
                plutoOn=true;
                plutoRevolution();
                clickedPluto=false;
            }
            
         }else{
            marsRevolution();
            marsOn=true;
            stepBack();
            clickedMars=false;
            document.querySelector(".info").style.visibility="hidden";
         }
       })
    }
    ////////
    //Jupiter
    ////////
    function clickJupiter(){
       let domEvent = new THREEx.DomEvents(camera,renderer.domElement);
       domEvent.addEventListener(jupiter,"click",function(){
         if(!clickedJupiter){
            clickedJupiter=true;
            jupiterOn=false;
            jupiterRevolution();
            followUp(jupiter);
            document.querySelector(".info").style.visibility="visible";
            document.querySelector(".info").innerHTML= 
                    "<b><i>" + planetInfo[5].name + "</i></b>" + "<br>" + "Orbit Period: " +planetInfo[5].period + "<br>" +
                    "Surface Area: " + planetInfo[5].area + "<br>" + "Radius: " + planetInfo[5].radius + "<br>" +
                     "Mass: " + planetInfo[5].mass + "<br>" +
                    "Distance from Sun: " + planetInfo[5].distance + "<br>" + "Gravity: " + planetInfo[5].gravity ;
            if(clickedMercury==true){
                mercuryOn=true;
                mercuryRevolution();
                clickedMercury=false;
            }else if(clickedVenus==true){
                venusOn=true;
                venusRevolution();
                clickedVenus=false;
            }else if(clickedMars==true){
                marsOn=true;
                marsRevolution();
                clickedMars=false;
            }else if(clickedEarth==true){
                earthOn=true;
                earthRevolution();
                clickedEarth=false;
            }else if(clickedSaturn==true){
                saturnOn=true;
                saturnRevolution();
                clickedSaturn=false;
            }else if(clickedUranus==true){
                uranusOn=true;
                uranusRevolution();
                clickedUranus=false;
            }else if(clickedNeptune==true){
                neptuneOn=true;
                neptuneRevolution();
                clickedNeptune=false;
            }else if(clickedPluto==true){
                plutoOn=true;
                plutoRevolution();
                clickedPluto=false;
            }
            
         }else{
            jupiterRevolution();
            jupiterOn=true;
            stepBack();
            clickedJupiter=false;
            document.querySelector(".info").style.visibility="hidden";
         }
       })
    }
    ////////
    //Saturn
    ////////
    function clickSaturn(){
       let domEvent = new THREEx.DomEvents(camera,renderer.domElement);
       domEvent.addEventListener(saturn,"click",function(){
         if(!clickedSaturn){
            clickedSaturn=true;
            saturnOn=false;
            saturnRevolution();
            followUp(saturn);
            document.querySelector(".info").style.visibility="visible";
            document.querySelector(".info").innerHTML= 
                    "<b><i>" + planetInfo[6].name + "</i></b>" + "<br>" + "Distance from Sun: " +planetInfo[6].distance + "<br>" +
                    "Orbit Period" + planetInfo[6].period + "<br>" + "Radius: " + planetInfo[6].radius + "<br>" +
                    "Surface Area: " + planetInfo[6].area + "<br>" +
                    "Mass: " + planetInfo[6].mass + "<br>" + "Length of Day: " + planetInfo[6].length_of_day ;
            if(clickedMercury==true){
                mercuryOn=true;
                mercuryRevolution();
                clickedMercury=false;
            }else if(clickedVenus==true){
                venusOn=true;
                venusRevolution();
                clickedVenus=false;
            }else if(clickedMars==true){
                marsOn=true;
                marsRevolution();
                clickedMars=false;
            }else if(clickedJupiter==true){
                jupiterOn=true;
                jupiterRevolution();
                clickedJupiter=false;
            }else if(clickedEarth==true){
                earthOn=true;
                earthRevolution();
                clickedEarth=false;
            }else if(clickedUranus==true){
                uranusOn=true;
                uranusRevolution();
                clickedUranus=false;
            }else if(clickedNeptune==true){
                neptuneOn=true;
                neptuneRevolution();
                clickedNeptune=false;
            }else if(clickedPluto==true){
                plutoOn=true;
                plutoRevolution();
                clickedPluto=false;
            }
         }else{
            saturnRevolution();
            saturnOn=true;
            stepBack();
            clickedSaturn=false;
            document.querySelector(".info").style.visibility="hidden";
         }
       })
    }
    ////////
    //Uranus
    ////////
    function clickUranus(){
       let domEvent = new THREEx.DomEvents(camera,renderer.domElement);
       domEvent.addEventListener(uranus,"click",function(){
         if(!clickedUranus){
            clickedUranus=true;
            uranusOn=false;
            uranusRevolution();
            followUp(uranus);
            document.querySelector(".info").style.visibility="visible";
            document.querySelector(".info").innerHTML= 
                    "<b><i>" + planetInfo[7].name + "</i></b>" +  "<br>"+ "Distance from Sun: " +planetInfo[7].distance + "<br>" +
                    "Orbit Period" + planetInfo[7].period + "<br>" + "Radius: " + planetInfo[7].radius + "<br>" +
                    "Mass: " + planetInfo[7].mass + "<br>" + "Length of Day: " + planetInfo[7].length_of_day ;
            if(clickedMercury==true){
                mercuryOn=true;
                mercuryRevolution();
                clickedMercury=false;
            }else if(clickedVenus==true){
                venusOn=true;
                venusRevolution();
                clickedVenus=false;
            }else if(clickedMars==true){
                marsOn=true;
                marsRevolution();
                clickedMars=false;
            }else if(clickedJupiter==true){
                jupiterOn=true;
                jupiterRevolution();
                clickedJupiter=false;
            }else if(clickedSaturn==true){
                saturnOn=true;
                saturnRevolution();
                clickedSaturn=false;
            }else if(clickedEarth==true){
                earthOn=true;
                earthRevolution();
                clickedEarth=false;
            }else if(clickedNeptune==true){
                neptuneOn=true;
                neptuneRevolution();
                clickedNeptune=false;
            }else if(clickedPluto==true){
                plutoOn=true;
                plutoRevolution();
                clickedPluto=false;
            }
         }else{
            uranusRevolution();
            uranusOn=true;
            stepBack();
            clickedUranus=false;
            document.querySelector(".info").style.visibility="hidden";
         }
       })
    }
    ////////
    //Neptune
    ////////
    function clickNeptune(){
       let domEvent = new THREEx.DomEvents(camera,renderer.domElement);
       domEvent.addEventListener(neptune,"click",function(){
         if(!clickedNeptune){
            clickedNeptune=true;
            neptuneOn=false;
            neptuneRevolution();
            followUp(neptune);
            document.querySelector(".info").style.visibility="visible";
            document.querySelector(".info").innerHTML= 
                    "<b><i>" + planetInfo[8].name + "</i></b>" + "<br>"+ "Distance from Sun: " +planetInfo[8].distance + "<br>" +
                    "Orbit Period" + planetInfo[8].period + "<br>" + "Surface Area: " + planetInfo[8].area + "<br>" +
                    "Radius: " + planetInfo[8].radius + "<br>" +
                    "Mass: " + planetInfo[8].mass + "<br>" + "Length of Day: " + planetInfo[8].length_of_day ;
            if(clickedMercury==true){
                mercuryOn=true;
                mercuryRevolution();
                clickedMercury=false;
            }else if(clickedVenus==true){
                venusOn=true;
                venusRevolution();
                clickedVenus=false;
            }else if(clickedMars==true){
                marsOn=true;
                marsRevolution();
                clickedMars=false;
            }else if(clickedJupiter==true){
                jupiterOn=true;
                jupiterRevolution();
                clickedJupiter=false;
            }else if(clickedSaturn==true){
                saturnOn=true;
                saturnRevolution();
                clickedSaturn=false;
            }else if(clickedUranus==true){
                uranusOn=true;
                uranusRevolution();
                clickedUranus=false;
            }else if(clickedEarth==true){
                earthOn=true;
                earthRevolution();
                clickedEarth=false;
            }else if(clickedPluto==true){
                plutoOn=true;
                plutoRevolution();
                clickedPluto=false;
            }
         }else{
            neptuneRevolution();
            neptuneOn=true;
            stepBack();
            clickedNeptune=false;
            document.querySelector(".info").style.visibility="hidden";
         }
       })
    }
    ////////
    //Pluto
    ////////
    function clickPluto(){
       let domEvent = new THREEx.DomEvents(camera,renderer.domElement);
       domEvent.addEventListener(pluto,"click",function(){
         if(!clickedPluto){
            clickedPluto=true;
            plutoOn=false;
            plutoRevolution();
            followUp(pluto);
            document.querySelector(".info").style.visibility="visible";
            document.querySelector(".info").innerHTML= 
                    "<b><i>" + planetInfo[9].name + "</i></b>" +  "<br>"+"Length of Day: " +planetInfo[9].length_of_day + "<br>" +
                    "Orbit Period" + planetInfo[9].period + "<br>" +
                    "Radius: " + planetInfo[9].radius + "<br>" + "Discovery: " + planetInfo[9].discover;
            if(clickedMercury==true){
                mercuryOn=true;
                mercuryRevolution();
                clickedMercury=false;
            }else if(clickedVenus==true){
                venusOn=true;
                venusRevolution();
                clickedVenus=false;
            }else if(clickedMars==true){
                marsOn=true;
                marsRevolution();
                clickedMars=false;
            }else if(clickedJupiter==true){
                jupiterOn=true;
                jupiterRevolution();
                clickedJupiter=false;
            }else if(clickedSaturn==true){
                saturnOn=true;
                saturnRevolution();
                clickedSaturn=false;
            }else if(clickedUranus==true){
                uranusOn=true;
                uranusRevolution();
                clickedUranus=false;
            }else if(clickedNeptune==true){
                neptuneOn=true;
                neptuneRevolution();
                clickedNeptune=false;
            }else if(clickedEarth==true){
                earthOn=true;
                earthRevolution();
                clickedEarth=false;
            }
         }else{
            plutoRevolution();
            plutoOn=true;
            stepBack();
            clickedPluto=false;
            document.querySelector(".info").style.visibility="hidden";
         }
       })
    }

        ////////////////////////
        // Revolution
        ////////////////////////
        let num = [];
        for(i=0;i<10;i++){
            random = Math.random()*200;
            num[i]=random;
        }
        let e=num[0], m=num[1], me=num[2], v=num[3],ma=num[4],j=num[5],s=num[6], u=num[7],n=num[8],p=num[9];
            function earthRevolution(){
                if(!earthOn){return};
                e-=0.009;
                m-=0.003;
                earth.position.x = 230*Math.cos(e);
                earth.position.z = 230*Math.sin(e);
                moonRings.position.x = 230*Math.cos(e);
                moonRings.position.z = 230*Math.sin(e);
                moon.position.x = 50*Math.cos(m);
                moon.position.z = 50*Math.sin(m);
                
                
            }
            function mercuryRevolution(){
                if(!mercuryOn){return};
                me-=0.005; 
                mercury.position.x = 80*Math.cos(me);
                mercury.position.z = 80*Math.sin(me);
            }
            function venusRevolution(){
                if(!venusOn){return};
                v-=0.018;
                venus.position.x = 150*Math.cos(v);
                venus.position.z = 150*Math.sin(v);
            }
            function marsRevolution(){
                if(!marsOn){return};
                ma-=0.01;
                mars.position.x = 330*Math.cos(ma);
                mars.position.z = 330*Math.sin(ma); 
            }
            function jupiterRevolution(){
                if(!jupiterOn){return};
                j-=0.01;
                jupiter.position.x = 410*Math.cos(j);
                jupiter.position.z = 410*Math.sin(j);
            }
            function saturnRevolution(){
                if(!saturnOn){return};
                s-=0.008;
                saturn.position.x = 480*Math.cos(s);
                saturn.position.z = 480*Math.sin(s);
            }
            function uranusRevolution(){
                if(!uranusOn){return};
                u-=0.005;
                uranus.position.x = 540*Math.cos(u);
                uranus.position.z = 540*Math.sin(u);
            }
            function neptuneRevolution(){
                if(!neptuneOn){return};
                n-=0.003;
                neptune.position.x = 600*Math.cos(n);
                neptune.position.z = 600*Math.sin(n);
            }
            function plutoRevolution(){
                if(!plutoOn){return};
                p-=0.002;
                pluto.position.x = 650*Math.cos(p);
                pluto.position.z = 650*Math.sin(p);
            }
            