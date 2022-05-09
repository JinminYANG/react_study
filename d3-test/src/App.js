import {useRef, useEffect, useState} from "react";
import './App.css';
import {select, line, curveCardinal} from "d3";

// circle svg
/*
function App() {

    const [data, setData] = useState([25, 30, 45, 60, 20]);
    const svgRef = useRef();

    useEffect(() => {
        const svg = select(svgRef.current);     // d3.select = svg
        svg
            .selectAll("circle")    // d3에게 circle 태그를 모두 찾아서 선택 시키게 한다.
            .data(data)     // 데이터와 바인딩 한다.
            .join("circle")     // svg 요소를 '생성', '업데이트', '지우기' 해야할 경우 한번에 관리한다.
            .attr("r", value => value)
            .attr("cx", value => value * 2)
            .attr("cy", value => value * 2)
            // r: 반지름, cx: 중심점 x좌표값, cy: 중심점 y좌표값
            .attr("stroke", "red")
        ;
    }, [data]);

    return (
        <>
            <svg ref={svgRef}></svg>
            <br/>
            <button onClick={() => setData(data.map(value => value + 5))}>
                Update data
            </button>
            <button onClick={() => setData(data.filter(value => value < 35))}>
                Filter data
            </button>
        </>
    );
}
*/

const CurvedLine = () => {
    const [lineData, setLineData] = useState([1, 5, 34, 22, 50, 100, 70, 30]);
    const lineRef = useRef();

    useEffect(() => {
        const svgLine = select(lineRef.current);    // d3.select("svg")

        // line 메소드 변수(좌표값의 계산식이 세팅된)를 생성
        const myLine = line()
            .x((value, index) => index * 50)    // x좌표 50px 단위로 증가
            .y((value) => 150 - value)  // y좌표 값이 좌하단부터 시작하도록 조정
            .curve(curveCardinal);  // 그래프 스타일 설정
            // curveCardinal: 점과 점 곡선으로 부드럽게 처리됨 (default는 직선 꺾은 선 그래프 모양)

        svgLine
            .selectAll("path")
            .data([lineData])
            .join("path")
            .attr("d", (value) => myLine(value))
            .attr("fill", "none")
            .attr("stroke", "blue");
    }, [lineData]);

    const addData = () => {
        setLineData(lineData.map((d) => d + 10));
    };

    const subtractData = () => {
        setLineData(lineData.map((d) => d - 10));
    };

    return (
        <>
            <svg ref={lineRef}></svg>
            <br/>
            <button onClick={addData}>add</button>
            <button onClick={subtractData}>subtract</button>
        </>
    )
}


export default CurvedLine;
