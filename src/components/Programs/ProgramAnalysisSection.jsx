import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Card from '../common/Card';

const ProgramAnalysisSection = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const option = {
        animation: false,
        radar: {
          indicator: [
            { name: 'Strength', max: 100 },
            { name: 'Cardio', max: 100 },
            { name: 'Flexibility', max: 100 },
            { name: 'Endurance', max: 100 },
            { name: 'Balance', max: 100 },
          ],
        },
        series: [
          {
            type: 'radar',
            data: [
              {
                value: [85, 70, 60, 80, 75],
                name: 'Program Intensity',
                areaStyle: { color: 'rgba(255, 58, 58, 0.6)' },
                lineStyle: { color: '#FF3A3A' },
              },
            ],
          },
        ],
      };
      chart.setOption(option);

      const handleResize = () => chart.resize();
      window.addEventListener('resize', handleResize);

      return () => {
        chart.dispose();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Program Analysis</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Visualize the focus areas and intensity of our signature programs.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-6">
            <Card.Header>
              <Card.Title>Program Intensity Comparison</Card.Title>
            </Card.Header>
            <Card.Content>
              <div ref={chartRef} className="w-full h-[400px]"></div>
            </Card.Content>
          </Card>
          <Card className="p-6">
            <Card.Header>
              <Card.Title>Program Benefits</Card.Title>
            </Card.Header>
            <Card.Content>
              <div className="space-y-6">
                {[
                  { benefit: 'Strength Gain', programs: ['Power Lifting', 'Muscle Building'], percentage: 90 },
                  { benefit: 'Fat Loss', programs: ['HIIT Revolution', 'Cardio Kickboxing'], percentage: 85 },
                  { benefit: 'Flexibility', programs: ['Yoga Flow', 'Recovery & Mobility'], percentage: 95 },
                  { benefit: 'Cardiovascular Health', programs: ['HIIT Revolution', 'Cardio Kickboxing'], percentage: 80 },
                  { benefit: 'Mental Wellbeing', programs: ['Yoga Flow', 'Recovery & Mobility'], percentage: 75 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <div>
                        <span className="text-white font-medium">{item.benefit}</span>
                        <span className="text-white/50 text-sm ml-2">
                          ({item.programs.join(', ')})
                        </span>
                      </div>
                      <span className="text-white">{item.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-[#333] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-secondary"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramAnalysisSection;