/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
    theme: {
      extend: {
        colors: {
          // ─── Brand Primary (Orange) ───────────────────────────
          primary: {
            50:  "#fff7ed",
            100: "#ffedd4",
            200: "#ffd7a8",
            300: "#ffb86a",
            400: "#ff8904",
            500: "#ff6900", // ← main CTA button
            600: "#f54a00",
            700: "#ca3500",
            800: "#9f2d00",
            900: "#7e2a0c",
            DEFAULT: "#F59300",
          },
  
          // ─── Dark Blue (Hero / Navbar background) ────────────
          dark: {
            50:  "#EFF2F7",
            100: "#D5DCE8",
            200: "#B0BCCE",
            300: "#8090AA",
            400: "#5C6E88",
            500: "#3D5470",
            600: "#2A3F58",
            700: "#1E3448",
            800: "#152738",
            900: "#111E2C", // ← hero section bg
            950: "#0A1420", // ← darkest nav / footer
            DEFAULT: "#111E2C",
          },
  
          // ─── Neutral Gray (Text / Surfaces) ──────────────────
          gray: {
            0:   "#FFFFFF",
            50:  "#F7F8FA", // ← page bg
            100: "#EDEEF2", // ← card / section bg
            200: "#DFE1E8",
            300: "#C8CCD6",
            400: "#A8AEBB",
            500: "#8A90A0",
            600: "#6A7080",
            700: "#505666",
            800: "#353A4A",
            900: "#1A1D2A",
            DEFAULT: "#505666",
          },
  
          // ─── Semantic ─────────────────────────────────────────
          success: {
            bg:      "#E8F5E9",
            DEFAULT: "#2E7D32",
            dark:    "#1B5E20",
          },
          warning: {
            bg:      "#FFF8E1",
            DEFAULT: "#F57F17",
            dark:    "#E65100",
          },
          danger: {
            bg:      "#FFEBEE",
            DEFAULT: "#C62828",
            dark:    "#B71C1C",
          },
          info: {
            bg:      "#E3F2FD",
            DEFAULT: "#1565C0",
            dark:    "#0D47A1",
          },
  
          // ─── Difficulty badges (Trekking) ─────────────────────
          difficulty: {
            "easy-bg":    "#E8F5E9",
            easy:         "#388E3C",
            "medium-bg":  "#FFF3E0",
            medium:       "#EF6C00",
            "hard-bg":    "#FFEBEE",
            hard:         "#C62828",
          },
        },
  
        // ─── Typography ─────────────────────────────────────────
        fontFamily: {
          sans: ["Inter", "Be Vietnam Pro", "ui-sans-serif", "system-ui"],
          display: ['"Be Vietnam Pro"', "Inter", "sans-serif"],
        },
  
        // ─── Border radius ───────────────────────────────────────
        borderRadius: {
          sm:   "6px",
          md:   "10px",
          lg:   "14px",
          xl:   "20px",
          "2xl":"28px",
          full: "9999px",
        },
  
        // ─── Box shadow ──────────────────────────────────────────
        boxShadow: {
          card:  "0 2px 12px rgba(17, 30, 44, 0.08)",
          "card-hover": "0 8px 28px rgba(17, 30, 44, 0.14)",
          badge: "0 1px 4px rgba(0,0,0,0.08)",
        },
        
        // ─── Background image ────────────────────────────────────
        backgroundImage: {
            main: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f2027 100%)"
        }
      },
    },
    plugins: [],
  };