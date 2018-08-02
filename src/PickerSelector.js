import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class PickerSelector extends PureComponent {
  render () {
    return (
      <div className={classnames('xerxes-picker__bg')}>
        hello PickerSelector
      </div>
    )
  }
}

PickerSelector.propTypes = {

}

export default PickerSelector
