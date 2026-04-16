import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';

// --- HELPER: Scrolls to the top of the page when you click a new link ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- COMPONENT: Navigation Bar ---
const Navbar = () => {
  return (
    <nav>
      <div className="nav-top">
        <p className="nav-ticker">
          <span>📢 Call for Papers Open!</span> &nbsp;•&nbsp; Paper Submission Deadline: <span>August 1, 2026</span> &nbsp;•&nbsp; Venue: NIT Silchar, Assam &nbsp;•&nbsp; Mode: <span>Hybrid</span>
        </p>
      </div>
      <div className="nav-main">
        <div className="nav-brand">
          <img src="/specs.jpeg" alt="My Logo" style={{ height: '35px' }} />
          <div className="nav-title">IEEE International Conference on Signal, Power &amp; Computing Systems</div>
        </div>
        <div className="nav-links">
          {/* NavLink automatically adds the 'active' class when clicked! */}
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/call-for-papers">Call for Papers</NavLink>
          <NavLink to="/registration">Registration</NavLink>
          <NavLink to="/committee">Committee</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

// --- COMPONENT: Footer ---
const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logos">
          <div className="footer-logo-item">
            <img src="/ieeelogo.png" alt="IEEE" style={{ height: '40px', margin: '0 auto' }} />
            <div className="logo-text">IEEE Silchar Subsection</div>
          </div>
          <div className="footer-logo-item">
            <img src="/specs.jpeg" alt="Signal Processing" style={{ height: '40px', margin: '0 auto' }} />
            <div className="logo-text">Kolkata Chapter</div>
          </div>
          <div className="footer-logo-item">
            <img src="/nitslogo.png" alt="NIT Silchar" style={{ height: '55px', margin: '0 auto' }} />
            <div className="logo-text">NIT Silchar</div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2027 IEEE SPeCS — IEEE International Conference on Signal, Power &amp; Computing Systems.</p>
          <div className="footer-specs" style={{ fontFamily: "'Merriweather', serif", fontSize: '14px', fontWeight: '700', color: 'rgba(255,255,255,0.5)' }}>SPeCS <span style={{ color: 'var(--gold)' }}>2027</span></div>
        </div>
      </div>
    </footer>
  );
};


// ==========================================
// INDIVIDUAL PAGES
// ==========================================

