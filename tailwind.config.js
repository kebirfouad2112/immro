module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "loving-help-337691framerappblack":
          "var(--loving-help-337691framerappblack)",
        "loving-help-337691framerappblack-20":
          "var(--loving-help-337691framerappblack-20)",
        "loving-help-337691framerappblaze-orange":
          "var(--loving-help-337691framerappblaze-orange)",
        "loving-help-337691framerappboulder":
          "var(--loving-help-337691framerappboulder)",
        "loving-help-337691framerappcod-gray-80":
          "var(--loving-help-337691framerappcod-gray-80)",
        "loving-help-337691framerappdark-blue":
          "var(--loving-help-337691framerappdark-blue)",
        "loving-help-337691framerappfuchsia-blue":
          "var(--loving-help-337691framerappfuchsia-blue)",
        "loving-help-337691framerappheliotrope-10":
          "var(--loving-help-337691framerappheliotrope-10)",
        "loving-help-337691framerappmine-shaft":
          "var(--loving-help-337691framerappmine-shaft)",
        "loving-help-337691framerappsilver":
          "var(--loving-help-337691framerappsilver)",
        "loving-help-337691framerappthunder":
          "var(--loving-help-337691framerappthunder)",
        "loving-help-337691framerappwhite":
          "var(--loving-help-337691framerappwhite)",
        "loving-help-337691framerappwhite-10":
          "var(--loving-help-337691framerappwhite-10)",
        "loving-help-337691framerappwhite-5":
          "var(--loving-help-337691framerappwhite-5)",
        "loving-help-337691framerappwhite-75":
          "var(--loving-help-337691framerappwhite-75)",
        "loving-help-337691framerappwhite-90":
          "var(--loving-help-337691framerappwhite-90)",
        "loving-help-337691framerappwhite-black":
          "var(--loving-help-337691framerappwhite-black)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "loving-help-337691-framer-app-figtree-medium":
          "var(--loving-help-337691-framer-app-figtree-medium-font-family)",
        "loving-help-337691-framer-app-figtree-regular":
          "var(--loving-help-337691-framer-app-figtree-regular-font-family)",
        "loving-help-337691-framer-app-onest-medium":
          "var(--loving-help-337691-framer-app-onest-medium-font-family)",
        "loving-help-337691-framer-app-onest-semibold":
          "var(--loving-help-337691-framer-app-onest-semibold-font-family)",
        "loving-help-337691-framer-app-semantic-heading-2":
          "var(--loving-help-337691-framer-app-semantic-heading-2-font-family)",
        "loving-help-337691-framer-app-semantic-heading-3":
          "var(--loving-help-337691-framer-app-semantic-heading-3-font-family)",
        "loving-help-337691-framer-app-semantic-input":
          "var(--loving-help-337691-framer-app-semantic-input-font-family)",
        "loving-help-337691-framer-app-semantic-item":
          "var(--loving-help-337691-framer-app-semantic-item-font-family)",
        "loving-help-337691-framer-app-semantic-link":
          "var(--loving-help-337691-framer-app-semantic-link-font-family)",
        "loving-help-337691-framer-app-semantic-strong":
          "var(--loving-help-337691-framer-app-semantic-strong-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
