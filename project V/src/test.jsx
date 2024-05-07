import { useState } from 'react'
import './App.css'

function Test() {
  const [film_id, setFilm_id] = useState("https://ebd.cda.pl/620x368/1648962228");
  const changeImageSrc = (e) => {
    setImageSrc('https://ebd.cda.pl/620x368/'+ e);
  }
  return (
    <>
      <div id='player'>
        <iframe src="https://www.dailymotion.com/video/1ht9n4c3r3fnst9ddl1" width="100%" height="100%" scrolling="no" allowFullScreen={true} name="v2" allow="encrypted-media"></iframe>
        <iframe frameBorder="0" width="640" height="360" 
                src="https://geo.dailymotion.com/player/1ht9n4c3r3fnst9ddl1.html?video=x84sh87" 
                allowFullScreen={true}
                allow="autoplay; fullscreen; picture-in-picture; web-share">
</iframe>
      </div>
      <div id='z'>
        <iframe  src="https://player.twitch.tv/?channel=veniakk&parent=localhost" frameorder="0" allowFullScreen={true} scrolling="no" height="30%" width="100%"></iframe>
        <iframe src="https://www.twitch.tv/embed/veniakk/chat?darkpopout&parent=localhost"
        height="70%"
        width="100%">
      </iframe>
      </div>
    </>
  )
}

export default Test