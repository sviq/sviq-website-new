'use client';

export default function VizTrackDashboardMock() {
  return (
    <div className="relative md:scale-[0.92] lg:scale-80 origin-top">
      {/* Main Card */}
      <div
        className="bg-white rounded-2xl shadow-2xl 
                      p-4 md:p-5 lg:p-6 relative z-10"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4 md:mb-5 lg:mb-6">
          <div>
            <h3 className="text-base md:text-base lg:text-lg font-bold text-gray-900">
              Visitor Dashboard
            </h3>
            <p className="text-xs md:text-sm text-gray-500">Real-time monitoring</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-gray-700">Live</span>
          </div>
        </div>

        {/* Visitor List */}
        <div className="space-y-3 md:space-y-3 lg:space-y-4 mb-4 md:mb-5 lg:mb-6">
          {/* Row */}
          <div
            className="flex items-center justify-between p-3 md:p-3 lg:p-4 
                          bg-gradient-to-r from-purple-50 to-indigo-50 
                          rounded-xl border border-purple-100"
          >
            <div className="flex items-center space-x-3 md:space-x-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                alt="Visitor"
                className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full"
              />
              <div>
                <p className="text-sm md:text-sm lg:text-base font-semibold text-gray-900">
                  Sarah Johnson
                </p>
                <p className="text-xs md:text-xs lg:text-sm text-gray-600">Meeting with John Doe</p>
              </div>
            </div>
            <span
              className="px-2 md:px-3 py-1 bg-green-100 text-green-700 
                             rounded-full text-[10px] md:text-xs font-semibold"
            >
              Checked In
            </span>
          </div>

          {/* Row */}
          <div className="flex items-center justify-between p-3 md:p-3 lg:p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3 md:space-x-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
                alt="Visitor"
                className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full"
              />
              <div>
                <p className="text-sm md:text-sm lg:text-base font-semibold text-gray-900">
                  Michael Chen
                </p>
                <p className="text-xs md:text-xs lg:text-sm text-gray-600">Delivery - Front Desk</p>
              </div>
            </div>
            <span
              className="px-2 md:px-3 py-1 bg-blue-100 text-blue-700 
                             rounded-full text-[10px] md:text-xs font-semibold"
            >
              Pending
            </span>
          </div>

          {/* Row */}
          <div className="flex items-center justify-between p-3 md:p-3 lg:p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3 md:space-x-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                alt="Visitor"
                className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full"
              />
              <div>
                <p className="text-sm md:text-sm lg:text-base font-semibold text-gray-900">
                  Emily Rodriguez
                </p>
                <p className="text-xs md:text-xs lg:text-sm text-gray-600">Interview - HR</p>
              </div>
            </div>
            <span
              className="px-2 md:px-3 py-1 bg-gray-200 text-gray-700 
                             rounded-full text-[10px] md:text-xs font-semibold"
            >
              Checked Out
            </span>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-4">
          <div className="bg-purple-50 rounded-lg p-3 md:p-3 lg:p-4 text-center">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-purple-600">24</p>
            <p className="text-[10px] md:text-xs text-gray-600 mt-1">On-site Now</p>
          </div>
          <div className="bg-green-50 rounded-lg p-3 md:p-3 lg:p-4 text-center">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-green-600">156</p>
            <p className="text-[10px] md:text-xs text-gray-600 mt-1">Today’s Visits</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-3 md:p-3 lg:p-4 text-center">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600">98%</p>
            <p className="text-[10px] md:text-xs text-gray-600 mt-1">Compliance</p>
          </div>
        </div>
      </div>

      {/* Floating Cards — Compact on Tablet */}
      <div
        className="absolute -bottom-5 -left-5 
                      md:-bottom-6 md:-left-6 
                      bg-white rounded-xl shadow-xl 
                      p-3 md:p-4 w-52 md:w-56 lg:w-64 z-20"
      >
        <p className="font-semibold text-gray-900 text-xs md:text-sm mb-1">Security Alert</p>
        <p className="text-xs text-gray-600">Unauthorized access detected</p>
        <button
          className="mt-2 w-full bg-red-50 text-red-600 
                           py-1.5 md:py-2 rounded-lg 
                           text-xs font-semibold"
        >
          View Details
        </button>
      </div>

      <div
        className="absolute -top-5 -right-5 
                      md:-top-6 md:-right-6 
                      bg-white rounded-xl shadow-xl 
                      p-3 md:p-4 w-44 md:w-48 lg:w-56 z-20"
      >
        <p className="font-semibold text-gray-900 text-xs md:text-sm mb-2">Analytics</p>
        <div className="flex justify-between text-xs">
          <span className="text-gray-600">Check-in Time</span>
          <span className="font-semibold">2.3 min</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
          <div className="bg-green-500 h-1.5 rounded-full w-[75%]" />
        </div>
        <p className="text-[10px] text-green-600 mt-1">Faster than avg</p>
      </div>
    </div>
  );
}
