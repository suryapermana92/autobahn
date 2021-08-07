import React from "react";
import TabBar from "./../component/tabbar"
import Summary from "./../views/summary"
import Chart from "./../component/chart"
import ResultList from "./../component/resultList"

const sampleData = [
  {
    "bullets": [
      {
        "icon": "fa-university",
        "text": "Your company is very secure"
      },
      {
        "icon": "fa-chevron-right",
        "text": "Your company needs to work on <span class=\"negative\">improving your security</span>"
      },
      {
        "icon": "fa-dollar-sign",
        "text": "We estimate that you could save up to <span class=\"positive\">$12,000</span> if you take more security precautions. We suggest starting that process right now."
      }
    ],
    "chart": {
      "title": "chart 1",
      "data": {
        "labels": ["High", "Medium", "Low"],
        "series": [[20, 40, 20], [30, 30, 80]]
      }
    },
    "list": [
      {
        "name": "Some data",
        "important": true,
        "score": 40
      },
      {
        "name": "That data",
        "important": false,
        "score": 12
      },
      {
        "name": "This data",
        "important": true,
        "score": 67
      },
      {
        "name": "Their data",
        "important": true,
        "score": 41
      },
      {
        "name": "All data",
        "important": false,
        "score": 52
      },
      {
        "name": "Over there data",
        "important": true,
        "score": 90
      }
    ]
  },
  {
    "bullets": [
      {
        "icon": "fa-chevron-left",
        "text": "Your company is not secure"
      },
      {
        "icon": "fa-euro-sign",
        "text": "Your company needs to work on <span class=\"negative\">improving your security</span>"
      },
      {
        "icon": "fa-skull",
        "text": "There are very urgent issues in your system!!!"
      }
    ],
    "chart": {
      "title": "chart 2",
      "data": {
        "labels": ["High", "Medium", "Low"],
        "series": [[10, 60, 10], [20, 50, 90]]
      }
    },
    "list": [
      {
        "name": "Some data",
        "important": false,
        "score": 30
      },
      {
        "name": "That data",
        "important": false,
        "score": 22
      },
      {
        "name": "This data",
        "important": false,
        "score": 17
      },
      {
        "name": "Their data",
        "important": true,
        "score": 51
      },
      {
        "name": "All data",
        "important": true,
        "score": 62
      },
      {
        "name": "Over there data",
        "important": true,
        "score": 5
      }
    ]
  },
  {
    "bullets": [
      {
        "icon": "fa-pallet",
        "text": "<span class=\"positive\">Everything is okay!</span>"
      }
    ],
    "chart": {
      "title": "chart 3",
      "data": {
        "labels": ["High", "Medium", "Low"],
        "series": [[40, 60, 20], [15, 10, 60]]
      }
    },
    "list": [
      {
        "name": "Some data",
        "important": true,
        "score": 83
      },
      {
        "name": "That data",
        "important": false,
        "score": 83
      },
      {
        "name": "This data",
        "important": true,
        "score": 84
      },
      {
        "name": "Their data",
        "important": true,
        "score": 87
      }
    ]
  },
  {
    "bullets": [
      {
        "icon": "fa-cogs",
        "text": "Your company is very secure"
      },
      {
        "icon": "fa-dollar-sign",
        "text": "We estimate that you could save up to <span class=\"positive\">$12,000</span> if you take more security precautions. We suggest starting that process right now."
      }
    ],
    "chart": {
      "title": "chart 4",
      "data": {
        "labels": ["High", "Medium", "Low"],
        "series": [[50, 40, 90], [70, 10, 80]]
      }
    },
    "list": [
      {
        "name": "Some data",
        "important": false,
        "score": 0
      },
      {
        "name": "That data",
        "important": false,
        "score": 1
      },
      {
        "name": "This data",
        "important": false,
        "score": 5
      },
      {
        "name": "Their data",
        "important": false,
        "score": 10
      }
    ]
  }
]

const tabNames = [
  {
    'value': 0,
    'name': "Tab #1"
  },
  {
    'value': 1,
    'name': "Tab #2"
  },
  {
    'value': 2,
    'name': "Tab #3",
  },
  {
    'value': 3,
    'name': "Tab #4"
  }
]
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: sampleData,
      selectedTabIndex: 0,
      selectedData: sampleData[0]
    }
  }

  selectTab(value) {
    this.setState({
      selectedTabIndex: value,
      selectedData: this.state.data[value]
    })
  }
  render() {
    const selectedData = this.state.selectedData
    return (
      <div className={'background'}>
        <div className={'container'}>
          <h1>Vulnerability Data</h1>
          <div className={'row'}>


            <div className={'split-container'}>
              <TabBar tabNames={tabNames} selectedTabIndex={this.state.selectedTabIndex} onPress={(value) => { this.selectTab(value) }} />
              <Summary data={selectedData.bullets} />
            </div>
            <div className={'divider-vertical'}></div>
            <div className={'split-container'}>
              <Chart data={selectedData.chart} />
              <ResultList data={selectedData.list} />
            </div>
          </div>

        </div>
      </div>
    )
  }
}