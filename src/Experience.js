import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  Text,
  useGLTF,
} from '@react-three/drei';
import { useControls } from 'leva';

export default function Experience() {
  const computer = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
  );

  const color = useControls('background', {
    value: '#2d295a',
  });

  return (
    <>
      <Environment preset="city" />

      <color attach="background" args={[color.value]} />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        // Fade iin zuuralt ymuda
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={'#7185a7'}
            position={[0, 0.55, -1.15]}
            rotation={[-0.1, Math.PI, 0]}
          />
          <primitive object={computer.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://skin-mocha.vercel.app/" />
            </Html>
          </primitive>
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={1}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={5}
            textAlign="center"
            // children={'Bishu\rBazar'}
          >
            R3F Test
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} scale={5} opacity={0.4} blur={2.4} />
    </>
  );
}
