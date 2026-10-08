import React, { useState } from 'react';
import { 
  LineChart, 
  ShieldCheck, 
  Zap, 
  Clock, 
  CheckCircle2, 
  ChevronDown, 
  Activity, 
  TrendingUp, 
  Lock,
  Download,
  TerminalSquare,
  BarChart3,
  MessageCircle
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center gap-2">
          <Activity className="h-8 w-8 text-yellow-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            APEX<span className="text-yellow-400">TRADING</span>ALGO
          </span>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            <a href="#algos" className="text-slate-300 hover:text-white transition-colors">The Algos</a>
            <a href="#performance" className="text-slate-300 hover:text-white transition-colors">Performance</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
            <a href="https://t.me/apextradingalgo" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1">
              <MessageCircle className="w-4 h-4" /> Telegram
            </a>
          </div>
        </div>
        <div>
          <a href="#pricing" className="bg-yellow-400 hover:bg-yellow-500 text-slate-950 px-6 py-2.5 rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_25px_rgba(250,204,21,0.5)]">
            Get Access
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    {/* Background Effects */}
    <div className="absolute inset-0 bg-slate-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/30 to-transparent blur-3xl rounded-full"></div>
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-yellow-400 text-sm font-medium mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
        </span>
        Specialized for EURUSD • MT5 Ready
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
        Dominate EURUSD with <br className="hidden md:block" />
        <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          Intelligent Compounding
        </span>
      </h1>
      
      <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
        A suite of three elite algorithmic trading systems built strictly for EURUSD. Featuring dynamic lot scaling, overnight protection, and real-time major news filtering.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#pricing" className="bg-yellow-400 hover:bg-yellow-500 text-slate-950 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(250,204,21,0.4)] flex items-center justify-center gap-2">
          View Pricing <TrendingUp className="w-5 h-5" />
        </a>
        <a href="https://t.me/apextradingalgo" target="_blank" rel="noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2">
          Contact via Telegram <MessageCircle className="w-5 h-5" />
        </a>
      </div>

      <div className="mt-20 relative p-[2px] overflow-hidden rounded-2xl mb-8">
        {/* Animated Background */}
        <div className="absolute -inset-[150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg,transparent_0%,transparent_75%,#facc15_100%)]"></div>
        
        {/* Inner Content Container */}
        <div className="relative bg-slate-950 rounded-[14px] w-full flex flex-col shadow-[0_0_30px_rgba(250,204,21,0.15)] pt-2">
          {/* God Algo Badge */}
          <div className="hidden md:block absolute top-0 right-4 sm:right-8 bg-yellow-400 text-slate-950 text-[10px] sm:text-xs font-bold px-4 py-1 uppercase rounded-b-md z-10 shadow-[0_0_15px_rgba(250,204,21,0.5)]">God Algo</div>

          {[
            { 
              name: 'Alpha', 
              type: 'Best Scalper', 
              return: '16.85%', 
              returnLabel: 'Avg Monthly Return', 
              footnote: '*Based on 1Y Backtest',
              textColor: 'text-emerald-400'
            },
            { 
              name: 'Beta', 
              type: 'Swing', 
              return: '26.2%', 
              returnLabel: 'Avg Yearly Return', 
              footnote: '*Based on 1Y Backtest',
              textColor: 'text-emerald-400'
            },
            { 
              name: 'Theta', 
              type: 'Best Swing', 
              return: 'Under Dev', 
              returnLabel: 'Coming Soon', 
              footnote: null,
              textColor: 'text-white tracking-widest',
              isDev: true
            }
          ].map((algo, i) => (
            <div key={i} className={`py-6 md:py-8 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors px-4 sm:px-8 ${algo.isDev ? 'opacity-60 grayscale' : ''}`}>
              
              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-4 gap-8 items-center">
                <div className="text-left">
                  <div className="text-3xl font-bold text-yellow-400 mb-1 flex justify-start items-center gap-2">
                    {algo.isDev && <Lock className="w-5 h-5" />}
                    {algo.name}
                  </div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Apex Algorithm</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold mb-1 ${algo.textColor}`}>{algo.return}</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">{algo.returnLabel}</div>
                  {algo.footnote && <div className="text-[10px] text-slate-500 mt-1 uppercase">{algo.footnote}</div>}
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">EURUSD</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Asset Focus</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white mb-1">{algo.type}</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Compounding</div>
                </div>
              </div>

              {/* Mobile Layout (Concept 6) */}
              <div className="flex md:hidden flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="text-3xl font-bold text-yellow-400 flex items-center gap-2">
                    {algo.isDev && <Lock className="w-6 h-6" />}
                    {algo.name}
                  </div>
                  {algo.name === 'Alpha' && (
                    <div className="bg-yellow-400 text-slate-950 text-[10px] font-bold px-3 py-1 uppercase rounded z-10">God Algo</div>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className={`${algo.textColor === 'text-emerald-400' ? 'bg-emerald-400/10 border-emerald-400/30' : 'bg-white/5 border-white/10'} border rounded-lg px-3 py-2 grow`}>
                    <div className={`text-[9px] ${algo.textColor === 'text-emerald-400' ? 'text-emerald-400/70' : 'text-slate-400'} uppercase tracking-wider mb-1`}>
                      {algo.isDev ? 'Coming Soon' : `${algo.returnLabel} (1Y)`}
                    </div>
                    <div className={`${algo.isDev ? 'text-lg tracking-widest uppercase' : 'text-xl'} font-bold ${algo.textColor}`}>{algo.return}</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 grow text-center">
                    <div className="text-[9px] text-slate-400 uppercase tracking-wider mb-1">Asset</div>
                    <div className="text-sm font-bold text-white">EURUSD</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 grow text-center">
                    <div className="text-[9px] text-slate-400 uppercase tracking-wider mb-1">Type</div>
                    <div className="text-sm font-bold text-white">{algo.type.replace('Best ', '')}</div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6 text-emerald-400" />,
      title: 'Dynamic Compounding Logic',
      badge: 'Profit Multiplier',
      description: 'When in profit, the algo dynamically scales up your lot sizes to exponentially boost returns. During drawdowns, a smart recovery mechanism activates to safely navigate back to profitability.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
      title: 'Major News Close Protection',
      badge: 'Capital Defense',
      description: 'Automatically closes open positions and pauses trading before and after high-impact red folder news events to avoid irrational spread widening.'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: 'Overnight Position Protection',
      badge: 'Swap Avoidance',
      description: 'Ensures trades are closed before the daily rollover to avoid costly swap fees and protect against unexpected overnight volatility gaps.'
    }
  ];

  return (
    <section id="algos" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Engineering <span className="text-yellow-400">Alpha</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Our algorithms utilize an advanced compounding engine alongside strict capital protection modules.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-slate-900/50 border border-white/5 rounded-2xl p-8 hover:bg-slate-900 hover:border-yellow-400/30 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-yellow-400/10 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <div className="bg-white/5 border border-white/10 text-xs font-semibold px-3 py-1 rounded-full text-slate-300">
                  {f.badge}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Performance = () => {
  const [algo, setAlgo] = useState('Alpha');
  const [timeframe, setTimeframe] = useState('1Y');

  const stats = {
    Alpha: {
      '1Y': { profit: '$54,797.39', pf: '1.35', dd: '9.48% ($5,477.90)' },
      '4Y': { profit: '$784,768.25', pf: '1.22', dd: '27.18% ($148,424.18)' }
    },
    Beta: {
      '1Y': { profit: '$2,602.40', pf: '1.42', dd: '13.13% ($1,446.45)' },
      '4Y': { profit: '$7,271.59', pf: '1.23', dd: '17.25% ($2,952.45)' }
    },
    Theta: {
      '1Y': { profit: 'TBD', pf: 'TBD', dd: 'TBD' },
      '4Y': { profit: 'TBD', pf: 'TBD', dd: 'TBD' }
    }
  };

  const currentStats = stats[algo][timeframe];

  // Dummy chart paths for visual difference
  const chartPaths = {
  "Alpha_1_Year": "M 0.0 179.4 L 1.0 180.0 L 2.0 179.9 L 2.9 179.3 L 3.9 178.0 L 4.9 177.3 L 5.9 178.6 L 6.8 177.9 L 7.8 177.8 L 8.8 177.1 L 9.8 175.7 L 10.7 176.4 L 11.7 176.3 L 12.7 177.0 L 13.7 176.9 L 14.6 177.6 L 15.6 176.2 L 16.6 176.8 L 17.6 175.4 L 18.6 176.0 L 19.5 176.0 L 20.5 175.3 L 21.5 175.2 L 22.5 174.5 L 23.4 172.9 L 24.4 172.1 L 25.4 170.5 L 26.4 169.6 L 27.3 171.2 L 28.3 170.4 L 29.3 168.6 L 30.3 169.4 L 31.3 169.4 L 32.2 170.1 L 33.2 170.1 L 34.2 169.2 L 35.2 169.1 L 36.1 169.9 L 37.1 168.2 L 38.1 167.3 L 39.1 167.2 L 40.0 166.3 L 41.0 164.4 L 42.0 165.3 L 43.0 165.2 L 43.9 164.2 L 44.9 162.3 L 45.9 163.2 L 46.9 163.1 L 47.9 162.1 L 48.8 162.0 L 49.8 161.0 L 50.8 160.9 L 51.8 161.9 L 52.7 161.8 L 53.7 162.7 L 54.7 162.6 L 55.7 163.5 L 56.6 161.5 L 57.6 162.5 L 58.6 162.4 L 59.6 163.3 L 60.5 165.1 L 61.5 166.0 L 62.5 164.0 L 63.5 163.1 L 64.5 161.0 L 65.4 162.0 L 66.4 163.8 L 67.4 162.8 L 68.4 162.7 L 69.3 161.7 L 70.3 161.6 L 71.3 162.6 L 72.3 164.4 L 73.2 165.2 L 74.2 165.2 L 75.2 164.2 L 76.2 164.1 L 77.1 163.1 L 78.1 163.0 L 79.1 164.0 L 80.1 163.9 L 81.1 162.9 L 82.0 162.8 L 83.0 163.7 L 84.0 163.6 L 85.0 164.5 L 85.9 164.5 L 86.9 163.5 L 87.9 163.4 L 88.9 164.3 L 89.8 164.2 L 90.8 163.2 L 91.8 163.1 L 92.8 164.0 L 93.8 164.0 L 94.7 164.8 L 95.7 162.9 L 96.7 163.8 L 97.7 163.7 L 98.6 162.7 L 99.6 160.7 L 100.6 161.6 L 101.6 163.5 L 102.5 164.4 L 103.5 162.4 L 104.5 161.3 L 105.5 161.3 L 106.4 162.2 L 107.4 162.1 L 108.4 163.0 L 109.4 164.8 L 110.4 163.9 L 111.3 163.8 L 112.3 162.8 L 113.3 162.7 L 114.3 161.7 L 115.2 163.5 L 116.2 164.4 L 117.2 162.5 L 118.2 161.4 L 119.1 161.4 L 120.1 162.3 L 121.1 162.2 L 122.1 163.1 L 123.0 163.1 L 124.0 162.0 L 125.0 162.0 L 126.0 162.9 L 127.0 164.7 L 127.9 163.7 L 128.9 161.7 L 129.9 162.6 L 130.9 164.5 L 131.8 165.3 L 132.8 165.3 L 133.8 164.3 L 134.8 166.1 L 135.7 165.1 L 136.7 165.0 L 137.7 164.1 L 138.7 165.8 L 139.6 166.7 L 140.6 166.6 L 141.6 165.7 L 142.6 163.7 L 143.6 164.6 L 144.5 162.7 L 145.5 161.7 L 146.5 163.5 L 147.5 162.5 L 148.4 164.3 L 149.4 163.4 L 150.4 165.1 L 151.4 164.2 L 152.3 162.2 L 153.3 163.1 L 154.3 161.1 L 155.3 160.0 L 156.3 159.9 L 157.2 160.9 L 158.2 162.8 L 159.2 163.7 L 160.2 163.6 L 161.1 164.5 L 162.1 164.4 L 163.1 165.3 L 164.1 167.0 L 165.0 166.1 L 166.0 164.2 L 167.0 163.2 L 168.0 161.2 L 168.9 160.1 L 169.9 158.0 L 170.9 159.0 L 171.9 158.9 L 172.9 157.8 L 173.8 157.7 L 174.8 156.6 L 175.8 158.6 L 176.8 157.5 L 177.7 157.4 L 178.7 156.3 L 179.7 153.9 L 180.7 155.0 L 181.6 152.6 L 182.6 151.4 L 183.6 153.6 L 184.6 152.4 L 185.5 149.9 L 186.5 151.1 L 187.5 153.3 L 188.5 152.1 L 189.5 152.0 L 190.4 150.8 L 191.4 153.0 L 192.4 154.1 L 193.4 154.0 L 194.3 152.8 L 195.3 152.7 L 196.3 153.9 L 197.3 153.8 L 198.2 152.5 L 199.2 154.8 L 200.2 155.8 L 201.2 157.9 L 202.1 158.9 L 203.1 160.9 L 204.1 161.9 L 205.1 161.8 L 206.1 162.7 L 207.0 162.6 L 208.0 161.6 L 209.0 159.5 L 210.0 160.5 L 210.9 160.4 L 211.9 159.3 L 212.9 157.1 L 213.9 158.1 L 214.8 158.0 L 215.8 159.0 L 216.8 159.0 L 217.8 159.9 L 218.8 159.9 L 219.7 160.8 L 220.7 160.7 L 221.7 159.7 L 222.7 157.5 L 223.6 158.5 L 224.6 158.4 L 225.6 157.3 L 226.6 157.2 L 227.5 156.1 L 228.5 153.7 L 229.5 154.8 L 230.5 154.7 L 231.4 153.5 L 232.4 153.4 L 233.4 154.5 L 234.4 152.1 L 235.4 150.8 L 236.3 153.1 L 237.3 151.9 L 238.3 151.8 L 239.3 150.5 L 240.2 152.9 L 241.2 154.0 L 242.2 153.9 L 243.2 152.7 L 244.1 152.5 L 245.1 153.7 L 246.1 155.8 L 247.1 156.9 L 248.0 156.8 L 249.0 157.8 L 250.0 159.8 L 251.0 158.8 L 252.0 158.7 L 252.9 159.7 L 253.9 161.6 L 254.9 160.6 L 255.9 162.5 L 256.8 161.4 L 257.8 161.4 L 258.8 160.3 L 259.8 160.2 L 260.7 159.1 L 261.7 161.1 L 262.7 162.0 L 263.7 162.0 L 264.6 160.9 L 265.6 158.8 L 266.6 157.7 L 267.6 155.4 L 268.6 154.2 L 269.5 156.4 L 270.5 155.2 L 271.5 155.1 L 272.5 156.2 L 273.4 153.9 L 274.4 154.9 L 275.4 152.5 L 276.4 151.3 L 277.3 153.6 L 278.3 154.7 L 279.3 156.8 L 280.3 157.8 L 281.3 157.7 L 282.2 158.7 L 283.2 158.7 L 284.2 159.6 L 285.2 157.5 L 286.1 158.5 L 287.1 160.5 L 288.1 161.4 L 289.1 161.3 L 290.0 162.3 L 291.0 162.2 L 292.0 163.1 L 293.0 161.1 L 293.9 162.1 L 294.9 162.0 L 295.9 160.9 L 296.9 160.8 L 297.9 159.8 L 298.8 157.6 L 299.8 158.6 L 300.8 156.4 L 301.8 157.4 L 302.7 155.1 L 303.7 153.9 L 304.7 153.8 L 305.7 152.6 L 306.6 152.5 L 307.6 153.7 L 308.6 153.6 L 309.6 154.7 L 310.5 156.8 L 311.5 157.8 L 312.5 157.7 L 313.5 158.7 L 314.5 158.7 L 315.4 157.6 L 316.4 159.6 L 317.4 160.6 L 318.4 162.5 L 319.3 163.4 L 320.3 161.3 L 321.3 160.3 L 322.3 160.2 L 323.2 161.2 L 324.2 161.1 L 325.2 162.1 L 326.2 163.9 L 327.1 162.9 L 328.1 160.9 L 329.1 159.8 L 330.1 157.6 L 331.1 156.5 L 332.0 156.4 L 333.0 157.4 L 334.0 155.1 L 335.0 156.2 L 335.9 153.9 L 336.9 155.0 L 337.9 154.9 L 338.9 153.7 L 339.8 153.6 L 340.8 154.7 L 341.8 154.6 L 342.8 155.7 L 343.8 153.3 L 344.7 152.1 L 345.7 149.5 L 346.7 150.7 L 347.7 153.0 L 348.6 154.1 L 349.6 154.0 L 350.6 155.1 L 351.6 155.0 L 352.5 153.8 L 353.5 153.7 L 354.5 152.5 L 355.5 152.4 L 356.4 153.5 L 357.4 153.4 L 358.4 152.2 L 359.4 149.7 L 360.4 148.3 L 361.3 148.2 L 362.3 149.4 L 363.3 149.3 L 364.3 150.5 L 365.2 147.9 L 366.2 149.1 L 367.2 149.0 L 368.2 147.7 L 369.1 144.9 L 370.1 143.5 L 371.1 140.6 L 372.1 142.0 L 373.0 139.0 L 374.0 137.4 L 375.0 137.3 L 376.0 135.7 L 377.0 135.6 L 377.9 137.1 L 378.9 136.9 L 379.9 135.3 L 380.9 132.1 L 381.8 130.4 L 382.8 133.4 L 383.8 131.8 L 384.8 128.3 L 385.7 126.5 L 386.7 129.8 L 387.7 131.3 L 388.7 131.2 L 389.6 129.5 L 390.6 132.6 L 391.6 134.1 L 392.6 137.1 L 393.6 135.5 L 394.5 132.2 L 395.5 133.7 L 396.5 136.7 L 397.5 135.1 L 398.4 131.8 L 399.4 130.1 L 400.4 130.0 L 401.4 131.5 L 402.3 128.1 L 403.3 126.3 L 404.3 122.6 L 405.3 120.7 L 406.3 116.7 L 407.2 114.7 L 408.2 110.5 L 409.2 112.5 L 410.2 108.2 L 411.1 105.9 L 412.1 105.8 L 413.1 103.5 L 414.1 103.3 L 415.0 100.9 L 416.0 105.2 L 417.0 107.3 L 418.0 111.2 L 418.9 109.1 L 419.9 108.9 L 420.9 106.7 L 421.9 110.7 L 422.9 108.5 L 423.8 104.1 L 424.8 106.2 L 425.8 110.2 L 426.8 108.0 L 427.7 103.5 L 428.7 105.6 L 429.7 101.0 L 430.7 98.6 L 431.6 93.6 L 432.6 91.1 L 433.6 85.8 L 434.6 88.3 L 435.5 93.0 L 436.5 90.5 L 437.5 90.2 L 438.5 87.6 L 439.5 87.4 L 440.4 89.8 L 441.4 84.5 L 442.4 81.7 L 443.4 81.5 L 444.3 84.0 L 445.3 89.0 L 446.3 86.3 L 447.3 80.8 L 448.2 83.3 L 449.2 83.1 L 450.2 80.3 L 451.2 80.1 L 452.1 82.7 L 453.1 77.0 L 454.1 74.1 L 455.1 73.9 L 456.1 70.9 L 457.0 70.6 L 458.0 73.4 L 459.0 67.3 L 460.0 70.1 L 460.9 63.9 L 461.9 60.6 L 462.9 66.5 L 463.9 69.3 L 464.8 69.0 L 465.8 65.9 L 466.8 71.5 L 467.8 74.3 L 468.8 68.2 L 469.7 65.1 L 470.7 58.7 L 471.7 55.4 L 472.7 48.5 L 473.6 44.9 L 474.6 44.6 L 475.6 47.9 L 476.6 47.6 L 477.5 50.8 L 478.5 43.7 L 479.5 47.0 L 480.5 46.7 L 481.4 50.0 L 482.4 49.7 L 483.4 52.9 L 484.4 52.6 L 485.4 49.1 L 486.3 48.9 L 487.3 45.3 L 488.3 51.8 L 489.3 48.3 L 490.2 48.0 L 491.2 44.4 L 492.2 37.1 L 493.2 40.5 L 494.1 32.9 L 495.1 36.4 L 496.1 36.1 L 497.1 32.3 L 498.0 24.4 L 499.0 28.1 L 500.0 20.0",
  "Alpha_4_Year": "M 0.0 179.2 L 0.9 179.3 L 1.8 179.3 L 2.7 179.4 L 3.6 179.4 L 4.5 179.3 L 5.4 179.4 L 6.3 179.5 L 7.2 179.6 L 8.1 179.5 L 9.0 179.6 L 9.9 179.6 L 10.8 179.5 L 11.6 179.6 L 12.5 179.6 L 13.4 179.7 L 14.3 179.7 L 15.2 179.7 L 16.1 179.7 L 17.0 179.7 L 17.9 179.7 L 18.8 179.7 L 19.7 179.7 L 20.6 179.7 L 21.5 179.8 L 22.4 179.8 L 23.3 179.9 L 24.2 179.9 L 25.1 180.0 L 26.0 179.9 L 26.9 180.0 L 27.8 179.9 L 28.7 180.0 L 29.6 179.8 L 30.5 179.8 L 31.4 179.7 L 32.3 179.7 L 33.2 179.8 L 34.1 179.6 L 34.9 179.7 L 35.8 179.7 L 36.7 179.5 L 37.6 179.5 L 38.5 179.5 L 39.4 179.4 L 40.3 179.4 L 41.2 179.4 L 42.1 179.3 L 43.0 179.3 L 43.9 179.2 L 44.8 179.0 L 45.7 178.9 L 46.6 179.1 L 47.5 179.1 L 48.4 179.0 L 49.3 179.0 L 50.2 178.9 L 51.1 178.9 L 52.0 178.8 L 52.9 178.9 L 53.8 179.0 L 54.7 178.9 L 55.6 178.8 L 56.5 178.7 L 57.3 178.6 L 58.2 178.4 L 59.1 178.6 L 60.0 178.5 L 60.9 178.4 L 61.8 178.4 L 62.7 178.4 L 63.6 178.3 L 64.5 178.5 L 65.4 178.4 L 66.3 178.4 L 67.2 178.3 L 68.1 178.2 L 69.0 178.2 L 69.9 178.1 L 70.8 178.0 L 71.7 178.0 L 72.6 177.9 L 73.5 178.0 L 74.4 178.0 L 75.3 177.9 L 76.2 177.8 L 77.1 177.5 L 78.0 177.5 L 78.9 177.3 L 79.7 177.5 L 80.6 177.5 L 81.5 177.6 L 82.4 177.6 L 83.3 177.7 L 84.2 177.4 L 85.1 177.4 L 86.0 177.2 L 86.9 176.9 L 87.8 176.9 L 88.7 176.6 L 89.6 176.6 L 90.5 176.6 L 91.4 176.8 L 92.3 177.0 L 93.2 176.9 L 94.1 176.6 L 95.0 176.7 L 95.9 176.5 L 96.8 176.7 L 97.7 176.7 L 98.6 176.5 L 99.5 176.5 L 100.4 176.2 L 101.3 176.0 L 102.2 176.0 L 103.0 176.0 L 103.9 175.9 L 104.8 175.7 L 105.7 175.7 L 106.6 175.4 L 107.5 175.4 L 108.4 175.4 L 109.3 175.6 L 110.2 175.3 L 111.1 175.1 L 112.0 174.8 L 112.9 174.7 L 113.8 174.7 L 114.7 174.4 L 115.6 174.4 L 116.5 174.1 L 117.4 174.3 L 118.3 174.3 L 119.2 174.9 L 120.1 174.8 L 121.0 174.8 L 121.9 174.8 L 122.8 174.2 L 123.7 174.5 L 124.6 174.1 L 125.4 174.1 L 126.3 174.4 L 127.2 174.1 L 128.1 173.7 L 129.0 173.4 L 129.9 172.7 L 130.8 171.9 L 131.7 171.9 L 132.6 171.4 L 133.5 171.8 L 134.4 172.1 L 135.3 172.5 L 136.2 172.5 L 137.1 172.0 L 138.0 172.4 L 138.9 172.4 L 139.8 172.0 L 140.7 171.9 L 141.6 171.9 L 142.5 171.9 L 143.4 171.8 L 144.3 171.8 L 145.2 171.8 L 146.1 171.7 L 147.0 171.7 L 147.8 171.7 L 148.7 171.2 L 149.6 170.3 L 150.5 171.1 L 151.4 171.5 L 152.3 171.1 L 153.2 171.8 L 154.1 172.6 L 155.0 172.2 L 155.9 172.1 L 156.8 171.7 L 157.7 172.1 L 158.6 172.0 L 159.5 172.0 L 160.4 172.4 L 161.3 172.3 L 162.2 172.7 L 163.1 172.3 L 164.0 171.8 L 164.9 171.8 L 165.8 171.8 L 166.7 171.7 L 167.6 172.1 L 168.5 171.7 L 169.4 171.2 L 170.3 170.8 L 171.1 170.7 L 172.0 170.7 L 172.9 171.5 L 173.8 171.9 L 174.7 171.8 L 175.6 171.8 L 176.5 171.8 L 177.4 172.1 L 178.3 172.1 L 179.2 172.5 L 180.1 172.4 L 181.0 172.0 L 181.9 172.4 L 182.8 172.3 L 183.7 172.3 L 184.6 172.3 L 185.5 172.6 L 186.4 171.8 L 187.3 171.4 L 188.2 171.3 L 189.1 171.7 L 190.0 172.1 L 190.9 172.0 L 191.8 171.6 L 192.7 171.2 L 193.5 171.5 L 194.4 170.6 L 195.3 171.0 L 196.2 170.6 L 197.1 170.5 L 198.0 170.5 L 198.9 169.5 L 199.8 170.0 L 200.7 169.9 L 201.6 170.8 L 202.5 170.3 L 203.4 170.7 L 204.3 170.2 L 205.2 170.2 L 206.1 169.7 L 207.0 169.6 L 207.9 169.6 L 208.8 169.5 L 209.7 169.5 L 210.6 169.5 L 211.5 169.9 L 212.4 170.3 L 213.3 169.3 L 214.2 169.8 L 215.1 170.7 L 215.9 169.7 L 216.8 169.7 L 217.7 169.6 L 218.6 169.6 L 219.5 170.0 L 220.4 170.0 L 221.3 169.9 L 222.2 169.4 L 223.1 168.3 L 224.0 167.7 L 224.9 167.7 L 225.8 166.4 L 226.7 167.6 L 227.6 166.9 L 228.5 166.2 L 229.4 166.2 L 230.3 165.5 L 231.2 164.8 L 232.1 164.0 L 233.0 163.2 L 233.9 162.3 L 234.8 162.3 L 235.7 162.2 L 236.6 162.9 L 237.5 162.1 L 238.4 162.8 L 239.2 163.5 L 240.1 162.7 L 241.0 164.1 L 241.9 164.0 L 242.8 164.7 L 243.7 164.6 L 244.6 163.8 L 245.5 164.5 L 246.4 164.4 L 247.3 164.4 L 248.2 164.3 L 249.1 165.0 L 250.0 165.6 L 250.9 166.8 L 251.8 165.5 L 252.7 164.7 L 253.6 164.0 L 254.5 163.2 L 255.4 161.5 L 256.3 163.0 L 257.2 163.7 L 258.1 163.7 L 259.0 164.3 L 259.9 163.5 L 260.8 164.9 L 261.6 164.1 L 262.5 164.1 L 263.4 164.7 L 264.3 164.7 L 265.2 163.9 L 266.1 163.8 L 267.0 164.5 L 267.9 164.4 L 268.8 162.9 L 269.7 162.0 L 270.6 162.0 L 271.5 161.1 L 272.4 160.1 L 273.3 160.9 L 274.2 160.9 L 275.1 161.6 L 276.0 161.6 L 276.9 159.8 L 277.8 158.7 L 278.7 157.7 L 279.6 158.6 L 280.5 158.5 L 281.4 159.4 L 282.3 159.3 L 283.2 160.1 L 284.1 160.0 L 284.9 160.8 L 285.8 159.9 L 286.7 158.9 L 287.6 157.9 L 288.5 156.8 L 289.4 156.7 L 290.3 156.6 L 291.2 155.4 L 292.1 154.2 L 293.0 154.2 L 293.9 154.1 L 294.8 155.1 L 295.7 156.1 L 296.6 154.9 L 297.5 154.8 L 298.4 153.6 L 299.3 152.3 L 300.2 152.2 L 301.1 150.8 L 302.0 149.4 L 302.9 149.3 L 303.8 147.8 L 304.7 149.1 L 305.6 150.3 L 306.5 148.8 L 307.3 150.1 L 308.2 152.5 L 309.1 153.6 L 310.0 152.3 L 310.9 150.9 L 311.8 152.1 L 312.7 151.9 L 313.6 151.9 L 314.5 153.0 L 315.4 151.6 L 316.3 152.8 L 317.2 150.2 L 318.1 151.3 L 319.0 148.6 L 319.9 148.5 L 320.8 149.7 L 321.7 150.9 L 322.6 149.5 L 323.5 150.7 L 324.4 149.3 L 325.3 150.5 L 326.2 151.6 L 327.1 152.8 L 328.0 151.4 L 328.9 151.3 L 329.7 152.5 L 330.6 151.1 L 331.5 152.3 L 332.4 150.9 L 333.3 150.8 L 334.2 149.4 L 335.1 147.9 L 336.0 146.3 L 336.9 146.2 L 337.8 146.1 L 338.7 144.4 L 339.6 142.7 L 340.5 144.2 L 341.4 145.6 L 342.3 145.5 L 343.2 143.8 L 344.1 143.7 L 345.0 143.5 L 345.9 145.0 L 346.8 144.8 L 347.7 143.1 L 348.6 144.6 L 349.5 144.4 L 350.4 141.1 L 351.3 142.6 L 352.2 142.4 L 353.0 142.3 L 353.9 140.5 L 354.8 138.6 L 355.7 138.4 L 356.6 140.1 L 357.5 138.1 L 358.4 139.7 L 359.3 139.6 L 360.2 137.7 L 361.1 135.6 L 362.0 137.3 L 362.9 140.7 L 363.8 137.0 L 364.7 136.8 L 365.6 136.7 L 366.5 132.6 L 367.4 132.4 L 368.3 130.1 L 369.2 125.5 L 370.1 122.8 L 371.0 125.1 L 371.9 124.9 L 372.8 119.7 L 373.7 119.4 L 374.6 121.8 L 375.4 126.4 L 376.3 126.2 L 377.2 123.6 L 378.1 118.3 L 379.0 118.1 L 379.9 120.5 L 380.8 117.7 L 381.7 114.7 L 382.6 117.2 L 383.5 117.0 L 384.4 116.8 L 385.3 113.8 L 386.2 113.5 L 387.1 110.4 L 388.0 110.1 L 388.9 112.8 L 389.8 115.4 L 390.7 109.4 L 391.6 109.1 L 392.5 111.9 L 393.4 108.6 L 394.3 108.3 L 395.2 111.1 L 396.1 110.8 L 397.0 116.3 L 397.8 110.3 L 398.7 107.0 L 399.6 106.7 L 400.5 109.6 L 401.4 109.3 L 402.3 106.0 L 403.2 102.5 L 404.1 98.8 L 405.0 98.5 L 405.9 94.6 L 406.8 94.3 L 407.7 97.6 L 408.6 97.3 L 409.5 100.5 L 410.4 96.7 L 411.3 99.9 L 412.2 99.6 L 413.1 102.7 L 414.0 105.7 L 414.9 108.5 L 415.8 111.3 L 416.7 113.9 L 417.6 113.7 L 418.5 116.3 L 419.4 113.2 L 420.3 115.8 L 421.1 118.3 L 422.0 118.0 L 422.9 117.8 L 423.8 120.2 L 424.7 117.4 L 425.6 122.3 L 426.5 116.9 L 427.4 116.7 L 428.3 113.7 L 429.2 110.5 L 430.1 107.2 L 431.0 100.4 L 431.9 103.5 L 432.8 99.8 L 433.7 96.0 L 434.6 95.7 L 435.5 91.7 L 436.4 87.6 L 437.3 83.2 L 438.2 82.8 L 439.1 73.8 L 440.0 77.9 L 440.9 73.0 L 441.8 77.1 L 442.7 81.1 L 443.5 80.7 L 444.4 76.0 L 445.3 80.0 L 446.2 75.3 L 447.1 79.3 L 448.0 79.0 L 448.9 82.9 L 449.8 82.5 L 450.7 82.2 L 451.6 81.8 L 452.5 89.5 L 453.4 93.0 L 454.3 88.9 L 455.2 92.4 L 456.1 88.2 L 457.0 91.8 L 457.9 98.7 L 458.8 94.8 L 459.7 90.8 L 460.6 86.6 L 461.5 86.3 L 462.4 89.9 L 463.3 93.3 L 464.2 96.6 L 465.1 96.4 L 465.9 88.6 L 466.8 95.8 L 467.7 95.5 L 468.6 98.7 L 469.5 94.8 L 470.4 86.9 L 471.3 82.5 L 472.2 77.9 L 473.1 77.5 L 474.0 72.6 L 474.9 81.1 L 475.8 80.7 L 476.7 76.0 L 477.6 75.6 L 478.5 70.7 L 479.4 65.5 L 480.3 65.1 L 481.2 64.7 L 482.1 69.1 L 483.0 68.7 L 483.9 73.0 L 484.8 63.1 L 485.7 62.6 L 486.6 67.1 L 487.5 61.7 L 488.4 56.1 L 489.2 50.3 L 490.1 49.8 L 491.0 49.4 L 491.9 48.9 L 492.8 53.9 L 493.7 47.9 L 494.6 47.4 L 495.5 46.9 L 496.4 40.7 L 497.3 34.1 L 498.2 27.2 L 499.1 20.0 L 500.0 20.3",
  "Beta_1_Year": "M 0.0 165.6 L 4.5 165.6 L 9.1 176.8 L 13.6 176.8 L 18.2 160.3 L 22.7 160.3 L 27.3 171.5 L 31.8 171.5 L 36.4 154.9 L 40.9 154.9 L 45.5 137.9 L 50.0 137.9 L 54.5 120.2 L 59.1 120.2 L 63.6 132.3 L 68.2 132.3 L 72.7 114.5 L 77.3 114.5 L 81.8 126.8 L 86.4 126.8 L 90.9 138.8 L 95.5 138.8 L 100.0 150.5 L 104.5 150.5 L 109.1 162.1 L 113.6 162.1 L 118.2 173.4 L 122.7 173.4 L 127.3 156.8 L 131.8 156.8 L 136.4 168.2 L 140.9 168.2 L 145.5 151.4 L 150.0 151.4 L 154.5 134.1 L 159.1 134.1 L 163.6 146.0 L 168.2 146.0 L 172.7 157.6 L 177.3 157.6 L 181.8 168.9 L 186.4 168.9 L 190.9 180.0 L 195.5 180.0 L 200.0 163.7 L 204.5 163.7 L 209.1 146.8 L 213.6 146.8 L 218.2 129.6 L 222.7 129.6 L 227.3 111.7 L 231.8 111.7 L 236.4 123.9 L 240.9 123.9 L 245.5 105.8 L 250.0 105.8 L 254.5 87.4 L 259.1 87.4 L 263.6 68.3 L 268.2 68.3 L 272.7 48.5 L 277.3 48.5 L 281.8 62.1 L 286.4 62.1 L 290.9 75.5 L 295.5 75.5 L 300.0 56.1 L 304.5 56.1 L 309.1 69.5 L 313.6 69.5 L 318.2 50.0 L 322.7 50.0 L 327.3 63.6 L 331.8 63.6 L 336.4 43.9 L 340.9 43.9 L 345.5 57.4 L 350.0 57.4 L 354.5 37.3 L 359.1 37.3 L 363.6 51.0 L 368.2 51.0 L 372.7 64.6 L 377.3 64.6 L 381.8 77.8 L 386.4 77.8 L 390.9 90.8 L 395.5 90.8 L 400.0 103.5 L 404.5 103.5 L 409.1 84.9 L 413.6 84.9 L 418.2 97.7 L 422.7 97.7 L 427.3 78.9 L 431.8 78.9 L 436.4 59.5 L 440.9 59.5 L 445.5 72.7 L 450.0 72.7 L 454.5 53.2 L 459.1 53.2 L 463.6 32.9 L 468.2 32.9 L 472.7 46.8 L 477.3 46.8 L 481.8 60.4 L 486.4 60.4 L 490.9 40.5 L 495.5 40.5 L 500.0 20.0",
  "Beta_4_Year": "M 0.0 169.4 L 1.1 169.4 L 2.2 173.5 L 3.3 173.5 L 4.5 177.5 L 5.6 177.5 L 6.7 171.7 L 7.8 171.7 L 8.9 175.7 L 10.0 175.7 L 11.2 169.8 L 12.3 169.8 L 13.4 173.9 L 14.5 173.9 L 15.6 177.9 L 16.7 177.9 L 17.9 172.0 L 19.0 172.0 L 20.1 176.1 L 21.2 176.1 L 22.3 180.0 L 23.4 180.0 L 24.6 174.2 L 25.7 174.2 L 26.8 178.2 L 27.9 178.2 L 29.0 172.3 L 30.1 172.3 L 31.3 176.4 L 32.4 176.4 L 33.5 170.5 L 34.6 170.5 L 35.7 164.4 L 36.8 164.4 L 37.9 158.2 L 39.1 158.2 L 40.2 162.5 L 41.3 162.5 L 42.4 166.7 L 43.5 166.7 L 44.6 160.5 L 45.8 160.5 L 46.9 154.1 L 48.0 154.1 L 49.1 147.5 L 50.2 147.5 L 51.3 152.0 L 52.5 152.0 L 53.6 156.4 L 54.7 156.4 L 55.8 160.8 L 56.9 160.8 L 58.0 154.4 L 59.2 154.4 L 60.3 158.8 L 61.4 158.8 L 62.5 152.3 L 63.6 152.3 L 64.7 145.7 L 65.8 145.7 L 67.0 150.3 L 68.1 150.3 L 69.2 154.8 L 70.3 154.8 L 71.4 148.2 L 72.5 148.2 L 73.7 152.7 L 74.8 152.7 L 75.9 157.1 L 77.0 157.1 L 78.1 161.5 L 79.2 161.5 L 80.4 155.1 L 81.5 155.1 L 82.6 148.5 L 83.7 148.5 L 84.8 141.8 L 85.9 141.8 L 87.1 146.5 L 88.2 146.5 L 89.3 151.0 L 90.4 151.0 L 91.5 144.4 L 92.6 144.4 L 93.8 148.9 L 94.9 148.9 L 96.0 153.3 L 97.1 153.3 L 98.2 146.7 L 99.3 146.7 L 100.4 151.3 L 101.6 151.3 L 102.7 144.6 L 103.8 144.6 L 104.9 149.2 L 106.0 149.2 L 107.1 153.7 L 108.3 153.7 L 109.4 158.0 L 110.5 158.0 L 111.6 151.6 L 112.7 151.6 L 113.8 156.0 L 115.0 156.0 L 116.1 149.5 L 117.2 149.5 L 118.3 154.0 L 119.4 154.0 L 120.5 158.4 L 121.7 158.4 L 122.8 162.7 L 123.9 162.7 L 125.0 156.4 L 126.1 156.4 L 127.2 149.8 L 128.3 149.8 L 129.5 143.1 L 130.6 143.1 L 131.7 136.2 L 132.8 136.2 L 133.9 141.0 L 135.0 141.0 L 136.2 145.6 L 137.3 145.6 L 138.4 150.2 L 139.5 150.2 L 140.6 154.6 L 141.7 154.6 L 142.9 159.0 L 144.0 159.0 L 145.1 152.6 L 146.2 152.6 L 147.3 156.9 L 148.4 156.9 L 149.6 161.3 L 150.7 161.3 L 151.8 155.0 L 152.9 155.0 L 154.0 148.4 L 155.1 148.4 L 156.3 153.0 L 157.4 153.0 L 158.5 157.4 L 159.6 157.4 L 160.7 150.9 L 161.8 150.9 L 162.9 155.3 L 164.1 155.3 L 165.2 148.8 L 166.3 148.8 L 167.4 153.3 L 168.5 153.3 L 169.6 146.7 L 170.8 146.7 L 171.9 151.3 L 173.0 151.3 L 174.1 155.7 L 175.2 155.7 L 176.3 160.0 L 177.5 160.0 L 178.6 153.6 L 179.7 153.6 L 180.8 158.0 L 181.9 158.0 L 183.0 151.5 L 184.2 151.5 L 185.3 144.9 L 186.4 144.9 L 187.5 138.0 L 188.6 138.0 L 189.7 142.8 L 190.8 142.8 L 192.0 147.4 L 193.1 147.4 L 194.2 151.9 L 195.3 151.9 L 196.4 145.2 L 197.5 145.2 L 198.7 138.4 L 199.8 138.4 L 200.9 131.4 L 202.0 131.4 L 203.1 136.3 L 204.2 136.3 L 205.4 141.0 L 206.5 141.0 L 207.6 145.7 L 208.7 145.7 L 209.8 150.3 L 210.9 150.3 L 212.1 143.6 L 213.2 143.6 L 214.3 148.2 L 215.4 148.2 L 216.5 141.4 L 217.6 141.4 L 218.8 146.0 L 219.9 146.0 L 221.0 139.2 L 222.1 139.2 L 223.2 143.9 L 224.3 143.9 L 225.4 148.5 L 226.6 148.5 L 227.7 141.8 L 228.8 141.8 L 229.9 134.9 L 231.0 134.9 L 232.1 127.7 L 233.3 127.7 L 234.4 132.6 L 235.5 132.6 L 236.6 137.5 L 237.7 137.5 L 238.8 130.4 L 240.0 130.4 L 241.1 123.0 L 242.2 123.0 L 243.3 128.1 L 244.4 128.1 L 245.5 120.7 L 246.7 120.7 L 247.8 125.8 L 248.9 125.8 L 250.0 130.7 L 251.1 130.7 L 252.2 123.4 L 253.3 123.4 L 254.5 128.3 L 255.6 128.3 L 256.7 121.0 L 257.8 121.0 L 258.9 113.4 L 260.0 113.4 L 261.2 118.6 L 262.3 118.6 L 263.4 123.6 L 264.5 123.6 L 265.6 116.1 L 266.7 116.1 L 267.9 121.3 L 269.0 121.3 L 270.1 113.7 L 271.2 113.7 L 272.3 105.9 L 273.4 105.9 L 274.6 97.9 L 275.7 97.9 L 276.8 103.4 L 277.9 103.4 L 279.0 108.8 L 280.1 108.8 L 281.3 100.9 L 282.4 100.9 L 283.5 106.4 L 284.6 106.4 L 285.7 111.7 L 286.8 111.7 L 287.9 103.8 L 289.1 103.8 L 290.2 109.2 L 291.3 109.2 L 292.4 101.3 L 293.5 101.3 L 294.6 93.1 L 295.8 93.1 L 296.9 84.8 L 298.0 84.8 L 299.1 90.6 L 300.2 90.6 L 301.3 82.1 L 302.5 82.1 L 303.6 87.9 L 304.7 87.9 L 305.8 93.6 L 306.9 93.6 L 308.0 85.2 L 309.2 85.2 L 310.3 91.0 L 311.4 91.0 L 312.5 96.6 L 313.6 96.6 L 314.7 102.2 L 315.8 102.2 L 317.0 94.0 L 318.1 94.0 L 319.2 99.6 L 320.3 99.6 L 321.4 105.1 L 322.5 105.1 L 323.7 97.1 L 324.8 97.1 L 325.9 88.8 L 327.0 88.8 L 328.1 80.2 L 329.2 80.2 L 330.4 71.4 L 331.5 71.4 L 332.6 77.5 L 333.7 77.5 L 334.8 68.6 L 335.9 68.6 L 337.1 74.8 L 338.2 74.8 L 339.3 65.9 L 340.4 65.9 L 341.5 72.0 L 342.6 72.0 L 343.8 78.1 L 344.9 78.1 L 346.0 69.2 L 347.1 69.2 L 348.2 60.1 L 349.3 60.1 L 350.4 50.6 L 351.6 50.6 L 352.7 57.1 L 353.8 57.1 L 354.9 63.4 L 356.0 63.4 L 357.1 69.6 L 358.3 69.6 L 359.4 60.5 L 360.5 60.5 L 361.6 51.0 L 362.7 51.0 L 363.8 41.4 L 365.0 41.4 L 366.1 48.0 L 367.2 48.0 L 368.3 54.6 L 369.4 54.6 L 370.5 60.9 L 371.7 60.9 L 372.8 67.2 L 373.9 67.2 L 375.0 58.0 L 376.1 58.0 L 377.2 48.5 L 378.3 48.5 L 379.5 55.1 L 380.6 55.1 L 381.7 45.6 L 382.8 45.6 L 383.9 35.8 L 385.0 35.8 L 386.2 25.6 L 387.3 25.6 L 388.4 32.6 L 389.5 32.6 L 390.6 39.3 L 391.7 39.3 L 392.9 29.3 L 394.0 29.3 L 395.1 36.2 L 396.2 36.2 L 397.3 26.1 L 398.4 26.1 L 399.6 33.1 L 400.7 33.1 L 401.8 39.9 L 402.9 39.9 L 404.0 46.6 L 405.1 46.6 L 406.3 53.2 L 407.4 53.2 L 408.5 59.6 L 409.6 59.6 L 410.7 65.8 L 411.8 65.8 L 412.9 56.6 L 414.1 56.6 L 415.2 47.1 L 416.3 47.1 L 417.4 53.6 L 418.5 53.6 L 419.6 60.0 L 420.8 60.0 L 421.9 50.6 L 423.0 50.6 L 424.1 40.9 L 425.2 40.9 L 426.3 47.6 L 427.5 47.6 L 428.6 54.1 L 429.7 54.1 L 430.8 60.6 L 431.9 60.6 L 433.0 66.8 L 434.2 66.8 L 435.3 57.6 L 436.4 57.6 L 437.5 63.9 L 438.6 63.9 L 439.7 54.6 L 440.8 54.6 L 442.0 61.0 L 443.1 61.0 L 444.2 67.2 L 445.3 67.2 L 446.4 73.4 L 447.5 73.4 L 448.7 79.4 L 449.8 79.4 L 450.9 70.6 L 452.0 70.6 L 453.1 61.5 L 454.2 61.5 L 455.4 52.1 L 456.5 52.1 L 457.6 58.5 L 458.7 58.5 L 459.8 49.1 L 460.9 49.1 L 462.1 39.4 L 463.2 39.4 L 464.3 29.5 L 465.4 29.5 L 466.5 36.4 L 467.6 36.4 L 468.8 43.2 L 469.9 43.2 L 471.0 33.3 L 472.1 33.3 L 473.2 23.2 L 474.3 23.2 L 475.4 30.2 L 476.6 30.2 L 477.7 20.0 L 478.8 20.0 L 479.9 27.1 L 481.0 27.1 L 482.1 34.0 L 483.3 34.0 L 484.4 40.9 L 485.5 40.9 L 486.6 47.5 L 487.7 47.5 L 488.8 37.7 L 490.0 37.7 L 491.1 44.5 L 492.2 44.5 L 493.3 34.6 L 494.4 34.6 L 495.5 41.4 L 496.7 41.4 L 497.8 31.4 L 498.9 31.4 L 500.0 21.1"
};

  return (
    <section id="performance" className="py-24 bg-slate-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Compounding <span className="text-emerald-400">In Action</span></h2>
            <p className="text-slate-400 text-lg mb-8">
              Select an algorithm and timeframe to view historical backtest and forward-test data.
            </p>

            {/* Algo Selector */}
            <div className="flex gap-2 mb-6 p-1 bg-slate-950 rounded-lg border border-white/10 w-fit">
              {['Alpha', 'Beta', 'Theta'].map(a => (
                <button 
                  key={a}
                  onClick={() => setAlgo(a)}
                  className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${algo === a ? 'bg-yellow-400 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                >
                  {a}
                </button>
              ))}
            </div>

            {/* Timeframe Selector */}
            <div className="flex gap-2 mb-8">
              {['1Y', '4Y'].map(t => (
                <button 
                  key={t}
                  onClick={() => setTimeframe(t)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all ${timeframe === t ? 'bg-white/10 border-white/20 text-white' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
                >
                  {t === '1Y' ? '1 Year Stats' : '4 Year Stats'}
                </button>
              ))}
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-slate-300">Initial Deposit</span>
                <span className="font-mono font-bold text-white">$10,000.00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-slate-300">Total Net Profit</span>
                <span className="font-mono font-bold text-emerald-400 text-xl">{currentStats.profit}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-slate-300">Profit Factor</span>
                <span className="font-mono font-bold text-white">{currentStats.pf}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-slate-300">Max Equity Drawdown</span>
                <span className="font-mono font-bold text-white">{currentStats.dd}</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-sm text-emerald-100/70">Verified live accounts available to active subscribers. Past performance does not guarantee future results.</p>
            </div>

            <div className="mt-8">
              {algo === 'Theta' ? (
                <button disabled className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-800 text-slate-500 font-bold border border-white/5 cursor-not-allowed">
                  <Download className="w-4 h-4" /> MT5 Report (Under Development)
                </button>
              ) : (
                <a 
                  href={`reports/Apex_Algo_${algo}_${timeframe.replace('Y', '_Year')}.xlsx`} 
                  download 
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 transition-colors"
                >
                  <Download className="w-4 h-4" /> Download Full MT5 Report
                </a>
              )}
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-slate-950 p-6 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 z-10">
              <div className="bg-slate-800/80 px-3 py-1 rounded text-xs font-mono text-emerald-400 border border-emerald-400/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {algo} • {timeframe} DATA
              </div>
            </div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2 relative z-10">
              <LineChart className="w-5 h-5 text-slate-400" /> Equity Curve
            </h4>
            
            {algo !== 'Theta' ? (
                <>
                  <div className="relative h-64 w-full">
                    <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#34d399" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                        </linearGradient>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="2" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>
                      <line x1="0" y1="40" x2="500" y2="40" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="0" y1="100" x2="500" y2="100" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="0" y1="160" x2="500" y2="160" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
                      
                      {chartPaths[`${algo}_${timeframe.replace('Y', '_Year')}`] && (
                        <>
                            <path 
                              d={chartPaths[`${algo}_${timeframe.replace('Y', '_Year')}`]} 
                              fill="none" 
                              stroke="#34d399" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              filter="url(#glow)"
                              className="transition-all duration-500 ease-in-out"
                            />
                            <path 
                              d={`${chartPaths[`${algo}_${timeframe.replace('Y', '_Year')}`]} L 500 200 L 0 200 Z`} 
                              fill="url(#chartGradient)" 
                              className="transition-all duration-500 ease-in-out"
                            />
                        </>
                      )}
                    </svg>
                  </div>
                  <div className="flex justify-between mt-4 text-[10px] font-mono text-slate-500">
                    {timeframe === '1Y' ? (
                      <><span>OCT</span><span>DEC</span><span>FEB</span><span>APR</span><span>JUN</span><span>AUG</span><span>OCT</span></>
                    ) : (
                      <><span>2022</span><span>2023</span><span>2024</span><span>2025</span><span>2026</span></>
                    )}
                  </div>
                  <div className="mt-2 text-[9px] text-slate-600">Balance progression • historical backtest</div>
                </>
            ) : (
              <div className="absolute inset-0 bg-slate-950 p-6 flex items-center justify-center text-slate-500 font-mono z-20">
                <div className="text-center">
                  <LineChart className="w-8 h-8 mx-auto mb-4 opacity-50" />
                  <p>Theta EA is currently under development.</p>
                  <p className="text-xs mt-2 opacity-50">Performance data will be available soon.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "6 Months",
      price: "200",
      strikethrough: "300",
      period: "/6 mo",
      desc: "Perfect for testing the EA on smaller live accounts before scaling up.",
      features: [
        "1 MT5 Account License",
        "Includes ALL 3 Algos (Alpha, Beta, Theta)",
        "News & Overnight Protection",
        "Telegram Support",
        "Free Updates"
      ],
      cta: "Subscribe Now",
      highlight: false
    },
    {
      name: "12 Months",
      price: "300",
      strikethrough: "500",
      period: "/year",
      desc: "Our most popular option. Commit to a year of automated compounding.",
      features: [
        "2 MT5 Account Licenses",
        "Includes ALL 3 Algos (Alpha, Beta, Theta)",
        "News & Overnight Protection",
        "Priority Telegram Support",
        "Free Updates"
      ],
      cta: "Subscribe Now",
      highlight: true
    },
    {
      name: "Lifetime Access",
      price: "2,000",
      strikethrough: "3,500",
      period: " one-time",
      desc: "Own the algorithm outright. Direct download of the compiled .ex5 file.",
      features: [
        "Direct .ex5 File Download",
        "Unlimited Account Licenses",
        "Includes ALL 3 Algos (Alpha, Beta, Theta)",
        "No Expiration",
        "1-on-1 Setup Call via Telegram"
      ],
      cta: "Get Lifetime",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Choose Your <span className="text-yellow-400">License</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg mb-8">Transparent pricing with no hidden fees.</p>
          <div className="bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 font-bold px-6 py-3 rounded-full inline-flex items-center gap-2">
            <Zap className="w-5 h-5" /> ALL plans include access to ALL 3 Algos (Alpha, Beta, & Theta)
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`relative rounded-3xl p-8 ${plan.highlight ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.15)] transform md:-translate-y-4' : 'bg-slate-900/50 border border-white/10'}`}>
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-slate-950 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm h-10 mb-6">{plan.desc}</p>
              
              <div className="mb-8 flex flex-wrap items-end gap-2">
                <span className="text-3xl font-bold text-slate-500 line-through mb-1">${plan.strikethrough}</span>
                <span className="text-5xl font-extrabold text-white">${plan.price}</span>
                <span className="text-slate-400 font-medium mb-1">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {plan.name === 'Lifetime Access' && idx === 0 ? (
                      <Download className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                    )}
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href="https://t.me/apextradingalgo" target="_blank" rel="noreferrer" className={`block text-center w-full py-4 rounded-xl font-bold transition-all ${plan.highlight ? 'bg-yellow-400 hover:bg-yellow-500 text-slate-950' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "How does the compounding and recovery logic work?",
      a: "When in profit, Apex Trading Algo calculates your new equity highs and automatically scales up the lot sizes to boost returns exponentially. If you enter a drawdown phase, it engages a smart recovery mode that adjusts lot sizing and entry parameters to safely navigate back to profitability without over-leveraging."
    },
    {
      q: "Can I use this on MetaTrader 4 (MT4)?",
      a: "No. Apex Trading Algo is built natively for MetaTrader 5 using MQL5 to take advantage of superior execution speeds, accurate tick backtesting, and advanced order management."
    },
    {
      q: "What is the minimum recommended account balance?",
      a: "We recommend a minimum of $500 to allow the compounding logic enough margin to operate safely without triggering margin calls during minor drawdowns."
    },
    {
      q: "What brokers do you recommend?",
      a: "We recommend any regulated broker offering raw/ECN accounts with low spreads on EURUSD. Low latency to the broker server via a VPS is critical."
    },
    {
      q: "How does the Lifetime license work?",
      a: "With the lifetime license, you get the direct .ex5 file which you can run on unlimited MT5 accounts indefinitely without monthly or annual rebilling."
    }
  ];

  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 bg-slate-900 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked <span className="text-yellow-400">Questions</span></h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-950 border border-white/5 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-semibold text-white">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-4 pt-2 text-slate-400">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black py-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="h-6 w-6 text-yellow-400" />
            <span className="text-lg font-bold text-white">
              APEX<span className="text-yellow-400">TRADING</span>ALGO
            </span>
          </div>
          <p className="text-slate-500 text-sm max-w-md mb-4">
            Providing institutional-grade algorithmic compounding systems for retail traders globally.
          </p>
          <a href="https://t.me/apextradingalgo" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
            <MessageCircle className="w-5 h-5" /> Join our Telegram
          </a>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#algos" className="hover:text-yellow-400 transition-colors">The Algos</a></li>
            <li><a href="#performance" className="hover:text-yellow-400 transition-colors">Performance</a></li>
            <li><a href="#pricing" className="hover:text-yellow-400 transition-colors">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8 text-xs text-slate-600 space-y-4">
        <p><strong>HIGH RISK WARNING:</strong> Foreign exchange and algorithmic trading carries a high level of risk that may not be suitable for all investors. Leverage creates additional risk and loss exposure. Before you decide to trade foreign exchange, carefully consider your investment objectives, experience level, and risk tolerance.</p>
        <p>Apex Trading Algo and its developers are not registered financial advisors. The software provided is for educational and research purposes only. Past performance is not indicative of future results.</p>
        <p className="text-center pt-4">© {new Date().getFullYear()} Apex Trading Algo Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-yellow-400/30 selection:text-yellow-200">
      <Navbar />
      <Hero />
      <Features />
      <Performance />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
