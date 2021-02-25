
document.getElementById("submit").addEventListener("click", function(event) {
    if (document.getElementById('input-text').value !== '') {
        let url = "https://www.bbc.co.uk/weather/2643743"
       window.location.href = url;
    }
   });
//    dont work