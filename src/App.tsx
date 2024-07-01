import { ReactElement, useState } from 'react';
import { DateDisplay } from './components/DateDisplay';
import { CountdownTimer } from './components/CountdownTimer';
import { cn } from './utilities';

const components: Record<string, ReactElement> = {
    CountdownTimer: <CountdownTimer className="block mt-4" targetDate={new Date(new Date().getTime() + 10000)} />,
    DateDisplay: (
        <DateDisplay
            className="block text-xl font-medium text-gray-900 mt-2"
            pattern="MM/dd/yyyy"
        >
            {new Date()}
        </DateDisplay>
    ),
};

const componentDocs: Record<string, ReactElement> = {
    CountdownTimer: (
        <div>
            <h2 className="text-xl font-bold mb-2">CountdownTimer Component</h2>
            <p className="mb-4">The <code>CountdownTimer</code> component counts down to a target date and displays the remaining time.</p>
            <h3 className="text-lg font-semibold">Props</h3>
            <ul className="list-disc list-inside mb-4">
                <li><code>targetDate</code> (Date): The date to count down to.</li>
                <li><code>className</code> (string, optional): Additional CSS classes to apply to the container element.</li>
                <li><code>timeLeftText</code> (string, optional): Text to display when the countdown reaches zero.</li>
            </ul>
            <h3 className="text-lg font-semibold">Usage</h3>
            <pre className="bg-gray-100 p-4 rounded"><code>
                {`import { CountdownTimer } from './components/CountdownTimer';

function Example() {
    return (
        <CountdownTimer 
            className="block mt-4" 
            targetDate={new Date(new Date().getTime() + 10000)} 
        />
    );
}`}
            </code></pre>
        </div>
    ),
    DateDisplay: (
        <div>
            <h2 className="text-xl font-bold mb-2">DateDisplay Component</h2>
            <p className="mb-4">The <code>DateDisplay</code> component formats and displays a date using the specified pattern.</p>
            <h3 className="text-lg font-semibold">Props</h3>
            <ul className="list-disc list-inside mb-4">
                <li><code>children</code> (Date): The date to be formatted and displayed.</li>
                <li><code>className</code> (string, optional): Additional CSS classes to apply to the span element.</li>
                <li><code>pattern</code> (string): The format pattern to use for displaying the date.</li>
            </ul>
            <h3 className="text-lg font-semibold">Usage</h3>
            <pre className="bg-gray-100 p-4 rounded"><code>
                {`import { DateDisplay } from './components/DateDisplay';

function Example() {
    return (
        <DateDisplay 
            className="text-lg text-gray-700 mt-2" 
            pattern="MM/dd/yyyy"
        >
            {new Date()}
        </DateDisplay>
    );
}`}
            </code>
            </pre>
        </div>
    ),
};

export function App() {
    const [selectedComponent, setSelectedComponent] = useState('DateDisplay');

    const sortedComponentKeys = Object.keys(components).sort();

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <aside className="w-64 bg-white shadow-lg p-3">
                <div className="p-2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">ReactDateFns</h2>
                </div>
                <div className="p-2">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Components</h3>
                    <ul>
                        {sortedComponentKeys.map((component) => (
                            <li key={component}>
                                <button
                                    className={cn(
                                        'w-full text-left p-2 rounded',
                                        selectedComponent === component && 'bg-gray-200',
                                    )}
                                    onClick={() => setSelectedComponent(component)}
                                >
                                    {component}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
            <main className="flex-1 p-6 mb-32">
                <div className="bg-white shadow-lg rounded-lg p-6 mx-auto">
                    {componentDocs[selectedComponent]}
                    <div className="mt-6">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Component Preview</h1>
                        <div className="text-lg text-gray-700">
                            {components[selectedComponent]}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}