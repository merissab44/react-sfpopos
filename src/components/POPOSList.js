import POPOSSpace from "./POPOSSpace"
import { useState } from "react"
import './POPOSList.css'
import data from '../sfpopos-data'

function POPOSList() {

  const [ query, setQuery ] = useState('')

//deconstruct the data array
const spaces = data.filter(({ features, title, address }) => {
	}).map((obj, i) => { // remove i here
			// Add id here!
			const { id, title, address, images, hours, features } = obj
		return (
			<POPOSSpace
				id={id} // use id here
				key={`${title}-${id}`} // use id here
        name={title}
        address={address}
				image={images[0]}
				hours={hours}
        features={features}
      />
		)
	})
    return (
    <div className="POPOSList">
      <form>
        <input
          value={query}
          placeholder='search'
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
        {spaces}
    </div>
  )
}

export default POPOSList