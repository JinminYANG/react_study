import Content from '../components/layout/Content';
import { useLocation, useParams } from 'react-router-dom';
import {useSearchParams, useNavigate} from 'react-router-dom';

const DashboardPage = () => {
   const { dashboardId } = useParams();
   const location = useLocation();
   const navigate = useNavigate();

   // Error!
   // const keyWords = searchParams;
   // const keyWord = searchParams.get("search");

   return (
      <div>
         <Content />
         <h3> {dashboardId}번 대시보드 페이지입니다.</h3>
         <ul>
            <li>hash : {location.hash}</li>
            <li>pathname : {location.pathname}</li>
            <li>search : {location.search}</li>
            <li>state : {location.state}</li>
            <li>key : {location.key}</li>
            {/*<li>keyWords : {keyWords}</li>*/}
            {/*<li>keyWord : {keyWord}</li>*/}
         </ul>
         <hr />
         <ul>
            <li><button onClick={() => navigate(-1)}>Go back</button></li>
            <li><button onClick={() => navigate('/')}>Go root</button></li>
         </ul>
      </div>
   );
};

export default DashboardPage;