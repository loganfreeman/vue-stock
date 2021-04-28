import { get } from "./request";

export const STOCK_QUERY_URL = "https://www.alphavantage.co/query";

const API_KEY = "ZGN5MW8SCFQZBPBN";

export default {
  searchSymbol(symbol) {
    return get(STOCK_QUERY_URL, {
      function: "SYMBOL_SEARCH",
      keywords: symbol,
      apikey: API_KEY,
    });
  },

  overview(symbol) {
    return get(STOCK_QUERY_URL, {
      function: "OVERVIEW",
      symbol: symbol,
      apikey: API_KEY,
    });
  },

  globalQuote(symbol) {
    return get(STOCK_QUERY_URL, {
      function: "GLOBAL_QUOTE",
      symbol: symbol,
      apikey: API_KEY,
    });
  },

  earnings(symbol) {
    return get(STOCK_QUERY_URL, {
      function: "EARNINGS",
      symbol: symbol,
      apikey: API_KEY,
    });
  },

  daily(symbol) {
    return get(STOCK_QUERY_URL, {
      function: "TIME_SERIES_DAILY",
      symbol: symbol,
      apikey: API_KEY,
    });
  },
};
