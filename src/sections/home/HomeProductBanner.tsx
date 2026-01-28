'use client';

export interface FeatureItem {
  title: string;
  subtitle: string;
}

export interface HeroSectionProps {
  badgeText?: string;
  headline?: string;
  highlight?: string;
  subheadline?: string;
  features?: FeatureItem[];
  onSiteNow?: number;
  todayVisits?: number;
  compliance?: number;
  productSlug?: string;
  dashboardMock?: React.ReactNode;
}

const DEFAULT_FEATURES: FeatureItem[] = [
  { title: 'Secure Check-ins', subtitle: 'Contactless & verified' },
  { title: 'Real-time Visibility', subtitle: "Know who's on-site" },
  { title: 'Emergency Ready', subtitle: 'Instant evacuation reports' },
  { title: 'Advanced Analytics', subtitle: 'Compliance & reporting' },
];

export default function HeroSection({
  badgeText = 'SVIQ VizTrack',
  headline = 'Smart, Secure',
  highlight = 'Visitor Management',
  subheadline = 'Transform your workplace security with intelligent visitor tracking, real-time monitoring, and comprehensive compliance management—all in one powerful platform.',
  features = DEFAULT_FEATURES,
  dashboardMock,
  productSlug = 'viztrack',
}: HeroSectionProps) {
  return (
    <section id="hero-section" className="bg-primary lg:py-6 relative overflow-hidden">
      {/* Floating Background Blobs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 floating" />
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 floating"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* LEFT */}
          <div className="md:w-1/2 space-y-2">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-white font-semibold text-sm">{badgeText}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl lg:text-6xl font-bold text-white leading-tight">
              {headline}
              <span className="block text-indigo-200">{highlight}</span>
              for Modern Enterprises
            </h1>

            {/* Subheadline */}
            <p className="text-xl hidden text-white/90 leading-relaxed">{subheadline}</p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 py-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{feature.title}</p>
                    <p className="text-sm text-white/80">{feature.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap md:flex-row gap-4">
              <a
                href="contact"
                className="bg-white text-primary px-4 py-2 md:px-4 md:py-2 lg:px-8 lg:py-4 rounded-lg font-semibold text-lg shadow-xl inline-flex items-center space-x-2 hover:bg-white/90 transition"
              >
                <span>Request a Demo</span>
                <span>→</span>
              </a>

              <a
                href={`products/${productSlug}`}
                className="border-2 border-white text-white px-4 py-2 md:px-4 md:py-2 lg:px-8 lg:py-4 rounded-lg font-semibold text-lg inline-flex items-center space-x-2 hover:bg-white/10 transition"
              >
                <span>Explore Features</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* RIGHT — Dashboard Slot */}
          {dashboardMock && (
            <div className="hidden md:block lg:w-1/2 relative">{dashboardMock}</div>
          )}

        
        </div>
      </div>
    </section>
  );
}
