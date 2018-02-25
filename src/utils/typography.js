import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'

const typography = new Typography({
  plugins: [
    new CodePlugin()
  ],
  baseFontSize: '16px',
  baseLineHeight: 1.50,
  scaleRatio: 2.00,
  paragraphSpacing: 1.00,
  headerFontFamily: ['Lato', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Source Sans Pro', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  headerGray: 20,
  headerGrayHue: 0,
  bodyGray: 20,
  headerWeight: 700
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
