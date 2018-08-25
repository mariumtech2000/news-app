function getnews() {

    document.querySelector(".all").style.display = "block";

    let Name = document.querySelector("button").innerHTML;

    $.ajax({
        url: `https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=60637ad444a04b5288c4890704a45325`,

        success: function (data) {
            console.log(data);
            {
                document.querySelector(".img").style["background-image"]= `url(${data.articles[8].urlToImage})`;
            }      
            document.querySelector(".author").innerHTML = data.articles[8].author;
            document.querySelector(".title").innerHTML = data.articles[8].title;
            document.querySelector(".description").innerHTML = data.articles[8].description;
        },
        error: function (err) {
            alert("Try Again Spelling Check!!!!");
        }
    });

}