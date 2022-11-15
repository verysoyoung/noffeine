import styled from 'styled-components'
import { useEffect, useRef } from 'react'
export default function Map() {
  const mapElement = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const { naver } = window
    console.log(naver, 'naver')
    console.log(mapElement, 'mapElement')
    if (!mapElement.current || !naver) return

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.5656, 126.9769)
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    }
    const map = new naver.maps.Map(mapElement.current, mapOptions)
    new naver.maps.Marker({
      position: location,
      map,
    })
  }, [])

  return (
    <Wrap>
      <div ref={mapElement} style={{ minHeight: '100%' }} />
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid green;
`
