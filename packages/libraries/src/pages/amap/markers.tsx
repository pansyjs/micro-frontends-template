import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Map, Markers } from '@pansy/react-amap';
// import { Map, Markers, ToolBar } from '@pansy/react-amap';
import { Marker } from './components';
import './markers.less';

const randomMarker = (len: number) => (
  Array(len).fill(true).map(() => ({
    position: {
      longitude: 100 + Math.random() * 30,
      latitude: 30 + Math.random() * 20,
    },
  }))
);

const MapComponent: React.FC = () => {
  const [markers] = useState(randomMarker(100));

  return (
    <PageContainer>
      <div style={{ width: '100%', height: 800 }}>
        <Map zoom={5}>
          {/* <ToolBar liteStyle offset={[10, 95]} /> */}
          <Markers
            markers={markers}
            useCluster={{
              renderClusterMarker: ({ count, marker }) => {
                return marker.setContent(`<div class="map-markers">${count}</div>`);
              }
            }}
            render={() => <Marker />}
          />
        </Map>
      </div>
    </PageContainer>
  )
}

export default MapComponent;
