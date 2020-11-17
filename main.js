
console.log('hello')

for (let customer of customers) {
  const customerDiv = document.createElement('div')
  customerDiv.classList.add('customers')
  document.querySelector('body').appendChild(customerDiv)

  customerDiv.innerHTML = `<img src=${customer.picture['large']}>
  <div class='name'>${customer.name.first} ${customer.name.last}</div>
  <div class='email'>${customer.email}</div>`
}
// redo this using appendChild
