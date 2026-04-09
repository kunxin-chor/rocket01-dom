// EIPO
// Event: what event triggers the feauture
document.querySelector("#searchBtn")
        .addEventListener("click", async function(){
           // 2. INPUT
           // where the user's data coming from
           // and how to extract it
           const searchTerms = document.querySelector("#searchTerms").value;
           console.log("searchTerms = ", searchTerms);

           // 3. PROCESSING
           const pokemon = await getData(searchTerms);
           console.log(pokemon);

           // 4. OUTPUT
           // 1. where does the user sees the output
           const outputEl = document.querySelector("#output");
           outputEl.innerHTML = `
            <h1>${pokemon.name}</h1>
            <img src="${pokemon.sprites.other["official-artwork"].front_shiny}"/>
           `

        })