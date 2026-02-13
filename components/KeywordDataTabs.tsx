'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface KeywordData {
  keyword_text: string
  volume: number
  cpc: number
  competition: 'Low' | 'Medium' | 'High'
  competition_index: number
  city_name: string
  state_code: string
  city_population: number
}

const keywordDataByIndustry: Record<string, KeywordData[]> = {
  'pest-control': [
    {
      keyword_text: 'pest control san diego ca',
      volume: 2900,
      cpc: 18.45,
      competition: 'High',
      competition_index: 85,
      city_name: 'San Diego',
      state_code: 'CA',
      city_population: 1425976
    },
    {
      keyword_text: 'pest control phoenix az',
      volume: 3600,
      cpc: 22.30,
      competition: 'High',
      competition_index: 92,
      city_name: 'Phoenix',
      state_code: 'AZ',
      city_population: 1708080
    },
    {
      keyword_text: 'pest control atlanta ga',
      volume: 4100,
      cpc: 19.75,
      competition: 'High',
      competition_index: 88,
      city_name: 'Atlanta',
      state_code: 'GA',
      city_population: 514457
    },
    {
      keyword_text: 'pest control tampa fl',
      volume: 2400,
      cpc: 21.50,
      competition: 'High',
      competition_index: 90,
      city_name: 'Tampa',
      state_code: 'FL',
      city_population: 407599
    },
    {
      keyword_text: 'pest control portland or',
      volume: 1800,
      cpc: 16.80,
      competition: 'Medium',
      competition_index: 75,
      city_name: 'Portland',
      state_code: 'OR',
      city_population: 652503
    },
    {
      keyword_text: 'pest control bangor me',
      volume: 320,
      cpc: 12.25,
      competition: 'Low',
      competition_index: 45,
      city_name: 'Bangor',
      state_code: 'ME',
      city_population: 31753
    }
  ],
  'kitchen-bath': [
    {
      keyword_text: 'kitchen remodeling los angeles ca',
      volume: 1900,
      cpc: 28.50,
      competition: 'High',
      competition_index: 94,
      city_name: 'Los Angeles',
      state_code: 'CA',
      city_population: 3989532
    },
    {
      keyword_text: 'bathroom remodeling houston tx',
      volume: 2200,
      cpc: 25.75,
      competition: 'High',
      competition_index: 91,
      city_name: 'Houston',
      state_code: 'TX',
      city_population: 2325350
    },
    {
      keyword_text: 'kitchen renovation miami fl',
      volume: 1600,
      cpc: 31.20,
      competition: 'High',
      competition_index: 89,
      city_name: 'Miami',
      state_code: 'FL',
      city_population: 449514
    },
    {
      keyword_text: 'bathroom remodel denver co',
      volume: 1100,
      cpc: 24.30,
      competition: 'Medium',
      competition_index: 78,
      city_name: 'Denver',
      state_code: 'CO',
      city_population: 727211
    },
    {
      keyword_text: 'kitchen cabinets seattle wa',
      volume: 880,
      cpc: 22.15,
      competition: 'Medium',
      competition_index: 72,
      city_name: 'Seattle',
      state_code: 'WA',
      city_population: 753675
    },
    {
      keyword_text: 'bathroom renovation charleston sc',
      volume: 390,
      cpc: 19.90,
      competition: 'Low',
      competition_index: 52,
      city_name: 'Charleston',
      state_code: 'SC',
      city_population: 137583
    }
  ],
  'junk-removal': [
    {
      keyword_text: 'junk removal chicago il',
      volume: 2100,
      cpc: 14.25,
      competition: 'High',
      competition_index: 86,
      city_name: 'Chicago',
      state_code: 'IL',
      city_population: 2696555
    },
    {
      keyword_text: 'junk hauling dallas tx',
      volume: 1800,
      cpc: 15.80,
      competition: 'High',
      competition_index: 83,
      city_name: 'Dallas',
      state_code: 'TX',
      city_population: 1345573
    },
    {
      keyword_text: 'debris removal orlando fl',
      volume: 1200,
      cpc: 13.45,
      competition: 'Medium',
      competition_index: 74,
      city_name: 'Orlando',
      state_code: 'FL',
      city_population: 290520
    },
    {
      keyword_text: 'junk removal nashville tn',
      volume: 890,
      cpc: 12.90,
      competition: 'Medium',
      competition_index: 69,
      city_name: 'Nashville',
      state_code: 'TN',
      city_population: 692587
    },
    {
      keyword_text: 'trash hauling columbus oh',
      volume: 720,
      cpc: 11.50,
      competition: 'Medium',
      competition_index: 65,
      city_name: 'Columbus',
      state_code: 'OH',
      city_population: 913921
    },
    {
      keyword_text: 'junk removal gainesville fl',
      volume: 210,
      cpc: 9.75,
      competition: 'Low',
      competition_index: 38,
      city_name: 'Gainesville',
      state_code: 'FL',
      city_population: 134174
    }
  ],
  'other': [
    {
      keyword_text: 'plumber new york ny',
      volume: 6700,
      cpc: 34.50,
      competition: 'High',
      competition_index: 96,
      city_name: 'New York',
      state_code: 'NY',
      city_population: 8258035
    },
    {
      keyword_text: 'electrician austin tx',
      volume: 1400,
      cpc: 26.80,
      competition: 'High',
      competition_index: 87,
      city_name: 'Austin',
      state_code: 'TX',
      city_population: 979882
    },
    {
      keyword_text: 'roofing contractor boston ma',
      volume: 1100,
      cpc: 29.15,
      competition: 'High',
      competition_index: 85,
      city_name: 'Boston',
      state_code: 'MA',
      city_population: 694295
    },
    {
      keyword_text: 'water damage restoration las vegas nv',
      volume: 890,
      cpc: 38.90,
      competition: 'High',
      competition_index: 93,
      city_name: 'Las Vegas',
      state_code: 'NV',
      city_population: 646790
    },
    {
      keyword_text: 'mold removal minneapolis mn',
      volume: 540,
      cpc: 32.25,
      competition: 'Medium',
      competition_index: 76,
      city_name: 'Minneapolis',
      state_code: 'MN',
      city_population: 429954
    },
    {
      keyword_text: 'hvac repair raleigh nc',
      volume: 670,
      cpc: 24.60,
      competition: 'Medium',
      competition_index: 71,
      city_name: 'Raleigh',
      state_code: 'NC',
      city_population: 476587
    }
  ]
}

