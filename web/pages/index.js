import React from 'react';
import BoxesPage from '../src/components/boxes';
import HeroScene from "@/components/HeroScene"
import Layout from '@/Layouts/Layout';

const Index = () => {
    return (
        <div>
            <div className="section">
                <HeroScene />
                {/* <BoxesPage /> */}
            </div>
        </div>
    );
};

Index.Layout = Layout;

export default Index;
