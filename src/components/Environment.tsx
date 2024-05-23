import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { memo } from "react";

const Environment: React.FC<{
  direction?: [number, number, number];
}> = ({ direction = [5, 5, 5] }) => {
  return (
    <>
      <directionalLight
        position={direction}
        intensity={0.5}
        shadow-mapSize={1024}
        castShadow
      />
      <directionalLight
        position={[-5, 5, 5]}
        intensity={0.1}
        shadow-mapSize={128}
        castShadow
      />
      <directionalLight
        position={[-5, 5, -5]}
        intensity={0.1}
        shadow-mapSize={128}
        castShadow
      />
      <directionalLight
        position={[0, 5, 0]}
        intensity={0.1}
        shadow-mapSize={128}
        castShadow
      />
      <AccumulativeShadows
        frames={100}
        alphaTest={0.85}
        opacity={0.75}
        scale={30}
        position={[0, -1.5, 0]}
      >
        <RandomizedLight
          amount={8}
          radius={2.5}
          ambient={0.5}
          intensity={1}
          position={direction}
          bias={0.001}
        />
      </AccumulativeShadows>
    </>
  );
};

export default memo(Environment);
