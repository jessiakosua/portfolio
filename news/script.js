fetch(
  "https://newsapi.org/v2/everything?q=bitcoin&apikey=5d1c9e4e972144bf926ec8b7e3a9a206&pageSize=10"
)
  .then(function (response) {
    // console.log(resonse.body);
    return response.json();
  })
  .then(function (data) {
    // console.table(data.articles);
    for (const article of data.articles) {
      //console.log(article);
      const articleDiv = document.createElement("div");
      const articleH1 = document.createElement("h1");
      articleH1.textContent = article.title;
      articleDiv.appendChild(articleH1);
      const articleP =document.createElement('p');
      articleP . textContent =article.content;
      articleDiv .appendChild(articleP);

      document.querySelector("#articles").appendChild(articleDiv);
    }
  });
