import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api"
import { useMemo } from "react"
function Maps() {
    const { isLoaded } = useLoadScript({googleMapsApiKey: "AIzaSyDFeL010kPkR8d_O8vow6nCZCSjR5VnMk4"})
    const center = useMemo(() => ({lat: 44, lng: -80}), []);
  return (
    <>
  {isLoaded &&(
    <GoogleMap zoom={10} center={{center}} mapContainerStyle={{ width: "100%", height: "100%"}}>
    <MarkerF position={center} />
  </GoogleMap>
  )}
  </>
  )
}

export default Maps