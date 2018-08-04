import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Picker.css'

class Picker extends PureComponent {
  OFFSETHEIGHT = 34
  array = [
    '中国', '美国', '英国', '德国'
  ]
  state = {
    translateY: 0
  }
  cancel = () => {

  }
  confirm = () => {

  }
  onTouchStartHandle = (event) => {
    if (event.touches.length > 1 || (event.type.toLowerCase() === 'touchend' && event.touches.length > 0)) {
      return
    }
    this.startY = event.touches[0].clientY
    this.touch = true
    document.addEventListener('touchmove', this.onTouchMove.bind(this), false)
    document.addEventListener('touchend', this.onTouchEnd.bind(this), false)
  }
  onTouchMove (event) {
    if (!this.touch) {
      return
    }
    let offset = event.touches[0].clientY - this.startY
    this.setMove(event, offset)
  }
  onTouchEnd () {
    document.removeEventListener('touchmove', this.onTouchMove)
    document.removeEventListener('touchend', this.onTouchEnd)
    console.log(this)
    this.end()
  }
  setMove (event, offset) {
    offset = Math.max((3 - this.array.length + 1) * this.OFFSETHEIGHT, offset)
    offset = Math.min(3*this.OFFSETHEIGHT, offset)
    this.setState({
      translateY: offset
    })
  }
  end () {
    this.touch = false
    this.startY = 0
    let offset = this.state.translateY
    offset = Math.max((3 - this.array.length + 1) * this.OFFSETHEIGHT, offset)
    offset = Math.min(3 * this.OFFSETHEIGHT, offset)
    const n = 3 - parseInt(offset / this.OFFSETHEIGHT)
    offset = (3 - n) * this.OFFSETHEIGHT
    this.setState({translateY: offset})
  }
  render() {
    const list = this.array.map((item, index) => (
      <div className="xerxes-picker__item" key={index}>
        {item}
      </div>
    ))
    return (
      <div className="xerxes-picker"
      >
         <div className="xerxes-picker__mask"
         ></div>
         <div className="xerxes-picker__wrapper"
         >
          <div className="xerxes-picker-content">
            <div className="xerxes-picker__header">
              <a href="javascript:void(0);" onClick={this.cancel} className="xerxes-picker__header-cancel" >取消</a>
              <a href="javascript:void(0);" onClick={this.confirm} className="xerxes-picker__header-confirm" >确定</a>
            </div>
            <div className="xerxes-picker__content"
            >
            <div className="xerxes-picker__group"
              onTouchStart={this.onTouchStartHandle}
              ref="pickerGroup"
            >
              <div className="xerxes-picker__mask-group"></div>
              <div className="xerxes-picker__indicator"></div>
              <div className="xerxes-picker__body"
              style={{
                transform: `translate3d(0, ${this.state.translateY}px, 0)`
              }}
              >
                {list}
              </div>
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
