function rectanglehover(){

    var rectangle = document.querySelector("#rectangle");
    rectangle.addEventListener("mousemove",function(dets){
        var rectanglelocation = rectangle.getBoundingClientRect();
        // console.log(rectanglelocation);
        // console.log(dets.clientX - rectanglelocation.left);

        var xinrectangle = dets.clientX - rectanglelocation.left;
        if(xinrectangle<rectanglelocation.width/2)
        {
            // console.log("left");
            var mapper = gsap.utils.mapRange(0,rectanglelocation.width/2,255,0);
            // console.log(mapper(xinrectangle));
            rectangle.style.backgroundColor = `rgb(${mapper(xinrectangle)},0,0)`;
        }
        else
        {
            // console.log("right");
            
            var mapper = gsap.utils.mapRange(rectanglelocation.width/2,rectanglelocation.width,0,255);
            // console.log(mapper(xinrectangle));
            rectangle.style.backgroundColor = `rgb(0,0,${mapper(xinrectangle)})`;
        }


    })

    rectangle.addEventListener("mouseleave",function(){
        gsap.to(rectangle,{
            backgroundColor:"#c5def5"
        })
    })

    





}

rectanglehover();