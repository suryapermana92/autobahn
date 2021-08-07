import React, { useEffect } from "react";

const Chart = (props) => {

  const initializeChart = () => {
    var data = {
      labels: props.data.data.labels,
      series:
        props.data.data.series,
    };

    var options = {
      seriesBarDistance: 40
    };

    var responsiveOptions = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    new Chartist.Bar('#bar-chart', data, options, responsiveOptions)
  }

  useEffect(() => {
    initializeChart()
  }, [props.data])


  return (
    <div id="bar-container">
      <div id="bar-chart">
      </div>
    </div>
  )
}

export default Chart