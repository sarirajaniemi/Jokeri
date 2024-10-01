const button = document.querySelector ('button')
const table = document.querySelector ('table')
const countParagraph = document.querySelector ('p')

let rowCount = 0



const addJokeriRow = () => {
    const newRow = table.insertRow() 



for (let i = 0; i < 7; i++) {
    const newCell = newRow.insertCell()
    newCell.textContent = Math.floor(Math.random() * 10)
    
}

rowCount++
countParagraph.textContent = `Valmiita rivejä ${rowCount}`

}
button.addEventListener('click', addJokeriRow)