import * as styles from "../components/index.module.css"
import React, { useState } from 'react';
import Layout from '../components/layout.js';
import ThreeDViewer from '../components/threeDViewer.js';
import Card from '../components/card.js';

const models = [
  {
    title: 'AI Camera',
    description: 'A gimbal housing for my ai water blaster project.',
    thumbnail: '/thumbnails/aiCam.png',
    modelPath: '/models/aiCam.glb',
  },
  {
    title: 'Furniture Jammer',
    description: 'A jammer to prevent furniture from moving.',
    thumbnail: '/thumbnails/jammer.png',
    modelPath: '/models/jammer.glb',
  },
  {
    title: 'Placeholder',
    description: 'A placeholder Cube.',
    thumbnail: '/thumbnails/example.png',
    modelPath: '/models/example.glb',
  },
];

const IndexPage = () => {
  const [selectedModel, setSelectedModel] = useState(models[0].modelPath);

  return (
    <Layout>
     <div>
        <h1>3D VIEWER</h1>
        <ThreeDViewer modelPath={selectedModel} />
      </div>

      <div className={styles.thumbnailContainer}>
        {models.map((model) => (
          <Card
            key={model.title}
            title={model.title}
            description={model.description}
            thumbnail={model.thumbnail}
            onClick={() => setSelectedModel(model.modelPath)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;