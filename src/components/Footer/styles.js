export const styles = {
  footer: (theme) => ({
    maxWidth: '1240px',
    padding: '44px 20px',
    textAlign: 'left',
    margin: 'auto',
    [theme.breakpoints.up('lg')]: {
      padding: '88px 20px',
    },
  }),
  gridWrapper: (theme) => ({
    padding: '44px 0',
    borderTop: '0.5px solid #777FEB',
    borderBottom: '0.5px solid #777FEB',
    rowGap: '24px',
    [theme.breakpoints.up('lg')]: {
      padding: '88px 0',
    },
  }),
  linkTitle: {
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '29px',
  },
  title: (theme) => ({
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '29px',
    [theme.breakpoints.up('lg')]: {
      fontSize: '48px',
      lineHeight: '59px',
    },
  }),
  text: (theme) => ({
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '28px',
    marginTop: '24px',
    color: '#000000',
    textTransform: 'capitalize',
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
      lineHeight: '28px',
    },
  }),
  paper: {
    p: '8px',
    display: 'flex',
    alignItems: 'center',
    background: '#F5F5F5',
    borderRadius: '8px',
    boxShadow: 'none',
    marginTop: '20px',
  },
  btn: {
    background: '#777FEB',
    borderRadius: '8px',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '20px',
    textTransform: 'capitalize',
    color: '#fff',
    p: '12px',
    width: '107px',
  },
  itemList: {
    padding: '12px 0',
    color: '#686868',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
    textTransform: 'capitalize',
  },
  subscribeFooter: (theme) => ({
    width: '100%',
    maxWidth: '372px',
    [theme.breakpoints.up('lg')]: {
      width: '372px',
    },
  }),
  icon: {
    width: '16px',
    height: '16px',
    color: '#777FEB',
  },
  emailBlock: (theme) => ({
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  }),
  inputBase: {
    ml: 1,
    flex: 1,
    '& input::placeholder': {
      fontSize: '20px',
      lineHeight: '20px',
    },
  },
}

export default styles
