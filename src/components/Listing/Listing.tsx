import type { ICard } from "../../model/card.model"
import {getStockClass} from '../../utils/getStockClass'

interface ItemProps {
    item: ICard;
}

export function Listing({ item }: ItemProps) {

    const stockClass: string = getStockClass(item.quantity)

    const takeTitle = (title: string | undefined): string => {
        if(!title) return '';
        if (title.length <= 50) {
            return title;
        } else {
            return title.slice(0, 50) + '...';
        }
    }

    const convertCost = (currency: string, price: string) => {
    let finalPrice: string; 

        switch(currency){
            case 'USD':
                 finalPrice = '$' + price;
                 break;
            case 'EUR':
                 finalPrice = '€' + price;
                 break;
            case 'GBP':
                 finalPrice = '£' + price;
                 break;
            default:
                 finalPrice = 'CAD ' + price;
                 break
        }
    return finalPrice;
    }

    return (
        <div className="product-card">
            <img src={item.MainImage?.url_570xN} alt={item.title} className="product-image" />
            <div className="product-info">
                <h3 className="product-title">{takeTitle(item.title)}</h3>
                <div className="price-container">
                    <div className="product-price">{convertCost(item.currency_code ,item.price)}</div>
                    <span className={`stock-badge ${stockClass}`}>{item.quantity}</span>
                </div>
            </div>
        </div>
    )
}