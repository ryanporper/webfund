// function greetUser(firstName, lastName) {
//     console.log("Hello, " + firstName + " " + lastName)
// }

// greetUser("Billy", "Bob");
// greetUser("John", "Smith");


// function sumTwoNums(x, y) {
//     return x + y;
// }

// let sum = sumTwoNums(3,9);

// console.log(sum);

let artist = ["Drake", "Lil Baby", "Kanye West", "SB", "MJ", "Lil Wayne"]

function searchForArtist(artistName) {
    for(let i=0; i<artist.length; i++) {
        if(artist[i] == artistName) {
            return "Found " + artistName + " at index number: " + i;
        }
    }
    return "No artist found with the name " + artistName + ".";
}

console.log(searchForArtist("Boosie"));