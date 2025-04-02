/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'background': '#0D0D0D', // Casi negro
        'text-primary': '#F3F4F6', // Gris claro (texto principal)
        'text-secondary': '#A1A1AA', // Gris (texto secundario, ejemplo)
        'brand': {
          'primary': '#10B981',   // Verde Primario (Emerald 500)
          'secondary': '#047857', // Verde Secundario (Emerald 700)
          'glow': '#A7F3D0',      // Verde Neón/Glow (Emerald 200)
        },
      },
      // Opcional: Añadir keyframes para animaciones de glow más adelante
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px 5px rgba(167, 243, 208, 0.3)' }, // brand-glow con opacidad
          '50%': { boxShadow: '0 0 25px 10px rgba(167, 243, 208, 0.1)' },
        }
      },
      animation: {
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
