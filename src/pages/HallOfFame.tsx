import React, { useEffect, useRef, useState } from "react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function HallOfFame() {
  const turbulenceRef = useRef(null as SVGFEturbulenceElement | null);

  useEffect(() => {
    // Page title (replaces <title>)
    document.title = "NUSEC Hall Of Fame";

    // Compute the refresh link once so it doesn't change during re-renders

  //   // Randomize the SVG turbulence seed like the original script
  //   if (turbulenceRef.current) {
  //     turbulenceRef.current.setAttribute(
  //       "seed",
  //       Math.floor(Math.random() * 1000).toString()
  //     );
  //   }
 }, []);

  return (
    <div className="hofPage">
      <h1>NUSEC Hall Of Fame</h1>

      <a onClick={() => window.prompt("You serious? Just Ctrl+R you lazy.")}>The Amazing Refresh Button &reg;</a>

      <br />
      <br />

      <table>
        <tbody>
          <tr>
            <td>
              <h3>BONUS!</h3>

              <h2>Bonus 1 - ???</h2>
              <ol>
                <li>Could be you!</li>
              </ol>

              <br />
              <br />

              

              <br />
              <br />
            </td>

            <td>
              <h2>GM POINTS!</h3>

               <h3>NUSEC JEAPORDY!!</h2>
              <ol>
                <li>MATRtIX</li>
              </ol>
              
              <h3>NUSEC GOT PHISHED - Phishing Competition!</h2>
              <ol>
                <li>Timmy loves yippee!</li>
              </ol>

              <br />
              <br />
            </td>

            <td>
              <h3>$3CRET$!</h3>
             
            </td>
          </tr>
        </tbody>
      </table>

      {/* Hidden SVG filter, used by the `.sx` class (kept for parity with original) */}
      <svg aria-hidden="true" focusable="false">
        <filter id="truth">
          <feTurbulence
            ref={turbulenceRef}
            type="turbulence"
            result="noise"
            baseFrequency="0.1"
            numOctaves={2}
          />
          <feDisplacementMap in2="noise" in="SourceGraphic" scale={3} />
        </filter>
      </svg>

      {/* Page-scoped styles */}
      <style>{`
        .hofPage {
          background: #000000;
          font: 12pt Helvetica, Arial, sans-serif;
          color: #ea183f;
          text-align: center;
          min-width: 1100px;
          min-height: 100vh;
          padding: 20px;
        }

        .hofPage h1 {
          color: #eab83f;
          font: 40pt Helvetica, Arial, sans-serif;
          text-align: center;
          margin: 0 0 30px 0;
        }

        .hofPage a {
          font-weight: bold;
          font: 20pt Helvetica, Arial, sans-serif;
          color: #ea187f;
          text-decoration: none;
          border-bottom: 2px dotted #ea187f;
        }

        .hofPage a:hover { color: #eaa87f; }

        .hofPage h2 {
          font: 16pt Helvetica, Arial, sans-serif;
          color: #5574a7;
          letter-spacing: -1px;
          font-weight: bold;
        }

        .hofPage ol {
          display: inline-block;
          counter-reset: li;
          list-style-type: none;
          margin: 0;
          padding: 0 0 0 16px;
          text-align: left; /* keeps numbers aligned visually */
        }

        .hofPage ol li { position: relative; }

        .hofPage ol li:before {
          content: counter(li)'.';
          counter-increment: li;
          position: absolute;
          right: 100%;
          margin-right: 4px;
        }

        .hofPage table {
          margin-left: auto;
          margin-right: auto;
          table-layout: fixed;
          width: 80%;
        }

        .hofPage table td {
          vertical-align: top;
          padding: 15px;
        }

        /* Additional classes preserved from original stylesheet */
        .hofPage .plaque h2 {
          font: 22pt Helvetica, Arial, sans-serif;
          color: #5574a7;
          letter-spacing: -1px;
          font-weight: bold;
        }

        .hofPage .discourse {
          margin-left: auto;
          margin-right: auto;
          padding: 0 0 30px 0;
          width: max-content;
          max-width: 100%;
        }

        .hofPage .discourse pre.quote,
        .hofPage .discourse pre.quote-wrap {
          font-family: monospace, "AppleBraille";
          text-align: left;
          line-height: 1.12;
          letter-spacing: -1px;
          white-space: pre-wrap;
        }

        .hofPage .discourse p.label {
          text-align: center;
          font-weight: bold;
        }

        .hofPage .sa {
          color: #ffffff;
          text-shadow: 0 0 5px #fff700, 0 0 5px #fff700;
        }

        .hofPage .sb {
          color: #ffeb3b;
          text-shadow: 0 0 10px #ff8c3b, 0 0 20px #ff8c3b, 0 0 30px #ff8c3b, 0 0 40px #ff8c3b;
        }

        .hofPage .sx {
          color: #000000;
          font-weight: bold;
          text-shadow: 0 0 5px #ff8c0b, 0 0 5px #ff8c0b;
          filter: url(#truth);
        }

        .hofPage svg {
          position: absolute;
          width: 0;
          height: 0;
        }
      `}</style>
    </div>
  );
}
