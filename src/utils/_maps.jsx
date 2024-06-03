import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css'
import Coordinates from './coordinats'

const PinPoints = () => {
  return [
    { id: 'Start at Unjaya', coordinates: [110.323706,-7.805135] },
    { id: 'Past UMY', coordinates: [110.323529,-7.810709] },
    { id: 'Ends at UAA', coordinates: [110.324648,-7.818936] }
  ]
}

const MapboxGLMap = () => {
  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiZHdpaXdvaWkzMSIsImEiOiJjbHd5NTM5NmIxZDY1MmxxejY4Ymw5Z2YxIn0.Cn9SbJKzvGjmcyY3A5KwdQ'
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [110.324311, -7.810918], // starting position [lng, lat]
      zoom: 13 // starting zoom
    })

    map.on('load', () => {
      // Add the route as a source
      map.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: Coordinates()
          }
        }
      })

      // Add a line layer using the route source
      map.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#4665a3',
          'line-width': 5
        }
      })

      PinPoints().forEach(point => {
        new mapboxgl.Marker()
          .setLngLat(point.coordinates)
          .addTo(map)
          .setPopup(
            new mapboxgl.Popup().setHTML(`<h3 className="">${point.id}</h3>`)
          )
      })
    })

    return () => map.remove() // cleanup
  }, [])

  return (
    <div
      id='map'
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '60%',
        borderRadius: 10
      }}
    />
  )
}

export default MapboxGLMap
