BASE_URL = "http://localhost:3000/hogs"
class Adapter{

  static getAllHogs(){
    return fetch(BASE_URL).then(response=>response.json())
  }

  static updateHog(hog){
    let url = BASE_URL + `/${hog.id}`
    let data= {greased: hog.greased}
    return fetch(url,{
      method: "PATCH",
      headers:
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response=>response.json())
  }
  static createHog(data){
    return fetch(BASE_URL,
    {
      method: "POST",
      headers:
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
    }

    static deleteHog(hog){
      let url = BASE_URL + `/${hog.id}`
      return fetch(url,{
        method: "DELETE",
        headers:
        {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },

      })
      .then(response=>response.json())
    }

}
