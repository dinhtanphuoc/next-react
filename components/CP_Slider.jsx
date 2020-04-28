import { connect } from 'react-redux';
import { get, map } from 'lodash';
import classnames from 'classnames';

const CP_Slider = props => (
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      { map(get(props, 'dataSlider', []), (item, index) => (
        <li
          key={index}
          data-slide-to={index}
          className={classnames({'active': item.active})}
        />
      ))}
    </ol>
    <div className="carousel-inner">
      { map(get(props, 'dataSlider', []), (item, index) => (
        <div
          key={index}
          className={classnames('carousel-item', {
            'active': item.active
          })
        }>
          <div
            className="image-slider"
            style={{ backgroundImage: `url(${item.image})`}}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>{ get(item, 'title', '') }</h5>
            <p>{ get(item, 'content', '') }</p>
          </div>
        </div>
      ))}
    </div>
    <a
      className="carousel-control-prev"
      href="#carouselExampleCaptions"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleCaptions"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
);

const mapStateToProps = state => ({
  dataSlider: state.trangchu.dataSlider
});

export default connect(
  mapStateToProps,
  null
)(CP_Slider);