
import React from 'react';
import Banner from '../components/Banner';
import SectorCard from '../components/SectorCard';

const HomePage = () => {
  const sectors = [
    { title: 'Social Enterprises', description: 'Innovative solutions by social entrepreneurs.' },
    { title: 'Development Organizations', description: 'Projects and collaborations by NGOs.' },
    { title: 'Funding Opportunities', description: 'Explore grants and competitions.' },
    { title: 'Private Sector', description: 'Corporate initiatives and partnerships.' },
    { title: 'Government Partnerships', description: 'Public sector collaborations for impact.' },
  ];

  return (
    <div>
      <Banner />
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Our Sectors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <SectorCard key={index} title={sector.title} description={sector.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
