import { Colors, Font } from '../Styles'

const hamburgerBar = {

  hamburger: {
    position: 'relative',
    height: 40,
    width: 60,
    cursor: 'pointer',
    zIndex: 99999999999999
  },

  tiles: {

    background: Colors.Black,
    position: 'absolute',
    width: '100%',
    height: 10,

    transition: {
      property: 'transform',
      duration: '200ms'
    },

    '&:nth-child(1)': {
      top: 0,
      transform: prop => prop.isOpen ? 'translateY(15px) rotate(45deg)' : 'none'
    },

    '&:nth-child(2)': {
      top: 15,
      display: prop => prop.isOpen ? 'none' : 'block'
    },

    '&:nth-child(3)': {
      top: 30,
      transform: prop => prop.isOpen ? 'translateY(-15px) rotate(-45deg)' : 'none'
    }

  }


}

const menu = {

  list: {
    padding: 0,

    flex: {
      basis: '100%'
    },

    width: '60%',
    opacity: prop => prop.visible ? '1' : '0',
    transform: prop => prop.visible ? 'translateX(0)' : 'translateX(100px)',
    pointerEvents: prop => prop.visible ? 'auto' : 'none',
    verticalAlign: 'middle',
    textAlign: 'right',
    listStyle: 'none',
    marginRight: 20,
    transition: [{
      property: 'opacity',
      duration: '200ms'
    }, {
      property: 'transform',
      duration: '200ms'
    }]
  },

  listItem: {
    display: 'inline-block',
    margin: [0, 25],
    verticalAlign: 'middle'
  },

  link: {
    color: Colors.Black,
    font: {
      size: 24,
      weight: 100,
      family: Font.default,
    },
    textDecoration: 'none'
  },

  linkActive: {
    font: {
      weight: 400
    },
    borderBottom: '2px solid black'
  },

  '@media(max-width: 1080px)': {
    list: {
      padding: [100, 0],
      position: 'fixed',
      width: '100%',
      height: '100vh',
      boxSizing: 'border-box',
      top: 0,
      left: 0,
      zIndex: 999999999,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      background: 'rgba(0,0,0,.7)',
      marginTop: 0
    },
    listItem: {
      display: 'block',
      flexBasis: '100%',
      margin: 0,
      textAlign: 'center',
    },
    link: {
      color: Colors.White
    },
    linkActive: {
      borderBottom: '2px solid white'
    }
  }

}

const header = {
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    padding: '40px 0 0',
    zIndex: 1
  },
  container: {
    maxWidth: 1280,
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  '@media(max-width: 1280px)': {
    container: {
      width: '95%',
      margin: [0, '2.5%']
    }
  }
}

export { menu, header, hamburgerBar }
