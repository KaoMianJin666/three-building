import * as Three from 'three'
class Windows {
  constructor(group, pos, length) {
    this.mainGroup = group
    this.pos = pos
    this.length = length
    this.group = new Three.Group()
  }
  draw () {

    for (let d = 0; d < 4; d++) {
      for (let c = 0; c < this.length[0]; c++) {
        for (let i = 0; i < this.length[1]; i++) {
          this.onceWindow(c, i, d)
        }
      }
    }
    for (let i = 0; i < 4; i++) {
      for (let c = 0; c < this.length[1]; c++) {
        this.drawWindowSillBottom(c, i)
      }
    }
    this.mainGroup.add(this.group)
  }
  drawWindowSillBottom (y, rotate) {
    let windowSillBottomGroup = new Three.Group()
    let material = new Three.MeshLambertMaterial({
      color: 0xffffff
    });
    let windowSillBottom = new Three.BoxGeometry(this.pos[0], this.pos[0] / this.length[0] / 10, this.pos[0] / 25 / this.length[0])
    let methWindowSillBottom = new Three.Mesh(windowSillBottom, material)
    methWindowSillBottom.translateY(this.pos[1] / this.length[1] / 2 + this.pos[1] / this.length[1] * y - this.pos[0] / 4 / this.length[0] + this.pos[0] / this.length[0])
    methWindowSillBottom.translateZ(this.pos[2] / 2)
    windowSillBottomGroup.add(methWindowSillBottom)
    windowSillBottomGroup.rotation.y = Math.PI / 2 * (rotate + 1)

    this.group.add(windowSillBottomGroup)
  }
  onceWindow (x, y, rotate) {
    let onceGroup = new Three.Group()
    let material = new Three.MeshLambertMaterial({
      color: 0xffffff
    });
    // let a = new Three.BoxGeometry(this.pos[0] / this.length[0] / 2, this.pos[0] / 25 / this.length[0], this.pos[0] / 25 / this.length[0]);
    // let meshA = new Three.Mesh(a, material)
    // meshA.translateX((0 - this.pos[0] / 2) + this.pos[0] / this.length[0] / 2 + this.pos[0] / this.length[0] * x)
    // meshA.translateY((0 - this.pos[1] / 2) + this.pos[1] / this.length[1] / 2 + this.pos[1] / this.length[1] * y)
    // meshA.translateZ(this.pos[2] / 2)
    let b = new Three.BoxGeometry(this.pos[0] / 25 / this.length[0], this.pos[0] / this.length[0] / 2, this.pos[0] / 25 / this.length[0]);
    let meshB = new Three.Mesh(b, material)
    meshB.translateX((0 - this.pos[0] / 2) + this.pos[0] / this.length[0] / 2 + this.pos[0] / this.length[0] * x)
    meshB.translateY(this.pos[1] / this.length[1] / 2 + this.pos[1] / this.length[1] * y)
    meshB.translateZ(this.pos[2] / 2)
    let c = new Three.BoxGeometry(this.pos[0] / 25 / this.length[0], this.pos[0] / this.length[0] / 2, this.pos[0] / 25 / this.length[0]);
    let meshC = new Three.Mesh(c, material)
    meshC.translateX((0 - this.pos[0] / 2) + this.pos[0] / this.length[0] / 2 + this.pos[0] / this.length[0] * x - this.pos[0] / 4 / this.length[0])
    meshC.translateY(this.pos[1] / this.length[1] / 2 + this.pos[1] / this.length[1] * y)
    meshC.translateZ(this.pos[2] / 2)
    let d = new Three.BoxGeometry(this.pos[0] / 25 / this.length[0], this.pos[0] / this.length[0] / 2, this.pos[0] / 25 / this.length[0]);
    let meshD = new Three.Mesh(d, material)
    meshD.translateX((0 - this.pos[0] / 2) + this.pos[0] / this.length[0] / 2 + this.pos[0] / this.length[0] * x + this.pos[0] / 4 / this.length[0])
    meshD.translateY(this.pos[1] / this.length[1] / 2 + this.pos[1] / this.length[1] * y)
    meshD.translateZ(this.pos[2] / 2)
    let e = new Three.BoxGeometry(this.pos[0] / this.length[0] / 2, this.pos[0] / 25 / this.length[0], this.pos[0] / 25 / this.length[0]);
    let meshE = new Three.Mesh(e, material)
    meshE.translateX((0 - this.pos[0] / 2) + this.pos[0] / this.length[0] / 2 + this.pos[0] / this.length[0] * x)
    meshE.translateY(this.pos[1] / this.length[1] / 2 + this.pos[1] / this.length[1] * y + this.pos[0] / 4 / this.length[0])
    meshE.translateZ(this.pos[2] / 2)
    let f = new Three.BoxGeometry(this.pos[0] / this.length[0] / 2, this.pos[0] / 25 / this.length[0], this.pos[0] / 25 / this.length[0]);
    let meshF = new Three.Mesh(f, material)
    meshF.translateX((0 - this.pos[0] / 2) + this.pos[0] / this.length[0] / 2 + this.pos[0] / this.length[0] * x)
    meshF.translateY(this.pos[1] / this.length[1] / 2 + this.pos[1] / this.length[1] * y - this.pos[0] / 4 / this.length[0])
    meshF.translateZ(this.pos[2] / 2)
    let glass = new Three.BoxGeometry(this.pos[0] / this.length[0] / 2, this.pos[0] / this.length[0] / 2, 0.01);
    let glassMaterial = new Three.MeshLambertMaterial({
      color: 0xa4ecec
    });
    glassMaterial.transparent = true
    glassMaterial.opacity = 0.5
    let meshGlass = new Three.Mesh(glass, glassMaterial)
    meshGlass.translateX((0 - this.pos[0] / 2) + this.pos[0] / this.length[0] / 2 + this.pos[0] / this.length[0] * x)
    meshGlass.translateY(this.pos[1] / this.length[1] / 2 + this.pos[1] / this.length[1] * y)
    meshGlass.translateZ(this.pos[2] / 2)
    // meshA.translateY()
    // onceGroup.add(meshA)
    onceGroup.add(meshB)
    onceGroup.add(meshC)
    onceGroup.add(meshD)
    onceGroup.add(meshE)
    onceGroup.add(meshF)
    onceGroup.add(meshGlass)
    onceGroup.rotation.y = Math.PI / 2 * (rotate + 1)
    this.group.add(onceGroup)
  }
}
export default Windows