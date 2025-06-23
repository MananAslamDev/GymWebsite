import React, { useEffect, useRef } from 'react';
import HeroSection from '../components/Home/HeroSection';
import { Button } from '../components/common/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/common/Card';
import * as echarts from 'echarts';
import { programs } from '../utils/constants';

const Programs = () => {
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
    <div className="flex flex-col w-full">
      <HeroSection
        title="Elite"
        highlightedText="Programs"
        description="Discover our comprehensive range of fitness programs designed to help you reach your specific goals."
        image="https://readdy.ai/api/search-image?query=Group%20fitness%20class%20in%20progress%20in%20a%20modern%20gym%20with%20dark%20atmosphere%20and%20dramatic%20lighting%2C%20people%20working%20out%20with%20various%20equipment%2C%20high-energy%20environment%2C%20professional%20fitness%20photography%20with%20red%20accent%20lighting&width=1920&height=800&seq=programs1&orientation=landscape"
        imageAlt="Fitness class"
      />

      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6 md:mb-0">Our Programs</h2>
            <div className="flex flex-wrap gap-4">
              {['All Programs', 'Strength', 'Cardio', 'Flexibility', 'Recovery'].map((filter) => (
                <Button
                  key={filter}
                  className={`${
                    filter === 'All Programs'
                      ? 'bg-[#FF3A3A] hover:bg-[#FF3A3A]/80'
                      : 'bg-[#222] hover:bg-[#333]'
                  } text-white !rounded-button whitespace-nowrap cursor-pointer`}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="bg-[#222] border-none overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover object-top transition-transform hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="inline-block bg-[#FF3A3A] text-white px-3 py-1 text-sm font-bold rounded-full">
                      {program.category}
                    </span>
                    <div className="flex items-center">
                      <span className="text-white/70 text-sm mr-2">Intensity:</span>
                      <div className="w-20 h-2 bg-[#333] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#00F0FF]"
                          style={{ width: `${program.intensity}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-white">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">{program.description}</p>
                  <div className="flex justify-between text-sm text-white/70">
                    <span>
                      <i className="far fa-clock mr-2"></i>
                      {program.duration}
                    </span>
                    <span>
                      <i className="fas fa-calendar-alt mr-2"></i>
                      {program.sessions}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#FF3A3A] hover:bg-[#FF3A3A]/80 text-white !rounded-button whitespace-nowrap cursor-pointer">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#222]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Program Comparison</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Find the perfect program that aligns with your fitness goals and preferences.
            </p>
          </div>
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left text-white bg-[#1A1A1A]">Program</th>
                  <th className="p-4 text-center text-white bg-[#1A1A1A]">Duration</th>
                  <th className="p-4 text-center text-white bg-[#1A1A1A]">Sessions</th>
                  <th className="p-4 text-center text-white bg-[#1A1A1A]">Difficulty</th>
                  <th className="p-4 text-center text-white bg-[#1A1A1A]">Equipment</th>
                  <th className="p-4 text-center text-white bg-[#1A1A1A]">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Power Lifting',
                    duration: '12 weeks',
                    sessions: '4 per week',
                    difficulty: 'Advanced',
                    equipment: 'Full Gym',
                  },
                  {
                    name: 'HIIT Revolution',
                    duration: '8 weeks',
                    sessions: '3 per week',
                    difficulty: 'Intermediate',
                    equipment: 'Minimal',
                  },
                  {
                    name: 'Yoga Flow',
                    duration: 'Ongoing',
                    sessions: '2-5 per week',
                    difficulty: 'All Levels',
                    equipment: 'Mat Only',
                  },
                  {
                    name: 'Cardio Kickboxing',
                    duration: '10 weeks',
                    sessions: '3 per week',
                    difficulty: 'Intermediate',
                    equipment: 'Specialized',
                  },
                  {
                    name: 'Muscle Building',
                    duration: '16 weeks',
                    sessions: '5 per week',
                    difficulty: 'Intermediate',
                    equipment: 'Full Gym',
                  },
                  {
                    name: 'Recovery & Mobility',
                    duration: 'Ongoing',
                    sessions: '2-3 per week',
                    difficulty: 'Beginner',
                    equipment: 'Minimal',
                  },
                ].map((program, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-[#1A1A1A]/30' : 'bg-[#1A1A1A]/10'}>
                    <td className="p-4 text-white font-medium">{program.name}</td>
                    <td className="p-4 text-white/70 text-center">{program.duration}</td>
                    <td className="p-4 text-white/70 text-center">{program.sessions}</td>
                    <td className="p-4 text-white/70 text-center">{program.difficulty}</td>
                    <td className="p-4 text-white/70 text-center">{program.equipment}</td>
                    <td className="p-4 text-center">
                      <Button className="bg-[#FF3A3A] hover:bg-[#FF3A3A]/80 text-white !rounded-button whitespace-nowrap cursor-pointer">
                        Enroll
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Program Analysis</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Visualize the focus areas and intensity of our signature programs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-[#222] border-none p-6">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Program Intensity Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div ref={chartRef} className="w-full h-[400px]"></div>
              </CardContent>
            </Card>
            <Card className="bg-[#222] border-none p-6">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Program Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      benefit: 'Strength Gain',
                      programs: ['Power Lifting', 'Muscle Building'],
                      percentage: 90,
                    },
                    {
                      benefit: 'Fat Loss',
                      programs: ['HIIT Revolution', 'Cardio Kickboxing'],
                      percentage: 85,
                    },
                    {
                      benefit: 'Flexibility',
                      programs: ['Yoga Flow', 'Recovery & Mobility'],
                      percentage: 95,
                    },
                    {
                      benefit: 'Cardiovascular Health',
                      programs: ['HIIT Revolution', 'Cardio Kickboxing'],
                      percentage: 80,
                    },
                    {
                      benefit: 'Mental Wellbeing',
                      programs: ['Yoga Flow', 'Recovery & Mobility'],
                      percentage: 75,
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <div>
                          <span className="text-white font-medium">{item.benefit}</span>
                          <span className="text-white/50 text-sm ml-2">({item.programs.join(', ')})</span>
                        </div>
                        <span className="text-white">{item.percentage}%</span>
                      </div>
                      <div className="w-full h-2 bg-[#333] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#00F0FF]"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;