'use client';

export default function LogiTrackDashboardMock() {
  return (
    <div className="hidden md:block relative origin-top md:scale-[0.85] lg:scale-100">
      <div className="relative">
        {/* Main Logistics Panel */}
        <div className="bg-white rounded-xl shadow-xl p-3 lg:p-4 relative z-10 space-y-3 lg:space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xs lg:text-sm font-bold text-gray-900">LogiTrack</h3>
              <p className="text-[11px] lg:text-xs text-gray-500">
                Real-time shipment & fleet visibility
              </p>
            </div>
            <div className="flex items-center space-x-1.5">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-[11px] lg:text-xs font-medium text-gray-700">Live</span>
            </div>
          </div>

          {/* Route Preview */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-2.5 lg:p-3">
            <div className="flex items-center justify-between mb-1.5">
              <p className="font-semibold text-gray-900 text-[11px]">Active Route</p>
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-[9px] font-semibold">
                On Route
              </span>
            </div>

            <div className="space-y-1 text-[11px]">
              <div className="flex justify-between">
                <span className="text-gray-500">Origin</span>
                <span className="font-medium text-gray-900">Vadodara WH-01</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Destination</span>
                <span className="font-medium text-gray-900">Ahmedabad DC-03</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">ETA</span>
                <span className="font-medium text-blue-700">1h 45m</span>
              </div>
            </div>

            {/* Progress */}
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-1 rounded-full w-[65%]" />
              </div>
              <p className="text-[9px] text-blue-600 mt-0.5">65% completed</p>
            </div>
          </div>

          {/* Active Shipments */}
          <div className="space-y-1.5">
            <p className="font-semibold text-gray-900 text-[11px]">Active Shipments</p>

            {[
              { id: 'SHP-88921', type: 'Electronics', status: 'Delivered', color: 'emerald' },
              { id: 'SHP-88934', type: 'Pharma', status: 'In Transit', color: 'blue' },
              { id: 'SHP-88956', type: 'Raw Materials', status: 'Delayed', color: 'amber' },
            ].map((s) => (
              <div
                key={s.id}
                className="flex items-center justify-between bg-gray-50 rounded-md p-1.5"
              >
                <div>
                  <p className="font-medium text-gray-900 text-[11px]">{s.id}</p>
                  <p className="text-[9px] text-gray-500">{s.type}</p>
                </div>
                <span
                  className={`text-[9px] font-semibold px-2 py-0.5 rounded-full bg-${s.color}-100 text-${s.color}-700`}
                >
                  {s.status}
                </span>
              </div>
            ))}
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-blue-50 rounded-lg p-2 text-center">
              <p className="text-lg lg:text-xl font-bold text-blue-600">18</p>
              <p className="text-[9px] text-gray-600">Vehicles</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-2 text-center">
              <p className="text-lg lg:text-xl font-bold text-indigo-600">42</p>
              <p className="text-[9px] text-gray-600">Shipments</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-2 text-center">
              <p className="text-lg lg:text-xl font-bold text-emerald-600">96%</p>
              <p className="text-[9px] text-gray-600">On-time</p>
            </div>
          </div>
        </div>

        {/* Fleet Alert */}
        <div className="absolute md:-bottom-5 md:-left-3 lg:-bottom-6 lg:-left-4 bg-white rounded-lg shadow-lg p-2.5 w-52 z-20 md:scale-[0.8] lg:scale-100">
          <div className="flex items-center space-x-2 mb-1.5">
            <div className="w-7 h-7 bg-amber-100 rounded-lg flex items-center justify-center">
              <span className="text-amber-700 font-bold text-[10px]">Fleet</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-[11px]">Vehicle Delay</p>
              <p className="text-[9px] text-gray-500">Truck TR-07</p>
            </div>
          </div>
          <p className="text-[11px] text-gray-700">25 min delay due to traffic</p>
          <button className="mt-1.5 w-full bg-amber-50 text-amber-700 py-1 rounded-md text-[11px] font-semibold hover:bg-amber-100 transition">
            Reroute
          </button>
        </div>

        {/* Warehouse Analytics */}
        <div className="absolute md:-top-4 md:-right-1 lg:-top-9 lg:right-4 bg-white rounded-lg shadow-lg p-2.5 w-44 z-20 md:scale-[0.8] lg:scale-100">
          <div className="flex items-center space-x-2 mb-1.5">
            <div className="w-6 h-6 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-indigo-700 font-bold text-[10px]">WH</span>
            </div>
            <p className="font-semibold text-gray-900 text-[11px]">Warehouse Load</p>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-[9px] text-gray-600">Capacity</span>
              <span className="text-[11px] font-semibold text-gray-900">78%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-1 rounded-full w-[78%]" />
            </div>
            <p className="text-[9px] text-indigo-600 font-medium">Peak volume</p>
          </div>
        </div>
      </div>
    </div>
  );
}
