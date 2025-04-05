import React, { useState } from 'react';

interface SubjectFormProps {
  onSubmit: (formData: SubjectFormData) => void;
  onPreview: (formData: SubjectFormData) => void;
}

interface SubjectFormData {
  subjectName: string;
  category: string;
  header: string;
  description: string;
  images: File[];
  ctaHeader: string;
  ctaDescription: string;
  ctaImage: File | null;
}

const SubjectForm: React.FC<SubjectFormProps> = ({ onSubmit, onPreview }) => {
  const [formData, setFormData] = useState<SubjectFormData>({
    subjectName: '',
    category: '',
    header: '',
    description: '',
    images: [],
    ctaHeader: '',
    ctaDescription: '',
    ctaImage: null,
  });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, name: 'images' | 'ctaImage') => {
    if (e.target.files) {
      if (name === 'images') {
        // Correct way to convert FileList to an array
        const imageFiles = Array.from(e.target.files);
        setFormData({ ...formData, images: imageFiles });
      } else {
        setFormData({ ...formData, ctaImage: e.target.files[0] });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handlePreview = () => {
    onPreview(formData);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">ADD NEW SUBJECT</h2>
      <div className="flex">
        <div className="w-1/2 pr-4">
          <h3 className="text-lg font-medium mb-2">Hero Section</h3>
          {/* ... (rest of the Hero Section form elements) */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Images</label>
            <input
              type="file"
              name="images"
              multiple
              onChange={(e) => handleImageChange(e, 'images')}
              className="mt-1 block w-full"
            />
            <p className="text-xs text-gray-500">Supported formats: JPG, JPEG, WEBP, PNG</p>
            <div className="flex mt-2">
              {/* Display image previews here */}
            </div>
          </div>
        </div>
        <div className="w-1/2 pl-4">
          <h3 className="text-lg font-medium mb-2">CTA Section</h3>
          {/* ... (rest of the CTA Section form elements) */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">CTA Image</label>
            <input
              type="file"
              name="ctaImage"
              onChange={(e) => handleImageChange(e, 'ctaImage')}
              className="mt-1 block w-full"
            />
            <p className="text-xs text-gray-500">Supported formats: JPG, JPEG, WEBP, PNG</p>
            {/* Display CTA image preview here */}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Submit
        </button>
        <button
          onClick={handlePreview}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Preview
        </button>
      </div>
    </div>
  );
};

export default SubjectForm;