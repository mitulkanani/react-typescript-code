import Application from './../app/features/layouts/myapplication/Application';
import LoanDash from './../app/features/layouts/loandashboard/LoanDash';

const dashRoutes = [
    { path: "/application", component: Application },
    { path: "/loan-dashboard", component: LoanDash }
];

export default dashRoutes;
