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
              return: '+248.6%', 
              returnLabel: '2Y Net Return', 
              footnote: '*$10k to $34,858 (2Y Backtest)',
              textColor: 'text-emerald-400'
            },
            { 
              name: 'Beta', 
              type: 'Swing Engine', 
              return: 'Under Dev', 
              returnLabel: 'Coming Soon', 
              footnote: null,
              textColor: 'text-white tracking-widest',
              isDev: true
            },
            { 
              name: 'Theta', 
              type: 'Trend Scalper', 
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
                      {algo.isDev ? 'Coming Soon' : algo.returnLabel}
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
  const [timeframe, setTimeframe] = useState('2Y');

  const stats = {
    Alpha: {
      '6M': { profit: '$2,462.27', pf: '1.28', dd: '6.27% ($823.25)', rr: '1 : 1.78', winRate: '41.8%' },
      '1Y': { profit: '$5,993.47', pf: '1.25', dd: '9.71% ($1,199.80)', rr: '1 : 1.80', winRate: '41.1%' },
      '2Y': { profit: '$24,858.53', pf: '1.24', dd: '9.80% ($2,635.36)', rr: '1 : 1.80', winRate: '40.9%' }
    },
    Beta: {
      '6M': { profit: 'TBD', pf: 'TBD', dd: 'TBD', rr: 'TBD', winRate: 'TBD' },
      '1Y': { profit: 'TBD', pf: 'TBD', dd: 'TBD', rr: 'TBD', winRate: 'TBD' },
      '2Y': { profit: 'TBD', pf: 'TBD', dd: 'TBD', rr: 'TBD', winRate: 'TBD' }
    },
    Theta: {
      '6M': { profit: 'TBD', pf: 'TBD', dd: 'TBD', rr: 'TBD', winRate: 'TBD' },
      '1Y': { profit: 'TBD', pf: 'TBD', dd: 'TBD', rr: 'TBD', winRate: 'TBD' },
      '2Y': { profit: 'TBD', pf: 'TBD', dd: 'TBD', rr: 'TBD', winRate: 'TBD' }
    }
  };

  const currentStats = stats[algo][timeframe];

  // Dummy chart paths for visual difference
  const chartPaths = {
    "Alpha_6M": "M 0.0 160.7 L 1.7 160.7 L 3.3 163.4 L 5.0 163.4 L 6.7 158.6 L 8.4 161.3 L 10.0 161.3 L 11.7 163.9 L 13.4 166.5 L 15.1 169.1 L 16.7 169.1 L 18.4 164.4 L 20.1 166.9 L 21.7 169.6 L 23.4 169.6 L 25.1 174.8 L 26.8 174.8 L 28.4 177.4 L 30.1 177.4 L 31.8 180.0 L 33.4 175.4 L 35.1 170.6 L 36.8 170.6 L 38.5 168.4 L 40.1 168.4 L 41.8 171.0 L 43.5 171.0 L 45.2 168.9 L 46.8 168.9 L 48.5 162.1 L 50.2 162.1 L 51.8 152.5 L 53.5 152.5 L 55.2 155.3 L 56.9 155.3 L 58.5 150.3 L 60.2 153.1 L 61.9 155.7 L 63.5 155.7 L 65.2 153.5 L 66.9 153.5 L 68.6 148.5 L 70.2 148.5 L 71.9 154.0 L 73.6 154.0 L 75.3 156.7 L 76.9 151.7 L 78.6 151.7 L 80.3 141.8 L 81.9 141.8 L 83.6 144.7 L 85.3 144.7 L 87.0 142.6 L 88.6 142.6 L 90.3 137.6 L 92.0 140.3 L 93.6 140.3 L 95.3 143.2 L 97.0 146.1 L 98.7 148.8 L 100.3 148.8 L 102.0 151.5 L 103.7 146.5 L 105.4 146.5 L 107.0 149.3 L 108.7 152.0 L 110.4 147.0 L 112.0 149.8 L 113.7 144.8 L 115.4 144.8 L 117.1 147.5 L 118.7 147.5 L 120.4 145.3 L 122.1 145.3 L 123.7 140.3 L 125.4 135.3 L 127.1 135.3 L 128.8 130.2 L 130.4 133.0 L 132.1 133.0 L 133.8 127.8 L 135.5 130.7 L 137.1 125.5 L 138.8 128.4 L 140.5 128.4 L 142.1 131.3 L 143.8 134.1 L 145.5 129.0 L 147.2 129.0 L 148.8 131.8 L 150.5 126.6 L 152.2 121.5 L 153.8 124.4 L 155.5 124.4 L 157.2 127.3 L 158.9 130.3 L 160.5 130.3 L 162.2 133.2 L 163.9 136.0 L 165.6 138.8 L 167.2 133.6 L 168.9 136.5 L 170.6 136.5 L 172.2 139.3 L 173.9 139.3 L 175.6 142.1 L 177.3 136.9 L 178.9 139.7 L 180.6 134.5 L 182.3 134.5 L 183.9 138.0 L 185.6 132.9 L 187.3 132.9 L 189.0 122.5 L 190.6 122.5 L 192.3 125.5 L 194.0 125.5 L 195.7 131.1 L 197.3 131.1 L 199.0 134.0 L 200.7 136.9 L 202.3 136.9 L 204.0 131.7 L 205.7 126.5 L 207.4 129.4 L 209.0 129.4 L 210.7 124.2 L 212.4 118.8 L 214.0 118.8 L 215.7 124.6 L 217.4 127.4 L 219.1 127.4 L 220.7 130.3 L 222.4 130.3 L 224.1 125.0 L 225.8 127.9 L 227.4 130.8 L 229.1 130.8 L 230.8 125.6 L 232.4 120.5 L 234.1 115.3 L 235.8 115.3 L 237.5 109.9 L 239.1 104.5 L 240.8 99.2 L 242.5 93.6 L 244.1 96.7 L 245.8 96.7 L 247.5 99.7 L 249.2 99.7 L 250.8 102.8 L 252.5 105.9 L 254.2 109.0 L 255.9 109.0 L 257.5 103.6 L 259.2 98.2 L 260.9 92.7 L 262.5 92.7 L 264.2 95.7 L 265.9 90.1 L 267.6 93.2 L 269.2 93.2 L 270.9 96.7 L 272.6 99.7 L 274.2 94.2 L 275.9 94.2 L 277.6 88.6 L 279.3 83.1 L 280.9 86.2 L 282.6 86.2 L 284.3 89.4 L 286.0 95.5 L 287.6 95.5 L 289.3 90.0 L 291.0 90.0 L 292.6 87.4 L 294.3 87.4 L 296.0 90.7 L 297.7 85.3 L 299.3 85.3 L 301.0 88.7 L 302.7 91.7 L 304.3 91.7 L 306.0 89.5 L 307.7 89.5 L 309.4 93.3 L 311.0 93.3 L 312.7 87.8 L 314.4 90.8 L 316.1 94.3 L 317.7 88.7 L 319.4 91.8 L 321.1 91.8 L 322.7 94.8 L 324.4 94.8 L 326.1 92.2 L 327.8 92.2 L 329.4 96.0 L 331.1 90.3 L 332.8 90.3 L 334.4 84.7 L 336.1 87.8 L 337.8 87.8 L 339.5 76.2 L 341.1 76.2 L 342.8 79.4 L 344.5 79.4 L 346.2 76.8 L 347.8 76.8 L 349.5 80.0 L 351.2 80.0 L 352.8 77.5 L 354.5 77.5 L 356.2 80.6 L 357.9 74.9 L 359.5 74.9 L 361.2 69.1 L 362.9 63.3 L 364.5 57.4 L 366.2 57.4 L 367.9 45.4 L 369.6 45.4 L 371.2 48.7 L 372.9 52.1 L 374.6 52.1 L 376.3 55.4 L 377.9 58.6 L 379.6 61.9 L 381.3 61.9 L 382.9 55.9 L 384.6 49.9 L 386.3 53.2 L 388.0 47.2 L 389.6 47.2 L 391.3 50.6 L 393.0 50.6 L 394.6 54.0 L 396.3 48.0 L 398.0 41.9 L 399.7 41.9 L 401.3 45.3 L 403.0 39.2 L 404.7 33.0 L 406.4 33.0 L 408.0 36.5 L 409.7 40.0 L 411.4 43.4 L 413.0 37.2 L 414.7 40.6 L 416.4 40.6 L 418.1 43.9 L 419.7 43.9 L 421.4 37.8 L 423.1 41.2 L 424.7 35.1 L 426.4 35.1 L 428.1 32.3 L 429.8 32.3 L 431.4 35.8 L 433.1 29.6 L 434.8 29.6 L 436.5 23.3 L 438.1 27.5 L 439.8 31.1 L 441.5 31.1 L 443.1 24.8 L 444.8 28.3 L 446.5 21.9 L 448.2 21.9 L 449.8 29.2 L 451.5 29.2 L 453.2 32.7 L 454.8 32.7 L 456.5 20.0 L 458.2 20.0 L 459.9 23.5 L 461.5 27.0 L 463.2 27.0 L 464.9 30.4 L 466.6 24.1 L 468.2 27.6 L 469.9 27.6 L 471.6 21.2 L 473.2 24.7 L 474.9 24.7 L 476.6 28.2 L 478.3 31.7 L 479.9 35.2 L 481.6 35.2 L 483.3 38.7 L 484.9 42.5 L 486.6 45.8 L 488.3 45.8 L 490.0 49.2 L 491.6 52.6 L 493.3 46.4 L 495.0 49.8 L 496.7 49.8 L 498.3 53.2 L 500.0 49.2",
    "Alpha_1Y": "M 0.0 178.6 L 1.7 180.0 L 3.3 177.4 L 5.0 173.5 L 6.7 174.9 L 8.4 177.8 L 10.0 175.2 L 11.7 174.1 L 13.4 173.0 L 15.1 175.8 L 16.7 178.6 L 18.4 177.5 L 20.1 178.9 L 21.7 177.8 L 23.4 176.7 L 25.1 175.6 L 26.8 177.0 L 28.4 175.9 L 30.1 174.7 L 31.8 169.6 L 33.4 168.5 L 35.1 169.9 L 36.8 164.6 L 38.5 163.3 L 40.1 164.8 L 41.8 165.0 L 43.5 166.5 L 45.2 165.3 L 46.8 168.3 L 48.5 171.2 L 50.2 172.6 L 51.8 171.4 L 53.5 166.4 L 55.2 163.7 L 56.9 162.5 L 58.5 161.3 L 60.2 164.2 L 61.9 167.1 L 63.5 168.6 L 65.2 171.5 L 66.9 174.3 L 68.6 169.2 L 70.2 170.7 L 71.9 169.5 L 73.6 169.7 L 75.3 167.2 L 76.9 162.0 L 78.6 159.3 L 80.3 153.9 L 81.9 152.6 L 83.6 147.1 L 85.3 148.6 L 87.0 147.4 L 88.6 146.1 L 90.3 140.4 L 92.0 139.1 L 93.6 140.6 L 95.3 143.9 L 97.0 142.6 L 98.7 141.3 L 100.3 140.0 L 102.0 134.2 L 103.7 135.8 L 105.4 139.0 L 107.0 142.3 L 108.7 139.4 L 110.4 138.2 L 112.0 141.5 L 113.7 144.6 L 115.4 143.3 L 117.1 144.9 L 118.7 143.6 L 120.4 146.7 L 122.1 149.9 L 123.7 147.0 L 125.4 141.3 L 127.1 140.0 L 128.8 143.2 L 130.4 142.0 L 132.1 140.6 L 133.8 142.2 L 135.5 145.5 L 137.1 144.2 L 138.8 138.4 L 140.5 140.0 L 142.1 138.8 L 143.8 137.5 L 145.5 136.1 L 147.2 137.8 L 148.8 141.1 L 150.5 144.3 L 152.2 147.4 L 153.8 144.5 L 155.5 149.2 L 157.2 152.3 L 158.9 153.8 L 160.5 152.5 L 162.2 154.0 L 163.9 154.3 L 165.6 155.8 L 167.2 150.3 L 168.9 151.8 L 170.6 150.6 L 172.2 149.4 L 173.9 143.7 L 175.6 146.9 L 177.3 148.4 L 178.9 151.5 L 180.6 145.8 L 182.3 140.0 L 183.9 138.8 L 185.6 137.5 L 187.3 139.2 L 189.0 137.8 L 190.6 131.9 L 192.3 133.6 L 194.0 132.2 L 195.7 126.3 L 197.3 129.8 L 199.0 133.1 L 200.7 134.8 L 202.3 139.6 L 204.0 141.2 L 205.7 144.4 L 207.4 146.0 L 209.0 150.7 L 210.7 147.8 L 212.4 151.0 L 214.0 148.1 L 215.7 144.0 L 217.4 138.2 L 219.1 139.9 L 220.7 143.1 L 222.4 137.4 L 224.1 139.0 L 225.8 133.1 L 227.4 136.3 L 229.1 135.0 L 230.8 132.0 L 232.4 130.6 L 234.1 124.5 L 235.8 127.9 L 237.5 129.5 L 239.1 128.1 L 240.8 131.5 L 242.5 130.1 L 244.1 133.4 L 245.8 132.1 L 247.5 133.8 L 249.2 127.6 L 250.8 126.3 L 252.5 120.2 L 254.2 123.7 L 255.9 120.6 L 257.5 119.2 L 259.2 122.6 L 260.9 124.3 L 262.5 118.0 L 264.2 121.6 L 265.9 115.3 L 267.6 112.2 L 269.2 105.7 L 270.9 109.3 L 272.6 107.8 L 274.2 106.4 L 275.9 108.2 L 277.6 106.7 L 279.3 105.2 L 280.9 109.0 L 282.6 110.8 L 284.3 116.1 L 286.0 113.0 L 287.6 111.6 L 289.3 115.2 L 291.0 113.8 L 292.6 115.5 L 294.3 119.0 L 296.0 117.5 L 297.7 119.3 L 299.3 124.5 L 301.0 126.1 L 302.7 120.0 L 304.3 118.5 L 306.0 120.2 L 307.7 114.4 L 309.4 111.2 L 311.0 109.8 L 312.7 106.5 L 314.4 110.1 L 316.1 105.3 L 317.7 107.1 L 319.4 110.7 L 321.1 107.5 L 322.7 100.9 L 324.4 104.7 L 326.1 97.9 L 327.8 99.8 L 329.4 105.4 L 331.1 107.1 L 332.8 105.7 L 334.4 104.3 L 336.1 102.8 L 337.8 104.6 L 339.5 103.1 L 341.1 96.3 L 342.8 93.0 L 344.5 91.3 L 346.2 91.7 L 347.8 93.6 L 349.5 92.2 L 351.2 94.1 L 352.8 89.1 L 354.5 91.0 L 356.2 94.9 L 357.9 98.7 L 359.5 97.1 L 361.2 99.0 L 362.9 97.4 L 364.5 95.9 L 366.2 94.8 L 367.9 87.9 L 369.6 89.8 L 371.2 93.6 L 372.9 97.4 L 374.6 94.0 L 376.3 92.6 L 377.9 85.6 L 379.6 89.5 L 381.3 93.3 L 382.9 89.8 L 384.6 93.7 L 386.3 86.7 L 388.0 79.7 L 389.6 76.1 L 391.3 70.9 L 393.0 72.9 L 394.6 77.0 L 396.3 79.0 L 398.0 68.2 L 399.7 70.2 L 401.3 68.5 L 403.0 72.8 L 404.7 69.1 L 406.4 61.8 L 408.0 66.0 L 409.7 70.1 L 411.4 66.5 L 413.0 67.0 L 414.7 63.3 L 416.4 67.6 L 418.1 66.2 L 419.7 68.8 L 421.4 67.0 L 423.1 65.5 L 424.7 69.6 L 426.4 67.9 L 428.1 66.6 L 429.8 62.8 L 431.4 61.1 L 433.1 59.5 L 434.8 57.7 L 436.5 59.8 L 438.1 58.0 L 439.8 56.4 L 441.5 52.5 L 443.1 44.7 L 444.8 36.8 L 446.5 41.3 L 448.2 45.6 L 449.8 47.8 L 451.5 42.0 L 453.2 38.0 L 454.8 42.4 L 456.5 38.4 L 458.2 36.8 L 459.9 28.6 L 461.5 33.2 L 463.2 31.4 L 464.9 35.8 L 466.6 31.8 L 468.2 30.0 L 469.9 28.1 L 471.6 26.3 L 473.2 22.2 L 474.9 27.3 L 476.6 25.5 L 478.3 23.7 L 479.9 26.1 L 481.6 20.0 L 483.3 22.3 L 484.9 27.0 L 486.6 25.1 L 488.3 23.2 L 490.0 25.5 L 491.6 30.1 L 493.3 34.9 L 495.0 37.1 L 496.7 37.5 L 498.3 39.7 L 500.0 39.3",
    "Alpha_2Y": "M 0.0 179.3 L 1.7 178.4 L 3.3 179.5 L 5.0 180.0 L 6.7 179.8 L 8.4 179.2 L 10.0 179.0 L 11.7 176.8 L 13.4 175.5 L 15.1 174.2 L 16.7 175.0 L 18.4 175.5 L 20.1 174.2 L 21.7 175.0 L 23.4 175.8 L 25.1 177.3 L 26.8 178.1 L 28.4 177.5 L 30.1 175.3 L 31.8 175.0 L 33.4 176.9 L 35.1 177.7 L 36.8 176.4 L 38.5 175.8 L 40.1 175.7 L 41.8 177.2 L 43.5 177.0 L 45.2 174.7 L 46.8 172.2 L 48.5 173.8 L 50.2 173.5 L 51.8 171.1 L 53.5 168.5 L 55.2 165.8 L 56.9 166.3 L 58.5 168.5 L 60.2 169.0 L 61.9 168.7 L 63.5 169.7 L 65.2 171.7 L 66.9 171.1 L 68.6 170.1 L 70.2 169.4 L 71.9 170.4 L 73.6 170.2 L 75.3 170.1 L 76.9 170.6 L 78.6 169.1 L 80.3 168.4 L 81.9 167.0 L 83.6 169.1 L 85.3 166.5 L 87.0 165.8 L 88.6 163.5 L 90.3 165.3 L 92.0 167.5 L 93.6 166.0 L 95.3 166.5 L 97.0 167.4 L 98.7 164.7 L 100.3 163.1 L 102.0 162.4 L 103.7 160.8 L 105.4 160.5 L 107.0 158.4 L 108.7 159.9 L 110.4 160.5 L 112.0 161.0 L 113.7 158.6 L 115.4 160.5 L 117.1 160.2 L 118.7 159.4 L 120.4 155.5 L 122.1 154.7 L 123.7 150.0 L 125.4 151.2 L 127.1 148.9 L 128.8 150.0 L 130.4 149.7 L 132.1 148.8 L 133.8 147.0 L 135.5 148.1 L 137.1 144.6 L 138.8 142.7 L 140.5 144.0 L 142.1 144.8 L 143.8 146.3 L 145.5 145.9 L 147.2 144.0 L 148.8 143.0 L 150.5 146.0 L 152.2 145.6 L 153.8 146.3 L 155.5 146.0 L 157.2 145.6 L 158.9 143.1 L 160.5 141.7 L 162.2 144.0 L 163.9 145.4 L 165.6 146.7 L 167.2 147.3 L 168.9 147.0 L 170.6 148.2 L 172.2 146.3 L 173.9 147.0 L 175.6 149.7 L 177.3 149.4 L 178.9 147.5 L 180.6 149.7 L 182.3 149.3 L 183.9 145.9 L 185.6 147.1 L 187.3 146.3 L 189.0 147.5 L 190.6 148.1 L 192.3 147.8 L 194.0 145.9 L 195.7 147.0 L 197.3 144.3 L 199.0 145.0 L 200.7 141.4 L 202.3 141.0 L 204.0 139.0 L 205.7 138.0 L 207.4 139.3 L 209.0 138.9 L 210.7 136.2 L 212.4 137.7 L 214.0 135.6 L 215.7 135.2 L 217.4 135.9 L 219.1 137.3 L 220.7 133.4 L 222.4 135.9 L 224.1 133.8 L 225.8 131.6 L 227.4 133.0 L 229.1 135.5 L 230.8 133.3 L 232.4 131.1 L 234.1 126.1 L 235.8 125.7 L 237.5 126.5 L 239.1 126.1 L 240.8 121.8 L 242.5 121.4 L 244.1 120.2 L 245.8 120.0 L 247.5 121.6 L 249.2 117.1 L 250.8 118.2 L 252.5 121.8 L 254.2 121.3 L 255.9 120.2 L 257.5 119.8 L 259.2 115.2 L 260.9 112.7 L 262.5 115.7 L 264.2 117.3 L 265.9 112.8 L 267.6 114.5 L 269.2 111.9 L 270.9 112.7 L 272.6 110.1 L 274.2 111.8 L 275.9 110.5 L 277.6 115.0 L 279.3 113.8 L 280.9 109.1 L 282.6 110.1 L 284.3 107.4 L 286.0 111.5 L 287.6 114.6 L 289.3 112.7 L 291.0 113.6 L 292.6 115.3 L 294.3 114.0 L 296.0 111.4 L 297.7 111.0 L 299.3 110.6 L 301.0 109.4 L 302.7 111.8 L 304.3 110.6 L 306.0 107.9 L 307.7 109.6 L 309.4 110.5 L 311.0 110.1 L 312.7 109.6 L 314.4 106.8 L 316.1 107.8 L 317.7 107.4 L 319.4 109.1 L 321.1 110.0 L 322.7 109.5 L 324.4 104.5 L 326.1 101.7 L 327.8 102.7 L 329.4 102.2 L 331.1 106.2 L 332.8 101.2 L 334.4 99.9 L 336.1 104.0 L 337.8 105.8 L 339.5 104.5 L 341.1 101.7 L 342.8 96.5 L 344.5 93.5 L 346.2 88.0 L 347.8 89.1 L 349.5 88.6 L 351.2 85.4 L 352.8 89.1 L 354.5 88.6 L 356.2 90.5 L 357.9 92.5 L 359.5 88.6 L 361.2 88.9 L 362.9 90.0 L 364.5 86.9 L 366.2 86.3 L 367.9 87.4 L 369.6 91.9 L 371.2 93.8 L 372.9 94.8 L 374.6 96.7 L 376.3 93.8 L 377.9 90.7 L 379.6 94.2 L 381.3 87.0 L 382.9 88.1 L 384.6 82.4 L 386.3 80.8 L 388.0 85.6 L 389.6 90.2 L 391.3 92.1 L 393.0 91.6 L 394.6 87.6 L 396.3 87.1 L 398.0 85.6 L 399.7 82.4 L 401.3 81.8 L 403.0 83.9 L 404.7 83.2 L 406.4 80.0 L 408.0 78.5 L 409.7 77.9 L 411.4 77.3 L 413.0 70.2 L 414.7 69.6 L 416.4 69.0 L 418.1 70.3 L 419.7 72.5 L 421.4 71.9 L 423.1 74.1 L 424.7 79.0 L 426.4 75.6 L 428.1 73.2 L 429.8 69.8 L 431.4 68.1 L 433.1 65.6 L 434.8 64.0 L 436.5 69.1 L 438.1 68.5 L 439.8 66.8 L 441.5 60.2 L 443.1 62.6 L 444.8 59.0 L 446.5 63.3 L 448.2 65.5 L 449.8 62.1 L 451.5 61.5 L 453.2 59.8 L 454.8 59.1 L 456.5 60.3 L 458.2 53.6 L 459.9 49.8 L 461.5 49.2 L 463.2 47.4 L 464.9 43.6 L 466.6 46.1 L 468.2 45.6 L 469.9 47.4 L 471.6 46.8 L 473.2 46.2 L 474.9 42.2 L 476.6 41.5 L 478.3 36.2 L 479.9 32.0 L 481.6 31.2 L 483.3 32.7 L 484.9 24.9 L 486.6 27.6 L 488.3 23.3 L 490.0 21.2 L 491.6 20.7 L 493.3 20.0 L 495.0 22.8 L 496.7 24.4 L 498.3 30.9 L 500.0 30.9"
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
              {['6M', '1Y', '2Y'].map(t => (
                <button 
                  key={t}
                  onClick={() => setTimeframe(t)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all ${timeframe === t ? 'bg-white/10 border-white/20 text-white' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
                >
                  {t === '6M' ? '6 Months Stats' : t === '1Y' ? '1 Year Stats' : '2 Year Stats'}
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
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-slate-300">Risk-to-Reward (R:R)</span>
                <span className="font-mono font-bold text-white">{currentStats.rr}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-slate-300">Win Rate</span>
                <span className="font-mono font-bold text-white">{currentStats.winRate}</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-sm text-emerald-100/70">Verified live accounts available to active subscribers. Past performance does not guarantee future results.</p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {algo === 'Beta' || algo === 'Theta' ? (
                <button disabled className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-800 text-slate-500 font-bold border border-white/5 cursor-not-allowed">
                  <Download className="w-4 h-4" /> {algo} EA (Under Development)
                </button>
              ) : (
                <>
                  <a 
                    href={`reports/Apex_Algorithm_Alpha_${timeframe === '6M' ? '6_Months' : timeframe === '1Y' ? '1_Year' : '2_Year'}.xlsx`} 
                    download 
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 transition-colors"
                  >
                    <Download className="w-4 h-4" /> Download Backtest Report
                  </a>
                  <a 
                    href="demos/Apex_Algo_Alpha_Demo.ex5" 
                    download 
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
                  >
                    <Download className="w-4 h-4" /> Download Demo EA
                  </a>
                </>
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
            
            {algo === 'Alpha' ? (
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
                      
                      {chartPaths[`Alpha_${timeframe}`] && (
                        <>
                            <path 
                              d={chartPaths[`Alpha_${timeframe}`]} 
                              fill="none" 
                              stroke="#34d399" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              filter="url(#glow)"
                              className="transition-all duration-500 ease-in-out"
                            />
                            <path 
                              d={`${chartPaths[`Alpha_${timeframe}`]} L 500 200 L 0 200 Z`} 
                              fill="url(#chartGradient)" 
                              className="transition-all duration-500 ease-in-out"
                            />
                        </>
                      )}
                    </svg>
                  </div>
                  <div className="flex justify-between mt-4 text-[10px] font-mono text-slate-500">
                    {timeframe === '6M' && (
                      <><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span></>
                    )}
                    {timeframe === '1Y' && (
                      <><span>OCT</span><span>DEC</span><span>FEB</span><span>APR</span><span>JUN</span><span>AUG</span><span>OCT</span></>
                    )}
                    {timeframe === '2Y' && (
                      <><span>OCT 24</span><span>APR 25</span><span>OCT 25</span><span>APR 26</span><span>OCT 26</span></>
                    )}
                  </div>
                  <div className="mt-2 text-[9px] text-slate-600">Balance progression • historical backtest</div>
                </>
            ) : (
              <div className="absolute inset-0 bg-slate-950 p-6 flex items-center justify-center text-slate-500 font-mono z-20">
                <div className="text-center">
                  <LineChart className="w-8 h-8 mx-auto mb-4 opacity-50" />
                  <p>{algo} EA is currently under development.</p>
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
        "Instant Alpha Access + Future Beta & Theta Included",
        "News & Overnight Protection",
        "Telegram Support",
        "Free Updates"
      ],
      cta: "Subscribe Now",
      link: "https://t.me/apextradingalgo",
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
        "Instant Alpha Access + Future Beta & Theta Included",
        "News & Overnight Protection",
        "Priority Telegram Support",
        "Free Updates"
      ],
      cta: "Subscribe Now",
      link: "https://t.me/apextradingalgo",
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
        "Instant Alpha Access + Future Beta & Theta Included",
        "No Expiration",
        "1-on-1 Setup Call via Telegram"
      ],
      cta: "Get Lifetime",
      link: "https://t.me/apextradingalgo",
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
            <Zap className="w-5 h-5" /> Instant Alpha Scalper Access + Future Beta & Theta Included Free
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
              
              <a href={plan.link} target="_blank" rel="noreferrer" className={`block text-center w-full py-4 rounded-xl font-bold transition-all ${plan.highlight ? 'bg-yellow-400 hover:bg-yellow-500 text-slate-950' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}>
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
