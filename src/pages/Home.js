import React from 'react';
import Home from '../components/Home/HomeComponent';
import LayoutApp from '../components/LayoutApp/LayoutApp';

export default function HomePage() {
  return (
    <div>
      <LayoutApp>
        <Home />
      </LayoutApp>
    </div>
  );
}
