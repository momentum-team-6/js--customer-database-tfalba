
console.log('hello')

for (let customer of customers) {
  const customerDiv = document.createElement('div')
  customerDiv.classList.add('customers')
  document.querySelector('body').appendChild(customerDiv)

  customerDiv.innerHTML = `<img src=${customer.picture['large']}>
  <p>${customer.name.first} ${customer.name.last}</p>`
}
// redo this using appendChild
