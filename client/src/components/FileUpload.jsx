const FileUpload = ({ onChange }) => (
  <input
    type="file"
    id="image"
    accept="image/*"
    onChange={onChange}
    required
    className="md:col-span-2 block w-full text-sm text-gray-700 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-pink-100 file:text-pink-700 hover:file:bg-pink-200 transition"
  />
);

export default FileUpload;
