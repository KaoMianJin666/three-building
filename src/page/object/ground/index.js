import * as Three from 'three'
import { groundImage } from '../../../images'
class Ground {
  constructor(group) {
    this.group = group
  }
  draw () {
    let geometry = new Three.PlaneGeometry(100, 100, 4, 4)
    let maps = Three.ImageUtils.loadTexture(groundImage)
    maps.wrapS = maps.wrapT = Three.RepeatWrapping;
    maps.repeat.set(500, 400);
    maps.needsUpdate = true
    let material = new Three.MeshPhongMaterial({
      map: maps,
      ambient: 0x552811,
      specular: 0x333333,
      shininess: 0.1,
      bumpScale: 0.1,
      metal: false

    })
    let ground = new Three.Mesh(geometry, material)
    ground.rotation.x = - Math.PI / 2
    this.group.add(ground)
  }
}
export default Ground