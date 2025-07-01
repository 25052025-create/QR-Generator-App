import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

function App() {
  const [searchId, setSearchId] = useState("DISP804666");

  const searchUrl = `https://${searchId}`;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>QR Code Generator</h1>

      <input
        type="text"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        placeholder="Enter dispatch slip no."
        style={styles.input}
      />

      <div style={styles.qrBox}>
        <QRCodeSVG value={searchUrl} size={200} />
      </div>

      <p style={styles.url}>
        When scanned, this QR will open:
        <br />
        <a href={searchUrl} target="_blank" rel="noopener noreferrer">
          {searchUrl}
        </a>
      </p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  input: {
    padding: "0.5rem",
    fontSize: "1rem",
    marginBottom: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "250px",
  },
  qrBox: {
    padding: "1rem",
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginBottom: "1rem",
  },
  url: {
    textAlign: "center",
    fontSize: "0.9rem",
  },
};

export default App;
