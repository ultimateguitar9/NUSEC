import { useState } from "react";

type IocCategory = "IP" | "Domain" | "Hash";

interface FakeRecord {
  apt: string;
  category: IocCategory;
  value: string;
}

const fakeData: FakeRecord[] = [
  { apt: "APT-ShadowFox", category: "IP", value: "192.168.56.42" },
  { apt: "APT-ShadowFox", category: "Domain", value: "malicious-c2.net" },
  { apt: "APT-IronWolf", category: "IP", value: "10.66.77.88" },
  { apt: "APT-IronWolf", category: "Hash", value: "e99a18c428cb38d5f260853678922e03" },
  { apt: "APT-GhostTiger", category: "Domain", value: "stealth-login.org" },
  { apt: "APT-GhostTiger", category: "Hash", value: "098f6bcd4621d373cade4e832627b4f6" },
];

const Scanner = () => {
  const [query, setQuery] = useState("");

  const filtered = fakeData.filter(
    (item) =>
      item.value.toLowerCase().includes(query.toLowerCase()) ||
      item.apt.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem", fontFamily: "monospace", background: "#111", color: "#0f0", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: "1rem" }}>🔍 IOC Scanner</h1>
      <input
        type="text"
        placeholder="Search by APT, category, or value..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "1.5rem",
          fontSize: "1rem",
          borderRadius: "4px",
        }}
      />

      {filtered.length > 0 ? (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", borderBottom: "1px solid #0f0", padding: "0.5rem" }}>APT</th>
              <th style={{ textAlign: "left", borderBottom: "1px solid #0f0", padding: "0.5rem" }}>Category</th>
              <th style={{ textAlign: "left", borderBottom: "1px solid #0f0", padding: "0.5rem" }}>Value</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item, i) => (
              <tr key={i}>
                <td style={{ padding: "0.5rem", borderBottom: "1px solid #333" }}>{item.apt}</td>
                <td style={{ padding: "0.5rem", borderBottom: "1px solid #333" }}>{item.category}</td>
                <td style={{ padding: "0.5rem", borderBottom: "1px solid #333" }}>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No matches found.</p>
      )}
    </div>
  );
};

export default Scanner;
