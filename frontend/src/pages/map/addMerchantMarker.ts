import type { Map as MglMap } from 'maplibre-gl'
import { UserMarkerLayerID } from '~/pages/map/addUserMarker'

export const MerchantMarkerLayerID = 'merchantMarker'

export async function addMerchantMarker(map: MglMap) {
  const marker = await map.loadImage('/MerchantMarker.png')
  map.addImage(MerchantMarkerLayerID, marker.data, {})
  map.addSource(MerchantMarkerLayerID, {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [],
    },
  })

  map.addLayer({
    id: UserMarkerLayerID,
    source: UserMarkerLayerID,
    type: 'symbol',
    layout: {
      'icon-image': UserMarkerLayerID,
      'icon-size': 0.5,
      'icon-pitch-alignment': 'viewport',
    },
  })
}
