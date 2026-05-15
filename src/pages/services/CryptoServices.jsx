import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function CryptoServices() {

  const [cryptos, setCryptos] = useState([])
  const [currencies, setCurrencies] = useState([])
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState(null)

  const services = [
    {
      icon: '💰',
      title: 'Buy & Sell Crypto',
      desc: 'Buy or sell Bitcoin, Ethereum, USDT and more at the best market rates. Fast, safe and reliable.',
      features: ['Bitcoin (BTC)', 'Ethereum (ETH)', 'USDT', 'BNB', 'Solana (SOL)', 'Litecoin (LTC)'],
    },
    {
      icon: '🤝',
      title: 'P2P Trading',
      desc: 'Trade directly with a trusted partner at better rates than any exchange. No hidden fees.',
      features: ['Best rates guaranteed', 'Fast settlement', 'Secure transactions', 'Multiple payment methods'],
    },
    {
      icon: '🎓',
      title: 'Crypto Mentorship',
      desc: 'New to crypto? We guide you from zero to confident trader with practical hands-on training.',
      features: ['Chart reading', 'Trading strategies', 'Risk management', 'Market analysis'],
    },
  ]

  const whyUs = [
    { icon: '⚡', title: 'Fast Transactions', desc: 'We process all trades quickly and efficiently.' },
    { icon: '🔒', title: 'Secure & Safe', desc: 'Your funds and data are always protected.' },
    { icon: '💎', title: 'Best Rates', desc: 'We always offer competitive market rates.' },
    { icon: '📞', title: '24/7 Support', desc: 'We are always available to assist you.' },
  ]

  const fetchCryptoData = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,binancecoin,solana,litecoin,ripple,cardano,dogecoin,polkadot&order=market_cap_desc&sparkline=false'
      )
      const data = await response.json()
      setCryptos(data)
    } catch (err) {
      console.error('Crypto fetch error:', err)
    }
  }

  const fetchCurrencyData = async () => {
    try {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
      const data = await response.json()
      const rates = data.rates
      const ngnRate = rates.NGN
      setCurrencies([
        { pair: 'USD/NGN', rate: ngnRate.toFixed(2), flag: '🇺🇸', name: 'US Dollar' },
        { pair: 'GBP/NGN', rate: (ngnRate / rates.GBP).toFixed(2), flag: '🇬🇧', name: 'British Pound' },
        { pair: 'EUR/NGN', rate: (ngnRate / rates.EUR).toFixed(2), flag: '🇪🇺', name: 'Euro' },
        { pair: 'CAD/NGN', rate: (ngnRate / rates.CAD).toFixed(2), flag: '🇨🇦', name: 'Canadian Dollar' },
        { pair: 'AED/NGN', rate: (ngnRate / rates.AED).toFixed(2), flag: '🇦🇪', name: 'UAE Dirham' },
        { pair: 'CNY/NGN', rate: (ngnRate / rates.CNY).toFixed(2), flag: '🇨🇳', name: 'Chinese Yuan' },
      ])
    } catch (err) {
      console.error('Currency fetch error:', err)
    }
  }

  const fetchAllData = async () => {
    setLoading(true)
    await Promise.all([fetchCryptoData(), fetchCurrencyData()])
    setLastUpdated(new Date().toLocaleTimeString())
    setLoading(false)
  }

  useEffect(() => {
    fetchAllData()
    const interval = setInterval(fetchAllData, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pt-16">

      {/* Hero Banner */}
      <section className="bg-[#0a0f2c] py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>›</span>
            <span className="text-green-400">Crypto Services</span>
          </div>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-green-600/10 border border-green-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-300 text-xs font-medium tracking-wide">CRYPTO SERVICES</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Trade Crypto{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Safely & Profitably
              </span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Buy, sell and trade cryptocurrencies at the best rates. We also mentor beginners to become confident and profitable traders.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/2348038786037"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5"
              >
                Start Trading →
              </a>
              <a
                href="https://wa.me/2348038786037"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5"
              >
                Get Mentorship
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-green-600 text-sm font-semibold tracking-widest uppercase mb-3">WHAT WE OFFER</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Crypto Services</h2>
            <p className="text-gray-500 max-w-md mx-auto">Everything you need to succeed in the crypto market.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-green-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-1">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px] flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Market Tracker */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 text-sm font-semibold tracking-widest uppercase mb-3">LIVE DATA</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Full Market Tracker</h2>
            <p className="text-gray-500 max-w-md mx-auto">Real-time crypto and currency prices updated every 60 seconds.</p>
            <div className="flex items-center justify-center gap-3 mt-4">
              {lastUpdated && (
                <span className="text-gray-400 text-xs">Last updated: {lastUpdated}</span>
              )}
              <button
                onClick={fetchAllData}
                className="text-green-600 text-xs font-semibold hover:text-green-700"
              >
                🔄 Refresh
              </button>
            </div>
          </div>

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-gray-400 text-sm">Fetching live market data...</p>
            </div>
          )}

          {!loading && (
            <div className="grid md:grid-cols-2 gap-8">

              {/* Top 10 Crypto */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🪙</span>
                    <h3 className="text-gray-900 font-bold">Top 10 Crypto Prices</h3>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-500 text-xs font-semibold">LIVE</span>
                  </div>
                </div>
                <div className="divide-y divide-gray-50">
                  {cryptos.map((coin, index) => (
                    <div key={coin.id} className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-gray-300 text-xs w-4">{index + 1}</span>
                        <img src={coin.image} alt={coin.name} className="w-7 h-7 rounded-full" />
                        <div>
                          <p className="text-gray-900 text-sm font-semibold">{coin.name}</p>
                          <p className="text-gray-400 text-xs uppercase">{coin.symbol}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-900 text-sm font-bold">${coin.current_price.toLocaleString()}</p>
                        <p className={`text-xs font-semibold ${coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {coin.price_change_percentage_24h >= 0 ? '▲' : '▼'}{' '}
                          {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">

                {/* Currency Rates */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="flex items-center justify-between p-5 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">💵</span>
                      <h3 className="text-gray-900 font-bold">Currency Rates to NGN</h3>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-500 text-xs font-semibold">LIVE</span>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {currencies.map((currency) => (
                      <div key={currency.pair} className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{currency.flag}</span>
                          <div>
                            <p className="text-gray-900 text-sm font-semibold">{currency.pair}</p>
                            <p className="text-gray-400 text-xs">{currency.name}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-900 text-sm font-bold">₦{Number(currency.rate).toLocaleString()}</p>
                          <p className="text-gray-400 text-xs">per 1 unit</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-5 py-3 bg-green-50 border-t border-green-100">
                    <p className="text-green-600 text-xs">💡 Contact us on WhatsApp for best P2P rates</p>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-5">
                  <p className="text-yellow-700 text-xs font-semibold mb-1">⚠️ Disclaimer</p>
                  <p className="text-yellow-600 text-xs leading-relaxed">
                    Crypto trading involves risk. Always do your own research (DYOR) before investing. Never invest more than you can afford to lose. Ultimate Tech Lab is not a licensed financial advisor.
                  </p>
                </div>

              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Trade With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-green-600 text-sm font-semibold tracking-widest uppercase mb-3">WHY CHOOSE US</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Why Trade With UTL?</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:bg-green-100 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-gray-900 font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0f2c]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to start trading?
          </h2>
          <p className="text-gray-400 mb-8">
            Contact us on WhatsApp and let's get you started today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/2348038786037"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5"
            >
              Start Trading on WhatsApp →
            </a>
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CryptoServices