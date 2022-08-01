const styles = {
  card: (theme) => ({
    textAlign: 'left',
    border: '0.5px solid #777FEB',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    padding: '44px',
    width: '403px',
    boxSizing: 'border-box',
    [theme.breakpoints.up('md')]: {
      maxWidth: '403px',
    },
  }),
  title: { fontWeight: 700, fontSize: '24px' },
  btn: {
    fontFamily: 'Montserrat,sans-serif',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
    textDecorationLine: 'underline',
    textTransform: 'capitalize',
    color: '#777FEB',
  },

  listItem: {
    fontFamily: 'Montserrat,sans-serif',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
    textTransform: 'capitalize',
    color: '#686868',
    padding: '12px 0',
  },
}

export default styles
