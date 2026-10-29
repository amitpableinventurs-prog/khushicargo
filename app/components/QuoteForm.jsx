"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <div><span className="form-kicker">A good move begins here</span><h3>Tell us about your move</h3></div>
        <span className="form-step">01 <i>/ 01</i></span>
      </div>
      {submitted ? (
        <div className="success-message" role="status">
          <span>i</span>
          <div><strong>Online requests aren’t connected yet.</strong><p>Please call <a href="tel:+916262745451">+91 62627 45451</a> and we’ll be happy to discuss your move.</p></div>
        </div>
      ) : (
        <>
          <div className="form-row">
            <label>Your name<input name="name" type="text" placeholder="e.g. Ananya Shah" autoComplete="name" required /></label>
            <label>Phone number<input name="phone" type="tel" placeholder="+91 00000 00000" autoComplete="tel" required /></label>
          </div>
          <div className="form-row">
            <label>Moving from<input name="from" type="text" placeholder="City or locality" required /></label>
            <label>Moving to<input name="to" type="text" placeholder="City or locality" required /></label>
          </div>
          <div className="form-row">
            <label>What are you moving?
              <select name="moveType" defaultValue="" required>
                <option value="" disabled>Select a service</option>
                <option>Home relocation</option><option>Office relocation</option><option>Vehicle transport</option><option>Storage</option><option>Something else</option>
              </select>
            </label>
            <label>When are you moving?
              <select name="moveDate" defaultValue="" required>
                <option value="" disabled>Select a timeframe</option>
                <option>As soon as possible</option><option>Within a week</option><option>Within 15 days</option><option>Within a month</option><option>Date not decided</option>
              </select>
            </label>
          </div>
          <button className="button button-orange form-submit" type="submit">Request a call back <span aria-hidden="true">→</span></button>
          <p className="form-privacy">Your details stay with us. We’ll only use them to help plan your move.</p>
        </>
      )}
    </form>
  );
}
