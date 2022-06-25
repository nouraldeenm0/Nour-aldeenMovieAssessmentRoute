var myHttp = new XMLHttpRequest();

$("#nowPlaying").click(function (e) { 
    myHttp.open('GET', `https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1`);
    myHttp.send();
});

$("#popular").click(function (e) { 
    myHttp.open('GET', `https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1`);
    myHttp.send();

    myHttp.addEventListener('readystatechange', function() {
        if (myHttp.readyState == 4) {
            console.log(myHttp.response);
        }
    })
});

$("#topRated").click(function (e) { 
    myHttp.open('GET', `https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1`);
    myHttp.send();

    myHttp.addEventListener('readystatechange', function() {
        if (myHttp.readyState == 4) {
            console.log(myHttp.response);
        }
    })
});

$("#trending").click(function (e) { 
    myHttp.open('GET', `https://api.themoviedb.org/3/trending/movie/trending?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1`);
    myHttp.send();

    myHttp.addEventListener('readystatechange', function() {
        if (myHttp.readyState == 4) {
            console.log(myHttp.response);
        }
    })
});

$("#upcoming").click(function (e) { 
    myHttp.open('GET', `https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1`);
    myHttp.send();

    myHttp.addEventListener('readystatechange', function() {
        if (myHttp.readyState == 4) {
            console.log(myHttp.response);
        }
    })
});

$("#contactUs").click(function (e) { 
    
});

$("#submit").click(function (e) { 
});