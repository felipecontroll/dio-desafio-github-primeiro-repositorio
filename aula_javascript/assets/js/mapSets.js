function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Felipe', 'Admin');
usuarios.set('Rafa', 'Admin');
usuarios.set('Josué', 'User');
usuarios.set('Larissa', 'Admin');

console.log(getAdmins(usuarios));