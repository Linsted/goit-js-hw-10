const e={input:document.querySelector("#search-box")};e.input.addEventListener("input",(function(){n=e.input.value,fetch(`https://restcountries.com/v3.1/name/${n}?fields=name,capital,population,flags,languages`).then((e=>e.json())).then((e=>console.log(e))).catch((e=>console.log(e)));var n})),console.log(1);
//# sourceMappingURL=index.98813893.js.map
