import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets"

const theme = merge(tailwind, {
  initialColorModeName: `light`,
  useCustomProperties: true,
  colors: {
    primary: tailwind.colors.green[4],
    secondary: tailwind.colors.indigo[6],
    text: tailwind.colors.gray[5],
    heading: `#444444`,
    background: `#e6ffee`,
    divider: tailwind.colors.gray[8],
    textMuted: tailwind.colors.gray[4],
    icon_brightest: tailwind.colors.gray[2],
    icon_darker: tailwind.colors.gray[7],
    icon_darkest: tailwind.colors.gray[8],
    icon_red: tailwind.colors.red[6],
    icon_blue: tailwind.colors.blue[6],
    icon_orange: tailwind.colors.orange[5],
    icon_yellow: tailwind.colors.yellow[5],
    icon_pink: tailwind.colors.pink[5],
    icon_purple: tailwind.colors.purple[6],
    icon_green: tailwind.colors.green[5],
    modes: {
      light: {
        text: tailwind.colors.gray[5],
        heading: `#444444`,
        background: `#e6ffee`,
        divider: tailwind.colors.gray[8],
        textMuted: tailwind.colors.gray[4],
        icon_brightest: tailwind.colors.gray[2],
        icon_darker: tailwind.colors.gray[7],
        icon_darkest: tailwind.colors.gray[8],
      },
    },
  },
  breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1600px`],
  footer: {
    textAlign: `center`,
    display: `block`,
    position: `absolute`,
    bottom: 0,
    color: `textMuted`,
    px: [2, 3],
    py: [3, 4],
  },
  styles: {
    root: {
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
      color: `text`,
      backgroundColor: `background`,
      a: {
        color: `heading`,
        textDecoration: `none`,
        transition: `all 0.3s ease-in-out`,
        "&:hover": {
          color: `heading`,
          textDecoration: `none`,
        },
      },
    },
    p: {
      fontSize: [2, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      color: `text`,
    },
    blockquote: {
      marginLeft: `40px`,
      paddingRight: `15%`,
      paddingLeft: `40px`,
      borderLeft: `6px solid #80ff80`,
      p: {
        fontSize: [4, 4, 4],
        lineHeight: `1.15`,
        fontWeight: `medium`,
        color: `#009900`,
      },
    },
    h1: {
      fontSize: [7, 7, 8],
      mt: 2,
      mb: 3,
      textShadow: `rgba(255, 255, 255, 0.15) 0px 5px 35px`,
      letterSpacing: `wide`,
      color: `heading`,
    },
    h2: {
      fontSize: [4, 8, 8],
      paddingRight: `45%`,
      mt: 2,
      mb: 2,
      color: `heading`,
    },
    h3: {
      fontSize: [3, 4, 5],
      mt: 3,
      color: `heading`,
    },
    h4: {
      fontSize: [2, 3, 4],
      color: `heading`,
    },
    h5: {
      fontSize: [1, 2, 3],
      color: `heading`,
    },
    h6: {
      fontSize: 1,
      mb: 2,
      color: `heading`,
    },
  },
  layout: {
    container: {
      maxWidth: `5xl`,
    },
  },
  buttons: {
    toggle: {
      color: `background`,
      border: `none`,
      backgroundColor: `text`,
      cursor: `pointer`,
      alignSelf: `center`,
      px: 3,
      py: 2,
      ml: 3,
    },
  },
  texts: {
    bigger: {
      p: {
        fontSize: [5, 5, 5],
        lineHeight: `1.15`,
        paddingRight: `40%`,
      },
      a: {
        color: `#e65c00`,
        textDecoration: `none`,
        transition: `all 0.3s ease-in-out`,
        "&:hover": {
          color: `heading`,
          textDecoration: `none`,
        },
      },
    },
  },
})

export default theme
