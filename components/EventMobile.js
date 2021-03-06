import React from 'react'
import css, { merge } from 'next/css'
import { divider, matchStyle } from '../styles/common'
import MatchTime from './MatchTime'
import MatchStreams from './MatchStreams'
import Team from './Team'

// Match display on a landscape-style screen.
export default class EventMobile extends React.Component {
  render () {
    const { d, event, timezone } = this.props
    return (
      <div className={matchStyle}>
        <hr className={matchDividerStyle}/>
        <div className={mobileMatchTimeStyle}>
          <img src={event.logo} style={{width: '100px'}}/>
          <MatchTime time={event.nextstarttime} timezone={timezone} />
        </div>
        <div className={eventStyle}>
            {event.brackets || event.settings ? 
            <span> (
              {event.brackets ? <a href={event.brackets}>Brackets</a> : null}
              {event.brackets && event.settings ? ', ' : null}
              {event.settings ? <a href={event.settings}>Settings</a> : null}
            )</span> : null}
        </div>
        <div className={merge(eventStyle, css({fontSize: '12pt'}))}>
          {event.name}{event.prizepool ? ' $' + event.prizepool: null } <br />
          {event.humanreadabledates ? event.humanreadabledates : null}
        </div>
        <MatchStreams d={d} streams={event.streams} />
      </div>
    )
  }
}

const recordedStyle = css({color: 'red', fontWeight: 'bold'})
const matchDividerStyle = css({width: '100px', marginBottom: '2em'})
const eventStyle = css({clear: 'both', textAlign: 'center', fontSize: '10pt', fontWeight: 'bold', paddingTop:'1em'})
const mobileMatchTimeStyle = merge([divider, css({ width: '100%' })])