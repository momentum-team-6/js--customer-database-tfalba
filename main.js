
console.log('hello')
const customersDiv = document.createElement('div')
document.querySelector('body').appendChild(customersDiv)

customersDiv.innerHTML = `<p>${customers[0].name.first}</p>`
customersDiv.classList.add('customers')

