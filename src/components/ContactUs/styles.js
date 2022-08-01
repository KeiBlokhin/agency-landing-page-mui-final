const styles = {
  contactUs: (theme) => ({
    padding: '44px 20px',
    textAlign: 'left',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'center',
      padding: '200px 20px 190px',
    },
  }),
  wrapper: (theme) => ({
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1240px',
      display: 'flex',
      alignItems: 'center',
      gap: '120px',
    },
  }),
  info: (theme) => ({
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '20px',
    },
  }),
  form: (theme) => ({
    maxWidth: '613px',
    [theme.breakpoints.up('sm')]: {
      margin: 'auto',
    },
  }),
  imgInfo: {
    width: '16px',
    height: '16px',
    marginRight: '4px',
  },
  titleInfo: {
    color: '#777FEB',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'center',
  },
  titleValue: {
    color: '#000000',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
    marginTop: '3px',
  },
  itemBlockInfo: {
    marginBottom: '24px',
    flex: 1,
  },
  inputs: (theme) => ({
    display: 'flex',
    gap: '25px',
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '20px',
    },
  }),
  textField: {
    width: '300px',
    '& input::placeholder': {
      fontSize: '20px',
      lineHeight: '20px',
    },
  },
  photo: {
    width: '100%',
    margin: '44px auto 0',
    maxWidth: '509px',
    display: 'block',
  },
  textareaAutosize: {
    margin: '24px 0',
    padding: '12px',
    width: '100%',
    fontSize: '20px',
    lineHeight: '20px',
    border: '0.5px solid #777FEB',
    borderRadius: '8px',
    outline: 'none',
    boxSizing: 'border-box',
  },
}

export default styles
