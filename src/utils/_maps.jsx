import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Coordinates from './coordinates'
const mapboxApi = import.meta.env.VITE_MAPBOX_API

const PinPoints = () => {
  return [
    { id: 'A', jadwal: '08.30 WIB', coordinates: [110.308543, -7.891692] },
    { id: 'B', jadwal: '08.45 WIB', coordinates: [110.307128, -7.891622] },
    { id: 'C', jadwal: '09.00 WIB', coordinates: [110.304595, -7.892419] },
    { id: 'D', jadwal: '09.10 WIB', coordinates: [110.304867, -7.893281] },
    { id: 'E', jadwal: '09.30 WIB', coordinates: [110.307, -7.892915] }
  ]
}

const MapboxGLMap = () => {
  useEffect(() => {
    mapboxgl.accessToken = mapboxApi
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [110.306511, -7.892299], // starting position [lng, lat]
      zoom: 16 // starting zoom
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
            new mapboxgl.Popup().setHTML(
              `<h3 className="">${point.id} <br/> Pukul ${point.jadwal}</h3>`
            )
          )
      })
    })

    return () => map.remove() // cleanup
  }, [])

  return (
    <div className='relative py-48'>
      <div
        id='map'
        className='absolute top-0 left-0 w-full h-full'
        style={{ borderRadius: '20px' }}
      ></div>
    </div>
  )
}

export default MapboxGLMap
