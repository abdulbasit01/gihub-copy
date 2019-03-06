if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("./serviceWorker.js").then(function(){
        console.log("service worker register");
    }
    )
    .catch(function()
    {
        console.log("not register");
    }
    )
}