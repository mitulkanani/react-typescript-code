import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import layoutRoutes from "./routes/index";
import "./assets/scss/app.scss";

const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                {/* Layout Routes */}
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <Redirect to="/home" />}
                    />
                    {layoutRoutes.map((prop, key) => {
                        return (
                            <Route
                                path={prop.path}
                                component={prop.component}
                                key={key}
                            />
                        );
                    })}
                </Switch>
                {/* Layout Routes */}
            </BrowserRouter>
        </div>
    );
};

export default App;
