"use client";

import { useMemo, useState } from "react";
import { homeCity, popularCities, regions } from "../cities/city-list";

const sortedRegions = regions.map((region) => ({
  ...region,
  cities: [...region.cities].sort((a, b) => a.localeCompare(b, "en")),
}));

function normalize(text) {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
}

function CityCards({ cities }) {
  return (
    <ul className="city-cards">
      {cities.map((city) => (
        <li key={city} className={city === homeCity ? "city-card is-home" : "city-card"}>
          <span>Packers and Movers in</span>
          <strong>{city}</strong>
          {city === homeCity && <small>Our base</small>}
        </li>
      ))}
    </ul>
  );
}

export default function CitiesDirectory() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("all");
  const [openRegions, setOpenRegions] = useState(() => new Set());

  const results = useMemo(() => {
    const term = normalize(query);
    return sortedRegions
      .filter((item) => region === "all" || item.name === region)
      .map((item) => {
        if (!term || normalize(item.name).includes(term)) return item;
        return { ...item, cities: item.cities.filter((city) => normalize(city).includes(term)) };
      })
      .filter((item) => item.cities.length > 0);
  }, [query, region]);

  const cityCount = results.reduce((sum, item) => sum + item.cities.length, 0);
  const isFiltered = query.trim() !== "" || region !== "all";

  function toggleRegion(name) {
    setOpenRegions((current) => {
      const next = new Set(current);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }

  function clearFilters() {
    setQuery("");
    setRegion("all");
  }

  return (
    <section className="cities-section section-pad" id="cities">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span /> Find your city</div>
            <h2>Every state. <em>Every corner.</em></h2>
          </div>
          <p>Search for your city or pick a state. Moving somewhere that isn’t listed? Call us and we’ll help plan it.</p>
        </div>

        <div className="city-toolbar">
          <label className="city-field city-search">
            <span className="visually-hidden">Search city or state</span>
            <span className="city-field-icon" aria-hidden="true">⌕</span>
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search city or state, e.g. Indore" autoComplete="off" />
          </label>
          <label className="city-field">
            <span className="visually-hidden">Filter by state or union territory</span>
            <select value={region} onChange={(event) => setRegion(event.target.value)}>
              <option value="all">All states &amp; UTs</option>
              {regions.map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}
            </select>
          </label>
        </div>

        {!isFiltered && (
          <>
            <h3 className="city-subhead">Popular cities</h3>
            <CityCards cities={popularCities} />
            <h3 className="city-subhead">Browse by state &amp; union territory</h3>
          </>
        )}

        <div className="city-results" role="status">
          <span>{isFiltered ? "Showing" : "All"} <strong>{cityCount}</strong> {cityCount === 1 ? "city" : "cities"} in <strong>{results.length}</strong> {results.length === 1 ? "state / UT" : "states & UTs"}</span>
          {isFiltered && <button type="button" onClick={clearFilters}>Clear filters ×</button>}
        </div>

        {results.length > 0 ? (
          <div className="region-list">
            {results.map((item) => {
              const open = isFiltered || openRegions.has(item.name);
              const head = (
                <>
                  <span className="region-name"><span className="region-type">{item.type}</span><strong>{item.name}</strong></span>
                  <small>{item.cities.length} {item.cities.length === 1 ? "city" : "cities"}</small>
                </>
              );
              return (
                <div className={open ? "region-panel open" : "region-panel"} key={item.name}>
                  {isFiltered ? (
                    <div className="region-toggle">{head}</div>
                  ) : (
                    <button type="button" className="region-toggle" aria-expanded={open} onClick={() => toggleRegion(item.name)}>
                      {head}
                      <i aria-hidden="true">{open ? "−" : "+"}</i>
                    </button>
                  )}
                  {open && <CityCards cities={item.cities} />}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="city-empty">
            <span>?</span>
            <div>
              <strong>We couldn’t find “{query.trim()}” in our list.</strong>
              <p>This list shows major cities and towns. For any other place in India, call <a href="tel:+916262745451">+91 62627 45451</a> and we’ll help plan your move.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
