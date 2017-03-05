import React, { PropTypes } from 'react'
import Hmk from './Hmk'

const HmkList = ({ userId, hmkList, loading, deleteHmk, editHmk }) => (
  <ul>
    <li>weno al menos ya sale</li>
    {loading}
  </ul>
)

HmkList.propTypes = {
  userId: PropTypes.object,
  hmkList: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  deleteHmk: PropTypes.func,
  editHmk: PropTypes.func
};

export default HmkList;