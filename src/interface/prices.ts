export interface pricesQuote {
  price: number;
  volume24h: number;
  volume24hChange24h: number;
  marketCap: number;
  marketCapChange24h: number;
  percentChange15m: number;
  percentChange30m: number;
  percentChange1h: number;
  percentChange6h: number;
  percentChange12h: number;
  percentChange24h: number;
  percentChange7d: number;
  percentChange30d: number;
  percentChange1y: number;
  athPrice: number;
  athDate: string;
  percentFromPriceAth: number;
}

export interface pricesCurrency {
  usd: pricesQuote;
}
export interface PricesList {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number;
  betaValue: number;
  firstDataAt: string;
  lastUpdated: string;
  quotes: pricesCurrency;
}
