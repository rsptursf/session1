import { Card } from '@/components/ui/card';
import { ChartContainer, type ChartConfig } from '@/components/ui/chart';
import { useState } from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

function App() {
    const [page, setPage] = useState<'my' | 'your'>('your');

    return (
        <section className="p-12">
            <button className="px-4 py-2 bg-blue-400 border mr-2" onClick={() => setPage('your')}>
                Your
            </button>
            <button className="px-4 py-2 bg-orange-400 border mr-2 " onClick={() => setPage('my')}>
                My
            </button>
            <div className="py-4">
                {page === 'my' && <MyComponent />}
                {page === 'your' && <YourComponent />}
            </div>

            {/* <Chart /> */}
        </section>
    );
}

export default App;

function MyComponent() {
    return (
        <div className="p-12 border bg-orange-400">
            <h1>My Component</h1>
            <CommonComponent list={[1, 2, 3]} />
        </div>
    );
}

function YourComponent() {
    return (
        <div className="p-12 border bg-blue-400">
            <h1>Your Component</h1>
            <CommonComponent list={[10, 20, 30]} title="hi" />
        </div>
    );
}

function CommonComponent(props: { list: number[]; title?: string }) {
    return (
        <div className="text-white">
            <div>타이틀: {props.title?.length}</div>
            common component
            {props.list.map((item) => (
                <div key={item}>{item}</div>
            ))}
        </div>
    );
}

function Chart() {
    const chartConfig = {
        javascript: {
            label: 'javascript',
            color: '#f59e0b',
        },
        typescript: {
            label: 'typescript',
            color: '#007acc',
        },
    } satisfies ChartConfig;

    const chartData = [
        { name: '1', javascript: 100, typescript: 85 },
        { name: '2', javascript: 90, typescript: 80 },
        { name: '3', javascript: 85, typescript: 75 },
        { name: '4', javascript: 78, typescript: 70 },
        { name: '5', javascript: 67, typescript: 65 },
        { name: '6', javascript: 60, typescript: 63 },
        { name: '7', javascript: 51, typescript: 60 },
        { name: '8', javascript: 42, typescript: 57 },
        { name: '9', javascript: 31, typescript: 55 },
        { name: '10', javascript: 22, typescript: 52 },
        { name: '11', javascript: 12, typescript: 50 },
        { name: '12', javascript: 4, typescript: 46 },
    ];

    return (
        <div className="p-12">
            <h1 className="text-center">JavaScript vs TypeScript 생산성</h1>
            <Card className="p-8">
                <ChartContainer config={chartConfig} className="w-full max-h-96">
                    <LineChart data={chartData}>
                        <Line dataKey="javascript" dot={false} stroke={chartConfig.javascript.color} />
                        <Line dataKey="typescript" dot={false} stroke={chartConfig.typescript.color} hide={false} />
                        <YAxis />
                        <XAxis dataKey="name" />
                    </LineChart>
                </ChartContainer>
            </Card>
        </div>
    );
}
