let allHogs = []
class Hog {
  constructor(data){

    this.id = data.id;
    this.name = data.name
    this.specialty = data.specialty
    this.greased = data.greased
    this.weight = data["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
    this.medal = data["highest medal achieved"]
    this.image = data.image
    allHogs.push(this)
  }
}
