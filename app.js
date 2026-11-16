const DERIV_APP_ID = "1089";
const AFFILIATE_TOKEN = "3A2CFHPG722B";

// EXHAUSTIVE 47-MARKET ASSET DIRECTORY (Zero assets left out)
const exhaustiveAssets = [
    // Volatility 1s Indices (5)
    { symbol: '1HZ10V', name: 'Volatility 10 (1s)', market: 'volatility_1s', pip: 2, base: 9452.18, tv: 'DERIV:1HZ10V' },
    { symbol: '1HZ25V', name: 'Volatility 25 (1s)', market: 'volatility_1s', pip: 2, base: 5320.45, tv: 'DERIV:1HZ25V' },
    { symbol: '1HZ50V', name: 'Volatility 50 (1s)', market: 'volatility_1s', pip: 2, base: 48912.34, tv: 'DERIV:1HZ50V' },
    { symbol: '1HZ75V', name: 'Volatility 75 (1s)', market: 'volatility_1s', pip: 2, base: 12450.80, tv: 'DERIV:1HZ75V' },
    { symbol: '1HZ100V', name: 'Volatility 100 (1s)', market: 'volatility_1s', pip: 2, base: 1428.64, tv: 'DERIV:1HZ100V' },
    // Volatility Plane Indices (5)
    { symbol: 'R_10', name: 'Volatility 10', market: 'volatility', pip: 3, base: 6321.450, tv: 'DERIV:R_10' },
    { symbol: 'R_25', name: 'Volatility 25', market: 'volatility', pip: 3, base: 3120.100, tv: 'DERIV:R_25' },
    { symbol: 'R_50', name: 'Volatility 50', market: 'volatility', pip: 3, base: 2450.750, tv: 'DERIV:R_50' },
    { symbol: 'R_75', name: 'Volatility 75', market: 'volatility', pip: 3, base: 8940.200, tv: 'DERIV:R_75' },
    { symbol: 'R_100', name: 'Volatility 100', market: 'volatility', pip: 3, base: 4120.900, tv: 'DERIV:R_100' },
    // Boom & Crash (4)
    { symbol: 'BOOM500', name: 'Boom 500 Index', market: 'boom_crash', pip: 2, base: 4125.80, tv: 'DERIV:BOOM500' },
    { symbol: 'BOOM1000', name: 'Boom 1000 Index', market: 'boom_crash', pip: 2, base: 11450.20, tv: 'DERIV:BOOM1000' },
    { symbol: 'CRASH500', name: 'Crash 500 Index', market: 'boom_crash', pip: 2, base: 5820.10, tv: 'DERIV:CRASH500' },
    { symbol: 'CRASH1000', name: 'Crash 1000 Index', market: 'boom_crash', pip: 2, base: 7840.15, tv: 'DERIV:CRASH1000' },
    // Jump Indices (5)
    { symbol: 'JD10', name: 'Jump 10 Index', market: 'jump', pip: 2, base: 1240.50, tv: 'DERIV:JD10' },
    { symbol: 'JD25', name: 'Jump 25 Index', market: 'jump', pip: 2, base: 2150.80, tv: 'DERIV:JD25' },
    { symbol: 'JD50', name: 'Jump 50 Index', market: 'jump', pip: 2, base: 3420.10, tv: 'DERIV:JD50' },
    { symbol: 'JD75', name: 'Jump 75 Index', market: 'jump', pip: 2, base: 5120.40, tv: 'DERIV:JD75' },
    { symbol: 'JD100', name: 'Jump 100 Index', market: 'jump', pip: 2, base: 8940.20, tv: 'DERIV:JD100' },
    // Stocks & ETFs (10)
    { symbol: 'NVDA', name: 'NVIDIA', market: 'stocks', pip: 2, base: 142.50, tv: 'NASDAQ:NVDA' },
    { symbol: 'TSLA', name: 'Tesla', market: 'stocks', pip: 2, base: 215.40, tv: 'NASDAQ:TSLA' },
    { symbol: 'AAPL', name: 'Apple', market: 'stocks', pip: 2, base: 228.60, tv: 'NASDAQ:AAPL' },
    { symbol: 'MSFT', name: 'Microsoft', market: 'stocks', pip: 2, base: 425.80, tv: 'NASDAQ:MSFT' },
    { symbol: 'AMZN', name: 'Amazon', market: 'stocks', pip: 2, base: 195.20, tv: 'NASDAQ:AMZN' },
    { symbol: 'GOOGL', name: 'Google', market: 'stocks', pip: 2, base: 178.40, tv: 'NASDAQ:GOOGL' },
    { symbol: 'META', name: 'Meta', market: 'stocks', pip: 2, base: 560.10, tv: 'NASDAQ:META' },
    { symbol: 'NFLX', name: 'Netflix', market: 'stocks', pip: 2, base: 742.30, tv: 'NASDAQ:NFLX' },
    { symbol: 'SPY', name: 'SPY ETF', market: 'stocks', pip: 2, base: 585.50, tv: 'AMEX:SPY' },
    { symbol: 'QQQ', name: 'QQQ ETF', market: 'stocks', pip: 2, base: 502.10, tv: 'NASDAQ:QQQ' },
    // Forex Pairs (10)
    { symbol: 'frxEURUSD', name: 'EUR/USD', market: 'forex', pip: 5, base: 1.08450, tv: 'FX:EURUSD' },
    { symbol: 'frxGBPUSD', name: 'GBP/USD', market: 'forex', pip: 5, base: 1.27140, tv: 'FX:GBPUSD' },
    { symbol: 'frxUSDJPY', name: 'USD/JPY', market: 'forex', pip: 3, base: 153.420, tv: 'FX:USDJPY' },
    { symbol: 'frxAUDUSD', name: 'AUD/USD', market: 'forex', pip: 5, base: 0.65840, tv: 'FX:AUDUSD' },
    { symbol: 'frxUSDCAD', name: 'USD/CAD', market: 'forex', pip: 5, base: 1.38910, tv: 'FX:USDCAD' },
    { symbol: 'frxNZDUSD', name: 'NZD/USD', market: 'forex', pip: 5, base: 0.59840, tv: 'FX:NZDUSD' },
    { symbol: 'frxEURGBP', name: 'EUR/GBP', market: 'forex', pip: 5, base: 0.85310, tv: 'FX:EURGBP' },
    { symbol: 'frxUSDCHF', name: 'USD/CHF', market: 'forex', pip: 5, base: 0.88410, tv: 'FX:USDCHF' },
    { symbol: 'frxAUDJPY', name: 'AUD/JPY', market: 'forex', pip: 3, base: 101.200, tv: 'FX:AUDJPY' },
    { symbol: 'frxGBPJPY', name: 'GBP/JPY', market: 'forex', pip: 3, base: 194.800, tv: 'FX:GBPJPY' },
    // Commodities (5)
    { symbol: 'frxXAUUSD', name: 'Gold/USD', market: 'commodities', pip: 2, base: 2742.85, tv: 'OANDA:XAUUSD' },
    { symbol: 'frxXAGUSD', name: 'Silver/USD', market: 'commodities', pip: 3, base: 32.410, tv: 'OANDA:XAGUSD' },
    { symbol: 'frxWTIUSD', name: 'Crude Oil', market: 'commodities', pip: 2, base: 71.45, tv: 'TVC:USOIL' },
    { symbol: 'UK Brent', name: 'UK Brent', market: 'commodities', pip: 2, base: 75.80, tv: 'TVC:UKOIL' },
    { symbol: 'Copper', name: 'Copper', market: 'commodities', pip: 3, base: 4.150, tv: 'COMEX:HG1!' },
    // Cryptocurrencies (3)
    { symbol: 'cryBTCUSD', name: 'BTC/USD', market: 'crypto', pip: 2, base: 89420.50, tv: 'BINANCE:BTCUSDT' },
    { symbol: 'cryETHUSD', name: 'ETH/USD', market: 'crypto', pip: 2, base: 3145.80, tv: 'BINANCE:ETHUSDT' },
    { symbol: 'cryLTCUSD', name: 'LTC/USD', market: 'crypto', pip: 2, base: 84.25, tv: 'BINANCE:LTCUSDT' }
];

let currentCategory = 'all';
let currentSymbol = '1HZ10V';
let marketDataStore = {};
let activeAccountMode = 'demo';
let simulatedBalance = 1000.00;
let lastExecutionTimestamp = 0;
let activeAutomationMode = null;
let lockedFirmFeederDigit = 1;
let lockExpiresAt = Date.now() + 18000;
let activeCandleTf = '5';
const timeframeRotation = ['1', '3', '5', '15'];

// Non-overlapping turn-by-turn strategy queue covering Over 0-9, Under 9-0, Even/Odd, Accumulators 1-5%, Multipliers, Rise/Fall, and Matches/Differs
const masterStrategyQueue = [
    { type:
