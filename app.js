const H1Name = document.querySelector('.name')
const H1LName = document.querySelector('.lname')
const H1Age = document.querySelector('.age')

const NameInp = prompt(`Ismingiz`)
const LNameInp = prompt(`Familiyangiz`)
const AgeInp = prompt(`Yoshingiz`)
const Format = prompt(`Katta yoki Kichik: 1) Katta; 2) Kichik`)

if (Format === "1") {
    H1Name.textContent= `Ism: ${NameInp.toUpperCase()}`
    H1LName.textContent= `Familiya: ${LNameInp.toUpperCase()}`
    H1Age.textContent= `Yosh: ${AgeInp.toUpperCase()}`
} else if (Format === "2") {
    H1Name.textContent= `Ism: ${NameInp.toLowerCase()}`
    H1LName.textContent= `Familiya: ${LNameInp.toLowerCase()}`
    H1Age.textContent= `Yosh: ${AgeInp.toLowerCase()}`
} else {
    alert(`Iltimos 1 yiki 2!`)
}