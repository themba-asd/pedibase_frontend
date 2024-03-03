
async function getData() {
    //const url = 'http://localhost:3000/api/v1/pedigree'

    try {
        //const response = await fetch(url)
        //const data = await response.json()
        for (const obj in data) {
            let item = data[obj]
            const rows = document.createElement('tr')
            for (const key in item) {
                let entries = String(item[key]).substring(0, 10)
                let rowsData = document.createElement('td')
                rowsData.textContent = entries
                rowsData.style.textAlign = 'center'
                rowsData.style.borderLeft ='1px solid rgba(178, 168, 168, 0.689)'
                rows.appendChild(rowsData)
            }
            const table = document.querySelector('.entries')
            table.appendChild(rows)
        }
    } catch (error) {console.log(error)}
}

//export default getData