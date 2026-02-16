import data from '../data/etsy.json'
import './App.css'
import { Listing } from './components/Listing/Listing'
import type { ICard } from './model/card.model.ts';

function App() {

  const filteredData = (data as ICard[]).filter(item => item.state === 'active');

  return (
    <div className="container">
      <div className="product-grid">
        {
          filteredData.map(element => (
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
