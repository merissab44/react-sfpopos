import POPOSSpace from "./POPOSSpace"
import './POPOSList.css'

function POPOSList() {
  return (
    <div className="POPOSList">
        <POPOSSpace 
            name='50 California Street'
            address='50 California St.'
            image='50-california-st.jpg'
        />

        <POPOSSpace 
            name='101 California Street'
            address='101 California'
            image='101-california.jpg'
        />
        <POPOSSpace 
            name='sansome roof garden'
            address='343 sansome roof garden'
            image='343-sansome-roof-garden.jpg'
        />
        <POPOSSpace 
            name='california street'
            address='555 California'
            image='555-california.jpg'
        />
         <POPOSSpace 
            name='525 Mark Street Plaza'
            address='525 Mark Street Plaza'
            image='525-market-street-plaza.jpg'
        />
         <POPOSSpace 
            name='Citigroup Center'
            address='Citigroup Center'
            image='citigroup-center.jpg'
        />
    </div>
  )
}

export default POPOSList