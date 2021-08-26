import React, {useContext} from 'react';
import {Username, Company} from '../index';

const username = useContext(Username);
const userCompany = useContext(Company);


const UserCompanyF = () => {
    return(
        <div>
            My name is - {username} and I work for {userCompany}.
        </div>
    )
}

export default UserCompanyF;