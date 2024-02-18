function getCharacters(done){
    const result = fetch("https://rickandmortyapi.com/api/character")
    //traducir los datos a un JSON legible
    result
    .then(response => response.json())
    .then(data => {
        done(data)
    });

    
}

getCharacters( data => {
    //console.log(data); //probando en consola

    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*hmtl*/`
        <article>
        <div class="image-container">
            <img src="${personaje.image}" alt="personaje">
        </div>

        <h2>${personaje.name}</h2>
        <span>${personaje.status}</span>
        </article>
        `);

        const main = document.querySelector("main");

        main.append(article);
    });
});