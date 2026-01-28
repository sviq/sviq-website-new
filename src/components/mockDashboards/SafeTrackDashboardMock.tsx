'use client';

export default function SafeTrackDashboardMock() {
  return (
    <div className="hidden md:block relative md:scale-[0.85] lg:scale-100">
      <div className="relative">
        {/* Main Dashboard */}
        <div className="bg-white rounded-2xl shadow-2xl p-3 md:p-3 lg:p-4 relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 lg:mb-6">
            <div>
              <h3 className="text-sm lg:text-base font-bold text-gray-900">
                Safety Management Dashboard
              </h3>
              <p className="text-xs text-gray-500">EHS • Workplace Safety</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs lg:text-sm font-medium text-gray-700">Monitoring</span>
            </div>
          </div>

          {/* Incidents */}
          <div className="space-y-2">
            {/* Incident 1 */}
            <div className="flex items-center justify-between p-2 bg-gradient-to-r from-rose-50 to-orange-50 rounded-xl border border-rose-100">
              <div className="flex items-center space-x-3">
                <div className="px-3 py-1 text-xs rounded-full bg-rose-100 font-bold text-rose-700">
                  IR-204
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Slip Hazard Reported</p>
                  <p className="text-[11px] text-gray-600">Warehouse • Zone B</p>
                </div>
              </div>
              <span className="px-2 py-0.5 bg-rose-100 text-rose-700 rounded-full text-[11px] font-semibold">
                Open
              </span>
            </div>

            {/* Incident 2 */}
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="px-3 py-1 text-xs rounded-full bg-amber-100 font-bold text-amber-700">
                  IR-198
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Chemical Spill (Minor)</p>
                  <p className="text-[11px] text-gray-600">Production • Line 3</p>
                </div>
              </div>
              <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[10px] font-semibold">
                Review
              </span>
            </div>

            {/* Incident 3 */}
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="px-3 py-1 text-xs rounded-full bg-emerald-100 font-bold text-emerald-700">
                  IR-191
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">PPE Non-Compliance</p>
                  <p className="text-[11px] text-gray-600">Assembly • Area A</p>
                </div>
              </div>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-[11px] font-semibold">
                Resolved
              </span>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="bg-rose-50 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-rose-600">5</p>
              <p className="text-[11px] text-gray-600 mt-1">Open Incidents</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-amber-600">12</p>
              <p className="text-[11px] text-gray-600 mt-1">Risk Assessments</p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-emerald-600">98%</p>
              <p className="text-[11px] text-gray-600 mt-1">Compliance</p>
            </div>
          </div>
        </div>

        {/* Alert Card */}
        {/* <div className="absolute md:-bottom-12 md:-left-20 lg:-bottom-16 lg:-right-8 bg-white rounded-xl shadow-xl p-3 w-56 z-20 md:scale-[0.75] lg:scale-100">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-9 h-9 bg-rose-100 rounded-lg flex items-center justify-center">
              <span className="text-rose-600 text-xs font-bold">EHS</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">High-Risk Alert</p>
              <p className="text-[11px] text-gray-500">Warehouse • Zone B</p>
            </div>
          </div>
          <p className="text-xs text-gray-700">Wet floor hazard requires immediate action</p>
          <button className="mt-2 w-full bg-rose-50 text-rose-700 py-1.5 rounded-lg text-xs font-semibold hover:bg-rose-100 transition">
            Assign Action
          </button>
        </div> */}

        {/* Analytics Card */}
        {/* <div className="absolute md:-top-12 md:-right-6 lg:-top-16 lg:right-5 bg-white rounded-xl shadow-xl p-3 w-52 z-20 md:scale-[0.75] lg:scale-100">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
              <span className="text-emerald-700 text-xs font-bold">KPI</span>
            </div>
            <p className="text-sm font-semibold text-gray-900">Safety Performance</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[11px] text-gray-600">Incident Rate</span>
              <span className="text-sm font-semibold text-gray-900">1.2</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-1.5 rounded-full w-[88%]" />
            </div>
            <p className="text-[11px] text-emerald-600 font-medium">↓ 18% MoM</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
