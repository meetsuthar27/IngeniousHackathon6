"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { createChart, ColorType } from "lightweight-charts";

function getEpochTimeInSeconds(timeString) {
  const [dateString, timeStringg] = timeString.split(" ");
  const [year, month, day] = dateString.split("-").map(Number);
  const [hourString, minuteString] = timeStringg.split(":").map(Number);

  const date = new Date(Date.UTC(year, month - 1, day, hourString, minuteString, 0));
  const epochTime = Math.floor(date.getTime() / 1000);

  return epochTime;
}

function fetchAPI(selectedTicker, setClosingPrice1d, setClosingPrice5d, setClosingPrice1mo, setClosingPrice6mo, setClosingPriceYtd, setClosingPrice1y, setClosingPrice5y, setClosingPriceMax, setClosingTime1d, setClosingTime5d, setClosingTime1mo, setClosingTime6mo, setClosingTimeYtd, setClosingTime1y, setClosingTime5y, setClosingTimeMax) {
  const ticker =
    typeof selectedTicker === "string" ? selectedTicker : selectedTicker.ticker;

  axios
    // .get(`https://stock-history-romirs-projects.vercel.app/api/stockHistory?ticker=${ticker}`)
    .get(`http://localhost:5000/api/stockHistory?ticker=${ticker}`)

    .then((response) => {
      setClosingPrice1d(response.data.closing_price_1d);
      setClosingPrice5d(response.data.closing_price_5d);
      setClosingPrice1mo(response.data.closing_price_1mo);
      setClosingPrice6mo(response.data.closing_price_6mo);
      setClosingPriceYtd(response.data.closing_price_ytd);
      setClosingPrice1y(response.data.closing_price_1y);
      setClosingPrice5y(response.data.closing_price_5y);
      setClosingPriceMax(response.data.closing_price_max);
      setClosingTime1d(response.data.closing_price_time_1d);
      setClosingTime5d(response.data.closing_price_time_5d);
      setClosingTime1mo(response.data.closing_price_time_1mo);
      setClosingTime6mo(response.data.closing_price_time_6mo);
      setClosingTimeYtd(response.data.closing_price_time_ytd);
      setClosingTime1y(response.data.closing_price_time_1y);
      setClosingTime5y(response.data.closing_price_time_5y);
      setClosingTimeMax(response.data.closing_price_time_max);
      console.log("Data fetched successfully");
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function ChartX({ selectedTicker, colors, selectedButton }) {
  const [loading, setLoading] = useState(true);
  const [series, setSeries] = useState(null);
  const [closingPrice1d, setClosingPrice1d] = useState('');
  const [closingPrice5d, setClosingPrice5d] = useState('');
  const [closingPrice1mo, setClosingPrice1mo] = useState('');
  const [closingPrice6mo, setClosingPrice6mo] = useState('');
  const [closingPriceYtd, setClosingPriceYtd] = useState('');
  const [closingPrice1y, setClosingPrice1y] = useState('');
  const [closingPrice5y, setClosingPrice5y] = useState('');
  const [closingPriceMax, setClosingPriceMax] = useState('');
  const [closingTime1d, setClosingTime1d] = useState('');
  const [closingTime5d, setClosingTime5d] = useState('');
  const [closingTime1mo, setClosingTime1mo] = useState('');
  const [closingTime6mo, setClosingTime6mo] = useState('');
  const [closingTimeYtd, setClosingTimeYtd] = useState('');
  const [closingTime1y, setClosingTime1y] = useState('');
  const [closingTime5y, setClosingTime5y] = useState('');
  const [closingTimeMax, setClosingTimeMax] = useState('');
  const [message, setMessage] = useState(closingPrice1d);
  const [firstValue, setFirstValue] = useState(closingTime1d);
  const ticker =
    typeof selectedTicker === "string" ? selectedTicker : selectedTicker.ticker;

  useEffect(() => {
    setLoading(true);
    const intervalId = setInterval(() => {
      fetchAPI(selectedTicker, setClosingPrice1d, setClosingPrice5d, setClosingPrice1mo, setClosingPrice6mo, setClosingPriceYtd, setClosingPrice1y, setClosingPrice5y, setClosingPriceMax, setClosingTime1d, setClosingTime5d, setClosingTime1mo, setClosingTime6mo, setClosingTimeYtd, setClosingTime1y, setClosingTime5y, setClosingTimeMax);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }, 3500);
    return () => clearInterval(intervalId);
  }, [selectedTicker,closingPrice1d, closingPrice1d, closingPrice1mo, closingPrice1y, closingPrice5d, closingPrice5y, closingPrice6mo, closingPriceMax, closingPriceYtd, ticker]);

  useEffect(() => {
    switch (selectedButton) {
      case '1 Day':
        setMessage(closingPrice1d);
        setFirstValue(closingTime1d);
        break;
      case '5 Days':
        setMessage(closingPrice5d);
        setFirstValue(closingTime5d);
        // console.log(closingTime5d);
        break;
      case '1 Month':
        setMessage(closingPrice1mo);
        setFirstValue(closingTime1mo);
        break;
      case '6 Months':
        setMessage(closingPrice6mo);
        setFirstValue(closingTime6mo);
        break;
      case 'Year To Date':
        setMessage(closingPriceYtd);
        setFirstValue(closingTimeYtd);
        break;
      case '1 Year':
        setMessage(closingPrice1y);
        setFirstValue(closingTime1y);
        break;
      case '5 Years':
        setMessage(closingPrice5y);
        setFirstValue(closingTime5y);
        break;
      case 'Max':
        setMessage(closingPriceMax);
        setFirstValue(closingTimeMax);
        break;
      default:
        setMessage(closingPrice1d);
        setFirstValue(closingTime1d);
        break;
    }
  }, [selectedButton, closingPrice1d]);

  const chartContainerRef = useRef();
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (message.length === 0 || firstValue.length === 0) return;

    const epochTimes = firstValue.map((timeString) => getEpochTimeInSeconds(timeString));
    const data = message.map((value, index) => ({
      time: epochTimes[index],
      value: value,
    }));

    if (!chartInstanceRef.current) {
      chartInstanceRef.current = createChart(chartContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: colors.backgroundColor },
          textColor: colors.textColor,
        },
        grid: {
          vertLines: {
            visible: false,
          },
          horzLines: {
            visible: false,
          },
        },
        width: chartContainerRef.current.clientWidth,
        height: 350,
        lineWidth: 1,
        handleScroll: {
          mouseWheel: false,
          pressedMouseMove: false,
          horzTouchDrag: false,
          vertTouchDrag: false
        },
        handleScale: {
            axisPressedMouseMove: false,
            mouseWheel: false,
            pinch: false,
        },
      });

      chartInstanceRef.current.timeScale().applyOptions({
        timeVisible: true,
        rightOffSet: 10,
        barSpacing: 1,
        minBarSpacing: 1,
        fixLeftEdge: true,  
        timeFormat: "%H:%m",
      });

      const newSeries = chartInstanceRef.current.addAreaSeries({
        lineColor: colors.lineColor,
        topColor: colors.areaTopColor,
        bottomColor: colors.areaBottomColor
      });
      newSeries.setData(data);
      setSeries(newSeries);
      chartInstanceRef.current.timeScale().fitContent();
    } else {
        series.setData(data);
        chartInstanceRef.current.timeScale().fitContent();
    }

    chartInstanceRef.current.applyOptions({
      layout: {
        background: { type: ColorType.Solid, color: colors.backgroundColor },
        textColor: colors.textColor,
      },
    });

    if (series) {
    series.applyOptions({
      lineColor: colors.lineColor,
      topColor: colors.areaTopColor,
      bottomColor: colors.areaBottomColor,
    }); 
  }

    const handleResize = () => {
      if (message && firstValue && !loading){ 
        if (chartInstanceRef.current) {
          chartInstanceRef.current.applyOptions({
            width: chartContainerRef.current.clientWidth,
          });
        }
      } 
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [
    colors.backgroundColor,
    colors.textColor,
    colors.areaTopColor,
    colors.areaBottomColor,
    colors.lineColor,
    message,
    firstValue,
    series,
    selectedTicker,
    selectedButton
  ]);
  return (
    <>
    {/* <div ref={chartContainerRef} /> */}
    {message && firstValue? <div ref={chartContainerRef} /> : <div style={{height: '200px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Loading Chart for {ticker}</div>}
    </>
  )
}

export default ChartX;


// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import { createChart, ColorType } from "lightweight-charts";

// function getEpochTimeInSeconds(timeString) {
//   const [dateString, timeStringg] = timeString.split(" ");
//   const [year, month, day] = dateString.split("-").map(Number);
//   const [hourString, minuteString] = timeStringg.split(":").map(Number);

//   const date = new Date(Date.UTC(year, month - 1, day, hourString, minuteString, 0));
//   const epochTime = Math.floor(date.getTime() / 1000);

//   return epochTime;
//   // console.log(epochTime);
//   // const [hourString, minuteString] = timeString.split(":");
//   // const hour = parseInt(hourString, 10);
//   // const minute = parseInt(minuteString, 10);

//   // const currentDate = new Date();

//   // const year = currentDate.getFullYear();
//   // const month = currentDate.getMonth() + 1;
//   // const day = currentDate.getDate();

//   // const second = 0;

//   // const date = new Date(Date.UTC(year, month - 1, day, hour, minute, second));

//   // return Math.floor(date.getTime() / 1000);
// }

// function fetchAPI2(selectedTicker, selectedButton, setMessage, setFirstValue) {
//   const ticker =
//     typeof selectedTicker === "string" ? selectedTicker : selectedTicker.ticker;

//   axios
//     .get(`https://stock-history-romirs-projects.vercel.app/api/stockHistory?ticker=${ticker}`)
//     .then((response) => {
//       switch (selectedButton) {
//         case '1 Day':
//           setMessage(response.data.closing_price_1d);
//           setFirstValue(response.data.closing_price_time_1d);
//           break;
//         case '5 Days':
//           setMessage(response.data.closing_price_5d);
//           setFirstValue(response.data.closing_price_time_5d);
//           break;
//         case '1 Month':
//           setMessage(response.data.closing_price_1mo);
//           setFirstValue(response.data.closing_price_time_1mo);
//           break;
//         case '6 Months':
//           setMessage(response.data.closing_price_6mo);
//           setFirstValue(response.data.closing_price_time_6mo);
//           break;
//         case 'Year To Date':
//           setMessage(response.data.closing_price_ytd);
//           setFirstValue(response.data.closing_price_time_ytd);
//           break;
//         case '1 Year':
//           setMessage(response.data.closing_price_1y);
//           setFirstValue(response.data.closing_price_time_1y);
//           break;
//         case '5 Years':
//           setMessage(response.data.closing_price_5y);
//           setFirstValue(response.data.closing_price_time_5y);
//           break;
//         case 'Max':
//           setMessage(response.data.closing_price_max);
//           setFirstValue(response.data.closing_price_time_max);
//           break;
//         default:
//           break;
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// }

// function ChartX({ selectedTicker, colors, selectedButton }) {
//   const [message, setMessage] = useState([]);
//   const [firstValue, setFirstValue] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [series, setSeries] = useState(null);
//   const ticker =
//     typeof selectedTicker === "string" ? selectedTicker : selectedTicker.ticker;

//   useEffect(() => {
//     setLoading(true);
//     const intervalId = setInterval(() => {
//       fetchAPI2(selectedTicker, selectedButton, setMessage, setFirstValue);
//       setTimeout(() => {
//         setLoading(false);
//       }, 1500);
//     }, 3500);

//     return () => clearInterval(intervalId);
//   }, [selectedTicker, colors, ticker, selectedButton]);

//   const chartContainerRef = useRef();
//   const chartInstanceRef = useRef(null);

//   useEffect(() => {
//     if (message.length === 0 || firstValue.length === 0) return;

//     const epochTimes = firstValue.map((timeString) => getEpochTimeInSeconds(timeString));
//     const data = message.map((value, index) => ({
//       time: epochTimes[index],
//       value: value,
//     }));

//     if (!chartInstanceRef.current) {
//       chartInstanceRef.current = createChart(chartContainerRef.current, {
//         layout: {
//           background: { type: ColorType.Solid, color: colors.backgroundColor },
//           textColor: colors.textColor,
//         },
//         grid: {
//           vertLines: {
//             visible: false,
//           },
//           horzLines: {
//             visible: false,
//           },
//         },
//         width: chartContainerRef.current.clientWidth,
//         height: 350,
//         lineWidth: 1,
//         handleScroll: {
//           mouseWheel: false,
//           pressedMouseMove: false,
//           // horzTouchDrag: false,
//           // vertTouchDrag: false
//         },
//         handleScale: {
//             axisPressedMouseMove: false,
//             mouseWheel: false,
//             pinch: false,
//         },
//       });

//       let labels = [];
//       for (let i = 0; i < 24*60; i += 30) {
//           let hour = Math.floor(i / 60);
//           let minute = i % 60;
//           labels.push(hour + ":" + minute);
//       }

//       chartInstanceRef.current.timeScale().applyOptions({
//         timeVisible: true,
//         rightOffSet: 10,
//         barSpacing: 1,
//         minBarSpacing: 1,
//         fixLeftEdge: true,  
//         timeFormat: "%H:%m",
//         // customLabels: labels
//       });

//       const newSeries = chartInstanceRef.current.addAreaSeries({
//         lineColor: colors.lineColor,
//         topColor: colors.areaTopColor,
//         bottomColor: colors.areaBottomColor
//       });
//       newSeries.setData(data);
//       setSeries(newSeries);
//       chartInstanceRef.current.timeScale().fitContent();
//     } else {
//         series.setData(data);
//         chartInstanceRef.current.timeScale().fitContent();
//     }

//     chartInstanceRef.current.applyOptions({
//       layout: {
//         background: { type: ColorType.Solid, color: colors.backgroundColor },
//         textColor: colors.textColor,
//       },
//     });

//     if (series) {
//     series.applyOptions({
//       lineColor: colors.lineColor,
//       topColor: colors.areaTopColor,
//       bottomColor: colors.areaBottomColor,
//     }); 
//   }

//     const handleResize = () => {
//       if (message && firstValue && !loading){ 
//         if (chartInstanceRef.current) {
//           chartInstanceRef.current.applyOptions({
//             width: chartContainerRef.current.clientWidth,
//           });
//         }
//       } 
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [
//     colors.backgroundColor,
//     colors.textColor,
//     colors.areaTopColor,
//     colors.areaBottomColor,
//     colors.lineColor,
//     message,
//     firstValue,
//     series,
//     selectedTicker,
//     selectedButton
//   ]);

//   return (
//     <>
//     {message && firstValue? <div ref={chartContainerRef} /> : <div>Loading...</div>}
//     </>
//   )
// }

// export default ChartX;