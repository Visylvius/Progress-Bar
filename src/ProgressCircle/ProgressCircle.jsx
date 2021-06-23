import React from "react";
import { getXAttribute } from "./utils";
import "./ProgressCircle.css";

/** ProgressCircle Props
 *
 * @param {number} sqSize Size of the enclosing square
 * @param {number} strokeWidth Width of the SVG stroke
 * @param {number} percentage number responsible for showing where the indicator is currently at
 */

const ProgressCircle = ({ sqSize = 200, strokeWidth = 15, percentage = 0 }) => {
  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (sqSize - strokeWidth) / 2;
  // Enclose circle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <circle
        className="ProgressCircle-background"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        data-testid="ProgressCircle-background"
      />
      <circle
        className="ProgressCircle-progressPercentage"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
        data-testid="ProgressCircle-progressPercentage"
      />
      <text className="ProgressCircle-percentageText" textAnchor="middle">
        <tspan x="45%" y="50%" dy=".3em">{`${percentage}`}</tspan>
        <tspan
          className="ProgressCircle-percentageSign"
          x={getXAttribute(percentage)}
          y="45%"
          textAnchor="middle"
          data-testid="ProgressCircle-percentageSign"
        >
          %
        </tspan>
      </text>
    </svg>
  );
};

export default ProgressCircle;
