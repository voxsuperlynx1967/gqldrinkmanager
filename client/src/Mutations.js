 export default function orderCoffee(size, name, type, cb) {
    fetch(`/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation {
          orderCoffee(size: ${size}, name: "${name}", type: ${type}) {
            id
            name
            type
            size
          }
        }`,
      }),
    })
      .then(res => res.json())
      .then(res => cb(res.data))
      .catch(console.error)
  }
