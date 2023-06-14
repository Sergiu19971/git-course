 //Modulul 1 Introducerea in JavaScript si Sintaxa de baza


var numar = 10;
let text = 'Salut'
const PI = 3.14;
//Variabile

if (x>5) {
    console.log ("x este mai mare decit 5")

} else {
    console.log("x este mai mic sau egal cu 5")
}
//Instructiuni si blocuri

function salut () {
    console.log ("Salut! Bine ai venit la cursul de JS")
}
//Functiile

// Comentariile

/* Acesta este un comentariu 
pe mai multe linii
*/

//Modulul 2 Variabile si Tipurile de Date

//Numere

let varsta = 26;
let pret = 9.99;

//Strings

let nume = 'Mihai';
let mesaj = 'Bun venit';

//Booleans

let esteVara = true;
let esteIarna = false;

//Arrays

let numere = [1, 2, 3, 4, 5];
let culori = ['rosu','verde', 'albastru']

//Objects

let persoana = {
    nume:'Mihai',
    varsta: 30,
    ocupatie: 'dezvoltator web'
}



// Modulul 3:Operatori si Instructiuni

// 1 Operatorii aritmetici

let x = 10;
let y = 5;

let suma = x + y;       // Adunearea
let diferenta = x - y;  // Scaderea
let produs = x * y;     // Inmultirea
let cat = x / y;        //Impartirea
let rest = x % y;       // REstul impartirii
let putere = x ** y;    // Ridicarea la putere


// 2 Operatori de atribute

let x = 10;

x+= 5; // echivalent cu x=x+5
x-= 3; // echivalent cu x=x-3
x*= 2;  // echivalent cu x=x*2
x/= 4;   // echivalent cu x=x/4
x %= 3;   // echivalent cu x = x%3

// 3 Operatori de comparatie

let x = 5;
let y = 10;

console.log(x > y);  // Mai mare
console.log(x < y);  // Mai mic
console.log(x >= y);  // Mai mare sau egal
console.log(x <= y); //Mai mic sau egal
console.log(x === y); // Egalitate stricta
console.log(x !== y); // Diferit

// 4 Operatori logici

let x = 5;
let y = 10;

console.log(x > 3 && y < 20); //Si logic
console.log(x > 3 || y < 5); // Sau logic
console.log(!(x < 3)); // Negare logica

// Instructiune de control

let x = 5;

if (x > 10){
    console.log('x este mai mare decit 10')
} else {
    console.log('x este mai mic sau egal cu 10')

}

switch (x) {
    case 1:
        console.log ("x este 1");
        break;
        case 2:
            console.log("x este 2");
            break;
            default:
            console.log("x nu este nici 1, nici 2");
}

for (let i = 0; i < 5; i++){
    console.log(i);
}

while ( x > 0){
    console.log(x)
    x--;
}


// Modulul 4: Structuri de Date și Funcții

// Array-uri:

let numere = {1, 2, 3, 4, 5};
console.log (numere.length);  // Lungimea array-ului
console.log(numere[0]);  // Accesarea unei valori dupa index
numere.push (6);   // Adaugarea unei valori la sfirsitul array-ului
numere.pop();  //Eliminarea ultimei valori din array
numere.splice(2, 1); //Eliminarea unei valori la un anumit index


// Obiectele

let persoana = {
    nume: 'Mihai',
    varsta: 25,
    ocupatie: " dezvoltator web",
    salut: function() {
        console.log("Salut, sunt " + this.nume + "si am" + this.varsta + "ani");
    }
};

console.log(persoana.nume); // Accesarea unei proprietati
persoana.varsta = 30; // Actualizam una din proprietati
persoana.salut(); // Aleparea unei metode

// Functii

function salut(nume) {
    console.log ("salut," + nume + "!");

}
salut("Mihai"); // Apelarea unei functii

function aduna (a, b) {
    return a + b ;
} 
let rezultat  = aduna (3, 5);
console.log(rezultat);  // Utilizarea valorii returnate de functie 


// Modulul 5: Lucrul cu Evenimentele si Manipularea Dom

// 1 : Adaugarea evenimentelor

let buton = document.getElementById('myButton');
function handleClick () {
    console.log('Butenul a fost apasat!');

}
buton.addEventListener('click', handleClick);


// 2:Manipularea continutului Html:

let paragraf = document.getElementById('myParagraph');
paragraf.innerHTML = "Acesta este un paragraf nou.";

// 3: Modificarea stilurilor CSS
let element = document.getElementById('myButton');
element.style.color = "red";
element.style.fontSize = "20px";
element.style.backgroundColor= "yelow"

// 4 :Traversarea si manipularea DOM

let lista = document.querySelectorAll ('ul li');
for ( let i=0; i< lista.length; i++) {
    lista[i].style.color = 'blue';
}

// Modulul 6: Lucrul cu Funcții Avansate și Obiecte 

// 1 Functii cu parametri optionali

