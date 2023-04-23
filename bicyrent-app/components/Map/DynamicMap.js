import { shallow } from 'zustand/shallow'

import * as ReactLeaflet from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import { useEffect } from 'react'
import Leaflet from 'leaflet'

import useUiStore from '@/stores/uiStore'
import useBicycleStore from '@/stores/bicycleStore'
import { BICYCLE_ACTIONS } from '@/types/bicycle-action.type'

const { MapContainer, useMapEvents, Marker, Popup } = ReactLeaflet

const LocationMarker = () => {
  const { setSidebar } = useUiStore(state => ({ setSidebar: state.setSidebar }))
  const { bicycle, setBicycle, setBicycleAction } =
  useBicycleStore(state => ({
    bicycle: state.bicycle,
    setBicycle: state.setBicycle,
    setBicycleAction: state.setBicycleAction
  }), shallow)

  useMapEvents({
    click: (e) => {
      setSidebar(true)
      setBicycleAction(BICYCLE_ACTIONS.CREATE)
      setBicycle({
        ...bicycle,
        latitude: e.latlng.lat,
        length: e.latlng.lng
      }
      )
    }
  })
  return bicycle === null
    ? null
    : (
      <Marker position={{
        lat: bicycle.latitude,
        lng: bicycle.length
      }}>
        <Popup>Marcaste una nueva ruta</Popup>
      </Marker>
    )
}

const Map = ({ children, className, width, height, ...rest }) => {
  const { bicycles } = useBicycleStore(state => ({ bicycles: state.bicycles }))

  let mapClassName = 'w-full h-full'

  if (className) {
    mapClassName = `${mapClassName} ${className}`
  }

  useEffect(() => {
    (async function init () {
      delete Leaflet.Icon.Default.prototype._getIconUrl
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: 'leaflet/images/pin-bicycle-2x.png',
        iconUrl: 'leaflet/images/pin-bicycle.png',
        shadowUrl: 'leaflet/images/marker-shadow.png'
      })
    })()
  }, [])

  return (
    <MapContainer className={mapClassName} {...rest}>
      {children(ReactLeaflet, Leaflet)}

      <LocationMarker />

      {
        bicycles.map(({ uid, model, owner, ubication }) => (
          <Marker key={uid} position={ubication}>
            <Popup>{owner.name}: {model}</Popup>
          </Marker>
        ))}

    </MapContainer>
  )
}

export default Map
