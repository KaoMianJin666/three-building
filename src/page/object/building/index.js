import * as Three from 'three'
import Windows from './windows'
import { bricks, buildingTopper, buildingTopTop } from '../../../images'
class Building {
  constructor(group, pos) {
    this.group = group
    this.pos = pos
  }
  drawBody () {
    let geometry = new Three.BoxGeometry(this.pos[0], this.pos[1], this.pos[2]); //创建一个立方体几何对象Geometry
    // let material = new Three.MeshLambertMaterial({
    //   color: 0xffffff
    // });
    let maps = Three.ImageUtils.loadTexture(bricks)
    maps.wrapS = maps.wrapT = Three.RepeatWrapping;
    maps.repeat.set(4, 10);
    maps.needsUpdate = true
    let material = new Three.MeshPhongMaterial({
      map: maps,
      ambient: 0x552811,
      specular: 0x333333,
      shininess: 0.1,
      bumpScale: 0.1,
      metal: false

    })
    geometry.applyMatrix(new Three.Matrix4().makeTranslation(0, this.pos[1] / 2, 0))
    // }); //材质对象Material
    let mesh = new Three.Mesh(geometry, material)
    this.group.add(mesh)
  }
  drawWindow () {
    let win = new Windows(this.group, [2, 5, 2], [4, 7])
    win.draw()

  }
  drawTopper () {
    let topper = new Three.Group()
    let geometry = new Three.BoxGeometry(this.pos[0] - 0.01, this.pos[1] / 15, this.pos[2] - 0.01); //创建一个立方体几何对象Geometry
    // let material = new Three.MeshLambertMaterial({
    //   color: 0xffffff
    // });
    let maps = Three.ImageUtils.loadTexture(buildingTopper)
    maps.wrapS = maps.wrapT = Three.RepeatWrapping;
    maps.repeat.set(4, 4);
    maps.needsUpdate = true
    let material = new Three.MeshPhongMaterial({
      map: maps,
      ambient: 0x552811,
      specular: 0x333333,
      shininess: 0.1,
      bumpScale: 0.1,
      metal: false
    })
    let maps1 = Three.ImageUtils.loadTexture(buildingTopTop)
    maps1.wrapS = maps1.wrapT = Three.RepeatWrapping;
    maps1.repeat.set(9, 4);
    maps1.needsUpdate = true
    let material1 = new Three.MeshPhongMaterial({
      map: maps1,
      ambient: 0x552811,
      specular: 0x333333,
      shininess: 0.1,
      bumpScale: 0.1,
      metal: false
    })
    geometry.applyMatrix(new Three.Matrix4().makeTranslation(0, 0, 0))
    let mesh = new Three.Mesh(geometry, material)
    mesh.translateY(this.pos[1])
    let cylinder = new Three.CylinderGeometry(0, Math.sqrt((this.pos[0] - 0.01) * (this.pos[0] - 0.01) * 2) / 2, this.pos[1] / 4, 4, 1, true, 0, Math.PI * 2)
    let topMeth = new Three.Mesh(cylinder, material1)
    topMeth.applyMatrix(new Three.Matrix4().makeTranslation(0, (this.pos[1] + this.pos[1] / 6.5), 0))
    // topMeth.translateY(this.pos[1] + this.pos[1] / 7)
    topMeth.rotation.y = Math.PI / 4
    topper.add(mesh)
    topper.add(topMeth)
    this.group.add(topper)
  }
  drawPillar () {
    let material = new Three.MeshLambertMaterial({
      color: 0xffffff
    })
    let pillarA = new Three.BoxGeometry(0.1, this.pos[1] + 0.2, 0.1)
    let methA = new Three.Mesh(pillarA, material)
    pillarA.applyMatrix(new Three.Matrix4().makeTranslation(0, (this.pos[1] + 0.2) / 2, 0))
    methA.translateX(this.pos[0] / 2)
    methA.translateZ(this.pos[2] / 2)
    this.group.add(methA)
    let pillarB = new Three.BoxGeometry(0.1, this.pos[1] + 0.2, 0.1)
    let methB = new Three.Mesh(pillarB, material)
    pillarB.applyMatrix(new Three.Matrix4().makeTranslation(0, (this.pos[1] + 0.2) / 2, 0))
    methB.translateX(-this.pos[0] / 2)
    methB.translateZ(this.pos[2] / 2)
    this.group.add(methB)
    let pillarC = new Three.BoxGeometry(0.1, this.pos[1] + 0.2, 0.1)
    let methC = new Three.Mesh(pillarC, material)
    pillarC.applyMatrix(new Three.Matrix4().makeTranslation(0, (this.pos[1] + 0.2) / 2, 0))
    methC.translateX(this.pos[0] / 2)
    methC.translateZ(-this.pos[2] / 2)
    this.group.add(methC)
    let pillarD = new Three.BoxGeometry(0.1, this.pos[1] + 0.2, 0.1)
    let methD = new Three.Mesh(pillarD, material)
    pillarD.applyMatrix(new Three.Matrix4().makeTranslation(0, (this.pos[1] + 0.2) / 2, 0))
    methD.translateX(-this.pos[0] / 2)
    methD.translateZ(-this.pos[2] / 2)
    this.group.add(methD)
  }
  draw () {
    this.drawBody()
    this.drawPillar()
    this.drawTopper()
    this.drawWindow()
  }
}
export default Building