let items = {
  "avocado": {
    name: "avocado",
    note: "The fruit of the plant, also called an avocado, is botanically a large berry containing a single large seed.",
    imageUrl: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  },
  "banana": {
    name: "banana",
    note: "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa.",
    imageUrl: "https://images.unsplash.com/photo-1603052875302-d376b7c0638a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
  },
  "mango": {
    name: "mango",
    note: "A mango is an edible stone fruit produced by the tropical tree Mangifera indica which is believed to have originated from the region between northwestern Myanmar, Bangladesh, and northeastern India.",
    imageUrl: "https://images.unsplash.com/photo-1591424238566-00d60a5342b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG1hbmdvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  }
}

// const _getItems =  new Promise((res, rej) => {
//   setTimeout(() => res({...test}), 1000)
// })

export function _getItems () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...items}), 1000)
  })
}