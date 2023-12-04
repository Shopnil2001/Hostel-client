import React, { useState } from 'react';
import Banner from './Banner';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import TabCard from './TabCard';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
const Home = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [category, setCategory] = useState('')
    return (
        <div>
            <Banner></Banner>
       
            <div className='w-2/3 mx-auto mt-20'>
                <h1 className='text-center font-bold text-2xl mb-10 border-b-slate-950 border-b'>Look At Some Food:</h1>
                <Tabs className={'text-center '} selectedIndex={tabIndex} onSelect={(index) => {
                    setTabIndex(index);
                    if (index === 0) {
                        setCategory('')
                    }
                    else if (index === 1) {
                        setCategory('Breakfast')

                    }
                    else if (index === 2) {
                        setCategory('Lunch')

                    }
                    else if (index === 3) {
                        setCategory('Dinner')

                    }
                   
                }}
                >
                    <TabList className={'flex justify-center my-5 md:gap-7 gap-4 lg:gap-10  '} >
                        <Tab >All </Tab>
                        <Tab  >Breakfast</Tab>
                        <Tab  >Lunch</Tab>
                        <Tab  >Dinner</Tab>
                       
                    </TabList>

                    <TabPanel>

                        <TabCard category={category}></TabCard>
                    </TabPanel>
                    <TabPanel>

                        <TabCard category={category}></TabCard>
                    </TabPanel>
                    <TabPanel>
                        <TabCard category={category}></TabCard>
                    </TabPanel>
                    <TabPanel>
                        <TabCard category={category}></TabCard>
                    </TabPanel>
                    
                </Tabs>
                <h1 className='text-center font-bold text-2xl mb-10 border-b-slate-950 border-b'>Buy Subscription to request meals :</h1>
                <Link to={'/Payment'}> <h1>Silver</h1> </Link>
                <Link to={'/Payment'}> <h1>Gold</h1> </Link>
                <Link to={'/Payment'}> <h1>Platinum</h1> </Link>

            
        </div>
        </div>
    );
};

export default Home;