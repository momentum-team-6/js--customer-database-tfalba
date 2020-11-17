
console.log('hello')
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const header = document.createElement('h1')
header.classList.add('h1')
document.querySelector('body').appendChild(header)
header.innerHTML = "Customer Directory"

for (let customer of customers) {
  const customerDiv = document.createElement('div')
  customerDiv.classList.add('customers')
  document.querySelector('body').appendChild(customerDiv)

  const birth = new Date(customer.dob.date)
  const monthIndex = birth.getMonth()
  const monthName = months[monthIndex]
  const day = birth.getDate()
  const year = birth.getFullYear()

  const registered = new Date(customer.registered.date)
  const regMonthIndex = registered.getMonth()
  const regMonthName = months[regMonthIndex]
  const regDay = registered.getDate()
  const regYear = registered.getFullYear()
  const abbrState = nameToAbbr(customer.location.state)


  customerDiv.innerHTML = `<img src=${customer.picture['large']}>
  <div class='name'>${customer.name.first} ${customer.name.last}</div>
  <div class='email'>${customer.email}</div>
  <div class='address'>${customer.location.street.number} ${customer.location.street.name}</div>
  <div class='address'>${customer.location.city}, ${abbrState} ${customer.location.postcode}</div>
  <div class='dob'>DOB: ${monthName}, ${day} ${year}</div>
  <div class='registered'>Customer since: ${regMonthName}, ${regDay} ${regYear}</div>`
}
// redo this using appendChild
