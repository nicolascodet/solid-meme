'use client';

import Link from 'next/link';

export default function Services() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-lg text-slate-light max-w-3xl">
            Comprehensive solutions designed to transform businesses and create sustainable value through operational excellence and strategic integration.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-16">
            {/* M&A Advisory */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-navy-light text-white text-sm font-medium rounded-full mb-4">Strategic Advisory</span>
                <h2 className="section-heading">M&A Advisory</h2>
                <p className="text-slate mb-6">
                  Our M&A advisory services provide comprehensive support throughout the acquisition lifecycle, from target identification and assessment to deal execution and post-close integration planning.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate">Target identification and screening</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate">Comprehensive due diligence</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate">Synergy assessment and validation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate">Deal structuring and negotiation support</span>
                  </li>
                </ul>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-serif font-bold text-navy mb-2">Results</h4>
                  <p className="text-slate text-sm">Our M&A advisory has helped clients identify and execute acquisitions that have resulted in 30%+ market cap growth and significant operational synergies.</p>
                </div>
              </div>
              <div className="bg-slate-50 h-80 flex items-center justify-center rounded-lg shadow-md">
                <div className="text-center p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-navy mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="text-2xl font-serif text-navy mb-2">Strategic Growth</h3>
                  <p className="text-slate">Enabling targeted acquisitions that drive business growth and market expansion.</p>
                </div>
              </div>
            </div>

            {/* Post-Acquisition Integration */}
            <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
              <div className="order-1 md:order-2">
                <span className="inline-block px-3 py-1 bg-navy-light text-white text-sm font-medium rounded-full mb-4">Integration</span>
                <h2 className="section-heading">Post-Acquisition Integration</h2>
                <p className="text-slate mb-6">
                  We specialize in seamless post-acquisition integration, minimizing disruption while maximizing synergy realization and value creation.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate">Integration planning and governance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate">Synergy capture and tracking</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate">Cultural alignment and change management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate">Business process harmonization</span>
                  </li>
                </ul>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-serif font-bold text-navy mb-2">Results</h4>
                  <p className="text-slate text-sm">Our integration approach has enabled clients to achieve 90%+ of identified synergies within the first 18 months post-acquisition.</p>
                </div>
              </div>
              <div className="order-2 md:order-1 bg-slate-50 h-80 flex items-center justify-center rounded-lg shadow-md">
                <div className="text-center p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-navy mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.5 9a2.5 2.5 0 10-5 0m5 0H6.5m5 0v8.5M12.5 9a2.5 2.5 0 105 0m-5 0h5m-5 0v8.5" />
                  </svg>
                  <h3 className="text-2xl font-serif text-navy mb-2">Seamless Integration</h3>
                  <p className="text-slate">Bringing businesses together while maintaining operational continuity and cultural alignment.</p>
                </div>
              </div>
            </div>

            {/* Operational Transformation */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-navy-light text-white text-sm font-medium rounded-full mb-4">Transformation</span>
                <h2 className="section-heading">Operational Transformation</h2>
                <p className="text-slate mb-6">
                  We help organizations reimagine and redesign their operations to enhance efficiency, reduce costs, and improve customer experience.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate">End-to-end process optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate">Organizational redesign</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate">Digital transformation enablement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate">Cost optimization programs</span>
                  </li>
                </ul>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-serif font-bold text-navy mb-2">Results</h4>
                  <p className="text-slate text-sm">Our transformation initiatives have delivered 15-25% efficiency improvements and 10-20% cost reductions across client organizations.</p>
                </div>
              </div>
              <div className="bg-slate-50 h-80 flex items-center justify-center rounded-lg shadow-md">
                <div className="text-center p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-navy mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <h3 className="text-2xl font-serif text-navy mb-2">Operational Excellence</h3>
                  <p className="text-slate">Driving efficiency and effectiveness through innovative operational models.</p>
                </div>
              </div>
            </div>

            {/* Value Creation Plans */}
            <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
              <div className="order-1 md:order-2">
                <span className="inline-block px-3 py-1 bg-navy-light text-white text-sm font-medium rounded-full mb-4">Strategy</span>
                <h2 className="section-heading">Value Creation Plans</h2>
                <p className="text-slate mb-6">
                  We develop and implement comprehensive value creation plans that drive sustainable growth and enhance enterprise value.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate">Growth strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate">Revenue enhancement initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate">Margin improvement programs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate">Strategic capability building</span>
                  </li>
                </ul>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-serif font-bold text-navy mb-2">Results</h4>
                  <p className="text-slate text-sm">Our value creation plans have helped clients achieve EBITDA improvements of 3-5 percentage points and accelerated growth by 2-3x industry averages.</p>
                </div>
              </div>
              <div className="order-2 md:order-1 bg-slate-50 h-80 flex items-center justify-center rounded-lg shadow-md">
                <div className="text-center p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-navy mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-serif text-navy mb-2">Value Creation</h3>
                  <p className="text-slate">Unlocking potential through strategic initiatives that drive sustainable enterprise value growth.</p>
                </div>
              </div>
            </div>

            {/* Private Equity Services */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-navy-light text-white text-sm font-medium rounded-full mb-4">Private Equity</span>
                <h2 className="section-heading">Private Equity Services</h2>
                <p className="text-slate mb-6">
                  We partner with private equity firms throughout the investment lifecycle to maximize returns through operational value creation.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate">Pre-acquisition operational due diligence</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate">Portfolio company performance optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate">Buy-and-build strategy execution</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate">Exit preparation and value maximization</span>
                  </li>
                </ul>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-serif font-bold text-navy mb-2">Results</h4>
                  <p className="text-slate text-sm">Our private equity services have helped clients achieve 2-3x investment returns through operational improvements and strategic growth initiatives.</p>
                </div>
              </div>
              <div className="bg-slate-50 h-80 flex items-center justify-center rounded-lg shadow-md">
                <div className="text-center p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-navy mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h3 className="text-2xl font-serif text-navy mb-2">Portfolio Value Enhancement</h3>
                  <p className="text-slate">Driving operational improvements across portfolio companies to maximize investment returns.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Start Your Transformation Journey?</h2>
          <p className="text-slate-light text-lg max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our services can help your business achieve operational excellence and drive significant growth.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
} 