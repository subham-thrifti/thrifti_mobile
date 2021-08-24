
const ImageSource = require('../../assets/images/stores/Loblaws-Logo.png');

const STORES = [
    { id: 1, imgUrl: ImageSource, label: 'A & P'},
    { id: 2, imgUrl: ImageSource, label: 'IGA'},
    { id: 3, imgUrl: ImageSource, label: 'Fortinos'},
    { id: 4, imgUrl: ImageSource, label: 'H Mart'},
    { id: 5, imgUrl: ImageSource, label: 'K Mart'},
    { id: 6, imgUrl: ImageSource, label: 'London Drug'},
    { id: 7, imgUrl: ImageSource, label: 'Coop'},
    { id: 8, imgUrl: ImageSource, label: 'Coppa'},
    { id: 9, imgUrl: ImageSource, label: 'Foodland'},
    { id: 10, imgUrl: ImageSource, label: 'Loblaws'},
];

const STORES_GROUPED_BY_FIRST_ALPHABET = {
    'A': [{ id: 1, imgUrl: ImageSource, label: 'A & P'}],
    'C': [{ id: 7, imgUrl: ImageSource, label: 'Coop'},{ id: 8, imgUrl: ImageSource, label: 'Coppa'},
            { id: 9, imgUrl: ImageSource, label: 'Koppa'}, { id: 10, imgUrl: ImageSource, label: 'loppa'}],
    'D': [{ id: 11, imgUrl: ImageSource, label: 'Doop'},{ id: 12, imgUrl: ImageSource, label: 'Doppa'}],
    'E': [{ id: 13, imgUrl: ImageSource, label: 'Eoop'},{ id: 14, imgUrl: ImageSource, label: 'Eoppa'}],
    'F': [{ id: 15, imgUrl: ImageSource, label: 'Foop'},{ id: 16, imgUrl: ImageSource, label: 'Foppa'}],
};

export {    
    STORES,
    STORES_GROUPED_BY_FIRST_ALPHABET
}

