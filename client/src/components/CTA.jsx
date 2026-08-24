import './CTA.css';

export default function CTA() {
  return (
    <section id="cta" className="cta">
      <div className="container cta-inner">
        <div className="cta-card">
          <h2>Ready to park without the queue?</h2>
          <p>
            Register your vehicle once, find parking near your destination, and let
            ParkEase handle the rest — from reservation to timed exit.
          </p>
          <div className="cta-actions">
            <a href="/register" className="btn btn-primary">
              Create account
            </a>
            <a href="/login" className="btn btn-dark">
              Sign in
            </a>
          </div>
          <p className="cta-note">
            Backend API running at <code>/api</code> — auth, facilities, reservations,
            sessions, and payments.
          </p>
        </div>
      </div>
    </section>
  );
}