const HomePage = () => {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const deadline = new Date('2026-08-01T00:00:00');
    const timer = setInterval(() => {
      const diff = deadline - new Date();
      if(diff <= 0) return;
      setTimeLeft({
        days: String(Math.floor(diff / 86400000)).padStart(2, '0'),
        hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0')
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-badge">From Signals to Smart Systems</div>
        <h1>IEEE <span>SPeCS</span> 2027</h1>
        <p className="hero-sub">2027 IEEE International Conference on Signal, Power &amp; Computing Systems</p>
        <p className="hero-conf">Organized by the Department of Electrical Engineering, National Institute of Technology Silchar.</p>
        
        <div className="hero-meta">
          <div className="hero-meta-item"><span className="icon">📅</span><div><strong>25–27 May, 2027</strong><span>Conference Dates</span></div></div>
          <div className="hero-meta-item"><span className="icon">📍</span><div><strong>NIT Silchar, India</strong><span>Venue</span></div></div>
          <div className="hero-meta-item"><span className="icon">🌐</span><div><strong>Hybrid Mode</strong><span>In-person &amp; Virtual</span></div></div>
        </div>

        <div className="hero-logos">
          <img src="/ieeelogo.png" alt="IEEE" style={{ height: '70px' }} />
          <span style={{ opacity: 0.3, margin: '0 15px' }}>|</span>
          <img src="/specs.jpeg" alt="IEEE Signal Processing" style={{ height: '70px' }} />
          <span style={{ opacity: 0.3, margin: '0 15px' }}>|</span>
          <img src="/nitslogo.png" alt="NIT Silchar" style={{ height: '70px' }} />
        </div>
      </section>

      <div className="countdown-bar">
        <div className="countdown-inner">
          <p className="countdown-label"> Paper Submission Closes In</p>
          <div className="countdown-units">
            <div className="countdown-unit"><span className="num">{timeLeft.days}</span><span className="lbl">Days</span></div>
            <div className="countdown-unit"><span className="num">{timeLeft.hours}</span><span className="lbl">Hours</span></div>
            <div className="countdown-unit"><span className="num">{timeLeft.minutes}</span><span className="lbl">Mins</span></div>
            <div className="countdown-unit"><span className="num">{timeLeft.seconds}</span><span className="lbl">Secs</span></div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-text">
              <div className="section-header" style={{ textAlign: 'left', marginBottom: '20px' }}>
                <div className="section-tag">About the Conference</div>
                <h2 className="section-title">IEEE <span>SPeCS</span> 2027</h2>
              </div>
              <p>The IEEE International Conference on Signal, Power and Computing Systems (SPeCS) is a premier international conference organized by the Department of Electrical Engineering, National Institute of Technology Silchar...</p>
              <div className="about-highlight">
                <p>All accepted papers will appear in IEEE Xplore after successful registration.</p>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-card"><span className="num">600</span><p className="lbl">Acre Green Campus</p></div>
              <div className="stat-card"><span className="num">4</span><p className="lbl">IEEE Co-sponsors</p></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const PapersPage = () => (
  <>
    <section className="section dates-section">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag" style={{ background: 'var(--orange)' }}>Key Milestones</div>
          <h2 className="section-title" style={{ color: '#fff' }}>Important <span style={{ color: 'var(--gold)' }}>Dates</span></h2>
        </div>
        <div className="dates-grid">
          <div className="date-card"><div className="event">📄 Call for Paper</div><div className="date">August 1</div><div className="year">2026</div></div>
          <div className="date-card"><div className="event">📥 Submission Deadline</div><div className="date">Dec 15</div><div className="year">2026</div></div>
          <div className="date-card"><div className="event">📷 Camera Ready</div><div className="date">Jan 31</div><div className="year">2027</div></div>
        </div>
      </div>
    </section>

    <section className="section" style={{ background: 'var(--light)' }}>
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag">Call for Papers</div>
          <h2 className="section-title">Technical <span>Tracks</span></h2>
        </div>
        <div className="tracks-grid">
          <div className="track-card"><div className="track-num">Track I</div><div className="track-name">Signal Processing and Computer Vision</div></div>
          <div className="track-card"><div className="track-num">Track II</div><div className="track-name">Power &amp; Energy Systems</div></div>
          <div className="track-card"><div className="track-num">Track III</div><div className="track-name">Power Electronics & Converters</div></div>
          <div className="track-card"><div className="track-num">Track IV</div><div className="track-name">VLSI, Comms & Nanotechnology</div></div>
        </div>
      </div>
    </section>
  </>
);

const RegistrationPage = () => (
  <section className="section reg-section" style={{ minHeight: '60vh' }}>
    <div className="section-inner">
      <div className="section-header">
        <div className="section-tag">Registration</div>
        <h2 className="section-title">Registration <span>Fees</span></h2>
      </div>
      <div className="reg-table-wrap">
        <table>
          <thead>
            <tr><th>Author Category</th><th>Indian (INR)</th><th>Foreign (USD)</th></tr>
          </thead>
          <tbody>
            <tr><td colSpan="3" style={{ background: '#e8f5e9', fontWeight: '700', color: '#1a7a4a' }}>IEEE Member</td></tr>
            <tr className="member-row"><td>Students (UG/PG/PhD)</td><td>₹5,000</td><td>$100</td></tr>
            <tr className="member-row"><td>Academia (Faculty)</td><td>₹10,000</td><td>$250</td></tr>
            <tr><td colSpan="3" style={{ background: '#fff3e0', fontWeight: '700', color: '#e87722' }}>Non-IEEE Member</td></tr>
            <tr><td>Students (UG/PG/PhD)</td><td>₹6,000</td><td>$120</td></tr>
            <tr><td>Academia (Faculty)</td><td>₹12,000</td><td>$300</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const CommitteePage = () => (
  <section className="section">
    <div className="section-inner">
      <div className="section-header">
        <div className="section-tag">Leadership</div>
        <h2 className="section-title">Steering &amp; <span>Organising</span> Committee</h2>
      </div>
      <div className="committee-grid">
        <div className="committee-group">
          <h3>Chief Patron &amp; Patrons</h3>
          <ul>
            <li><div><strong>Prof. Dilip Kumar Baidya</strong> — Director, NIT Silchar</div></li>
            <li><div><strong>Prof. Debangshu Dey</strong> — Chair, IEEE Kolkata Section</div></li>
          </ul>
        </div>
        <div className="committee-group">
          <h3>General Chairs</h3>
          <ul>
            <li><div><strong>Dr. Tanmoy Malakar</strong> — NIT Silchar</div></li>
            <li><div><strong>Dr. Rajeeb Dey</strong> — NIT Silchar</div></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const ContactPage = () => (
  <section className="section contact-section" style={{ minHeight: '60vh' }}>
    <div className="section-inner">
      <div className="section-header">
        <div className="section-tag" style={{ background: 'var(--orange)' }}>Get in Touch</div>
        <h2 className="section-title" style={{ color: '#fff' }}>Contact <span style={{ color: 'var(--gold)' }}>Us</span></h2>
      </div>
      <div className="contact-grid">
        <div className="contact-card">
          <h3>📧 Email</h3>
          <div className="contact-item"><span className="icon">🌐</span><p>specs@nits.ac.in</p></div>
        </div>
        <div className="contact-card">
          <h3>📞 Phone</h3>
          <div className="contact-item"><span className="icon">📱</span><p>+91 9476-355729</p></div>
        </div>
        <div className="contact-card">
          <h3>📍 Venue</h3>
          <div className="contact-item"><span className="icon">🏫</span><p>NIT Silchar, Assam</p></div>
        </div>
      </div>
    </div>
  </section>
);

// ==========================================
// MAIN APP COMPONENT (THE ROUTER)
// ==========================================
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* The Navbar appears on EVERY page */}
      <Navbar /> 
      
      {/* This is the window where pages swap out */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/call-for-papers" element={<PapersPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/committee" element={<CommitteePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* The Footer appears on EVERY page */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;