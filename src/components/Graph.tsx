import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import {useSelector} from "react-redux";
import { State } from '../rootReducer';
import {INITIAL_STATE, initialStateType} from "../types/actions";
import {getMonthName} from "../monthName";
import "./Graph.css";

const Graph = ()=> {

  const [state, setState] = useState<initialStateType>(INITIAL_STATE);
  const salesData = useSelector((state : State) => state.apiData[0].sales)

  useEffect(()=>{
    setState((state:any) => {
      console.log(salesData);
      const arrsOfDate = salesData.map(data => data.weekEnding);
      const arrsOfSales = salesData.map(data => data.retailSales);
      state.options.xaxis.categories = arrsOfDate;
      state.options.xaxis.categories.map((date : string) => getMonthName(date.toString()));
      state.series[0].data = arrsOfSales;
      return state;
    })
  },[salesData]);

  return (
    <div className='Graph'>
      <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="800"
            />
          </div>
  </div>
  )
}

export default Graph;