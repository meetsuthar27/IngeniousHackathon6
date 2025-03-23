"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Chart.module.css";
import axios from "axios";
import { BlockOutlined, LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { CaretDownFilled, CaretUpFilled } from "@ant-design/icons";
import ChartX from "@/app/ChartX/ChartX";
import { Skeleton } from 'antd';
import {useRouter} from "next/navigation";

function fetchAPI2(selectedTicker, setMaxPercentageChange, setFiveYearPercentageChange, setOneYearPercentageChange, setYtdPercentageChange, setSixMOPercentageChange, setOneMOPercentageChange, setFiveDayPercentageChange, setOneDayPercentageChange) {
  const ticker =
    typeof selectedTicker === "string" ? selectedTicker : selectedTicker.ticker;

  axios
    // .get(`https://stock-history-three.vercel.app/api/stockHistory?ticker=${ticker}`)
    .get(`http://localhost:5000/api/stockHistory?ticker=${ticker}`)
    .then((response) => {
      setOneDayPercentageChange(response.data.oneDayPercentageChange);
      setFiveDayPercentageChange(response.data.fiveDayPercentageChange);
      setOneMOPercentageChange(response.data.oneMOPercentageChange);
      setSixMOPercentageChange(response.data.sixMOPercentageChange);
      setYtdPercentageChange(response.data.ytdPercentageChange);
      setOneYearPercentageChange(response.data.oneYearPercentageChange);
      setFiveYearPercentageChange(response.data.fiveYearPercentageChange);
      setMaxPercentageChange(response.data.maxPercentageChange);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function fetchAPI(selectedTicker, setMessage, setFirstValue) {
  const ticker =
    typeof selectedTicker === "string" ? selectedTicker : selectedTicker.ticker;

  axios
    .get(`https://ticker-tape.vercel.app/api/quote?ticker=${ticker}`)
    // .get(`http://localhost:7000/api/quote?ticker=${ticker}`)
    .then((response) => {
      setMessage(response.data.currentPrice);
      setFirstValue(response.data.previousPrice);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function fetchAPI3(selectedTicker,setCompanyName) {
  const ticker =
    typeof selectedTicker === "string" ? selectedTicker : selectedTicker.ticker;
    
  axios
    .get(`https://key-metrics.vercel.app/api/keymetrics?ticker=${ticker}`)
    // .get(`http://localhost:8000/api/keymetrics?ticker=${ticker}`)

    .then((response) => {
      setCompanyName(response.data.short_name);

    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function Chart({ selectedTicker }) {
  const [message, setMessage] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [oneDayPercentageChange, setOneDayPercentageChange] = useState("");
  const [fiveDayPercentageChange, setFiveDayPercentageChange] = useState("");
  const [oneMOPercentageChange, setOneMOPercentageChange] = useState("");
  const [sixMOPercentageChange, setSixMOPercentageChange] = useState("");
  const [ytdPercentageChange, setYtdPercentageChange] = useState("");
  const [oneYearPercentageChange, setOneYearPercentageChange] = useState("");
  const [fiveYearPercentageChange, setFiveYearPercentageChange] = useState("");
  const [maxPercentageChange, setMaxPercentageChange] = useState("");
  const [firstValue, setFirstValue] = useState(null);
  const [priceChanged, setPriceChanged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dataReady, setDataReady] = useState(false);
  const [selectedButton, setSelectedButton] = useState('1 Day');
  const [selectedPercentageChange, setSelectedPercentageChange] = useState('');
  const router = useRouter();
  const ticker =
    typeof selectedTicker === "string" ? selectedTicker : selectedTicker.ticker;
  
  useEffect(() => {
    setLoading(true);
    const intervalId = setInterval(() => {
      fetchAPI(ticker, setMessage, setFirstValue);
      fetchAPI3(ticker, setCompanyName);
      fetchAPI2(ticker, setMaxPercentageChange, setFiveYearPercentageChange, setOneYearPercentageChange, setYtdPercentageChange, setSixMOPercentageChange, setOneMOPercentageChange, setFiveDayPercentageChange, setOneDayPercentageChange);
      setTimeout(() => {
        setLoading(false);
        setDataReady(true);
      }, 1500);
      }, 3500);
  
    return () => clearInterval(intervalId);
  }, [selectedTicker, ticker]);

  const priceChange = firstValue
    ? (parseFloat(message) - parseFloat(firstValue)).toFixed(2)
    : 0;
  
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  useEffect(() => {
    switch (selectedButton) {
      case '1 Day':
        setSelectedPercentageChange(priceChange);
        console.log(oneDayPercentageChange);
        break;
      case '5 Days':
        setSelectedPercentageChange(fiveDayPercentageChange);
        console.log(fiveDayPercentageChange);
        break;
      case '1 Month':
        setSelectedPercentageChange(oneMOPercentageChange);
        break;
      case '6 Months':
        setSelectedPercentageChange(sixMOPercentageChange);
        break;
      case 'Year To Date':
        setSelectedPercentageChange(ytdPercentageChange);
        break;
      case '1 Year':
        setSelectedPercentageChange(oneYearPercentageChange);
        break;
      case '5 Years':
        setSelectedPercentageChange(fiveYearPercentageChange);
        break;
      case 'Max':
        setSelectedPercentageChange(maxPercentageChange);
        break;
      default:
        setSelectedPercentageChange(priceChange);
        break;
    }
  }, [selectedButton, priceChange, fiveDayPercentageChange, oneMOPercentageChange, sixMOPercentageChange, ytdPercentageChange, oneYearPercentageChange, fiveYearPercentageChange, maxPercentageChange]);
  
    
  function capitalizeFirstLetter(str) {
    const words = str.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
  };

  useEffect(() => {
    if (firstValue && parseFloat(message) !== parseFloat(firstValue)) {
      setPriceChanged(true);
      setTimeout(() => {
        setPriceChanged(false);
      }, 1500);
    }
  }, [message, firstValue]);

  if (companyName === "N/A") {
    router.push("/error");
  }

  const colors = selectedPercentageChange >= 0 ? {
    backgroundColor: "transparent",
    textColor: "white",
    areaTopColor: "rgba(3, 123, 102, .4)",
    areaBottomColor: 'rgba(38, 166, 154, 0)',
    lineColor: 'rgba(38, 166, 154, 1)',
  } : {
    backgroundColor: "transparent",
    textColor: "white",
    areaTopColor: "rgba(239, 83, 80, 0.35)",
    areaBottomColor: 'rgba(239, 83, 80, 0)',
    lineColor: '#cf4c06',
  };

  return (
    <div className={styles.container}>
      <div className={styles.ChartCentre}>
        <div className={styles.stockTitle}>
          <div className={styles.stockName}>
            {companyName ? (
              <>
                <span>{capitalizeFirstLetter(companyName)}</span>
                <span className={styles.tickerName}> ({ticker})</span>
              </>
            ) : (
              <div className={styles.tickerName} style={{ display: 'block', height: '20px', width: '200px'}}>
                {/* <Skeleton active title={false} paragraph={{ rows: 1, width: 200, height: 20 }} />  */}
                Loading...
              </div> 
              // <Skeleton active paragraph={{ rows: 1 }} />
              // <span>Loading...</span>
            )}
          </div>
        </div>
        <div className={styles.stockDetails}>
          {loading || !dataReady ? (
            <div className={styles.loading}>
              <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
              {/* <CircularProgress
                isIndeterminate
                color="#31353F"
                thickness="12px"
                size="30px"
                background="transparent"
                zIndex="0"
              /> */}
            </div>
          ) : (
            <>
              <div className={` ${priceChanged ? styles.priceChanged : ""}`}>
                <div className={styles.stockPrice}>{message}</div>
              </div>
              <div className={` ${priceChanged ? styles.priceChanged : ""}`}>
                <div
                  className={`${styles.stockPriceChange} ${
                    priceChange >= 0 ? styles.positive : styles.negative
                  }`}
                >
                  {priceChange >= 0 ? "+" : "-"}
                  {Math.abs(priceChange).toFixed(2)}
                </div>
              </div>
              <div className={` ${priceChanged ? styles.priceChanged : ""}`}>
                <div
                  className={`${styles.stockPercentageChange} ${
                    priceChange >= 0 ? styles.positive : styles.negative
                  }`}
                >
                  {" "}
                  {priceChange >= 0 ? (
                    <>
                      <CaretUpFilled style={{ color: "#1ECB4F", marginRight: "5px", marginTop: '.1rem', fontSize: '15px' }} />
                      {Math.abs((priceChange / parseFloat(firstValue)) * 100).toFixed(2)}%
                    </>
                  ) : (
                    <>
                      <CaretDownFilled style={{ color: "#F46D22", marginRight: "5px", fontSize: '15px' }} />
                      {Math.abs((priceChange / parseFloat(firstValue)) * 100).toFixed(2)}%
                    </>
                  )}
                  {/* {priceChange >= 0 ? (
                    <Stat>
                      <StatArrow type="increase" style={{ zIndex: "0" }} />
                      {Math.abs(
                        (priceChange / parseFloat(firstValue)) * 100
                      ).toFixed(2)}
                      %
                    </Stat>
                  ) : (
                    <Stat>
                      <StatArrow type="decrease" style={{ zIndex: "0" }} />
                      {Math.abs(
                        (priceChange / parseFloat(firstValue)) * 100
                      ).toFixed(2)}
                      %
                    </Stat>
                  )} */}
                </div>
              </div>
            </>
          )}
        </div> 
        <div>
          <ChartX selectedTicker={selectedTicker} colors={colors} selectedButton = {selectedButton} />
        </div>
        <div className={styles.stockHistoryContainer}>
          <div className={styles.stockHistory}>
            <div className={styles.stockHistoryDetail}>
              <button 
                className={selectedButton === '1 Day' ? `${styles.stockHistoryDetails} ${styles.selectedButton}` : styles.stockHistoryDetails}
                onClick={() => handleButtonClick('1 Day')}
              >                
                <div className={styles.stockHistoryDetailTitle}>1 Day</div>
                <div className={`${styles.stockHistoryDetailValue} ${
                    priceChange >= 0 ? styles.stockHistoryPositive : styles.stockHistoryNegative
                  }`}>
                  {typeof oneDayPercentageChange === 'number' ? `${oneDayPercentageChange.toFixed(2)}%` : ''}
                </div>
              </button>
              <button 
                className={selectedButton === '5 Days' ? `${styles.stockHistoryDetails} ${styles.selectedButton}` : styles.stockHistoryDetails}
                onClick={() => handleButtonClick('5 Days')}
              >                
                <div className={styles.stockHistoryDetailTitle}>5 Days</div>
                <div className={`${styles.stockHistoryDetailValue} ${
                    fiveDayPercentageChange >= 0 ? styles.stockHistoryPositive : styles.stockHistoryNegative
                  }`}>
                  {typeof fiveDayPercentageChange === 'number' ? `${fiveDayPercentageChange.toFixed(2)}%` : ''}
                </div>
              </button>
              <button 
                className={selectedButton === '1 Month' ? `${styles.stockHistoryDetails} ${styles.selectedButton}` : styles.stockHistoryDetails}
                onClick={() => handleButtonClick('1 Month')}
              >                
                <div className={styles.stockHistoryDetailTitle}>1 Month</div>
                <div className={`${styles.stockHistoryDetailValue} ${
                    oneMOPercentageChange >= 0 ? styles.stockHistoryPositive : styles.stockHistoryNegative
                  }`}>
                  {typeof oneMOPercentageChange === 'number' ? `${oneMOPercentageChange.toFixed(2)}%` : ''}
                </div>
              </button>
              <button 
                className={selectedButton === '6 Months' ? `${styles.stockHistoryDetails} ${styles.selectedButton}` : styles.stockHistoryDetails}
                onClick={() => handleButtonClick('6 Months')}
              >                
                <div className={styles.stockHistoryDetailTitle}>6 Months</div>
                <div className={`${styles.stockHistoryDetailValue} ${
                    sixMOPercentageChange >= 0 ? styles.stockHistoryPositive : styles.stockHistoryNegative
                  }`}>
                  {typeof sixMOPercentageChange === 'number' ? `${sixMOPercentageChange.toFixed(2)}%` : ''}
                </div>
              </button>
              <button 
                className={selectedButton === 'Year To Date' ? `${styles.stockHistoryDetails} ${styles.selectedButton}` : styles.stockHistoryDetails}
                onClick={() => handleButtonClick('Year To Date')}
              >                
                <div className={styles.stockHistoryDetailTitle}>Year To Date</div>
                <div className={`${styles.stockHistoryDetailValue} ${
                    ytdPercentageChange >= 0 ? styles.stockHistoryPositive : styles.stockHistoryNegative
                  }`}>
                  {typeof ytdPercentageChange === 'number' ? `${ytdPercentageChange.toFixed(2)}%` : ''}
                </div>
              </button>
              <button 
                className={selectedButton === '1 Year' ? `${styles.stockHistoryDetails} ${styles.selectedButton}` : styles.stockHistoryDetails}
                onClick={() => handleButtonClick('1 Year')}
              >                
                <div className={styles.stockHistoryDetailTitle}>1 Year</div>
                <div className={`${styles.stockHistoryDetailValue} ${
                    oneYearPercentageChange >= 0 ? styles.stockHistoryPositive : styles.stockHistoryNegative
                  }`}>
                  {typeof oneYearPercentageChange === 'number' ? `${oneYearPercentageChange.toFixed(2)}%` : ''}
                </div>
              </button>
              <button 
                className={selectedButton === '5 Years' ? `${styles.stockHistoryDetails} ${styles.selectedButton}` : styles.stockHistoryDetails}
                onClick={() => handleButtonClick('5 Years')}
              >                
                <div className={styles.stockHistoryDetailTitle}>5 Years</div>
                <div className={`${styles.stockHistoryDetailValue} ${
                    fiveYearPercentageChange >= 0 ? styles.stockHistoryPositive : styles.stockHistoryNegative
                  }`}>
                  {typeof fiveYearPercentageChange === 'number' ? `${fiveYearPercentageChange.toFixed(2)}%` : ''}
                </div>
              </button>
              <button 
                className={selectedButton === 'Max' ? `${styles.stockHistoryDetails} ${styles.selectedButton}` : styles.stockHistoryDetails}
                onClick={() => handleButtonClick('Max')}
              >                
                <div className={styles.stockHistoryDetailTitle}>Max</div>
                <div className={`${styles.stockHistoryDetailValue} ${
                    maxPercentageChange >= 0 ? styles.stockHistoryPositive : styles.stockHistoryNegative
                  }`}>
                  {typeof maxPercentageChange === 'number' ? `${maxPercentageChange.toFixed(2)}%` : ''}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;