import { styled } from '..'

export const Container = styled('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  width: '100%',
  height: '100vh',

  span: {
    fontSize: '0.75rem',
    color: '$gray300',
    opacity: 0.6,

    marginBottom: '1rem',
  },

  a: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '$purpleLight',
  },

  'a:hover': {
    transition: 'color .5s ease-out',
    color: '$purpleDark',
  },
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '100%',

  button: {
    height: '3.75rem',
    width: '170px',

    border: 0,

    background: '$pink900 ',
    color: '$white',
  },

  'button:hover': {
    transition: 'transform 0.5s ease',
    transform: 'scaleX(1.05)',
  },
})
