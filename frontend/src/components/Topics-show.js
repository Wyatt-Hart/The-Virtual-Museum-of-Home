import Def from './default'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
const React = require('react')

export default function Topics(){
  return (
  <div className="topics-show">
    <h2>Claim Your Exhibit Topics</h2>

    <p>
      Please choose your exhibit topic at least two weeks before it's due. After that, for each day that you fail to claim a topic five points will be deducted from your exhibit grade. If another student has already claimed a topic then you must choose something else.
    </p>

  </div>
)}