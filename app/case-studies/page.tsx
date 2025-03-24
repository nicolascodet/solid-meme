'use client';

import Link from 'next/link';

export default function CaseStudies() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Case Studies</h1>
          <p className="text-lg text-slate-light max-w-3xl">
            Explore how we've helped organizations achieve operational excellence, drive growth, and maximize enterprise value.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-16">
            {/* Case Study 1 */}
            <div className="bg-white border border-slate-100 rounded-lg shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-slate-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-serif font-bold text-navy mb-4">Manufacturing Company Transformation</h3>
                    <div className="flex justify-center space-x-6 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gold mb-1">45%</div>
                        <div className="text-sm text-slate">EBITDA Growth</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gold mb-1">30%</div>
                        <div className="text-sm text-slate">Cost Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gold mb-1">18mo</div>
                        <div className="text-sm text-slate">Time to Results</div>
                      </div>
                    </div>
                    <div className="inline-block px-3 py-1 bg-navy-light text-white text-sm font-medium rounded-full">
                      Operational Transformation
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="font-serif text-xl font-bold text-navy mb-4">Challenge</h4>
                  <p className="text-slate mb-6">
                    A mid-sized manufacturing company faced declining margins, operational inefficiencies, and challenges with scale as they attempted to grow their market presence.
                  </p>
                  
                  <h4 className="font-serif text-xl font-bold text-navy mb-4">Solution</h4>
                  <p className="text-slate mb-6">
                    ODR Group implemented a comprehensive operational transformation program that included:
                  </p>
                  <ul className="list-disc pl-5 text-slate mb-6">
                    <li>End-to-end process optimization</li>
                    <li>Supply chain redesign</li>
                    <li>Manufacturing efficiency improvements</li>
                    <li>Organizational restructuring</li>
                    <li>Implementation of performance management systems</li>
                  </ul>
                  
                  <h4 className="font-serif text-xl font-bold text-navy mb-4">Results</h4>
                  <p className="text-slate mb-6">
                    The transformation program delivered substantial improvements in operational efficiency, resulting in a 45% increase in EBITDA, 30% reduction in operating costs, and significant e-commerce business growth, all within 18 months.
                  </p>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white border border-slate-100 rounded-lg shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-slate-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-serif font-bold text-navy mb-4">Retail Brand Integration</h3>
                    <div className="flex justify-center space-x-6 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gold mb-1">120%</div>
                        <div className="text-sm text-slate">Revenue Growth</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gold mb-1">100%</div>
                        <div className="text-sm text-slate">Synergy Capture</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gold mb-1">12mo</div>
                        <div className="text-sm text-slate">Integration Time</div>
                      </div>
                    </div>
                    <div className="inline-block px-3 py-1 bg-navy-light text-white text-sm font-medium rounded-full">
                      Post-Acquisition Integration
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="font-serif text-xl font-bold text-navy mb-4">Challenge</h4>
                  <p className="text-slate mb-6">
                    Following the acquisition of a complementary retail brand, a private equity-owned retail company needed to integrate operations while maintaining brand identity and customer loyalty.
                  </p>
                  
                  <h4 className="font-serif text-xl font-bold text-navy mb-4">Solution</h4>
                  <p className="text-slate mb-6">
                    ODR Group developed and executed a comprehensive integration plan that included:
                  </p>
                  <ul className="list-disc pl-5 text-slate mb-6">
                    <li>Integration governance and PMO setup</li>
                    <li>Supply chain consolidation</li>
                    <li>Back-office function integration</li>
                    <li>IT system harmonization</li>
                    <li>Cultural integration program</li>
                  </ul>
                  
                  <h4 className="font-serif text-xl font-bold text-navy mb-4">Results</h4>
                  <p className="text-slate mb-6">
                    The integration was completed within 12 months, capturing 100% of identified synergies. The combined entity achieved 120% revenue growth and established a stronger market position with enhanced omnichannel capabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white border border-slate-100 rounded-lg shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-slate-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-serif font-bold text-navy mb-4">PE Portfolio Optimization</h3>
                    <div className="flex justify-center space-x-6 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gold mb-1">3.2x</div>
                        <div className="text-sm text-slate">Investment Return</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gold mb-1">35%</div>
                        <div className="text-sm text-slate">Margin Improvement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gold mb-1">24mo</div>
                        <div className="text-sm text-slate">Implementation</div>
                      </div>
                    </div>
                    <div className="inline-block px-3 py-1 bg-navy-light text-white text-sm font-medium rounded-full">
                      Value Creation
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="font-serif text-xl font-bold text-navy mb-4">Challenge</h4>
                  <p className="text-slate mb-6">
                    A private equity firm needed to accelerate value creation across its portfolio companies to prepare for exit within a compressed timeframe due to market conditions.
                  </p>
                  
                  <h4 className="font-serif text-xl font-bold text-navy mb-4">Solution</h4>
                  <p className="text-slate mb-6">
                    ODR Group implemented a portfolio-wide value creation program focusing on:
                  </p>
                  <ul className="list-disc pl-5 text-slate mb-6">
                    <li>Cross-portfolio operational excellence initiatives</li>
                    <li>Revenue growth acceleration strategies</li>
                    <li>Digital transformation</li>
                    <li>Supply chain optimization</li>
                    <li>Strategic capability building</li>
                  </ul>
                  
                  <h4 className="font-serif text-xl font-bold text-navy mb-4">Results</h4>
                  <p className="text-slate mb-6">
                    The program delivered 35% margin improvement across the portfolio, significantly enhanced operational capabilities, and ultimately achieved a 3.2x return on investment upon exit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Achieve Similar Results?</h2>
          <p className="text-slate-light text-lg max-w-2xl mx-auto mb-8">
            Contact us today to discuss how ODR Group can help your business achieve operational excellence and drive significant growth.
          </p>
          <Link href="/contact" className="btn-primary">
            Start Your Transformation
          </Link>
        </div>
      </section>
    </div>
  );
} 