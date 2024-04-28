import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Polyline, useMap } from 'react-leaflet'

const RoutingMap = () => {
  const [route, setRoute] = useState([])

  useEffect(() => {
    // Panggil fungsi untuk mendapatkan rute
    fetchRoute()
  }, [])

  const fetchRoute = async () => {
    const start = '51.5, -0.09' // Koordinat awal (contoh: London)
    const end = '52.52, 13.405' // Koordinat akhir (contoh: Berlin)
    const apiKey = 'wkG7M9uNeqOpz0Qj1gcTGbxPdROmqXiyBVsx3bjHdLY' // Ganti dengan API key HERE Anda
    const routingUrl = `https://router.hereapi.com/v8/routes?transportMode=car&origin=${start}&destination=${end}&apikey=${apiKey}`

    try {
      const response = await fetch(routingUrl)
      const data = await response.json()
      const route = data.routes[0].sections[0].polyline

      setRoute(route)
    } catch (error) {
      console.error('Error fetching route:', error)
    }
  }

  return (
    <MapContainer
      center={[51.505, -0.09]} // Pusat peta (contoh: London)
      zoom={5} // Zoom level
      style={{ height: '400px', width: '100%' }}
    >
      <ChangeView center={[51.505, -0.09]} zoom={5} />{' '}
      {/* Fungsi untuk mengubah tampilan peta */}
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {route.length > 0 && (
        <Routing route={route} /> // Menampilkan rute
      )}
    </MapContainer>
  )
}

const ChangeView = ({ center, zoom }) => {
  const map = useMap()
  map.setView(center, zoom)
  return null
}

const Routing = ({ route }) => {
  return (
    <Polyline
      pathOptions={{ color: 'blue' }}
      positions={decodePolyline(route)}
    />
  )
}

const decodePolyline = polyline => {
  var index = 0,
    len = polyline.length,
    lat = 0,
    lng = 0,
    coordinates = []

  while (index < len) {
    var b,
      shift = 0,
      result = 0

    do {
      b = polyline.charCodeAt(index++) - 63
      result |= (b & 0x1f) << shift
      shift += 5
    } while (b >= 0x20)

    var dlat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1
    lat += dlat

    shift = 0
    result = 0

    do {
      b = polyline.charCodeAt(index++) - 63
      result |= (b & 0x1f) << shift
      shift += 5
    } while (b >= 0x20)

    var dlng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1
    lng += dlng

    coordinates.push([lat / 1e5, lng / 1e5])
  }

  return coordinates
}

export default RoutingMap
