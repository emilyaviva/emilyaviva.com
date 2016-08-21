import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.48,
  scale: 2.15,
  googleFonts: [
    { name: 'Merriweather', styles: ['700'] },
    { name: 'Merriweather Sans', styles: ['300', '300i', '600', '600i'] }
  ],
  headerFontFamily: ['Merriweather', 'Palatino', 'Georgia', 'Times New Roman', 'serif'],
  bodyFontFamily: ['Merriweather Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  headerGray: 20,
  bodyGray: 12,
  bodyWeight: 300,
  boldWeight: 700,
  headerWeight: 700,
  includeNormalize: true,
  plugins: [new CodePlugin()]
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
