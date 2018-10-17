const hogContainer = document.querySelector("#hog-container")
const hogForm = document.querySelector("#hog-form")

class Controller {


  static init(){
    Adapter.getAllHogs()
    .then(function(hogData){
      Controller.createHogs(hogData)
      Controller.displayHogs(allHogs)
    })
    hogForm.addEventListener("submit",Controller.createHog)

  }

  static createHogs(hogdata){
    hogdata.forEach(data => new Hog(data))
  }
  static displayHogs(hogs){
    hogs.forEach(hog=>Controller.displayHog(hog))
  }
  static displayHog(hog){
    let node = document.createElement("div")
    node.classList = "hog-card"
    node.id = `hog-${hog.id}`
    node.innerHTML = `<h4>${hog.name}</h4>
                      <img src = "${hog.image}">
                      <p>Specialty: ${hog.specialty}</p>
                      <label for ="checkbox">Greased:</label>
                      <input data-id = "${hog.id}" type="checkbox">
                      <p>Weight: ${hog.weight}</p>
                      <p>Highest Medal Achieved: ${hog.medal}</p>`
   hogContainer.append(node)
   let button = document.createElement("button")
               button.id = `delete-${hog.id}`
               button.dataset.id = `${hog.id}`
               button.innerText = "Delete Hog"
               node.appendChild(button)
   if (hog.greased){
     node.querySelector('input').checked = true
   }
   node.querySelector("input").addEventListener("click",Controller.greaseHog)
   button.addEventListener("click",Controller.deleteHog)
  }
  static greaseHog(e){
    // note checkbox changes before event trigger
    let hog = allHogs.find(hogObj => hogObj.id == e.target.dataset.id)
    hog.greased = !hog.greased
    Adapter.updateHog(hog)
  }
  static deleteHog(e){
    let hog = allHogs.find(hogObj => hogObj.id == e.target.dataset.id)
    Adapter.deleteHog(hog).then(function(hogData){
      document.querySelector(`#hog-${hog.id}`).remove()
    })

  }

  static createHog(e){
    e.preventDefault()
    let name = e.target.name.value
    let specialty = e.target.specialty.value
    let medal = e.target.medal.value
    let weight = e.target.weight.value
    let img = e.target.img.value
    let greased = form.querySelector('span > input[type="checkbox"]').checked
    let data = {
      "name":name,
      "specialty": specialty,
      "greased": greased,
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water":weight,
      "highest medal achieved": medal,
      "image":"./hog-imgs/mudblood.jpg"
    }
    Adapter.createHog(data)
    .then(function(hogData){
      let hog = new Hog(hogData)
      Controller.displayHog(hog)
    })


  }
}
