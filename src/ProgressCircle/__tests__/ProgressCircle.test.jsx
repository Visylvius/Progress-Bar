import React from "react";
import { render, screen } from "@testing-library/react";

import ProgressCircle from "../ProgressCircle";

describe("ProgressCircle (Unit)", () => {
  const renderProgressCircle = (props) => render(<ProgressCircle {...props} />);

  describe("render", () => {
    test("should match snapshot", () => {
      const { asFragment } = renderProgressCircle();

      expect(asFragment()).toMatchSnapshot();
    });

    describe("ProgressCircle Background Element", () => {
      test("should have the proper cx, cy, and radius values", () => {
        renderProgressCircle({ sqSize: 100, strokeWidth: 15 });
        const progressCircle = screen.getByTestId("ProgressCircle-background");

        expect(progressCircle.getAttribute("cx")).toBe("50");
        expect(progressCircle.getAttribute("cy")).toBe("50");
        expect(progressCircle.getAttribute("r")).toBe("42.5");
      });
    });

    describe("ProgressCircle Percentage Bar", () => {
      test("should have the proper cx, cy, and radius values", () => {
        renderProgressCircle({ sqSize: 50, strokeWidth: 15 });
        const percentageCircle = screen.getByTestId(
          "ProgressCircle-progressPercentage"
        );

        expect(percentageCircle.getAttribute("cx")).toBe("25");
        expect(percentageCircle.getAttribute("cy")).toBe("25");
        expect(percentageCircle.getAttribute("r")).toBe("17.5");
      });

      test("should have the proper transform value", () => {
        renderProgressCircle({ sqSize: 50, strokeWidth: 15 });
        const percentageCircle = screen.getByTestId(
          "ProgressCircle-progressPercentage"
        );

        expect(percentageCircle.getAttribute("transform")).toBe(
          "rotate(-90 25 25)"
        );
      });

      test("should have the proper style tags", () => {
        renderProgressCircle({ sqSize: 50, strokeWidth: 15 });
        const percentageCircle = screen.getByTestId(
          "ProgressCircle-progressPercentage"
        );

        expect(percentageCircle.getAttribute("style")).toBe(
          "stroke-dasharray: 109.95574287564276; stroke-dashoffset: 109.95574287564276;"
        );
      });
    });

    describe("Progress Circle percent sign", () => {
      test("should contain an x attribute of 60% when percent is less than 9", () => {
        renderProgressCircle({ percentage: 9 });
        const percentSign = screen.getByTestId("ProgressCircle-percentageSign");

        expect(percentSign.getAttribute("x")).toBe("60%");
      });

      test("should contain an x attribute of 68% when percent is less than or equal to 99", () => {
        renderProgressCircle({ percentage: 58 });
        const percentSign = screen.getByTestId("ProgressCircle-percentageSign");

        expect(percentSign.getAttribute("x")).toBe("70%");
      });

      test("should contain an x attribute of 75% when percent greater than 99", () => {
        renderProgressCircle({ percentage: 100 });
        const percentSign = screen.getByTestId("ProgressCircle-percentageSign");

        expect(percentSign.getAttribute("x")).toBe("77%");
      });
    });
  });
});
