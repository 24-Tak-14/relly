import React, { useState } from 'react';
import { create } from 'zustand';

const usePositionalStore = create((set) => ({
  selectedPosition: null,
  contracts: {},
  budgets: {},
  compliance: {},
  setPosition: (pos) => set({ selectedPosition: pos }),
  updateContract: (pos, data) => set(state => ({ 
    contracts: { ...state.contracts, [pos]: data }
  })),
  updateBudget: (pos, amount) => set(state => ({ 
    budgets: { ...state.budgets, [pos]: amount }
  })),
  updateCompliance: (pos, status) => set(state => ({ 
    compliance: { ...state.compliance, [pos]: status }
  }))
}));

const positions = ['QB', 'RB', 'WR', 'TE', 'OL', 'DL', 'LB', 'CB', 'S', 'K'];

const ContractAnalysis = ({ position }) => {
  const { contracts, updateContract } = usePositionalStore();
  const [salary, setSalary] = useState(contracts[position]?.salary || '');
  
  return (
    <div className="p-4 bg-blue-100 rounded">
      <h3 className="font-bold mb-2">Contract Analysis - {position}</h3>
      <input
        type="number"
        placeholder="Salary Cap"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={() => updateContract(position, { salary, compliant: salary < 5000000 })}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Analyze Contract
      </button>
      {contracts[position] && (
        <p className={`mt-2 ${contracts[position].compliant ? 'text-green-600' : 'text-red-600'}`}>
          {contracts[position].compliant ? 'Compliant' : 'Exceeds Cap'}
        </p>
      )}
    </div>
  );
};

const BudgetAllocation = ({ position }) => {
  const { budgets, updateBudget } = usePositionalStore();
  const [amount, setAmount] = useState(budgets[position] || '');
  
  return (
    <div className="p-4 bg-green-100 rounded">
      <h3 className="font-bold mb-2">Budget Allocation - {position}</h3>
      <input
        type="number"
        placeholder="Budget Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={() => updateBudget(position, amount)}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Allocate Budget
      </button>
      {budgets[position] && (
        <p className="mt-2 text-gray-600">Allocated: ${budgets[position]}</p>
      )}
    </div>
  );
};

const ComplianceMonitor = ({ position }) => {
  const { compliance, updateCompliance } = usePositionalStore();
  
  return (
    <div className="p-4 bg-yellow-100 rounded">
      <h3 className="font-bold mb-2">Compliance Monitor - {position}</h3>
      <div className="space-y-2">
        <button
          onClick={() => updateCompliance(position, 'compliant')}
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        >
          Mark Compliant
        </button>
        <button
          onClick={() => updateCompliance(position, 'violation')}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Flag Violation
        </button>
      </div>
      {compliance[position] && (
        <p className={`mt-2 ${compliance[position] === 'compliant' ? 'text-green-600' : 'text-red-600'}`}>
          Status: {compliance[position]}
        </p>
      )}
    </div>
  );
};

const MediaContent = ({ position }) => {
  const [content, setContent] = useState('');
  
  return (
    <div className="p-4 bg-purple-100 rounded">
      <h3 className="font-bold mb-2">Media Content - {position}</h3>
      <textarea
        placeholder="Create positional content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded mb-2"
        rows="3"
      />
      <button className="bg-purple-500 text-white px-4 py-2 rounded">
        Publish Content
      </button>
    </div>
  );
};

const PositionalApp = () => {
  const { selectedPosition, setPosition } = usePositionalStore();
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">HFL Positional Management</h1>
      
      <div className="grid grid-cols-5 gap-2 mb-6">
        {positions.map(pos => (
          <button
            key={pos}
            onClick={() => setPosition(pos)}
            className={`p-3 rounded font-bold ${
              selectedPosition === pos ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            {pos}
          </button>
        ))}
      </div>
      
      {selectedPosition && (
        <div className="grid grid-cols-2 gap-4">
          <ContractAnalysis position={selectedPosition} />
          <BudgetAllocation position={selectedPosition} />
          <ComplianceMonitor position={selectedPosition} />
          <MediaContent position={selectedPosition} />
        </div>
      )}
    </div>
  );
};

export default PositionalApp;