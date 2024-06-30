import { ReactElement, useState } from 'react';
import { DateDisplay } from './components/DateDisplay';

const components: Dict<ReactElement> = {
    DateDisplay: (
        <DateDisplay
            className="block text-xl font-medium text-gray-900 mt-2"
            pattern="MM/dd/yyyy"
        >
            {new Date()}
        </DateDisplay>
    ),
};

const componentDocs: Dict<ReactElement> = {
    DateDisplay: (
        <div>
            <h2 className="text-xl font-bold mb-2">DateDisplay Component</h2>
            <p className="mb-4">The <code>DateDisplay</code> component formats and displays a date using the specified pattern.</p>
            <h3 className="text-lg font-semibold">Props</h3>
            <ul className="list-disc list-inside mb-4">
                <li><code>children</code> (Date): The date to be formatted and displayed.</li>
                <li><code>className</code> (string, optional): Additional CSS classes to apply to the span element.</li>
                <li><code>pattern</code> (DatePattern): The format pattern to use for displaying the date.</li>
            </ul>
            <h3 className="text-lg font-semibold">Usage</h3>
            <pre className="bg-gray-100 p-4 rounded"><code>
                {`import { DateDisplay } from './components/DateDisplay';

function Example() {
    return (
        <DateDisplay className="text-lg text-gray-700 mt-2" pattern="MM/dd/yyyy">
            {new Date()}
        </DateDisplay>
    );
}`}
            </code></pre>
        </div>
    ),
};


export function App() {
    const [selectedComponent, setSelectedComponent] = useState('DateDisplay');

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <aside className="w-64 bg-white shadow-lg p-3">
                <div className="p-2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">ReactDateFns</h2>
                </div>
                <div className="p-2">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Components</h3>
                    <ul>
                        {Object.keys(components).map((component) => (
                            <li key={component}>
                                <button
                                    className={`w-full text-left p-2 rounded ${selectedComponent === component ? 'bg-gray-200' : ''
                                        }`}
                                    onClick={() => setSelectedComponent(component)}
                                >
                                    {component}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
            <main className="flex-1 p-6">
                <div className="bg-white shadow-lg rounded-lg p-6 mx-auto">
                    {componentDocs[selectedComponent]}
                    <div className="mt-6">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Component Preview</h1>
                        <p className="text-lg text-gray-700">
                            {components[selectedComponent]}
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}