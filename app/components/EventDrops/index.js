import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import eventDrops from 'event-drops';
import 'd3-selection';

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

  generatePalette(opacity) {
    return [
      `rgb(239, 83, 80, ${opacity})`,
      `rgb(236, 64, 122, ${opacity})`,
      `rgb(171, 71, 188, ${opacity})`,
      `rgb(126, 87, 194, ${opacity})`,
      `rgb(92, 107, 192, ${opacity})`,
      `rgb(66, 165, 245, ${opacity})`,
      `rgb(41, 182, 246, ${opacity})`,
      `rgb(38, 198, 218, ${opacity})`,
      `rgb(38, 166, 154, ${opacity})`,
      `rgb(38, 166, 154, ${opacity})`,
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
  }

  renderChartData = () => {
    const { events } = this.props;
    const { id } = this.state;
    const { chart } = this;
    const { onDataPointHover } = this.props;
    if (events && events.length) {
      const chartD3 = d3
        .select(`#${id}`)
        .data([events])
        .call(chart);

      const palleteTransparent = d3.scaleOrdinal(this.generatePalette(0.35));
      const palleteOpaque = d3.scaleOrdinal(this.generatePalette(1));

      [
        { selector: '.drops', pallete: palleteTransparent },
        { selector: '.line-label', pallete: palleteOpaque },
        { selector: '.indicator', pallete: d3.scaleOrdinal(['#ffffff4f']) },
      ].map(({ selector, pallete }) =>
        chartD3.selectAll(selector).attr('fill', (d, i) => pallete(i)),
      );

      d3.selectAll('.drop').on('click', function(pointData) {
        d3.selectAll('.drop').style('stroke', null);
        d3.select(this)
          .style('stroke', 'white')
          .style('stroke-width', '2px');
        if (onDataPointHover) {
          onDataPointHover(pointData);
        }
      });
    }
  };

  initializeChart() {
    return eventDrops({
      d3,
      metaballs: false,
      zoom: {
        onZoomEnd: () => {
          if (this.props.onZoom) {
            this.props.onZoom(updateCommitsInformation(this.chart));
          }
        },
      },
      drop: {
        color: null,
        radius: 14,
        date: d => new Date(d.date),
        onClick(commit) {
          debugger;
        },
      },
      numberDisplayedTicks: {
        small: 3,
        medium: 4,
        large: 5,
        extra: 6,
      },
    });
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
