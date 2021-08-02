var Animals = ['Lion', 'Tiger', 'Elephant']

// iterate over the array and put each element under li
function mapAnimals() {

    var listString = ""
    for (var i = 0; i < Animals.length; i++)
        // listString += "<li class='list-group-item'>" + Animals[i] + "</li>"
        listString +=
            `<li class='list-group-item d-flex justify-content-between align-items-center'>
            ${Animals[i]}
            <button class="btn p-0 text-danger material-icons" onclick="deleteAnimal(${i})">clear</button>
        </li>`

    document.getElementById("AnimalsList").innerHTML = listString
}

function deleteAnimal(index) {
    Animals.splice(index, 1)
    mapAnimals()
}

function addAnimal() {
    var textValue = document.getElementById('newAnimalText').value

    Animals.push(textValue)
    document.getElementById('newAnimalText').value = ''
    mapAnimals()
}

function textChanged() {
    var textValue = document.getElementById('newAnimalText').value

    if (textValue === null || textValue.length == 0) {
        document.getElementById('addButton').disabled = true
    }
    else if (textValue.length > 0) {
        document.getElementById('addButton').disabled = false
    }
}