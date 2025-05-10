import React, { useState } from 'react';
import { Scale, FileText, Briefcase, Search, Users, AlertCircle, Shield, Landmark } from 'lucide-react';

interface LawCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const LawCard: React.FC<LawCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const SupportedLaws: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const laws = [
    {
      icon: <Scale size={28} />,
      title: "Indian Penal Code",
      description: "Information on criminal offenses, punishments, and legal procedures under IPC 1860."
    },
    {
      icon: <FileText size={28} />,
      title: "Right to Information",
      description: "Details on accessing information from public authorities under the RTI Act 2005."
    },
    {
      icon: <Briefcase size={28} />,
      title: "Labor Laws",
      description: "Information on employee rights, workplace regulations, and employer obligations."
    },
    {
      icon: <Users size={28} />,
      title: "Family Law",
      description: "Details on marriage, divorce, adoption, and inheritance matters."
    },
    {
      icon: <AlertCircle size={28} />,
      title: "Consumer Protection",
      description: "Information on consumer rights and dispute resolution mechanisms."
    },
    {
      icon: <Shield size={28} />,
      title: "Cyber Laws",
      description: "Details on digital crimes, online privacy, and IT Act provisions."
    },
    {
      icon: <Landmark size={28} />,
      title: "Constitutional Laws",
      description: "Information on fundamental rights, directive principles, and constitutional procedures."
    },
    {
      icon: <Scale size={28} />,
      title: "Property Laws",
      description: "Details on property rights, transfers, registration, and land disputes."
    }
  ];

  const filteredLaws = laws.filter(law =>
    law.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    law.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="laws" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Supported Laws</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI is trained on comprehensive legal documents covering major Indian laws and regulations.
          </p>
          
          <div className="max-w-md mx-auto mt-8 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search law categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredLaws.map((law, index) => (
            <LawCard
              key={index}
              icon={law.icon}
              title={law.title}
              description={law.description}
            />
          ))}
        </div>
        
        {filteredLaws.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No laws found matching your search criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SupportedLaws;