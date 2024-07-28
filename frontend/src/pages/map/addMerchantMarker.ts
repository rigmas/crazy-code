import type { Map as MglMap } from 'maplibre-gl'
import type { Feature, Point } from 'geojson'

export const MerchantMarkerLayerID = 'merchantMarker'

export async function addMerchantMarker(map: MglMap, features: Feature<Point>[]) {
  const marker = await map.loadImage('/MerchantMarker.png')
  map.addImage(MerchantMarkerLayerID, marker.data, {})
  map.addSource(MerchantMarkerLayerID, {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features,
    },
  })

  map.addLayer({
    id: MerchantMarkerLayerID,
    source: MerchantMarkerLayerID,
    type: 'symbol',
    layout: {
      'icon-image': MerchantMarkerLayerID,
      'icon-size': 0.5,
      'icon-pitch-alignment': 'viewport',
      'text-font': ['Montserrat Bold'],
      'text-field': ['get', 'name'],
      'text-size': 8,
      'text-anchor': 'top',
      'text-offset': [0, 2],
    },
  })
}
