import { Base, Geometry, Subtraction, Addition } from "@react-three/csg";

const Door: React.FC<{
  scale?: [number, number, number];
  position: [number, number, number];
}> = ({ scale = [1, 1, 1], position }) => {
  return (
    <Subtraction position={position}>
      <Geometry>
        <Base>
          <boxGeometry args={scale} />
        </Base>
        {/* <Addition
          scale={0.5}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 1, 0]}
        >
          <cylinderGeometry args={[1, 1, 2, 20]} />
        </Addition> */}
      </Geometry>
    </Subtraction>
  );
};

export default Door;
