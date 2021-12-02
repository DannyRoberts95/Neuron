import React from 'react';
import BoxesPage from './boxes';
import Layout from '@/Layouts/Layout';

const Index = () => {
    return (
        <div>
            <div className="section">
                <BoxesPage />
            </div>
        </div>
    );
};

Index.Layout = Layout;

export default Index;
