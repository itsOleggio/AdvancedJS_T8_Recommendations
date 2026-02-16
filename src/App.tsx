import data from '../data/etsy.json'
import './App.css'
import { Listing } from '../public/components/Listing/Listing'

function App() {
  return (
    <div className="container">
      <div className="product-grid">
        {
          data.map(element => (
            <Listing
              key={element.listing_id}
              item={element}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
