import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

//chart type
import * as am5percent from "@amcharts/amcharts5/percent";
import {useEffect, useLayoutEffect} from "react";

const Pie = (props) => {
    const pieChartId = props.chartID;
    console.log(pieChartId);

    useLayoutEffect(() => {
        const root = am5.Root.new(pieChartId);

        // Set themes
        root.setThemes([am5themes_Animated.new(root)]);

        // Create chart
        const chart = root.container.children.push(
            am5percent.PieChart.new(root, {
                endAngle: 270
            })
        );

        // Create series
        const series = chart.series.push(
            am5percent.PieSeries.new(root, {
                valueField: "value",
                categoryField: "category",
                endAngle: 270
            })
        );

        series.states.create("hidden", {
            endAngle: -90
        });

        // Set data
        let data = [
            {
                category: "Lithuania",
                value: 501.9
            },
            {
                category: "Czechia",
                value: 301.9
            },
            {
                category: "Ireland",
                value: 201.1
            },
            {
                category: "Germany",
                value: 165.8
            },
            {
                category: "Australia",
                value: 139.9
            },
            {
                category: "Austria",
                value: 128.3
            },
            {
                category: "UK",
                value: 99
            }
        ];

        // Make stuff animate on load
        series.data.setAll(data);
        series.appear(1000, 100);

        return () => {
            root.dispose();
            // legendRoot.dispose();
        };

    }, [pieChartId]);

    return (
        <div id={pieChartId} className={"flex-item-chart"}/>
    );
};

export default Pie;