export var wordArray = ["home", "about", "products", "contact"];

export function routes(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#","");

    if(pageID !=""){
        $.get(`${pageID}.html`, function (data){
            console.log("data" + data);
            $("#app").html(data);
        })
        console.log(pageID);
    }else{
        $.get(`home.html`, function (data){
            console.log("data" + data);
            $("#app").html(data);
        });
        console.log ("home");

    }
}
