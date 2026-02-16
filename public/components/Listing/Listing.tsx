import { useEffect, useState } from "react";
import type { ICard } from "../../../src/model/card.model"
import {getStockClass} from '../../../src/utils/getStockClass'

interface ItemProps {
    item: ICard;
}

export function Listing({ item }: ItemProps) {

    const [title, setTitle] = useState<string>('');
    let stockClass: string = getStockClass(item.quantity)
    
    useEffect(() => {
        if (!item || !item.title) {
            setTitle('');
            return;
        }
        if (item.title.length <= 50) {
            setTitle(item.title)
        } else {
            setTitle(item.title.slice(0, 50) + '...')
        }
    }, [item.title])

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
                 finalPrice = 'CAD' + price;
                 break
        }
    return finalPrice;
    }

    return (
        <div className="product-card">
            <img src={item.MainImage?.url_570xN} alt={title} className="product-image" />
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <div className="price-container">
                    <div className="product-price">{convertCost(item.currency_code ,item.price)}</div>
                    <span className={`stock-badge ${stockClass}`}>{item.quantity}</span>
                </div>
            </div>
        </div>
    )
}