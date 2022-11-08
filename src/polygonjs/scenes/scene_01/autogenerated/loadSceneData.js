import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1667911037269",
  root: "1667911037269",
  nodes: {
    perspectiveCamera1: "1667911037269",
    "perspectiveCamera1/events1": "1667911037269",
    geo1: "1667911230999",
    geo2: "1667911230999",
    "geo2/particlesSystemGpu1": "1667911230999",
    "geo2/MAT": "1667911230999",
    "geo2/MAT/meshLambertBuilder_INSTANCES": "1667911230999",
    "geo2/MAT/pointsParticles": "1667911230999",
    "geo2/particlesSystemGpu2": "1667911230999",
  },
  shaders: {
    "/geo2/particlesSystemGpu1": { position: "1667911230999" },
    "/geo2/MAT/meshLambertBuilder_INSTANCES": {
      vertex: "1667911230999",
      fragment: "1667911230999",
      "customDepthMaterial.vertex": "1667911230999",
      "customDepthMaterial.fragment": "1667911230999",
      "customDistanceMaterial.vertex": "1667911230999",
      "customDistanceMaterial.fragment": "1667911230999",
      "customDepthDOFMaterial.vertex": "1667911230999",
      "customDepthDOFMaterial.fragment": "1667911230999",
    },
    "/geo2/MAT/pointsParticles": {
      vertex: "1667911230999",
      fragment: "1667911230999",
      "customDistanceMaterial.vertex": "1667911230999",
      "customDistanceMaterial.fragment": "1667911230999",
      "customDepthMaterial.vertex": "1667911230999",
      "customDepthMaterial.fragment": "1667911230999",
      "customDepthDOFMaterial.vertex": "1667911230999",
      "customDepthDOFMaterial.fragment": "1667911230999",
    },
  },
};

export const loadSceneData_scene_01 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_01",
    urlPrefix: sceneDataRoot + "/scene_01",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
