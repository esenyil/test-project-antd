import React, { useState } from "react";
import type { NextPage } from "next";
import { Cascader, DatePicker, TimePicker } from "antd";
import { DateTimePicker } from "react-rainbow-components";
import styles from "../styles/Home.module.css";
import { NodeNextRequest } from "next/dist/server/base-http/node";

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const onChange: any = (value: string[]) => {
  console.log(value);
};

const containerStyles = {
  maxWidth: 400,
};

const antdStyle = {
  borderColor: "#545454",
  width: "150px",
};

const Home: NextPage = () => {
  const [state, setState] = useState(new Date());
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.card}>
          <Cascader
            options={options}
            onChange={onChange}
            placeholder="Please select"
            size="large"
            style={{ borderColor: "#545454" }}
          />
        </div>
        <div className={styles.card}>
          <DatePicker onChange={onChange} size="large" style={antdStyle} />
          <TimePicker
            onChange={(value) => console.log(value)}
            size="large"
            format="HH:mm"
            style={antdStyle}
          />
        </div>
        <div className={styles.card} style={containerStyles}>
          <DateTimePicker
            value={state}
            label="DateTimePicker Label"
            onChange={(value: Date) => setState(value)}
            className="rainbow-m-around_small"
            hour24
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
