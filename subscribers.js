
fetch("/api/articles")
.then(r=>r.json())
.then(data=>{

let html=""

data.forEach(a=>{

html+=`
<div>
<h2>${a.title}</h2>
<p>${a.summary}</p>
<a href="/article.html?slug=${a.slug}">Leer más</a>
</div>
`

})

document.getElementById("articles").innerHTML=html

})
