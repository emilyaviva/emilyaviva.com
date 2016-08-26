import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    { name: 'Oswald', styles: ['400', '400i'] },
    // { name: 'Merriweather', styles: ['400', '700', '700i'] },
    { name: 'Source Sans Pro', styles: ['400', '400i', '600', '600i'] }
  ]
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
