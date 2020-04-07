async function buscaFetch() {
  const buscaUrl = await fetch('https://api.jikan.moe/v3/search/anime?q=naruto&limit=16');
  const url = await buscaUrl.json();
  const imgs = document.querySelectorAll('img');
  const aUrl = document.querySelectorAll('a')
  const h2 = document.querySelectorAll('h2');
  const  sinopse = document.querySelectorAll('.sinopse');
  const episodios = document.querySelectorAll('.episodios')

  console.log(url);
  for(let i = 0; i< url.results.length; i++ ) {
    imgs[i].src = url.results[i].image_url;
    h2[i].innerText =url.results[i].title; 
    sinopse[i].innerText =url.results[i].synopsis; 
    episodios[i].innerText =`Episodios:  ${url.results[i].episodes}`;
    aUrl[i].href = url.results[i].url ;
  
   
    
  }

}

buscaFetch();