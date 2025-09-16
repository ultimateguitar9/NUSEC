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

  { apt: "APT-NightOwl", category: "IP", value: "172.16.44.201" },
  { apt: "APT-NightOwl", category: "Domain", value: "phishmail-login.co" },
  { apt: "APT-NightOwl", category: "Hash", value: "5d41402abc4b2a76b9719d911017c592" },

  { apt: "APT-StoneBear", category: "IP", value: "203.0.113.77" },
  { apt: "APT-StoneBear", category: "Domain", value: "update-service.info" },
  { apt: "APT-StoneBear", category: "Hash", value: "9ae0ea9e3c9c6e1b9b6252c8395efdc1" },

  { apt: "APT-CrimsonHawk", category: "IP", value: "198.51.100.42" },
  { apt: "APT-CrimsonHawk", category: "Domain", value: "secure-payments.biz" },
  { apt: "APT-CrimsonHawk", category: "Hash", value: "6f1ed002ab5595859014ebf0951522d9" },

  { apt: "APT-SilverJackal", category: "IP", value: "10.45.22.13" },
  { apt: "APT-SilverJackal", category: "Domain", value: "backdoor-dropper.net" },
  { apt: "APT-SilverJackal", category: "Hash", value: "3c59dc048e8850243be8079a5c74d079" },

  { apt: "APT-BlueSerpent", category: "IP", value: "203.0.113.199" },
  { apt: "APT-BlueSerpent", category: "Domain", value: "payloads-download.org" },
  { apt: "APT-BlueSerpent", category: "Hash", value: "45c48cce2e2d7fbdea1afc51c7c6ad26" },

  { apt: "APT-FireJackal", category: "IP", value: "192.0.2.88" },
  { apt: "APT-FireJackal", category: "Domain", value: "credential-harvest.com" },
  { apt: "APT-FireJackal", category: "Hash", value: "d41d8cd98f00b204e9800998ecf8427e" },

  { apt: "APT-SandViper", category: "IP", value: "198.18.0.45" },
  { apt: "APT-SandViper", category: "Domain", value: "keylogger-services.net" },
  { apt: "APT-SandViper", category: "Hash", value: "a87ff679a2f3e71d9181a67b7542122c" },

  { apt: "APT-BlackFalcon", category: "IP", value: "203.0.113.55" },
  { apt: "APT-BlackFalcon", category: "Domain", value: "command-center.org" },
  { apt: "APT-BlackFalcon", category: "Hash", value: "1679091c5a880faf6fb5e6087eb1b2dc" },
  { apt: "APT-BlueSerpent", category: "Domain", value: "payloads-download.org" },
  { apt: "APT-ShadowFox", category: "Hash", value: "a3b1c9d4e6f7092b8c4d0e6f1a2b3c4d" },
  { apt: "APT-NightOwl", category: "IP", value: "172.16.44.201" },
  { apt: "APT-IronWolf", category: "Hash", value: "e99a18c428cb38d5f260853678922e03" },
  { apt: "APT-BlackFalcon", category: "IP", value: "192.168.101.55" },
  { apt: "APT-SandViper", category: "Hash", value: "b7e23ec29af22b0b4e41da31e868d572" },
  { apt: "APT-GhostTiger", category: "Domain", value: "stealth-login.org" },
  { apt: "APT-CrimsonHawk", category: "IP", value: "198.51.100.42" },
  { apt: "APT-FireJackal", category: "Domain", value: "credential-harvest.com" },
  { apt: "APT-StoneBear", category: "Hash", value: "9ae0ea9e3c9c6e1b9b6252c8395efdc1" },
  { apt: "APT-SilverJackal", category: "Hash", value: "3c59dc048e8850243be8079a5c74d079" },
  { apt: "APT-SingleNeedle", category: "IP", value: "1.178.32.23" },
  { apt: "APT-ShadowFox", category: "Domain", value: "malicious-c2.net" },
  { apt: "APT-BlueSerpent", category: "IP", value: "203.0.113.199" },
  { apt: "APT-NightOwl", category: "Hash", value: "5d41402abc4b2a76b9719d911017c592" },
  { apt: "APT-IronWolf", category: "IP", value: "10.66.77.88" },
  { apt: "APT-BlackFalcon", category: "Domain", value: "command-center.org" },
  { apt: "APT-RedMantis", category: "IP", value: "10.10.250.17" },
  { apt: "APT-RedMantis", category: "Hash", value: "c81e728d9d4c2f636f067f89cc14862c" },
  { apt: "APT-Driftwood", category: "Domain", value: "secure-update-cdn.io" }
  { apt: "APT-CrimsonHawk", category: "Hash", value: "6f1ed002ab5595859014ebf0951522d9" },
  { apt: "APT-StoneBear", category: "IP", value: "203.0.113.77" },
  { apt: "APT-FrostSparrow", category: "Domain", value: "login-proxy-services.net" },
  { apt: "APT-FrostSparrow", category: "Hash", value: "7c6a180b36896a0a8c02787eeafb0e4c" },
  { apt: "APT-SandViper", category: "Domain", value: "keylogger-services.net" },
  { apt: "APT-SlateRaven", category: "IP", value: "172.20.5.66" },
  { apt: "APT-SlateRaven", category: "Hash", value: "9d5ed678fe57bcca610140957afab571" },
  { apt: "APT-GhostTiger", category: "Hash", value: "098f6bcd4621d373cade4e832627b4f6" },
  { apt: "APT-SilverJackal", category: "IP", value: "10.45.22.13" },
  { apt: "APT-BlueMamba", category: "Domain", value: "update-checker.me" },
  { apt: "APT-BlueMamba", category: "Hash", value: "3b5d5c3712955042212316173ccf37be" },
  { apt: "APT-ObsidianCrow", category: "IP", value: "192.0.2.220" },
  { apt: "APT-ObsidianCrow", category: "Domain", value: "metrics-collector.io" },
  { apt: "APT-FireJackal", category: "Hash", value: "d41d8cd98f00b204e9800998ecf8427e" },
  { apt: "APT-IgniteHound", category: "IP", value: "10.254.0.9" },
  { apt: "APT-IgniteHound", category: "Domain", value: "auth-relay.example" },
  { apt: "APT-IgniteHound", category: "Hash", value: "8f14e45fceea167a5a36dedd4bea2543" },
  { apt: "APT-BlueSerpent", category: "Hash", value: "45c48cce2e2d7fbdea1afc51c7c6ad26" },
  { apt: "APT-BlackFalcon", category: "Hash", value: "1679091c5a880faf6fb5e6087eb1b2dc" },
  { apt: "APT-NightOwl", category: "Domain", value: "phishmail-login.co" },
  { apt: "APT-SandViper", category: "IP", value: "198.18.0.45" },
  { apt: "APT-SingleNeedle", category: "IP", value: "1.178.32.23" },
  { apt: "APT-CobaltFox", category: "Domain", value: "cdn-sync-service.net" },
  { apt: "APT-CobaltFox", category: "Hash", value: "45f9d8a6b3c2e9f0d1a2b3c4d5e6f789" }

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
