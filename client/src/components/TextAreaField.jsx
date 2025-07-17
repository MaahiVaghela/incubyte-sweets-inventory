const TextAreaField = ({ name, value, onChange, placeholder, required }) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition md:col-span-2 h-28 resize-none"
  />
);

export default TextAreaField;
