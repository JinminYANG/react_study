import Content from '../components/layout/Content';
import {useLocation, useParams} from 'react-router-dom';
import {useSearchParams, useNavigate} from 'react-router-dom';
import Pie from "../components/chart/Pie";
import Column from "../components/chart/Column";

const DashboardPage = () => {
    const {dashboardId} = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // Error!
    // const keyWords = searchParams;
    // const keyWord = searchParams.get("search");

    return (
        <div style={{width: ""}}>
            <Content/>
            <h3> {dashboardId}번 대시보드 페이지입니다.z</h3>
            <ul>
                <li>hash : {location.hash}</li>
                <li>pathname : {location.pathname}</li>
                <li>search : {location.search}</li>
                <li>state : {location.state}</li>
                <li>key : {location.key}</li>
                {/*<li>keyWords : {keyWords}</li>*/}
                {/*<li>keyWord : {keyWord}</li>*/}
            </ul>
            <hr/>
            <ul>
                <li>
                    <button onClick={() => navigate(-1)}>Go back</button>
                </li>
                <li>
                    <button onClick={() => navigate('/')}>Go root</button>
                </li>
            </ul>

            <div className={"flex-container"}>
                <Pie chartID="pie-one"/>
                <Pie chartID="pie-two"/>
                <Pie chartID="pie-3"/>
                <Pie chartID="pie-4"/>
                <Pie chartID="pie-5"/>
                <Column chartID={"column-one"} />
            </div>
        </div>
    );
};

export default DashboardPage;