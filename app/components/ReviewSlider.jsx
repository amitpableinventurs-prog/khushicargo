"use client";

import { useEffect, useRef, useState } from "react";

function initials(name) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0].toUpperCase()).join("");
}

function measure(track) {
  const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
  const card = track.firstElementChild;
  const step = card ? card.getBoundingClientRect().width + gap : track.clientWidth;
  const perView = Math.max(1, Math.round((track.clientWidth + gap) / step));
  return { step, perView };
}

export default function ReviewSlider({ reviews }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [pages, setPages] = useState(1);
  const [paused, setPaused] = useState(false);

  function update() {
    const track = trackRef.current;
    if (!track) return;
    const { step, perView } = measure(track);
    const pageCount = Math.max(1, reviews.length - perView + 1);
    setPages(pageCount);
    setIndex(Math.min(pageCount - 1, Math.round(track.scrollLeft / step)));
  }

  function goTo(target) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: target * measure(track).step, behavior: "smooth" });
  }

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (paused || pages <= 1 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = setInterval(() => goTo(index + 1 >= pages ? 0 : index + 1), 5000);
    return () => clearInterval(timer);
  }, [index, pages, paused]);

  return (
    <div
      className="review-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div className="review-track" ref={trackRef} onScroll={update} tabIndex={0} aria-label="Customer reviews">
        {reviews.map((review, reviewIndex) => (
          <article className="review-card" key={`${review.name}-${review.city}`} aria-label={`Review ${reviewIndex + 1} of ${reviews.length}`}>
            <div className="review-top">
              <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                {"★".repeat(review.rating)}<span>{"★".repeat(5 - review.rating)}</span>
              </div>
              {review.sample && <span className="review-sample">Sample</span>}
            </div>
            <blockquote>“{review.text}”</blockquote>
            <div className="review-person">
              <span className="review-avatar" aria-hidden="true">{initials(review.name)}</span>
              <span><strong>{review.name}</strong><small>{review.city} · {review.service}</small></span>
            </div>
          </article>
        ))}
      </div>

      {pages > 1 && (
        <div className="review-controls">
          <div className="review-dots">
            {Array.from({ length: pages }, (_, page) => (
              <button
                key={page}
                type="button"
                className={page === index ? "active" : undefined}
                aria-label={`Show review ${page + 1}`}
                aria-current={page === index ? "true" : undefined}
                onClick={() => goTo(page)}
              />
            ))}
          </div>
          <div className="review-arrows">
            <button type="button" aria-label="Previous review" onClick={() => goTo(index - 1)} disabled={index === 0}>←</button>
            <button type="button" aria-label="Next review" onClick={() => goTo(index + 1)} disabled={index >= pages - 1}>→</button>
          </div>
        </div>
      )}
    </div>
  );
}
