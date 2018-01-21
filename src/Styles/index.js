const Colors = {
  Black: "#000000",
  White: "#e9e8e3"
}

const Font = {
  default: 'Roboto Slab'
}

const Route = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }

}

const Button = {
  btn: {
    outline: 'none',
    border: '2px solid black',
    width: 365,
    height: 90,
    borderRadius: 6,
    background: Colors.White,
    cursor: 'pointer',

    font: {
      size: 30,
      family: Font.default,
      weight: 100
    },

    boxShadow: {
      y: 10,
      x: 2,
      blur: 15,
      spread: 1,
      color: 'rgba(0,0,0,.3)'
    },

    '&:hover': {
      boxShadow: {
        y: 6,
        x: 2,
        blur: 15,
        spread: 1,
        color: 'rgba(0,0,0,.3)'
      }
    },

    '&:active': {
      boxShadow: 'none'
    },

    '&:disabled': {
      background: 'grey',
      color: Colors.White
    }
  }
}

export { Colors, Font, Route, Button }
