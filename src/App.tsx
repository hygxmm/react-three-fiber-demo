import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";
import Environment from "./components/Environment";
import Study from "./components/Study";

function App() {
  return (
    <Canvas shadows camera={{ position: new Vector3(0, 10, 15), fov: 25 }}>
      <color attach="background" args={["black"]} />
      <Study />
      <Environment />
      <OrbitControls makeDefault />
    </Canvas>
  );
}

export default App;
