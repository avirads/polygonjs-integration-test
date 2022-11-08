import { ParamValueSerializedTypeMap } from "@polygonjs/polygonjs/dist/src/engine/params/types/ParamValueSerializedTypeMap";

import { PolyScene } from "@polygonjs/polygonjs/dist/src/engine/scene/PolyScene";
// obj
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
import { HemisphereLightObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight";
import { PerspectiveCameraObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera";
// sop
import { BoxSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Box";
import { EventsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork";
import { InstanceSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Instance";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { ParticlesSystemGpuSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/ParticlesSystemGpu";
import { ScatterSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Scatter";
import { SphereSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Sphere";
import { TextSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Text";
// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
// mat
import { MeshLambertBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshLambertBuilder";
import { PointsBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/PointsBuilder";

export class PolySceneWithNodeMap_scene_01 extends PolyScene {
  node(path: "/hemisphereLight1"): HemisphereLightObjNode;
  node(path: "/perspectiveCamera1"): PerspectiveCameraObjNode;
  node(path: "/perspectiveCamera1/events1"): EventsNetworkSopNode;
  node(
    path: "/perspectiveCamera1/events1/cameraOrbitControls1"
  ): CameraOrbitControlsEventNode;
  node(path: "/geo1"): GeoObjNode;
  node(path: "/geo1/text1"): TextSopNode;
  node(path: "/geo2"): GeoObjNode;
  node(path: "/geo2/scatter1"): ScatterSopNode;
  node(path: "/geo2/sphere1"): SphereSopNode;
  node(path: "/geo2/instance1"): InstanceSopNode;
  node(path: "/geo2/box1"): BoxSopNode;
  node(path: "/geo2/particlesSystemGpu1"): ParticlesSystemGpuSopNode;
  node(path: "/geo2/MAT"): MaterialsNetworkSopNode;
  node(
    path: "/geo2/MAT/meshLambertBuilder_INSTANCES"
  ): MeshLambertBuilderMatNode;
  node(path: "/geo2/MAT/pointsParticles"): PointsBuilderMatNode;
  node(path: "/geo2/particlesSystemGpu2"): ParticlesSystemGpuSopNode;
  node(
    path: string
  ): any /* we need any for now as otherwise an error occurs when adding plugins to the overloaded methods */ {
    return super.node(path);
  }
}

export interface PolySceneProps_scene_01 {
  "hemisphereLight1--skyColor"?: ParamValueSerializedTypeMap["color"];
  "hemisphereLight1--skyColor-skyColorr"?: ParamValueSerializedTypeMap["float"];
  "hemisphereLight1--skyColor-skyColorg"?: ParamValueSerializedTypeMap["float"];
  "hemisphereLight1--skyColor-skyColorb"?: ParamValueSerializedTypeMap["float"];
  "hemisphereLight1--skyColorr"?: ParamValueSerializedTypeMap["float"];
  "hemisphereLight1--skyColorg"?: ParamValueSerializedTypeMap["float"];
  "hemisphereLight1--skyColorb"?: ParamValueSerializedTypeMap["float"];
  "hemisphereLight1--groundColor"?: ParamValueSerializedTypeMap["color"];
  "hemisphereLight1--groundColor-groundColorr"?: ParamValueSerializedTypeMap["float"];
  "hemisphereLight1--groundColor-groundColorg"?: ParamValueSerializedTypeMap["float"];
  "hemisphereLight1--groundColor-groundColorb"?: ParamValueSerializedTypeMap["float"];
  "hemisphereLight1--groundColorr"?: ParamValueSerializedTypeMap["float"];
  "hemisphereLight1--groundColorg"?: ParamValueSerializedTypeMap["float"];
  "hemisphereLight1--groundColorb"?: ParamValueSerializedTypeMap["float"];
  "hemisphereLight1--intensity"?: ParamValueSerializedTypeMap["float"];
  "hemisphereLight1--position"?: ParamValueSerializedTypeMap["vector3"];
  "hemisphereLight1--position-positionx"?: ParamValueSerializedTypeMap["float"];
  "hemisphereLight1--position-positiony"?: ParamValueSerializedTypeMap["float"];
  "hemisphereLight1--position-positionz"?: ParamValueSerializedTypeMap["float"];
  "hemisphereLight1--positionx"?: ParamValueSerializedTypeMap["float"];
  "hemisphereLight1--positiony"?: ParamValueSerializedTypeMap["float"];
  "hemisphereLight1--positionz"?: ParamValueSerializedTypeMap["float"];
  "hemisphereLight1--name"?: ParamValueSerializedTypeMap["string"];
  "perspectiveCamera1--transform"?: ParamValueSerializedTypeMap["folder"];
  "perspectiveCamera1--keepPosWhenParenting"?: ParamValueSerializedTypeMap["boolean"];
  "perspectiveCamera1--rotationOrder"?: ParamValueSerializedTypeMap["integer"];
  "perspectiveCamera1--t"?: ParamValueSerializedTypeMap["vector3"];
  "perspectiveCamera1--t-tx"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--t-ty"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--t-tz"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--tx"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--ty"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--tz"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--r"?: ParamValueSerializedTypeMap["vector3"];
  "perspectiveCamera1--r-rx"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--r-ry"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--r-rz"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--rx"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--ry"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--rz"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--s"?: ParamValueSerializedTypeMap["vector3"];
  "perspectiveCamera1--s-sx"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--s-sy"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--s-sz"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--sx"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--sy"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--sz"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--scale"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--matrixAutoUpdate"?: ParamValueSerializedTypeMap["boolean"];
  "perspectiveCamera1--updateTransformFromObject"?: ParamValueSerializedTypeMap["button"];
  "perspectiveCamera1--camera"?: ParamValueSerializedTypeMap["folder"];
  "perspectiveCamera1--controls"?: ParamValueSerializedTypeMap["node_path"];
  "perspectiveCamera1--updateFromControlsMode"?: ParamValueSerializedTypeMap["integer"];
  "perspectiveCamera1--near"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--far"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--display"?: ParamValueSerializedTypeMap["boolean"];
  "perspectiveCamera1--showHelper"?: ParamValueSerializedTypeMap["boolean"];
  "perspectiveCamera1--fov"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--frameMode"?: ParamValueSerializedTypeMap["integer"];
  "perspectiveCamera1--expectedAspectRatio"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1--setMainCamera"?: ParamValueSerializedTypeMap["button"];
  "perspectiveCamera1--layer"?: ParamValueSerializedTypeMap["integer"];
  "perspectiveCamera1--render"?: ParamValueSerializedTypeMap["folder"];
  "perspectiveCamera1--setScene"?: ParamValueSerializedTypeMap["boolean"];
  "perspectiveCamera1--scene"?: ParamValueSerializedTypeMap["node_path"];
  "perspectiveCamera1--setRenderer"?: ParamValueSerializedTypeMap["boolean"];
  "perspectiveCamera1--renderer"?: ParamValueSerializedTypeMap["node_path"];
  "perspectiveCamera1--setCSSRenderer"?: ParamValueSerializedTypeMap["boolean"];
  "perspectiveCamera1--CSSRenderer"?: ParamValueSerializedTypeMap["node_path"];
  "perspectiveCamera1--doPostProcess"?: ParamValueSerializedTypeMap["boolean"];
  "perspectiveCamera1--postProcessNode"?: ParamValueSerializedTypeMap["node_path"];
  "perspectiveCamera1-events1-cameraOrbitControls1--enabled"?: ParamValueSerializedTypeMap["boolean"];
  "perspectiveCamera1-events1-cameraOrbitControls1--allowPan"?: ParamValueSerializedTypeMap["boolean"];
  "perspectiveCamera1-events1-cameraOrbitControls1--allowRotate"?: ParamValueSerializedTypeMap["boolean"];
  "perspectiveCamera1-events1-cameraOrbitControls1--allowZoom"?: ParamValueSerializedTypeMap["boolean"];
  "perspectiveCamera1-events1-cameraOrbitControls1--tdamping"?: ParamValueSerializedTypeMap["boolean"];
  "perspectiveCamera1-events1-cameraOrbitControls1--damping"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1-events1-cameraOrbitControls1--screenSpacePanning"?: ParamValueSerializedTypeMap["boolean"];
  "perspectiveCamera1-events1-cameraOrbitControls1--rotateSpeed"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1-events1-cameraOrbitControls1--minDistance"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1-events1-cameraOrbitControls1--maxDistance"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1-events1-cameraOrbitControls1--limitAzimuthAngle"?: ParamValueSerializedTypeMap["boolean"];
  "perspectiveCamera1-events1-cameraOrbitControls1--azimuthAngleRange"?: ParamValueSerializedTypeMap["vector2"];
  "perspectiveCamera1-events1-cameraOrbitControls1--azimuthAngleRange-azimuthAngleRangex"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1-events1-cameraOrbitControls1--azimuthAngleRange-azimuthAngleRangey"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1-events1-cameraOrbitControls1--azimuthAngleRangex"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1-events1-cameraOrbitControls1--azimuthAngleRangey"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1-events1-cameraOrbitControls1--polarAngleRange"?: ParamValueSerializedTypeMap["vector2"];
  "perspectiveCamera1-events1-cameraOrbitControls1--polarAngleRange-polarAngleRangex"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1-events1-cameraOrbitControls1--polarAngleRange-polarAngleRangey"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1-events1-cameraOrbitControls1--polarAngleRangex"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1-events1-cameraOrbitControls1--polarAngleRangey"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1-events1-cameraOrbitControls1--target"?: ParamValueSerializedTypeMap["vector3"];
  "perspectiveCamera1-events1-cameraOrbitControls1--target-targetx"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1-events1-cameraOrbitControls1--target-targety"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1-events1-cameraOrbitControls1--target-targetz"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1-events1-cameraOrbitControls1--targetx"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1-events1-cameraOrbitControls1--targety"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1-events1-cameraOrbitControls1--targetz"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1-events1-cameraOrbitControls1--enableKeys"?: ParamValueSerializedTypeMap["boolean"];
  "perspectiveCamera1-events1-cameraOrbitControls1--keysMode"?: ParamValueSerializedTypeMap["integer"];
  "perspectiveCamera1-events1-cameraOrbitControls1--keysPanSpeed"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1-events1-cameraOrbitControls1--keysRotateSpeedVertical"?: ParamValueSerializedTypeMap["float"];
  "perspectiveCamera1-events1-cameraOrbitControls1--keysRotateSpeedHorizontal"?: ParamValueSerializedTypeMap["float"];
  "geo1--transform"?: ParamValueSerializedTypeMap["folder"];
  "geo1--keepPosWhenParenting"?: ParamValueSerializedTypeMap["boolean"];
  "geo1--rotationOrder"?: ParamValueSerializedTypeMap["integer"];
  "geo1--t"?: ParamValueSerializedTypeMap["vector3"];
  "geo1--t-tx"?: ParamValueSerializedTypeMap["float"];
  "geo1--t-ty"?: ParamValueSerializedTypeMap["float"];
  "geo1--t-tz"?: ParamValueSerializedTypeMap["float"];
  "geo1--tx"?: ParamValueSerializedTypeMap["float"];
  "geo1--ty"?: ParamValueSerializedTypeMap["float"];
  "geo1--tz"?: ParamValueSerializedTypeMap["float"];
  "geo1--r"?: ParamValueSerializedTypeMap["vector3"];
  "geo1--r-rx"?: ParamValueSerializedTypeMap["float"];
  "geo1--r-ry"?: ParamValueSerializedTypeMap["float"];
  "geo1--r-rz"?: ParamValueSerializedTypeMap["float"];
  "geo1--rx"?: ParamValueSerializedTypeMap["float"];
  "geo1--ry"?: ParamValueSerializedTypeMap["float"];
  "geo1--rz"?: ParamValueSerializedTypeMap["float"];
  "geo1--s"?: ParamValueSerializedTypeMap["vector3"];
  "geo1--s-sx"?: ParamValueSerializedTypeMap["float"];
  "geo1--s-sy"?: ParamValueSerializedTypeMap["float"];
  "geo1--s-sz"?: ParamValueSerializedTypeMap["float"];
  "geo1--sx"?: ParamValueSerializedTypeMap["float"];
  "geo1--sy"?: ParamValueSerializedTypeMap["float"];
  "geo1--sz"?: ParamValueSerializedTypeMap["float"];
  "geo1--scale"?: ParamValueSerializedTypeMap["float"];
  "geo1--matrixAutoUpdate"?: ParamValueSerializedTypeMap["boolean"];
  "geo1--updateTransformFromObject"?: ParamValueSerializedTypeMap["button"];
  "geo1--display"?: ParamValueSerializedTypeMap["boolean"];
  "geo1--renderOrder"?: ParamValueSerializedTypeMap["integer"];
  "geo1-text1--font"?: ParamValueSerializedTypeMap["string"];
  "geo1-text1--text"?: ParamValueSerializedTypeMap["string"];
  "geo1-text1--type"?: ParamValueSerializedTypeMap["integer"];
  "geo1-text1--size"?: ParamValueSerializedTypeMap["float"];
  "geo1-text1--extrude"?: ParamValueSerializedTypeMap["float"];
  "geo1-text1--segments"?: ParamValueSerializedTypeMap["integer"];
  "geo1-text1--bevelEnabled"?: ParamValueSerializedTypeMap["boolean"];
  "geo1-text1--bevelThickness"?: ParamValueSerializedTypeMap["float"];
  "geo1-text1--bevelSize"?: ParamValueSerializedTypeMap["float"];
  "geo1-text1--bevelOffset"?: ParamValueSerializedTypeMap["float"];
  "geo1-text1--bevelSegments"?: ParamValueSerializedTypeMap["integer"];
  "geo1-text1--strokeWidth"?: ParamValueSerializedTypeMap["float"];
  "geo1-text1--lineHeight"?: ParamValueSerializedTypeMap["float"];
  "geo1-text1--splitPerLetter"?: ParamValueSerializedTypeMap["boolean"];
  "geo1-text1--keepEmptyGeometries"?: ParamValueSerializedTypeMap["boolean"];
  "geo1-text1--justifyMode"?: ParamValueSerializedTypeMap["integer"];
  "geo1-text1--tadvanced"?: ParamValueSerializedTypeMap["boolean"];
  "geo1-text1--isCCW"?: ParamValueSerializedTypeMap["boolean"];
  "geo2--transform"?: ParamValueSerializedTypeMap["folder"];
  "geo2--keepPosWhenParenting"?: ParamValueSerializedTypeMap["boolean"];
  "geo2--rotationOrder"?: ParamValueSerializedTypeMap["integer"];
  "geo2--t"?: ParamValueSerializedTypeMap["vector3"];
  "geo2--t-tx"?: ParamValueSerializedTypeMap["float"];
  "geo2--t-ty"?: ParamValueSerializedTypeMap["float"];
  "geo2--t-tz"?: ParamValueSerializedTypeMap["float"];
  "geo2--tx"?: ParamValueSerializedTypeMap["float"];
  "geo2--ty"?: ParamValueSerializedTypeMap["float"];
  "geo2--tz"?: ParamValueSerializedTypeMap["float"];
  "geo2--r"?: ParamValueSerializedTypeMap["vector3"];
  "geo2--r-rx"?: ParamValueSerializedTypeMap["float"];
  "geo2--r-ry"?: ParamValueSerializedTypeMap["float"];
  "geo2--r-rz"?: ParamValueSerializedTypeMap["float"];
  "geo2--rx"?: ParamValueSerializedTypeMap["float"];
  "geo2--ry"?: ParamValueSerializedTypeMap["float"];
  "geo2--rz"?: ParamValueSerializedTypeMap["float"];
  "geo2--s"?: ParamValueSerializedTypeMap["vector3"];
  "geo2--s-sx"?: ParamValueSerializedTypeMap["float"];
  "geo2--s-sy"?: ParamValueSerializedTypeMap["float"];
  "geo2--s-sz"?: ParamValueSerializedTypeMap["float"];
  "geo2--sx"?: ParamValueSerializedTypeMap["float"];
  "geo2--sy"?: ParamValueSerializedTypeMap["float"];
  "geo2--sz"?: ParamValueSerializedTypeMap["float"];
  "geo2--scale"?: ParamValueSerializedTypeMap["float"];
  "geo2--matrixAutoUpdate"?: ParamValueSerializedTypeMap["boolean"];
  "geo2--updateTransformFromObject"?: ParamValueSerializedTypeMap["button"];
  "geo2--display"?: ParamValueSerializedTypeMap["boolean"];
  "geo2--renderOrder"?: ParamValueSerializedTypeMap["integer"];
  "geo2-scatter1--pointsCount"?: ParamValueSerializedTypeMap["integer"];
  "geo2-scatter1--seed"?: ParamValueSerializedTypeMap["integer"];
  "geo2-scatter1--useWeightAttribute"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-scatter1--weightAttribute"?: ParamValueSerializedTypeMap["string"];
  "geo2-scatter1--transferAttributes"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-scatter1--attributesToTransfer"?: ParamValueSerializedTypeMap["string"];
  "geo2-scatter1--addIdAttribute"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-scatter1--addIdnAttribute"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-sphere1--type"?: ParamValueSerializedTypeMap["integer"];
  "geo2-sphere1--radius"?: ParamValueSerializedTypeMap["float"];
  "geo2-sphere1--resolution"?: ParamValueSerializedTypeMap["vector2"];
  "geo2-sphere1--resolution-resolutionx"?: ParamValueSerializedTypeMap["float"];
  "geo2-sphere1--resolution-resolutiony"?: ParamValueSerializedTypeMap["float"];
  "geo2-sphere1--resolutionx"?: ParamValueSerializedTypeMap["float"];
  "geo2-sphere1--resolutiony"?: ParamValueSerializedTypeMap["float"];
  "geo2-sphere1--open"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-sphere1--phiStart"?: ParamValueSerializedTypeMap["float"];
  "geo2-sphere1--phiLength"?: ParamValueSerializedTypeMap["float"];
  "geo2-sphere1--thetaStart"?: ParamValueSerializedTypeMap["float"];
  "geo2-sphere1--thetaLength"?: ParamValueSerializedTypeMap["float"];
  "geo2-sphere1--detail"?: ParamValueSerializedTypeMap["integer"];
  "geo2-sphere1--center"?: ParamValueSerializedTypeMap["vector3"];
  "geo2-sphere1--center-centerx"?: ParamValueSerializedTypeMap["float"];
  "geo2-sphere1--center-centery"?: ParamValueSerializedTypeMap["float"];
  "geo2-sphere1--center-centerz"?: ParamValueSerializedTypeMap["float"];
  "geo2-sphere1--centerx"?: ParamValueSerializedTypeMap["float"];
  "geo2-sphere1--centery"?: ParamValueSerializedTypeMap["float"];
  "geo2-sphere1--centerz"?: ParamValueSerializedTypeMap["float"];
  "geo2-sphere1--asLines"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-instance1--attributesToCopy"?: ParamValueSerializedTypeMap["string"];
  "geo2-instance1--applyMaterial"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-instance1--material"?: ParamValueSerializedTypeMap["node_path"];
  "geo2-box1--size"?: ParamValueSerializedTypeMap["float"];
  "geo2-box1--sizes"?: ParamValueSerializedTypeMap["vector3"];
  "geo2-box1--sizes-sizesx"?: ParamValueSerializedTypeMap["float"];
  "geo2-box1--sizes-sizesy"?: ParamValueSerializedTypeMap["float"];
  "geo2-box1--sizes-sizesz"?: ParamValueSerializedTypeMap["float"];
  "geo2-box1--sizesx"?: ParamValueSerializedTypeMap["float"];
  "geo2-box1--sizesy"?: ParamValueSerializedTypeMap["float"];
  "geo2-box1--sizesz"?: ParamValueSerializedTypeMap["float"];
  "geo2-box1--divisions"?: ParamValueSerializedTypeMap["integer"];
  "geo2-box1--center"?: ParamValueSerializedTypeMap["vector3"];
  "geo2-box1--center-centerx"?: ParamValueSerializedTypeMap["float"];
  "geo2-box1--center-centery"?: ParamValueSerializedTypeMap["float"];
  "geo2-box1--center-centerz"?: ParamValueSerializedTypeMap["float"];
  "geo2-box1--centerx"?: ParamValueSerializedTypeMap["float"];
  "geo2-box1--centery"?: ParamValueSerializedTypeMap["float"];
  "geo2-box1--centerz"?: ParamValueSerializedTypeMap["float"];
  "geo2-particlesSystemGpu1--startFrame"?: ParamValueSerializedTypeMap["float"];
  "geo2-particlesSystemGpu1--active"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-particlesSystemGpu1--autoTexturesSize"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-particlesSystemGpu1--maxTexturesSize"?: ParamValueSerializedTypeMap["vector2"];
  "geo2-particlesSystemGpu1--maxTexturesSize-maxTexturesSizex"?: ParamValueSerializedTypeMap["float"];
  "geo2-particlesSystemGpu1--maxTexturesSize-maxTexturesSizey"?: ParamValueSerializedTypeMap["float"];
  "geo2-particlesSystemGpu1--maxTexturesSizex"?: ParamValueSerializedTypeMap["float"];
  "geo2-particlesSystemGpu1--maxTexturesSizey"?: ParamValueSerializedTypeMap["float"];
  "geo2-particlesSystemGpu1--texturesSize"?: ParamValueSerializedTypeMap["vector2"];
  "geo2-particlesSystemGpu1--texturesSize-texturesSizex"?: ParamValueSerializedTypeMap["float"];
  "geo2-particlesSystemGpu1--texturesSize-texturesSizey"?: ParamValueSerializedTypeMap["float"];
  "geo2-particlesSystemGpu1--texturesSizex"?: ParamValueSerializedTypeMap["float"];
  "geo2-particlesSystemGpu1--texturesSizey"?: ParamValueSerializedTypeMap["float"];
  "geo2-particlesSystemGpu1--dataType"?: ParamValueSerializedTypeMap["integer"];
  "geo2-particlesSystemGpu1--reset"?: ParamValueSerializedTypeMap["button"];
  "geo2-particlesSystemGpu1--material"?: ParamValueSerializedTypeMap["node_path"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--default"?: ParamValueSerializedTypeMap["folder"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--transparent"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--opacity"?: ParamValueSerializedTypeMap["float"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--alphaTest"?: ParamValueSerializedTypeMap["float"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--textures"?: ParamValueSerializedTypeMap["folder"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--useMap"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--map"?: ParamValueSerializedTypeMap["node_path"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--useAlphaMap"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--alphaMap"?: ParamValueSerializedTypeMap["node_path"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--useAOMap"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--aoMap"?: ParamValueSerializedTypeMap["node_path"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--aoMapIntensity"?: ParamValueSerializedTypeMap["float"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--emissive"?: ParamValueSerializedTypeMap["color"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--emissive-emissiver"?: ParamValueSerializedTypeMap["float"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--emissive-emissiveg"?: ParamValueSerializedTypeMap["float"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--emissive-emissiveb"?: ParamValueSerializedTypeMap["float"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--emissiver"?: ParamValueSerializedTypeMap["float"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--emissiveg"?: ParamValueSerializedTypeMap["float"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--emissiveb"?: ParamValueSerializedTypeMap["float"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--useEmissiveMap"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--emissiveMap"?: ParamValueSerializedTypeMap["node_path"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--emissiveIntensity"?: ParamValueSerializedTypeMap["float"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--useEnvMap"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--envMap"?: ParamValueSerializedTypeMap["node_path"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--combine"?: ParamValueSerializedTypeMap["integer"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--reflectivity"?: ParamValueSerializedTypeMap["float"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--refractionRatio"?: ParamValueSerializedTypeMap["float"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--useLightMap"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--lightMap"?: ParamValueSerializedTypeMap["node_path"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--lightMapIntensity"?: ParamValueSerializedTypeMap["float"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--advanced"?: ParamValueSerializedTypeMap["folder"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--setBuilderNode"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--builderNode"?: ParamValueSerializedTypeMap["node_path"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--doubleSided"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--front"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--overrideShadowSide"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--shadowDoubleSided"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--shadowFront"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--colorWrite"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--depthWrite"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--depthTest"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--premultipliedAlpha"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--blending"?: ParamValueSerializedTypeMap["integer"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--dithering"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--polygonOffset"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--polygonOffsetFactor"?: ParamValueSerializedTypeMap["integer"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--polygonOffsetUnits"?: ParamValueSerializedTypeMap["integer"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--wireframe"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--wireframeLinewidth"?: ParamValueSerializedTypeMap["float"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--useFog"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--shadowPCSS"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-meshLambertBuilder_INSTANCES--shadowPCSSFilterSize"?: ParamValueSerializedTypeMap["float"];
  "geo2-MAT-pointsParticles--default"?: ParamValueSerializedTypeMap["folder"];
  "geo2-MAT-pointsParticles--size"?: ParamValueSerializedTypeMap["float"];
  "geo2-MAT-pointsParticles--sizeAttenuation"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-pointsParticles--transparent"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-pointsParticles--opacity"?: ParamValueSerializedTypeMap["float"];
  "geo2-MAT-pointsParticles--alphaTest"?: ParamValueSerializedTypeMap["float"];
  "geo2-MAT-pointsParticles--advanced"?: ParamValueSerializedTypeMap["folder"];
  "geo2-MAT-pointsParticles--setBuilderNode"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-pointsParticles--builderNode"?: ParamValueSerializedTypeMap["node_path"];
  "geo2-MAT-pointsParticles--doubleSided"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-pointsParticles--front"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-pointsParticles--overrideShadowSide"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-pointsParticles--shadowDoubleSided"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-pointsParticles--shadowFront"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-pointsParticles--colorWrite"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-pointsParticles--depthWrite"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-pointsParticles--depthTest"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-pointsParticles--premultipliedAlpha"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-pointsParticles--blending"?: ParamValueSerializedTypeMap["integer"];
  "geo2-MAT-pointsParticles--dithering"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-pointsParticles--polygonOffset"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-MAT-pointsParticles--polygonOffsetFactor"?: ParamValueSerializedTypeMap["integer"];
  "geo2-MAT-pointsParticles--polygonOffsetUnits"?: ParamValueSerializedTypeMap["integer"];
  "geo2-MAT-pointsParticles--useFog"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-particlesSystemGpu2--startFrame"?: ParamValueSerializedTypeMap["float"];
  "geo2-particlesSystemGpu2--active"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-particlesSystemGpu2--autoTexturesSize"?: ParamValueSerializedTypeMap["boolean"];
  "geo2-particlesSystemGpu2--maxTexturesSize"?: ParamValueSerializedTypeMap["vector2"];
  "geo2-particlesSystemGpu2--maxTexturesSize-maxTexturesSizex"?: ParamValueSerializedTypeMap["float"];
  "geo2-particlesSystemGpu2--maxTexturesSize-maxTexturesSizey"?: ParamValueSerializedTypeMap["float"];
  "geo2-particlesSystemGpu2--maxTexturesSizex"?: ParamValueSerializedTypeMap["float"];
  "geo2-particlesSystemGpu2--maxTexturesSizey"?: ParamValueSerializedTypeMap["float"];
  "geo2-particlesSystemGpu2--texturesSize"?: ParamValueSerializedTypeMap["vector2"];
  "geo2-particlesSystemGpu2--texturesSize-texturesSizex"?: ParamValueSerializedTypeMap["float"];
  "geo2-particlesSystemGpu2--texturesSize-texturesSizey"?: ParamValueSerializedTypeMap["float"];
  "geo2-particlesSystemGpu2--texturesSizex"?: ParamValueSerializedTypeMap["float"];
  "geo2-particlesSystemGpu2--texturesSizey"?: ParamValueSerializedTypeMap["float"];
  "geo2-particlesSystemGpu2--dataType"?: ParamValueSerializedTypeMap["integer"];
  "geo2-particlesSystemGpu2--reset"?: ParamValueSerializedTypeMap["button"];
  "geo2-particlesSystemGpu2--material"?: ParamValueSerializedTypeMap["node_path"];
}