import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'; // Import Tailwind CSS

import ReactDateFns, { DateDisplay } from './components/DateDisplay';

const App = () => {
    return (
        <div className="p-4">
            <p>
                <ReactDateFns.DateDisplay className="text-xl font-bold text-blue-500" pattern="yyyy-MM-dd">
                    {new Date()}
                </ReactDateFns.DateDisplay>
            </p>
            <p>
                <DateDisplay className="text-lg text-gray-700 mt-2" pattern="MM/dd/yyyy">
                    {new Date()}
                </DateDisplay>
            </p>
        </div>
    );
};


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
