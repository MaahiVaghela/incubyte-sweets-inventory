const SubmitButton = ({ label }) => (
  <button
    type="submit"
    className="md:col-span-2 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold shadow-lg text-lg transition-all"
  >
    {label}
  </button>
);

export default SubmitButton;
