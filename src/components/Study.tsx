import { Addition, Base, Geometry, Subtraction } from "@react-three/csg";
import { useRef } from "react";
import { BoxGeometry } from "three";
import Door from "./Door";

const Study: React.FC = () => {
  const csg = useRef(null);
  return (
    <mesh>
      <Geometry ref={csg} computeVertexNormals useGroups>
        {/* 几何基础,后续的操作都基于此 */}
        <Base name="base">
          <boxGeometry args={[2.98, 3.05, 2.68]} />
          <meshPhongMaterial attach="material-0" color="white" />
          <meshPhongMaterial attach="material-1" color="white" />
          <meshPhongMaterial attach="material-2" color="white" />
          <meshPhongMaterial attach="material-3" color="white" />
          <meshPhongMaterial attach="material-4" color="white" />
          <meshPhongMaterial attach="material-5" color="white" />
        </Base>
        {/* 从之前的几何图形中减去,空腔 */}
        <Subtraction
          name="cavity"
          geometry={new BoxGeometry(2.78, 3.05, 2.48)}
          position={[0, 0, 0]}
        />
        {/* 门 */}
        <Door position={[1.24, 0, 0.5]} scale={[1, 1, 1]} />
      </Geometry>
    </mesh>
  );
};

export default Study;
