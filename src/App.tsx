import data from '../data/etsy.json'
import './App.css'
import { Listing } from './components/Listing/Listing'


function App() {

  // const filteredData = (data as ICard[]).filter(item => item.state === 'active');

  const filteredData = data
  .filter((item) => item.state === 'active')
  .map((item) =>{
    return{
      listing_id: item.listing_id,
      url: item.url || '',
      MainImage: {
        url_570xN: item.MainImage?.url_570xN || '',
      },
      title: item.title || '',
      currency_code: item.currency_code || '',
      price: item.price || '',
      quantity: item.quantity || 0,
    }
  });

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
