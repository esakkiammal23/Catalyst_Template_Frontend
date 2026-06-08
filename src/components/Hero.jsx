export default function Hero() {
  return (
    <section className="hero">
      <div className="container">

        {/* TOP BADGE */}
        <span className="hero-badge">
          ⚡ Modern SaaS Experience
        </span>

        {/* HEADING */}
        <h1 className="hero-title">
          Build <span>Faster</span> <br />
          Launch <span>Smarter</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="hero-text">
          Catalyst helps teams create modern SaaS platforms with
          premium dashboards, scalable UI systems, analytics,
          and performance-focused architecture.
        </p>

        {/* BUTTONS */}
        <div className="hero-buttons">
          <button className="btn hero-btn">
            Get Started
          </button>

          <button className="btn-outline hero-btn-outline">
            View Docs
          </button>
        </div>

        {/* DASHBOARD */}
        <div className="hero-dashboard">

          {/* TOP METRICS */}
          <div className="grid grid-3" style={{ marginTop: "60px" }}>

            <div className="card metric-card">
              <p>Total Revenue</p>
              <h2>$24,500</h2>
              <span className="success">+12.5%</span>
            </div>

            <div className="card metric-card">
              <p>Active Users</p>
              <h2>8,240</h2>
              <span className="success">+8.2%</span>
            </div>

            <div className="card metric-card">
              <p>Conversion Rate</p>
              <h2>3.2%</h2>
              <span className="warning">Improving</span>
            </div>

          </div>

          {/* TABLE */}
          <div className="dashboard-table card">

            <div className="table-header">
              <h3>Recent Pipelines</h3>

              <button className="table-btn">
                All teams
              </button>
            </div>

            <table>

              <thead>
                <tr>
                  <th>PIPELINE</th>
                  <th>EVENTS / HR</th>
                  <th>LATENCY</th>
                  <th>UPTIME</th>
                  <th>STATUS</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>
                    <div className="pipeline-cell">
                      <span className="pipeline-badge green">P1</span>
                      Checkout Funnel
                    </div>
                  </td>

                  <td>1.2M</td>
                  <td>34ms</td>
                  <td>99.98%</td>

                  <td>
                    <span className="status active">
                      Active
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="pipeline-cell">
                      <span className="pipeline-badge yellow">P2</span>
                      User Onboarding
                    </div>
                  </td>

                  <td>847K</td>
                  <td>52ms</td>
                  <td>99.91%</td>

                  <td>
                    <span className="status pending">
                      Pending
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="pipeline-cell">
                      <span className="pipeline-badge silver">P3</span>
                      Revenue Tracker
                    </div>
                  </td>

                  <td>2.1M</td>
                  <td>28ms</td>
                  <td>99.99%</td>

                  <td>
                    <span className="status active">
                      Active
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="pipeline-cell">
                      <span className="pipeline-badge purple">P4</span>
                      A/B Experiments
                    </div>
                  </td>

                  <td>423K</td>
                  <td>61ms</td>
                  <td>99.87%</td>

                  <td>
                    <span className="status draft">
                      Draft
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </section>
  );
}