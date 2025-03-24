'use client';

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About ODR Group</h1>
          <p className="text-lg text-slate-light max-w-3xl">
            A team of experienced executives dedicated to transforming businesses through strategic integration and operational excellence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading">Our Mission</h2>
              <p className="text-slate mb-6">
                To help our clients achieve exceptional business results through strategic insight, operational transformation, and collaborative execution.
              </p>
              <p className="text-slate">
                We partner with private equity firms and strategic platforms to drive value creation, enhance operational efficiency, and accelerate sustainable growth.
              </p>
            </div>
            
            <div>
              <h2 className="section-heading">Our Vision</h2>
              <p className="text-slate mb-6">
                To be the premier strategic advisory partner for businesses seeking transformational growth and operational excellence.
              </p>
              <p className="text-slate">
                We aspire to set the standard for business transformation by delivering measurable results that significantly increase enterprise value for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading text-center mb-16">Our Journey</h2>
          
          <div className="space-y-12">
            {/* Timeline Item 1 */}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="bg-navy text-white p-6 rounded-lg shadow-md mb-6 md:mb-0 md:mr-6">
                  <h3 className="font-serif text-xl font-bold mb-2">2015</h3>
                  <p className="text-slate-light">Foundation</p>
                </div>
              </div>
              <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl font-bold text-navy mb-3">ODR Group Founded</h3>
                <p className="text-slate">
                  Established with a vision to transform business operations with a focus on strategic integration and operational excellence.
                </p>
              </div>
            </div>
            
            {/* Timeline Item 2 */}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="bg-navy text-white p-6 rounded-lg shadow-md mb-6 md:mb-0 md:mr-6">
                  <h3 className="font-serif text-xl font-bold mb-2">2017</h3>
                  <p className="text-slate-light">Growth</p>
                </div>
              </div>
              <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl font-bold text-navy mb-3">Private Equity Practice Expansion</h3>
                <p className="text-slate">
                  Expanded services to cater specifically to private equity firms, offering specialized operational transformation expertise.
                </p>
              </div>
            </div>
            
            {/* Timeline Item 3 */}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="bg-navy text-white p-6 rounded-lg shadow-md mb-6 md:mb-0 md:mr-6">
                  <h3 className="font-serif text-xl font-bold mb-2">2020</h3>
                  <p className="text-slate-light">Milestone</p>
                </div>
              </div>
              <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl font-bold text-navy mb-3">Transformational Growth</h3>
                <p className="text-slate">
                  Reached significant milestone of supporting over 50 successful business transformations and integrations across various industries.
                </p>
              </div>
            </div>
            
            {/* Timeline Item 4 */}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="bg-navy text-white p-6 rounded-lg shadow-md mb-6 md:mb-0 md:mr-6">
                  <h3 className="font-serif text-xl font-bold mb-2">Present</h3>
                  <p className="text-slate-light">Leadership</p>
                </div>
              </div>
              <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl font-bold text-navy mb-3">Industry Leadership</h3>
                <p className="text-slate">
                  Recognized as a leading advisory firm for complex business transformations and post-acquisition integrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading text-center mb-16">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white border border-slate-100 rounded-lg shadow-md overflow-hidden">
              <div className="bg-slate-100 h-64 flex items-center justify-center">
                <svg className="h-24 w-24 text-slate" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-navy mb-1">Rich Hansen</h3>
                <p className="text-gold mb-3">Chairman & Managing Partner</p>
                <p className="text-slate text-sm">
                  With over 25 years of executive leadership experience, Rich has led numerous successful business transformations and integrations, driving significant value creation for shareholders.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white border border-slate-100 rounded-lg shadow-md overflow-hidden">
              <div className="bg-slate-100 h-64 flex items-center justify-center">
                <svg className="h-24 w-24 text-slate" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-navy mb-1">Jane Smith</h3>
                <p className="text-gold mb-3">Chief Operating Officer</p>
                <p className="text-slate text-sm">
                  Jane brings expertise in operational transformation with a track record of implementing efficiency initiatives that have generated substantial cost savings for Fortune 500 companies.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white border border-slate-100 rounded-lg shadow-md overflow-hidden">
              <div className="bg-slate-100 h-64 flex items-center justify-center">
                <svg className="h-24 w-24 text-slate" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-navy mb-1">Michael Johnson</h3>
                <p className="text-gold mb-3">Partner, M&A Strategy</p>
                <p className="text-slate text-sm">
                  Michael specializes in pre-acquisition due diligence and post-acquisition integration strategies that maximize synergies and minimize operational disruption.
                </p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-white border border-slate-100 rounded-lg shadow-md overflow-hidden">
              <div className="bg-slate-100 h-64 flex items-center justify-center">
                <svg className="h-24 w-24 text-slate" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-navy mb-1">Sarah Williams</h3>
                <p className="text-gold mb-3">Partner, Value Creation</p>
                <p className="text-slate text-sm">
                  Sarah has led numerous value creation initiatives for private equity portfolio companies, focusing on growth strategies and digital transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 