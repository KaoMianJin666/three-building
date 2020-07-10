<template>
  <div class="test-three-box">
    <div
      id="container"
      ref="container"
      @mousewheel="mousewheel($event)"
    ></div>
  </div>
</template>

<script>
import * as Three from 'three'
import City from '../object/city'
export default {
  name: 'ThreeTest',
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      group: null,
      fov: 1,
      near: 0.1,
      far: 1000
    }
  },
  methods: {
    mousewheel (e) {
      e.preventDefault();
      //e.stopPropagation();  
      if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件  
        if (e.wheelDelta > 0) { //当滑轮向上滚动时  
          this.fov -= (this.near < this.fov ? 1 : 0);
        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时  
          this.fov += (this.fov < this.far ? 1 : 0);
        }
      } else if (e.detail) {  //Firefox滑轮事件  
        if (e.detail > 0) { //当滑轮向上滚动时  
          this.fov -= 0.1;
        }
        if (e.detail < 0) { //当滑轮向下滚动时  
          this.fov += 0.1;
        }
      }
      this.camera.position.z = this.fov;
      this.camera.updateProjectionMatrix();
    },
    init () {
      // document.getElementById('container')
      let container = this.$refs.container
      this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 1000)
      this.camera.position.z = 9
      this.camera.position.y = 7
      // this.camera.position.set(200, 300, 200)

      this.scene = new Three.Scene()
      this.group = new Three.Group()
      // this.scene.add(this.mesh)
      // this.drawHead()
      // this.drawRightEars()
      // this.drawLeftEars()
      this.drawCity()

      // console.log(this.group)
      this.scene.add(this.group)
      this.renderer = new Three.WebGLRenderer({ antialias: true })
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      this.renderer.setClearColor(0xffffff, 0.0)
      let point = new Three.PointLight(0xfffffff);
      point.position.set(400, 200, 300); //点光源位置
      this.scene.add(point); //点光源添加到场景中
      // //环境光
      let ambient = new Three.AmbientLight(0x444444);
      this.scene.add(ambient)

      // this.group.rotation.x = 0.2
      this.camera.lookAt(this.scene.position)
      // this.group.rotation.x = Math.PI / 2
      container.appendChild(this.renderer.domElement)
      // window.onkeydown = (event) => {
      //   console.log(event)
      //   if (event.keyCode === 32) {
      //     this.jump()
      //   }
      // }
    },
    drawCity () {
      let city = new City(this.group, [2, 5, 2])
      city.building()
    },
    // drawHead () {
    //   let geometry = new Three.SphereGeometry(0.2, 30, 30)
    //   let material = new Three.MeshNormalMaterial({ color: '#ffffff' })
    //   this.mesh = new Three.Mesh(geometry, material)
    //   // mesh.translateX(100)
    //   this.group.add(this.mesh)
    //   // this.scene.add(this.mesh)
    // },
    // drawRightEars () {
    //   let geometry = new Three.SphereGeometry(0.1, 30, 30)
    //   let material = new Three.MeshNormalMaterial({ color: '#ffffff' })
    //   this.mesh = new Three.Mesh(geometry, material)
    //   this.mesh.translateX(-0.2)
    //   this.mesh.translateY(0.15)
    //   this.group.add(this.mesh)
    // },
    // drawLeftEars () {
    //   let geometry = new Three.SphereGeometry(0.1, 30, 30)
    //   let material = new Three.MeshNormalMaterial({ color: '#ffffff' })
    //   this.mesh = new Three.Mesh(geometry, material)
    //   this.mesh.translateX(0.2)
    //   this.mesh.translateY(0.15)
    //   this.group.add(this.mesh)
    // },
    animate: function () {
      requestAnimationFrame(this.animate)
      this.group.rotation.y += 0.01

      this.renderer.render(this.scene, this.camera)
    },
    jump () {
      this.group.translateY(0.1)
      this.renderer.render(this.scene, this.camera)
      setTimeout(() => {
        this.group.translateY(-0.1)
        this.renderer.render(this.scene, this.camera)
      }, 1000)
    }
  },
  mounted () {
    this.init()
    this.animate()
  }
}
</script>
<style scoped>
.test-three-box {
  width: 100%;
  height: 100%;
}
#container {
  height: 100%;
}
</style>