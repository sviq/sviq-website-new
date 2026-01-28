'use client';

export default function EBMRDashboardMini() {
  return (
    <div className="hidden md:block relative origin-top md:scale-[0.9] lg:scale-100">
      <div className="relative">
        {/* Main Card */}
        <div
          className="bg-white rounded-2xl shadow-2xl 
          p-3 md:p-3 lg:p-4 
          md:w-[420px] lg:w-[520px] 
          relative z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-xs md:text-xs lg:text-sm font-bold text-gray-900">
                Batch Management
              </h3>
              <p className="text-[10px] md:text-[10px] lg:text-xs text-gray-500">
                Electronic Batch Manufacturing Record
              </p>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-indigo-100 text-indigo-700">
              GMP Ready
            </span>
          </div>

          {/* KPI Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
            <MiniStat title="Approvals" value="1" tone="amber" />
            <MiniStat title="Released" value="3" tone="blue" />
            <MiniStat title="Completed" value="1" tone="emerald" />
            <MiniStat title="Breakdowns" value="1" tone="rose" />
          </div>

          {/* Recent Batches */}
          <div className="border rounded-xl overflow-hidden">
            <div className="bg-gray-50 px-3 py-2 text-[11px] font-semibold text-gray-700">
              Recent Batches
            </div>

            <div className="divide-y">
              <BatchRow
                id="Batch-0002"
                material="Palladium on Carbon"
                qty="500"
                status="Released"
                color="emerald"
              />
              <BatchRow
                id="Batch-0001"
                material="1-Naphthylamine"
                qty="500"
                status="Released"
                color="emerald"
              />
              <BatchRow
                id="CAMS266042"
                material="Dimethyl Benzyl Carbinol"
                qty="1000"
                status="Released"
                color="emerald"
              />
            </div>
          </div>
        </div>

        {/* SOP Feature Card */}
        <div
          className="
          absolute 
          md:-top-4 md:-right-10 
          lg:-top-16 lg:right-24
          bg-white rounded-xl shadow-xl 
          p-2.5 lg:p-3 
          w-44 lg:w-48 
          z-20 
          md:scale-[0.85] lg:scale-100"
        >
          <div className="flex items-center space-x-2 mb-1.5">
            <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center">
              <span className="text-blue-700 text-[10px] font-bold">SOP</span>
            </div>
            <p className="text-xs font-semibold text-gray-900">SOP Control</p>
          </div>

          <p className="text-[10px] text-gray-600 mb-1.5">
            Approved, version-controlled procedures.
          </p>

          <span className="inline-block px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[9px] font-semibold">
            Audit Ready
          </span>
        </div>

        {/* Templates Feature Card */}
        <div
          className="
          absolute 
          md:-bottom-6 md:-left-8 
          lg:-bottom-12 lg:-left-20
          bg-white rounded-xl shadow-xl 
          p-2.5 lg:p-3 
          w-44 lg:w-48 
          z-20 
          md:scale-[0.85] lg:scale-100"
        >
          <div className="flex items-center space-x-2 mb-1.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center">
              <span className="text-emerald-700 text-[10px] font-bold">TMP</span>
            </div>
            <p className="text-xs font-semibold text-gray-900">Batch Templates</p>
          </div>

          <p className="text-[10px] text-gray-600 mb-1.5">Standardized, reusable batch records.</p>

          <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[9px] font-semibold">
            Faster Setup
          </span>
        </div>
      </div>
    </div>
  );
}

function MiniStat({
  title,
  value,
  tone,
}: {
  title: string;
  value: string;
  tone: 'amber' | 'blue' | 'emerald' | 'rose';
}) {
  return (
    <div className={`rounded-lg p-2 bg-${tone}-50 text-center`}>
      <p className={`text-base lg:text-lg font-bold text-${tone}-600`}>{value}</p>
      <p className="text-[9px] text-gray-600">{title}</p>
    </div>
  );
}

function BatchRow({
  id,
  material,
  qty,
  status,
  color,
}: {
  id: string;
  material: string;
  qty: string;
  status: string;
  color: 'emerald';
}) {
  return (
    <div className="flex items-center justify-between px-3 py-2 text-[11px]">
      <div>
        <p className="font-semibold text-gray-900">{id}</p>
        <p className="text-[9px] text-gray-500 truncate max-w-[180px] lg:max-w-[220px]">
          {material}
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-gray-700 font-medium">{qty}</span>
        <span
          className={`px-2 py-0.5 rounded-full text-[9px] font-semibold bg-${color}-100 text-${color}-700`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
