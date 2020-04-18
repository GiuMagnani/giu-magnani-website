import React, { useEffect } from "react";
import styled from "styled-components";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function movePoint(context, canvas) {
  context.beginPath();
  context.strokeStyle = "#2222ff";
  context.moveTo(canvas.width / 2, canvas.height / 2);
  context.lineTo(getRandomInt(0, canvas.width), getRandomInt(0, canvas.height));
  context.stroke();
}

function drawLines(context, canvas, i, j, step, randomness) {
  const lines = [];
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (i = 0; i <= canvas.height; i += step) {
    const line = [];
    for (j = 0; j <= canvas.width; j += step) {
      const horizontalRandomness = j > canvas.width / 2 ? canvas.width - j : j;
      const rand =
        (Math.random() * randomness * horizontalRandomness) / canvas.width;
      line.push({ x: j, y: i + rand });
    }
    lines.push(line);
  }

  for (i = 0; i < lines.length; i++) {
    context.beginPath();
    context.moveTo(lines[i][0].x, lines[i][0].y);

    for (j = 0; j < lines[i].length; j++) {
      context.lineTo(lines[i][j].x, lines[i][j].y);
    }

    context.strokeStyle = `#2222ff`;
    context.lineWidth = 1;
    context.stroke();
  }
}

function convertToASCII(string) {
  let arr = [];

  for (var i = 0; i < string.length; i++) {
    arr.push(string.charCodeAt(i));
  }

  return arr;
  // return arr.reduce((a, b) => a + b, 0);
}

function simpleLines(context, canvas, a, b, c) {
  context.beginPath();
  context.strokeStyle = "#2222ff";
  // context.moveTo(canvas.width / 2, canvas.height / 2);
  // console.log(canvas.width);
  // console.log(canvas.height);

  // let x = 0;
  // let y = 0;
 
  let x1 = normalizationIntoRange(a * c, rangeASCII[0], rangeASCII[1] * c, 100);
  let x2 = normalizationIntoRange(b * c, rangeASCII[0], rangeASCII[1] * c, 100);
  let y1 = normalizationIntoRange(a, rangeASCII[0], rangeASCII[1], 300);
  let y2 = normalizationIntoRange(a, rangeASCII[0], rangeASCII[1], 300);
  console.log(x1, y1, x2, y2);
  console.log(b);

  context.moveTo(x1, y1);
  context.lineTo(x2, y1);
  context.stroke();
  // context.lineWidth = normalizationIntoRange(a, rangeASCII[0], rangeASCII[1], 5);
  context.lineWidth = 1;
}

function normalizationIntoRange(n, min, max, newMax) {
  return Math.round(newMax * ((n - min) / (max - min)));
}

const rangeASCII = [0, 255];

function draw(canvasRef, title, date) {
  const canvas = canvasRef.current;
  const context = canvas.getContext("2d");

  let dateASCII = convertToASCII(date);
  let titleASCII = convertToASCII(title);
  let dateToTimestamp = Date.parse(new Date(date)) / 1000;

  // console.log(dateASCII);
  console.log(titleASCII);
  // console.log(dateToTimestamp);
  // console.log(title.length);
  // console.log(test);

  // simpleLines(context, canvas, titleASCII[0]);

  for (let index = 0; index < titleASCII.length; index++) {
    simpleLines(context, canvas, titleASCII[index], titleASCII[titleASCII.length - [index + 1]], index);
    // Add circles
    // Add squares
    // Add triangles
    // Add diagonals
  }
}

const RandomBlock = ({ title, date }) => {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    draw(canvasRef, title, date);
  }, [canvasRef]);

  return (
    <CanvasWrapper className="test-block">
      <canvas ref={canvasRef} height="300" width="50"></canvas>
    </CanvasWrapper>
  );
};

const CanvasWrapper = styled.div`
  canvas {
    display: inline-block;
    /* width: 100px; */
    /* height: 100px; */
    background: white;
    margin: 10px;
    border: 1px solid #2222ff;
  }
`;

export default RandomBlock;
