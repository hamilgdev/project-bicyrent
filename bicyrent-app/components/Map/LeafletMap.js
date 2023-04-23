import Map from './Map'

const DEFAULT_CENTER = [6.230833, -75.590553]

export const LeafletMap = () => {
  return (
    <Map width="800" height="400" center={DEFAULT_CENTER} zoom={12} scrollWheelZoom={false}>
      {({ TileLayer }) => (
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      )}
    </Map>
  )
}
