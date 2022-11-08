import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
const cube = new THREE.Mesh( geometry, material )

scene.add( cube )
camera.position.z = 5

import {loadScene_scene_01} from './src/polygonjs/scenes/scene_01/autogenerated/loadScene'
const loadedData = await loadScene_scene_01({
  domElement: 'app'
})

loadedData.scene.threejsScene().add(scene)
loadedData.scene.registerOnBeforeTick('rotate-cube', (delta)=>{
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  
})