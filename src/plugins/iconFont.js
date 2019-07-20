function loadStyle(url) {
  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = url
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
}


const iconFonts = [
  '567566_r22zi6t8noas8aor',
  '599693_0b5sleso3f1j1yvi',
  '840206_qn7uwts9iqm', // base-store
  '1078946_klqymj8ambh'// kc-front
]

const iconFontUrl = '//at.alicdn.com/t/font_$key.css'


iconFonts.forEach(ele => {
  loadStyle(iconFontUrl.replace('$key', ele))
})
