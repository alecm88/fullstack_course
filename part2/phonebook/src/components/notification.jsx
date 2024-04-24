const Notification = ({ message, color }) => {
    console.log('col', color)
    const errorStyle = {
        color: color,
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (message === null) {
        return null
    }

    return (
        <div className='error' style={errorStyle}>
            {message}
        </div>
    )
}
export default Notification