import React from 'react';
import { Button } from 'antd';
import './stylesheets/text-elements.css'
import './stylesheets/form-elements.css'
import './stylesheets/custom-components.css'
import './stylesheets/alignments.css'
import './stylesheets/theme.css'

function App() {
  return (
    <div className='bg-primary h-screen flex items-center justify-center'>
      <h1>
        Stella Wallet
      </h1>
      <Button type="primary">Primary Button</Button>
    </div>
  );
}

export default App;
