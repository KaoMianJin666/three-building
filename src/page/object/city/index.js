
import * as Three from 'three'
import Building from '../building'
import Ground from '../ground'
class City {
  constructor(group) {
    this.mainGroup = group
    this.group = new Three.Group()
  }
  building () {
    let ground = new Ground(this.group)
    ground.draw()
    let buildings = new Building(this.group, [2, 5, 2])
    buildings.draw()
    this.mainGroup.add(this.group)
    // console.log(group)
  }
}
export default City