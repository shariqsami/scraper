export default {
    menu: () => ({
      width: '120px',
      textAlign: 'left',
      backgroundColor: 'transparent'
    }),
  
    control: () => ({
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'space-between',
        color: 'white',
        minHeight: 40,
        alignItems: 'center'
    }),

    input: () => ({
        color: 'white'
    }),

    singleValue: () => ({
        color: 'white'
    }),

    placeholder: () => ({
        color: 'white'
    }),

    indicatorsContainer: () => ({
        color: 'white'
    }),

    menuList: () => ({
        position: 'absolute',
        backgroundColor: '#F61A41',
        width: '150px',
        zIndex: '1000',
        top: 85
    }),

    multiValue: () => ({
        backgroundColor: '#b51c3e',
        display: 'flex',
        padding: 13,
        marginRight: 10
    }),

    multiValueLabel: () => ({
        color: 'white',
        fontSize: 14,
        marginRight: 15
    }),

    option: (provided, state) => ({
        backgroundColor: state.isFocused ? '#bf1130' : 'transparent',
        padding: 20
    })
  }