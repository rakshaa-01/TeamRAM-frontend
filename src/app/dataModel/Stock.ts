export interface Stock {
    id: number,
    stockTicker: string,
    price: number,
    volume: number,
    buyOrSell: string,
    statusCode: number
}