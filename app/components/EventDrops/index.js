import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import eventDrops from 'event-drops';

export const humanizeDate = date => {
  const monthNames = [
    'Jan.',
    'Feb.',
    'March',
    'Apr.',
    'May',
    'June',
    'Jul.',
    'Aug.',
    'Sept.',
    'Oct.',
    'Nov.',
    'Dec.',
  ];

  return `
        ${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}
        ${date.getHours()}:${date.getMinutes()}
    `;
};

const updateCommitsInformation = chart => {
  const filteredData = chart
    .filteredData()
    .reduce((total, calendar) => total.concat(calendar.data), []);
  return {
    zoomStart: humanizeDate(chart.scale().domain()[0]),
    zoomEnd: humanizeDate(chart.scale().domain()[1]),
    data: filteredData,
  };
};

export default class EventDrops extends React.PureComponent {
  static propTypes = {
    events: PropTypes.any,
    onDataPointHover: PropTypes.func,
    onZoom: PropTypes.func,
    loading: PropTypes.bool,
  };

  constructor(props) {
    const { loading } = props;

    super(props);

    if (!loading) {
      this.state = {
        id: this.generateUniqueId(),
      };
      this.chart = this.initializeChart();
    }
  }

  generateUniqueId() {
    return `eventdrops_component_${Math.floor(Math.random() * 10000000)}`;
  }

  renderChartData = () => {
    const colors = [
      '#ef5350',
      '#ec407a',
      '#ab47bc',
      '#7e57c2',
      '#5c6bc0',
      '#42a5f5',
      '#29b6f6',
      '#26c6da',
      '#26a69a',
      '#66bb6a',
      '#9ccc65',
      '#d4e157',
      '#ffee58',
      '#ffca28',
      '#ffa726',
      '#ff7043',
      '#8d6e63',
      '#bdbdbd',
      '#78909c',
    ];
    const pallete = d3.scaleOrdinal(colors);
    const { events } = this.props;
    const { id } = this.state;
    const { chart } = this;
    if (events && events.length) {
      chart.destroy();
      d3.select(`#${id}`)
        .data([events])
        .call(chart)
        .selectAll('.drop-line')
        .attr('fill', (d, i) => pallete(i));
    }
  };

  initializeChart() {
    return eventDrops({
      d3,
      zoom: {
        onZoomEnd: () => {
          if (this.props.onZoom) {
            this.props.onZoom(updateCommitsInformation(this.chart));
          }
        },
      },
      drop: {
        date: d => new Date(d.date),
        onMouseOver: commit => {
          if (this.props.onDataPointHover) {
            this.props.onDataPointHover(commit);
          }
        },
      },
    });
  }

  componentDidMount() {
    this.renderChartData();
  }

  componentDidUpdate() {
    this.renderChartData();
  }

  render() {
    const { id } = this.state;
    const { ...rest } = this.props;
    return <div id={id} {...rest} />;
  }
}
