import { fetchJson, processing, createTable, createTableTerm, processing2, createTableStruct, createTableExt, dispTable, createElement } from "./func.js"

// load dataset  

const btn1 = document.querySelector('#dset1')
const tableDset1 = document.querySelector('#table-dset1')

const btn2 = document.querySelector('#dset2')
const tableDset2 = document.querySelector('#table-dset2')

btn1.onclick = async (event) => {
    let data = await fetchJson("data/g1.json")
    data = processing(data)
    const table = createTable(data)
    tableDset1.innerHTML = ""
    tableDset1.append(table)
    tableDset1.classList.remove('d-none')
}

btn2.onclick = async (event) => {
    let data = await fetchJson("data/g2.json")
    data = processing(data)
    const table = createTable(data)
    tableDset2.innerHTML = ""
    tableDset2.append(table)
    tableDset2.classList.remove('d-none')
}

// normalize dataset

const btnN1 = document.querySelector('#nset1')
const tableNset1 = document.querySelector('#table-nset1')

const btnN2 = document.querySelector('#nset2')
const tableNset2 = document.querySelector('#table-nset2')

btnN1.onclick = async (event) => {
    let data = await fetchJson("data/dict_normaliser1.json")
    data = processing(data)
    const table = createTable(data)
    tableNset1.innerHTML = ""
    tableNset1.append(table)
    tableNset1.classList.remove('d-none')
}

btnN2.onclick = async (event) => {
    let data = await fetchJson("data/dict_normaliser1.json")
    data = processing(data)
    const table = createTable(data)
    tableNset2.innerHTML = ""
    tableNset2.append(table)
    tableNset2.classList.remove('d-none')
}

// Alignement dataset

const btnTerm = document.querySelector('#btn-sim-term')
const btnStr = document.querySelector('#btn-sim-str')
const btnExt = document.querySelector('#btn-sim-ext')

const tableSimTerm = document.querySelector('#table-sim-term')
const tableSimStr = document.querySelector('#table-sim-str')
const tableSimExt = document.querySelector('#table-sim-ext')

// display terminologique result
btnTerm.onclick = async (event) => {
    let data = await fetchJson("data/result_term.json")
    data = processing2(data)
    console.log(data)
    const table = createTableTerm(data, 100)
    tableSimTerm.innerHTML = ""
    tableSimTerm.append(table)
    tableSimTerm.classList.remove('d-none')
}
// display structurelle result
btnStr.onclick = async (event) => {
    let data = await fetchJson("data/result_structurelle.json")
    data = processing2(data)
    const table = createTableStruct(data)
    tableSimStr.innerHTML = ""
    tableSimStr.append(table)
    tableSimStr.classList.remove('d-none')

}
// display extensionnelle result
btnExt.onclick = async () => {
    let data = await fetchJson("data/result_extensionnelle.json")
    data = processing2(data)
    const table = createTableExt(data)
    tableSimExt.innerHTML = ""
    tableSimExt.append(table)
    tableSimExt.classList.remove('d-none')
}

// evaluation dataset

const evalBtn = document.querySelector('#btn-eval')
const tableEl = document.querySelector("#table")
const imgEl = document.querySelector(".img")

evalBtn.onclick = async () => {
    let data = await fetchJson("data/out.json")

    let todisp = []
    for (let i of data) {
        let arr = []
        for (const [key, value] of Object.entries(i)) {
            arr.push(value)
        }
        todisp.push(arr)
    }


    // console.log(todisp)
    tableEl.innerHTML = ""
    imgEl.innerHTML = ""
    const img = createElement('img', {src: "data/img.png"})
    imgEl.append(img)
    tableEl.append(dispTable(todisp))
}