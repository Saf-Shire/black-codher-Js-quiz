const books = [{
    name:'The children of Blood and Bone ',
    author:'Tomi Adeyemi',
    price:7.50,
    description:
    `A stunning novel, spanning generations and continents, Ghana Must Go by rising star Taiye Selasi is a tale of family drama and forgiveness, for fans of Zadie
    Smith and Chimamanda Ngozi Adichie. This is the story of a family -- of the simple, devastating ways in which families tear themselves apart, ...`,
    image: src= 'https://en.wikipedia.org/wiki/Children_of_Blood_and_Bone#/media/File:Children_of_Blood_and_Bone.jpg'
},
{
    name:'Queenie',
    author:'Candice Carty-Williams',
    price:8.00,
    description:`THE SUNDAY TIMES BESTSELLER SHORTLISTED FOR THE COSTA FIRST NOVEL
    AWARD LONGLISTED FOR THE WOMEN'S PRIZE FOR FICTION 'Hilarious, compelling, painful,
    enlightening, honest. I loved it' - Dolly Alderton 'Brilliant, timely, funny,
    heartbreaking' - Jojo Moyes 'A deliciously funny, characterful, topical ...`,
    image:'http://books.google.com/books/content?id=NhBmDwAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api'
},
{
     name:'Americanah',
    author:'Chimamanda Ngozi Adichie',
    price:3.49,
    description:`SHORTLISTED FOR THE BAILEY’S WOMEN’S PRIZE FOR FICTION ‘A delicious,
    important novel’ The Times ‘Alert, alive and gripping’ Independent ‘Some novels tell a
    great story and others make you change the way you look at the world. Americanah does
    both.’ Guardian...`,
    image:'http://books.google.com/books/content?id=djc_DwAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api'
}];

function displayBooks (booklist) {
    const bookstore = document.querySelector('#bookstore');

    booklist.forEach (book => {
        const listItem =document.createElement('li');
        const text = document.createTextNode(book.name);
        const author=  document.createTextNode(book.author);
        const image = document.createElement('img');
        image.src= book.image;
        listItem.appendChild(text);
        listItem.appendChild(author);
        listItem.appendChild(image);

        bookstore.appendChild(listItem);
    });
}
displayBooks(books);
 addButtons()

function addButtons(){
    const bookButtons= document.getElementsByClassName("addbtn");
    const bookLinkAdded= document.getElementsByClassName("bookLink");
    

    
    for (var i = 0; i < bookButtons.length; i++ ) {
    const button = bookButtons[i];
    bookButtons[i].addEventListener("click", buttonClicked);
    } 
   
}
function buttonClicked(){
console.log("test")
}
