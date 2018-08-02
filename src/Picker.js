import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Picker.css'

class Picker extends Component {
  cancel = () => {

  }
  confirm = () => {

  }
  render() {
    const array = ['中国', '美国', '英国', '德国']
    const list = array.map((item, index) => (
      <div className="xerxes-picker__item" key={index}>
        {item}
      </div>
    ))
    return (
      <div className="xerxes-picker" onTouchMove={(e) => e.preventDefault()}>
         <div className="xerxes-picker__mask"></div>
         <div className="xerxes-picker__wrapper">
            <div className="xerxes-picker__header">
              <a href="javascript:void(0);" onClick={this.cancel} className="xerxes-picker__header-cancel" >取消</a>
              <a href="javascript:void(0);" onClick={this.confirm} className="xerxes-picker__header-confirm" >确定</a>
            </div>
            <div className="xerxes-picker__content" onTouchMove={(e) => e.preventDefault()}
            onTouchStart={(e) => e.preventDefault()}
            >
            <div className="xerxes-picker__group">
              <div className="xerxes-picker__mask-group"></div>
              <div className="xerxes-picker__indicator"></div>
              <div className="xerxes-picker__body">
                {list}
              </div>
            </div>
            </div>
         </div>
      </div>
    )
  }
}

Picker.propTypes = {

}

export default Picker
