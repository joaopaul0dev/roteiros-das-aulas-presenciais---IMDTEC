var videosJS = '{ "mais vistos" : [' +
    '{ "youtubeId": "hT_nvWreIhg", "title": "Counting Stars" },' +
    '{ "youtubeId": "YQHsXMglC9A", "title": "Hello" },' +
    '{ "youtubeId": "09R8_2nJtjg", "title": "Sugar" },' +
    '{ "youtubeId": "pRpeEdMmmQ0", "title": "Waka Waka" } ]}';

var dados = JSON.parse(videosJS)        
var principal = document.getElementById('principal')


dados['mais vistos'].forEach(function(video) { // 'video' é o item individual
    var link = document.createElement('a');

    // Use video.youtubeId e video.title (no singular)
    link.href = 'https://www.youtube.com' + video.youtubeId;
    link.className = "list-group-item list-group-item-action";
    link.textContent = video.title;
    
    principal.appendChild(link)
});
