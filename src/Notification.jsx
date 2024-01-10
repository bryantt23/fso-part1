import './Notification.css';

const Notification = ({ notification }) => {
    if (notification === null) {
        return null
    }
    console.log("🚀 ~ Notification ~ notification:", notification)
    const { message, type } = notification
    console.log("🚀 ~ Notification ~ message:", message)

    return (
        <div className={type}>
            {message}
        </div>
    )
}

export default Notification