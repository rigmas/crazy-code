import type { Map as Mapl } from 'maplibre-gl'

export const UserMarkerLayerID = 'userMarker'
export async function addUserMarker(map: Mapl) {
  const marker = await map.loadImage('/UserMarker.png')
  map.addImage(UserMarkerLayerID, marker.data, {})
  map.addSource(UserMarkerLayerID, {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [0, 0],
        },
        properties: {
          heading: 0,
        },
      }],
    },
  })
  map.addLayer({
    id: UserMarkerLayerID,
    source: UserMarkerLayerID,
    type: 'symbol',
    layout: {
      'icon-image': UserMarkerLayerID,
      'icon-rotate': ['get', 'heading'],
      'icon-size': 0.75,
      'icon-pitch-alignment': 'map',
    },
  })
}
