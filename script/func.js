export async function fetchJson(url, options= {}) {
    const headers = {accept: 'application/json', ...options.headers}
    const r = await fetch(url, {...options, headers})
    if (r.ok) {
        return r.json()
    }
    throw new Error("Erreur serveur ", {cause: r})
}

export function processing(data) {
    let arr = []
    for (let ressources in data) {
        for (let j of data[ressources]) {
            arr.push([ressources, j[0], j[1]]) 
        }
    }
    return  shuffleArray(arr);
}

export function createTable(data, len=5) {
    let id = 1
    data = data.slice(data.length - len)
    const table = createElement("table", {class: "table table-dark table-striped table-hover"})
    table.innerHTML =  `<thead><tr><th>id</th><th>Ressources</th><th>Prédicat</th><th>Objet</th></tr></thead>`
    let tbody = createElement("tbody")

    for (let line of data) {
        const rows = `<tr><td>${id}</td><td>${line[0]}</td><td>${line[1]}</td><td>${line[2]}</td></tr>` 
        tbody.innerHTML += rows
        id++
    }
    table.append(tbody)
    return table
}

export function processing2(data) {
    let arr = []
    for (let i in data) {
        

        arr.push([extractLastSegment(data[i][0])[0], extractLastSegment(data[i][1])[0], data[i][2], data[i][3], data[i][4], data[i][5], data[i][6], data[i][7]])
        

    }
    return shuffleArray(arr)
}

export function createTableTerm(data, len=5) {
    let id = 1
    data = data.slice(data.length - len)
    const table = createElement("table", {class: "table table-dark table-striped table-hover"})
    table.innerHTML =  `
    <thead>
        <tr>
            <th>id</th>
            <th>ressource 1</th>
            <th>ressource 2</th>
            <th>jacc sim</th>
            <th>cosine sim</th>
            <th>wordnet sim</th>
            <th>moy</th>
            <th>comb damster</th>
            <th>discjontif</th>
        </tr>
    </thead>`


    let tbody = createElement("tbody")

    for (let line of data) {
        const rows = `
        <tr>
            <td>${id}</td>
            <td>${line[0]}</td>
            <td>${line[1]}</td>
            <td>${line[2] !== null ? line[2].toFixed(4) : 0 }</td>
            <td>${line[3] !== null ? line[3].toFixed(4) : 0 }</td>
            <td>${line[4] !== null ? line[4].toFixed(4) : 0 }</td>
            <td>${line[5] !== null ? line[5].toFixed(4) : 0 }</td>
            <td>${line[6] !== null ? line[6].toFixed(4) : 0 }</td>
            <td>${line[7] !== null ? line[7].toFixed(4) : 0 }</td>
        </tr>` 
        tbody.innerHTML += rows
        id++
    }
    table.append(tbody)
    return table
}

export function createTableStruct(data, len=5) {
    let id = 1
    data = data.slice(data.length - len)
    const table = createElement("table", {class: "table table-dark table-striped table-hover"})
    table.innerHTML =  `
    <thead>
        <tr>
            <th>id</th>
            <th>ressource 1</th>
            <th>ressource 2</th>
            <th>wordnet sim</th>
        </tr>
    </thead>`
    let tbody = createElement("tbody")
    for (let line of data) {
        const rows = `
        <tr>
            <td>${id}</td>
            <td>${line[0]}</td>
            <td>${line[1]}</td>
            <td>${line[2] !== null ? line[2].toFixed(4) : 0 }</td>
        </tr>` 
        tbody.innerHTML += rows
        id++
    }
    table.append(tbody)
    return table
}

export function createTableExt(data, len=5) {
    let id = 1
    data = data.slice(data.length - len)
    const table = createElement("table", {class: "table table-dark table-striped table-hover"})
    table.innerHTML =  `
    <thead>
        <tr>
            <th>id</th>
            <th>ressource 1</th>
            <th>ressource 2</th>
            <th>jacc sim</th>
            <th>cosine sim</th>
            <th>moy</th>
        </tr>
    </thead>`


    let tbody = createElement("tbody")

    for (let line of data) {
        const rows = `
        <tr>
            <td>${id}</td>
            <td>${line[0]}</td>
            <td>${line[1]}</td>
            <td>${line[2] !== null ? line[2].toFixed(4) : 0 }</td>
            <td>${line[3] !== null ? line[3].toFixed(4) : 0 }</td>
            <td>${line[4] !== null ? line[4].toFixed(4) : 0 }</td>
        </tr>` 
        tbody.innerHTML += rows
        id++
    }
    table.append(tbody)
    return table
}

export function createElement(tagName, attrs={}) {
    const elem = document.createElement(tagName)
    for (const [key, value] of Object.entries(attrs)) {
        if (value !== null) {
            elem.setAttribute(key, value)
        }
    }
    return elem;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
  

function extractLastSegment(url) {
    try {
      const parsedUrl = new URL(url);
      const path = parsedUrl.pathname;
      const segments = path.split("/");
      return [segments[segments.length - 1], url];
    } catch (error) {
      // Si l'entrée n'est pas une URL valide, retourner la même entrée
      return [url];
    }
}

export function dispTable(data) {
    const table = createElement("table", {class: "table table-dark table-striped table-hover"})
    table.innerHTML =  `
    <thead>
        <tr>
            <th>method seuil</th>
            <th>TP</th>
            <th>FP</th>
            <th>FN</th>
            <th>Rappel</th>
            <th>Precision</th>
            <th>Fmesure</th>
        </tr>
    </thead>`
    let tbody = createElement("tbody")

    for (let line of data) {
        const rows = `<tr><td>${line[0]}</td><td>${line[1]}</td><td>${line[2]}</td><td>${line[3]}</td><td>${line[4]}</td><td>${line[5]}</td><td>${line[6]}</td></tr>` 
        tbody.innerHTML += rows

    }
    table.append(tbody)
    return table
}
  