function salut (nume, salut = "Buna") {
    console.log ( salut + "," + nume + "!")

}
salut("Ana");    // Va afisa "Buna, Ana!"
salut("Ion", "Salut");  // Va afisa "Salut, Ion!"

// 2 Functii anonime:
 let salut = function(nume){
    console.log("Salut," + nume + "!")
 }
 salut("Alex");  // Va afisa "Salut, Alex!"

 // 3 Functii auto-invocate:
 (function(){
    console.log("Aceasta este o funtie auto-invocata");
 })();

 // 4 Obiecte complexe;
  let persoana = {
    nume: "Maria",
    varsta: 25,
    salut : function() {
        console.log("Salut, sunt"+ this.nume + "si am"+ this.varsta + "de ani");
    }
  };

  console.log(persoana.nume);   // Va afisa "Maria"
  persoana.funnction(); // Va afisa "Salut, sunt Maria si am 25 de ani"

  // Modulul 7: Lucrul cu Tablouri și Bucle

  // 1 Crearea unui tablou:
  let numere = [1, 2, 3, 4, 5];
  let cuvinte = ["mere", "pere", "banane"];

  // 2 Accesarea elementelor din tablou:

  let numere = [1, 2, 3, 4, 5];
  console.log(numere[0]) // Va afisa 1
  console.log(numere[2]) // va afisa 3

  // 3 Parcurgerea unui tablou cu bucla 'for':

  let numere = [1, 2, 3, 4, 5];
for (let i=0; i< numere.length; i++) {
    console.log(numere[i]);
}
// 4 Metode utile pentru tablouri:

let numere = [1, 2, 3];
numere.push(4); // Adauga elementul 4 la sfirsitul tabloului
numere.pop(); // Elimina ultimul element din tablou
let fragment = numere.slice(1); // Returneaza o bucata din tablou , incepind cu indexul 1

//Modulul 8: Lucrul cu Obiecte și Metode

// 1 Crearea unui obiect

let persoana {
    nume : "John";
    varsta : 30;
    ocupatie : "dezvoltator"
};
 // 2 Accesara si modificarea proprietatilor:
  console.log(persoana.nume); // Va afisa "John"
  console.log(persoana["varsta"]); // Va afisa 30

  // 3 Definirea si apelarea metodelor:
  let persoana = {
    nume: "Ion",
    varsta: 20,
    afiseazaDetalii: function() {
        console.log("Nume:" + this.nume);
        console.log("Varsta: " + this.varsta);
    }
  };
  persoana.afiseazaDetalii(); // Va afisa detaliile persoanei

  // Modulul 9: Lucrul cu Funcții și Evenimente

  // 1 Definirea si apelarea functiilor

  function salut () {
    console.log("Salut");
  }
  salut(); // Apelam functia "salut" si va afisa "Salut"

  // 2 Parametri si argumente
   function salut (nume) {
    console.log("Salut" + nume + "!");
   };

   salut("John"); // Va afisa "Salut, John"
   salut("Alex"); // Va afisa "Salut, Alex"

   // 3 Returnarea valorilor:
   function aduna(a, b) {
    return a + b;
   }
    let rezultat = aduna(5,3);
    console.log(rezultat);   // Va afisa 8

    // 4 Lucrul cu evenimentele

    let buton = document.querySelector("#buton");
    function afiseazaMesaj() {
        console.log ("Butonul a fost apasat!")
    }
buton.addEventListener("click", afiseazaMesaj);


// Modulul 10: Recapitulare și Resurse Utile

 /* 1 Recapitulare:

   * JavaScript este un limbaj de programare de înaltă nivel, utilizat pentru a crea interactivitate pe paginile web.

   * Sintaxa JavaScript constă în instrucțiuni și expresii care sunt interpretate și executate de către browser.

   * Variabilele sunt utilizate pentru a stoca și manipula date în JavaScript. Putem declara variabile utilizând cuvântul cheie var, let sau const.

   * Operatorii ne permit să efectuăm operații matematice, logice și de comparație în JavaScript.

   * Structurile de control, cum ar fi instrucțiunile condiționale (if, else) și buclele (for, while), 
    ne permit să controlăm fluxul execuției programului.

   * Lucrul cu obiecte și metode ne permite să organizăm și să manipulăm datele într-un mod structurat.

   * Funcțiile ne permit să reutilizăm blocuri de cod și să împărțim logica programului în părți mai mici și mai gestionabile

   * Evenimentele ne permit să răspundem la acțiunile utilizatorului și să adăugăm interactivitate la paginile web.

    // 2 Resurse Utile:

  * Mozilla Developer Network (MDN): MDN oferă o documentație bogată și cuprinzătoare pentru JavaScript, 
    inclusiv ghiduri, tutoriale și exemple de cod. 
    Poți accesa resursele lor pe site-ul oficial: https://developer.mozilla.org/en-US/docs/Web/JavaScript

    * Stack Overflow: Stack Overflow este o comunitate de programatori unde poți găsi întrebări și răspunsuri,
     legate de probleme specifice de programare. Poți accesa site-ul lor aici: https://stackoverflow.com/
