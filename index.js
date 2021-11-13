function newImage (name, source, x, y) {
    name = document.createElement('img')
    name.src = source
    name.style.position = 'fixed'
    name.style.left = x
    name.style.bottom = y
    document.body.append(name)
    return name
}

newImage('greenCharacter', 'assets/green-character.gif', '100px', '100px')
newImage('pineTree', 'assets/pine-tree.png', '450px', '200px')
newImage('tree', 'assets/tree.png', '200px', '300px')
newImage('pillar', 'assets/pillar.png', '350px', '100px')
newImage('crate', 'assets/crate.png', '150px', '200px')
newImage('well', 'assets/well.png', '500px', '420px')

function newItem (name, source, x, y) {
    name = newImage(name, source, x, y)

    name.addEventListener('dbclick', function(){
        name.remove()
    })
}

newItem('sword', 'assets/sword.png', '500px', '405px')
newItem('shield', 'assets/sheild.png', '165px', '185px')
newItem('staff', 'assets/staff.png', '600px', '100px')

function newBackground (name, source) {
    name = document.createElement('img')
    name.src = source
    return name
}

    for (var i = 0; i < window.innerHeight; i++) {
        document.body.appendChild(newBackground())
    }

newBackground('grass', 'assets/grass.png')

console.log('window width: ' + window.innerWidth)
console.log('window height: ' + window.innerHeight)