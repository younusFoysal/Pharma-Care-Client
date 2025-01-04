import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

interface GltfViewerProps {
    fileUrl: string;
    scale?: [number, number, number];
    position?: [number, number, number];
}

const Model: React.FC<{
    fileUrl: string;
    scale?: [number, number, number];
    position?: [number, number, number];
}> = ({ fileUrl, scale = [1, 1, 1], position = [0, 0, 0] }) => {
    const { scene } = useGLTF(fileUrl);
    const modelRef = useRef<THREE.Object3D>(null);


    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01;
        }
    });

    return <primitive object={scene} scale={scale} position={position} ref={modelRef} />;
};

const GltfViewer: React.FC<GltfViewerProps> = ({ fileUrl, scale, position }) => {
    return (
        <div style={{ width: '100%', height: '500px' }}>
            <Canvas camera={{ position: [0, 0, 5] }}>

                <ambientLight intensity={1} color="white" />
                <directionalLight position={[10, 10, 10]} intensity={2} color="white" />
                <pointLight position={[-10, -10, 10]} intensity={0.8} color="white" />


                <Model fileUrl={fileUrl} scale={scale} position={position} />


                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default GltfViewer;
