'use client'

export function Land() {
  return (
    <section 
      id="land"
      className="relative py-20 lg:py-28 bg-monkeypod-cream"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl"
          >
            <img
              src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Local Hawaiian farm"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left"
          >
            <span className="text-monkeypod-light text-sm tracking-widest uppercase mb-3 block">
              Farm to Table
            </span>

            <h2 className="font-display text-3xl lg:text-5xl font-bold text-monkeypod-green mb-5">
              We don't import <span className="text-monkeypod-brown">paradise</span>.
              <br className="hidden lg:block" />
              We grow it.
            </h2>

            <p className="text-base text-monkeypod-dark/70 mb-6 max-w-md mx-auto lg:mx-0">
              90% of our ingredients come from within 100 miles of our kitchens. 
              From the volcanic soil to your plate, every dish tells a story.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-monkeypod-green/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-monkeypod-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <div>
                <span className="font-display text-xl font-bold text-monkeypod-green">100</span>
                <span className="text-monkeypod-dark/60 text-sm ml-1">miles</span>
                <p className="text-sm text-monkeypod-dark/60">Local sourcing</p>
              </div>
            </div>

            <blockquote className="border-l-4 border-monkeypod-brown pl-4 italic text-monkeypod-dark/80">
              "The best ingredients don't need to travel far."
              <footer className="mt-1 text-sm text-monkeypod-dark/60 not-italic">
                — Chef Peter Merriman
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
