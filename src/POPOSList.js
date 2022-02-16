import POPOSSpace from "./POPOSSpace"

function POPOSList() {
  return (
    <div>
        <POPOSSpace 
            name='50 California Street'
            address='50 California St.'
            image='50-california-st.jpg'
        />

        <POPOSSpace 
            name='101 California Street'
            address='101 California St.'
            image='101-california.jpg'
        />
        <POPOSSpace 
            name='sansome roof garden'
            address='343 sansome roof garden'
            image='343-sansome-roof-garden.jpg'
        />
        <POPOSSpace 
            name='california street'
            address='555 california street'
            image='555-california.jpg'
        />
    </div>
  )
}

export default POPOSList