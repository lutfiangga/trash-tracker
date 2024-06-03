import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css'
import Coordinates from './coordinats'

const PinPoints = () => {
  return [
    { id: 'Start at Unjaya', coordinates: [110.323706, -7.805135] },
    { id: 'Past UMY', coordinates: [110.323529, -7.810709] },
    { id: 'Ends at UAA', coordinates: [110.324648, -7.818936] }
  ]
}

const MapboxGLMap = () => {
  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiZHdpaXdvaWkzMSIsImEiOiJjbHd5NTM5NmIxZDY1MmxxejY4Ymw5Z2YxIn0.Cn9SbJKzvGjmcyY3A5KwdQ'
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
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

      // Insert the layer beneath any symbol layer.
      const layers = map.getStyle().layers
      const labelLayerId = layers.find(
        layer => layer.type === 'symbol' && layer.layout['text-field']
      ).id

      // The 'building' layer in the Mapbox Streets
      // vector tileset contains building height data
      // from OpenStreetMap.
      map.addLayer(
        {
          id: 'add-3d-buildings',
          source: 'composite',
          'source-layer': 'building',
          filter: ['==', 'extrude', 'true'],
          type: 'fill-extrusion',
          minzoom: 15,
          paint: {
            'fill-extrusion-color': '#aaa',

            // Use an 'interpolate' expression to
            // add a smooth transition effect to
            // the buildings as the user zooms in.
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
          }
        },
        labelLayerId
      )

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

      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          // When active the map will receive updates to the device's location as it changes.
          trackUserLocation: true,
          // Draw an arrow next to the location dot to indicate which direction the device is heading.
          showUserHeading: true
        })
      )
      map.addControl(new mapboxgl.FullscreenControl())
      map.addControl(new mapboxgl.NavigationControl())
      map.addControl(new mapboxgl.ScaleControl())

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
    <>
      <div
        id='map'
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '60%',
          borderRadius: 10
        }}
      ></div>
    </>
  )
}

export default MapboxGLMap
