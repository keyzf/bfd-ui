/**
 * Copyright 2016-present, Baifendian, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import get from 'lodash/get'
import Tree from './Tree'
import Checkbox from '../Checkbox'

class SelectTree extends Component {

  handleSelect(item, path, checked) {
    const data = this.refs.tree.updateNode('checked', checked, path)
    this.props.onChange && this.props.onChange(data)
    this.props.onSelect && this.props.onSelect(data, get(data, path), path, checked)
  }

  render() {
    const { className, onSelect, ...other } = this.props
    other.beforeNodeRender = (data, path) => {
      return (
        <Checkbox
          checked={data.checked || false}
          onChange={e => this.handleSelect(data, path, e.target.checked)}
        />
      )
    }
    return (
      <Tree
        ref="tree"
        className={classnames('bfd-select-tree', className)}
        {...other}
      />
    )
  }
}

SelectTree.propTypes = {
  // 复选框勾选后的回调，参数为(data, item, path, checked)
  onSelect: PropTypes.func
}

export default SelectTree
