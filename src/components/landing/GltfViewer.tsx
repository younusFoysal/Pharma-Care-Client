import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

interface GltfViewerProps {
    fileUrl: string; // URL of the .glb file
    scale?: [number, number, number]; // Optional scale factor for the model
    position?: [number, number, number]; // Optional position for the model
}

const Model: React.FC<{
    fileUrl: string;
    scale?: [number, number, number];
    position?: [number, number, number];
}> = ({ fileUrl, scale = [1, 1, 1], position = [0, 0, 0] }) => {
    const { scene } = useGLTF(fileUrl);
    const modelRef = useRef<THREE.Object3D>(null);

    // Rotate the model
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01; // Adjust rotation speed
        }
    });

    return <primitive object={scene} scale={scale} position={position} ref={modelRef} />;
};

const GltfViewer: React.FC<GltfViewerProps> = ({ fileUrl, scale, position }) => {
    return (
        <div style={{ width: '100%', height: '500px' }}>
            <Canvas camera={{ position: [0, 0, 5] }}>
                {/* Lighting */}
                <ambientLight intensity={1} color="white" /> {/* Brighter ambient light */}
                <directionalLight position={[10, 10, 10]} intensity={2} color="white" /> {/* Stronger directional light */}
                <pointLight position={[-10, -10, 10]} intensity={0.8} color="white" /> {/* Additional point light */}

                {/* 3D Model */}
                <Model fileUrl={fileUrl} scale={scale} position={position} />

                {/* Controls */}
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default GltfViewer;
