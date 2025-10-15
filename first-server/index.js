let express = require('express'); //making the library
let app = express(); //execute express funciton that returns objects to us in app

let books = {
    "data" : [
        {
            title: "women who run with the wolves",
            author: "Clarissa Pinkola Estés",
            year: "1996"
        },
        {
            title: "All About Love",
            author: "Bell Hooks",
            year: "1999"
        },
        {
            title: "Astrophysics for People in a Hurry",
            author: "Neil deGrasse Tyson",
            year: "2017"
        },
        {
            title: "It didn't start with you",
            author: "Mark Wolynn",
            year: "2016"
        },
        {
            title: "Existentialism is a humanism",
            author: "Jean-Paul Sartre",
            year: "1946"
        },
        {
            title: "Infinity Net",
            author: "Yayoi Kusama",
            year: "2002"
        },
        {
            title: "Free play: improvisation in life and art",
            author: "Stephen Nachmanvitch",
            year: "1990"
        },
        {
            title: "Why Women have better sex under socialism",
            author: "Kristen R. Ghodsee",
            year: "2018"
        },
        {
            title: "Klara and the sun",
            author: "Kazuo Ishiguro",
            year: "2021"
        },
        {
            title: "The Moonstone",
            author: "Wilkie Collins",
            year: "1868"
        }
    ]
}

//server side
app.get('/', (request, response)=>{
    response.send("hello");
})

//client side
// app.use("/", express.static("public"));

app.get('/about', (request, response) => {
    response.send('this is a about webpage')
})

app.get('/contact', (request, response) => {
    response.send('this is a contact page')
})


//json
app.get('/books', (request, response) => {
    response.json(books);
})

//specific parameters
app.get("/books/:book", (request, response)=>{
    console.log(request.params.book);

    let user_book = request.params.book;
    let user_object;
    for(let i=0; i<books.data.length; i++){
        if(user_book == books.data[i].title){
             user_object = books.data[i];
        }
    }
    console.log(user_object);

    //what to do when the parameter is undefined
    if(user_object){
        response.json(user_object);
    } else{
        response.json({status:"book not found"});
    }

    response.send("thank you");
})


//specifying where to listen for the events 
app.listen(3000, ()=>{
    console.log("app is listning at 3000");
})



