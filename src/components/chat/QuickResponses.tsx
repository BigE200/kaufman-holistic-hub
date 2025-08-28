import { Bot } from 'lucide-react';

interface QuickResponsesProps {
  onSelectResponse: (response: string) => void;
  responses: string[];
  isVisible: boolean;
}

const QuickResponses = ({ onSelectResponse, responses, isVisible }: QuickResponsesProps) => {
  if (!isVisible) return null;

  return (
    <div className="p-3 border-t border-medical-gray-200 bg-medical-gray-50">
      <p className="text-xs text-medical-gray-600 mb-2">Quick questions:</p>
      <div className="flex flex-wrap gap-2">
        {responses.map((response, index) => (
          <button
            key={index}
            onClick={() => onSelectResponse(response)}
            className="text-xs bg-background border border-medical-gray-200 rounded-full px-3 py-1 hover:bg-medical-primary hover:text-primary-foreground transition-colors duration-200"
          >
            {response}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickResponses;