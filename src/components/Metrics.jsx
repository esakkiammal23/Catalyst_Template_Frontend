export default function Metrics() {
  return (
    <section className="metrics-section">
      <div className="container">

        <div className="metrics-heading">
          <span>PERFORMANCE THAT SPEAKS FOR ITSELF</span>

          <h2>
            Built for speed, scale, <br />
            and reliability.
          </h2>

          <p>
            Catalyst delivers enterprise-grade performance with
            real-time infrastructure monitoring and ultra-fast response times.
          </p>
        </div>

        <div className="metrics-grid">

          {/* CARD 1 */}
          <div className="metric-box">

            <div className="metric-top">
              <span className="metric-label green">
                ● LIVE STATUS
              </span>
            </div>

            <h1>99.9%</h1>

            <h3>Uptime Reliability</h3>

            <p>
              Stable infrastructure with global edge optimization
              and automatic failover systems.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="metric-box featured-metric">

            <div className="metric-top">
              <span className="metric-label yellow">
                ● PERFORMANCE
              </span>
            </div>

            <h1>2.4s</h1>

            <h3>Average Load Time</h3>

            <p>
              Lightning-fast rendering and optimized API delivery
              for modern SaaS applications.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="metric-box">

            <div className="metric-top">
              <span className="metric-label blue">
                ● USERS
              </span>
            </div>

            <h1>50K+</h1>

            <h3>Active Users</h3>

            <p>
              Trusted by startups, developer teams,
              and enterprise platforms worldwide.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}