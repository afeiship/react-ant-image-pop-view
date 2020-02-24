import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import ReactFigure from '@feizheng/react-figure';
import { Popover } from 'antd';

const CLASS_NAME = 'react-ant-image-pop-view';

export default class ReactAntImagePopView extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Placement for antd.
     */
    placement: PropTypes.string,
    /**
     * Thumbnail size.
     */
    size: PropTypes.array,
    /**
     * Popup picture size.
     */
    popSize: PropTypes.array,
    /**
     * The thumbnail/popup pictures.
     */
    thumbnail: PropTypes.string,
    /**
     * The popup original picutrel.
     */
    src: PropTypes.string.isRequired
  };

  static defaultProps = {
    placement: 'rightTop',
    size: ['100px'],
    popSize: ['100px']
  };

  get contentView() {
    const { popSize } = this.props;
    return (
      <ReactFigure
        style={{
          width: popSize[0],
          height: popSize[1] || popSize[0]
        }}>
        <img src={src} />
      </ReactFigure>
    );
  }

  render() {
    const { className, size, placement, thumbnail, src, ...props } = this.props;

    return (
      <Popover content={this.contentView} placement={placement} {...props}>
        <ReactFigure
          className={classNames(CLASS_NAME, className)}
          style={{ width: size[0], height: size[1] || size[0] }}>
          <img src={thumbnail || src} />
        </ReactFigure>
      </Popover>
    );
  }
}
