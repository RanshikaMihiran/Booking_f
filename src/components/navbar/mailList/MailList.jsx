import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTilte"> Save time, save money!</h1>
        <span className="mainDecs">Sign up and we'll send the best deels to you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your Email here."/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList