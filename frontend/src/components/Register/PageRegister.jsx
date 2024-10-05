import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderForLR from "../header/HederForLR";
import TabSection1 from '../Tab/TabSection1';
import Register from "../Register/Register";
import RegisterForPodcaster from "../Register/RegisterForPodcaster";

export default function PageRegister() {
    const [tab, setTab] = useState('user');

    return (
        <>
            <HeaderForLR />
            <div className="obedinen1">
                <TabSection1 Active={tab} onChange={(current) => setTab(current)} />
                {tab === 'user' && <Register />}
                {tab === 'podcaster' && <RegisterForPodcaster />}
            </div>
            <div className="text_for_reg">Регистрация /</div>
            <Link to="/login">
                <div className="text_for_log">Вход</div>
            </Link>
        </>
    );
}
