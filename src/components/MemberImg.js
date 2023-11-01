import React from 'react';

import officer from '../assets/images/member-1 (1).png'
import consultant from '../assets/images/member-1 (2).png'
import kimberly from '../assets/images/member-1 (3).png'
import justin from '../assets/images/member-1 (4).png'

const MemberImg = ({ memberNumber }) => {
  let memberInfo;

  switch (memberNumber) {
    case 1:
      memberInfo = {
        imgSrc: officer,
        name: 'Kristine Palmer',
        role: 'Chef Operation Officer',
      }
      break;
    case 2:
      memberInfo = {
        imgSrc: consultant,
        name: 'Mark Aubri',
        role: 'Senior Consultant',
      }
      break;
    case 3:
      memberInfo = {
        imgSrc: kimberly,
        name: 'Kimberly Hansen',
        role: 'Senior Consultant',
      }
      break;
    case 4:
      memberInfo = {
        imgSrc: justin,
        name: 'Justin Willoman',
        role: 'Senior Tech Consultant',
      }
      break;
    default:
      memberInfo = {
        imgSrc: officer,
        name: 'Kristine Palmer',
        role: 'Chef Operation Officer',
      }
  }

  return (
    <div className={`team-member-${memberNumber}`}>
      <img src={memberInfo.imgSrc} alt={`image of ${memberInfo.name}`} />
      <h3>{memberInfo.name}</h3>
      <p>{memberInfo.role}</p>
    </div>
  )
}

export default MemberImg
