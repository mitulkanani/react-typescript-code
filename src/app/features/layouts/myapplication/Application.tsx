import React, { useState, ChangeEvent } from 'react';
import {Tab, Tabs} from '@material-ui/core';
import { CoronaActiveTable, CoronaPastTable } from 'app/core/components/tables/CoronaTables';


interface IApplicationProps {
}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    const [ value, setValue ] = useState('active');

	const handleChangeTab = (event: ChangeEvent<{}>, newValue: any) => {
		setValue(newValue);
	};

	return (
		<div>
			<div className="page-title an-26 medium-text">Applications</div>
			<div className="pt20">
				<Tabs
					value={value}
					indicatorColor="primary"
					textColor="primary"
					onChange={handleChangeTab}
					aria-label="disabled tabs example">
					<Tab
						value="active"
						label="Active"
						className="an-15 medium-text text-capitalize min-width-100px"
					/>
					<Tab
						value="past"
						label="Past"
						className="an-15 medium-text text-capitalize min-width-100px"
					/>
				</Tabs>
				<div className="application-tbl">
					{value === 'active' ? <CoronaActiveTable /> : <CoronaPastTable />}
				</div>
			</div>
		</div>
	);
};

export default Application;