export default function KeywordDataTabs() {
  const [activeTab, setActiveTab] = useState<string>('pest-control')

  const tabs = [
    { id: 'pest-control', label: 'Pest Control' },
    { id: 'kitchen-bath', label: 'Kitchen/Bath Remodeling' },
    { id: 'junk-removal', label: 'Junk Removal' },
    { id: 'other', label: 'Other Industries' }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
          Keyword Types We Target
        </h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-2xl p-6 h-[400px] flex flex-col"
        >
          {/* Tab Headers */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-white/20 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-beamray-blue to-beamray-green text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Table Content */}
          <div className="flex-1 overflow-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-slate-900/80 backdrop-blur-sm">
                    <tr className="text-left border-b border-white/20">
                      <th className="px-4 py-2 text-gray-300 font-semibold">Keyword</th>
                      <th className="px-4 py-2 text-gray-300 font-semibold">Volume</th>
                      <th className="px-4 py-2 text-gray-300 font-semibold">CPC</th>
                      <th className="px-4 py-2 text-gray-300 font-semibold">Competition</th>
                      <th className="px-4 py-2 text-gray-300 font-semibold hidden md:table-cell">Index</th>
                      <th className="px-4 py-2 text-gray-300 font-semibold hidden lg:table-cell">City</th>
                      <th className="px-4 py-2 text-gray-300 font-semibold hidden lg:table-cell">State</th>
                      <th className="px-4 py-2 text-gray-300 font-semibold hidden xl:table-cell">Population</th>
                    </tr>
                  </thead>
                  <tbody>
                    {keywordDataByIndustry[activeTab].map((data, index) => (
                      <motion.tr 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors"
                      >
                        <td className="px-4 py-3 text-white font-medium">{data.keyword_text}</td>
                        <td className="px-4 py-3 text-gray-300">{data.volume.toLocaleString()}/mo</td>
                        <td className="px-4 py-3 text-beamray-green font-semibold">${data.cpc.toFixed(2)}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            data.competition === 'High' ? 'bg-red-500/20 text-red-400' :
                            data.competition === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {data.competition}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-300 hidden md:table-cell">{data.competition_index}</td>
                        <td className="px-4 py-3 text-gray-300 hidden lg:table-cell">{data.city_name}</td>
                        <td className="px-4 py-3 text-gray-300 hidden lg:table-cell">{data.state_code}</td>
                        <td className="px-4 py-3 text-gray-300 hidden xl:table-cell">
                          {data.city_population.toLocaleString()}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Note */}
          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="text-xs text-gray-400 text-center">
              *Data shown represents typical market conditions. Actual costs and competition may vary.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}