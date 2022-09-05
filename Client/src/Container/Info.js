import React from 'react'
import Section from "../Components/Section";
import analytics from '../Assets/analytics.png'
import app from '../Assets/app.png'
import access from '../Assets/access.png'

const Info = () => {

  const rowRev = {
    flexDirection : 'row-reverse'
  }

  const row = {
    flexDirection : 'row'
  }

  return(
    <div>
      <Section
      rowOrnt = {rowRev}
      inotation = "analytics"
      header = "built-in analytics to track your NFTs"
      para = "Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time."
      btn_txt = "view our pricing"
      img = {analytics}
      />

      <Section
      rowOrnt = {row}
      inotation = "get our app"
      header = "browse NFTs from your smartphone"
      para = "Our Krypto app is the easiest way to keep track of your assets when you’re on the go."
      btn_txt = "Download"
      img = {app}
      />

      <Section
      rowOrnt = {rowRev}
      inotation = "24/7 access"
      header = "sell your NFTs from anywhere at any time"
      para = "With our easy-to-use platform, you can buy or sell assets from anywhere in the world, at any time."
      btn_txt = "get started"
      img = {access}
      />

    </div>
  )
}

export default Info;
