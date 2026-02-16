export const getStockClass = (quantity: number): string =>{
    if(quantity <= 10) return 'stock-low'
    if(quantity <= 20) return 'stock-medium'
    return 'stock-high'
}