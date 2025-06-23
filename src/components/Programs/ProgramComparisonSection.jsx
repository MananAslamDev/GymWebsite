import React from 'react';
import Card from '../common/Card';

const ProgramComparisonSection = () => {
  const comparisonData = [
    {
      feature: 'Personalized Training Plan',
      programs: {
        'Power Lifting': true,
        'HIIT Revolution': false,
        'Yoga Flow': true,
      },
    },
    {
      feature: 'Group Classes',
      programs: {
        'Power Lifting': false,
        'HIIT Revolution': true,
        'Yoga Flow': true,
      },
    },
    {
      feature: 'Nutrition Guidance',
      programs: {
        'Power Lifting': true,
        'HIIT Revolution': true,
        'Yoga Flow': false,
      },
    },
    {
      feature: 'Equipment Access',
      programs: {
        'Power Lifting': true,
        'HIIT Revolution': true,
        'Yoga Flow': true,
      },
    },
  ];

  return (
    <section className="py-20 bg-[#111]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Program Comparison
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Compare features across our signature programs.
          </p>
        </div>
        <Card className="p-6 overflow-x-auto">
          <Card.Content>
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr>
                  <th className="text-white font-bold p-4">Feature</th>
                  <th className="text-white font-bold p-4">Power Lifting</th>
                  <th className="text-white font-bold p-4">HIIT Revolution</th>
                  <th className="text-white font-bold p-4">Yoga Flow</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-t border-gray-700">
                    <td className="text-white/70 p-4">{row.feature}</td>
                    <td className="text-center p-4">
                      {row.programs['Power Lifting'] ? (
                        <i className="fas fa-check text-primary"></i>
                      ) : (
                        <i className="fas fa-times text-gray-500"></i>
                      )}
                    </td>
                    <td className="text-center p-4">
                      {row.programs['HIIT Revolution'] ? (
                        <i className="fas fa-check text-primary"></i>
                      ) : (
                        <i className="fas fa-times text-gray-500"></i>
                      )}
                    </td>
                    <td className="text-center p-4">
                      {row.programs['Yoga Flow'] ? (
                        <i className="fas fa-check text-primary"></i>
                      ) : (
                        <i className="fas fa-times text-gray-500"></i>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card.Content>
        </Card>
      </div>
    </section>
  );
};

export default ProgramComparisonSection;