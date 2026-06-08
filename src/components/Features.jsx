export default function Features() {
  return (
    <section id="features">
      <div className="container">

        {/* HEADING */}
        <div className="features-heading">
          <span>POWERFUL FEATURES</span>

          <h2>
            Everything you need to build <br />
            modern SaaS platforms.
          </h2>

          <p>
            Catalyst combines analytics, performance monitoring,
            automation, and infrastructure tools into one clean ecosystem.
          </p>
        </div>

        {/* GRID */}
        <div className="bento-grid">

          {/* LARGE ANALYTICS CARD */}
          <div className="card bento large analytics-card">

            <div className="feature-top">
              <div>
                <h3>Real-time Analytics</h3>
                <p>
                  Monitor traffic, conversions, and performance
                  metrics in real time.
                </p>
              </div>

              <span className="feature-badge">
                LIVE
              </span>
            </div>

            {/* GRAPH */}
            <div className="graph-area">

              <div className="graph-line">
                <span></span>
              </div>

              <div className="graph-bars">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

            </div>

            {/* STATS */}
            <div className="analytics-stats">

              <div>
                <h4>2.4M</h4>
                <p>Monthly Events</p>
              </div>

              <div>
                <h4>99.9%</h4>
                <p>Accuracy</p>
              </div>

              <div>
                <h4>+28%</h4>
                <p>Growth</p>
              </div>

            </div>

          </div>

          {/* FAST API */}
          <div className="card bento feature-mini">

            <div className="mini-icon">
              ⚡
            </div>

            <h3>Fast API</h3>

            <p>
              Ultra-fast backend communication
              optimized for scale.
            </p>

            <div className="mini-progress">
              <span></span>
            </div>

          </div>

          {/* SECURE AUTH */}
          <div className="card bento feature-mini">

            <div className="mini-icon">
              🔒
            </div>

            <h3>Secure Auth</h3>

            <p>
              Enterprise-grade authentication
              with encrypted sessions.
            </p>

            <div className="auth-users">

              <span></span>
              <span></span>
              <span></span>

            </div>

          </div>

          {/* WIDE CARD */}
          <div className="card bento wide architecture-card">

            <div className="architecture-left">

              <h3>Scalable Architecture</h3>

              <p>
                Designed to scale from startup MVPs to
                enterprise-grade distributed systems.
              </p>

              <button className="btn">
                Explore Infrastructure
              </button>

            </div>

            {/* FLOW CHART */}
            <div className="flow-chart">

              <div className="flow-node">
                API
              </div>

              <div className="flow-line"></div>

              <div className="flow-node green">
                DB
              </div>

              <div className="flow-line"></div>

              <div className="flow-node purple">
                CDN
              </div>

              <div className="flow-line"></div>

              <div className="flow-node yellow">
                AI
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}