type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
};

export const FormInput = ({ label, value, onChange, type = "text" }: InputProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-500 mb-1 al">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        className="w-full border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};
