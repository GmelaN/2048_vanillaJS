
init = () => {
    let div = document.createElement("div")
    div.id = "board_div"

    let table = document.createElement("table")

    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            let tr = document.createElement("tr")
            tr.id = toString(i) + toString(j)
            table.appendChild(tr)
        }
    }

    document.body.appendChild()
}

