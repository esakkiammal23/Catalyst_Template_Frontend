export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>Catalyst</h2>

          <p>
            Premium SaaS landing system built for modern startups,
            analytics platforms, and scalable digital products.
          </p>
        </div>

        {/* PRODUCT */}
        <div>
          <h4>Product</h4>
          <p>Features</p>
          <p>Pricing</p>
          <p>Analytics</p>
          <p>Integrations</p>
        </div>

        {/* COMPANY */}
        <div>
          <h4>Company</h4>
          <p>About</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>

        {/* LEGAL */}
        <div>
          <h4>Legal</h4>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Security</p>
          <p>Cookies</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 Catalyst. All rights reserved.
        </p>

        <div className="footer-links">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Cookies</span>
          <span>Licenses</span>
        </div>

      </div>

    </footer>
  );
}