import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactFigure from 'react-figure';
import { Popover } from 'antd';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    placement: PropTypes.string,
    size: PropTypes.array,
    popSize: PropTypes.array,
    urls: PropTypes.array,
  };

  static defaultProps = {
    placement: "rightTop",
    size: ['100px'],
    popSize: ['100px'],
    urls: []
  };
  /*===properties end===*/

  get contentView() {
    const { urls, size } = this.props;
    return (
      <ReactFigure style={{ width: size[0], height: size[1] || size[0] }}>
        <img src={ urls[1]} />
      </ReactFigure>
    )
  }

  render() {
    const { className, urls, size, placement, ...props } = this.props;
    return (
      <Popover content={this.contentView} placement={placement} {...props}>
        <ReactFigure
          className={classNames('react-ant-image-pop-view', className)}
          style={{ width: size[0], height: size[1] || size[0] }}>
          <img src={urls[0]} />
        </ReactFigure>
      </Popover>
    );
  }
}
