import { useState } from 'react'
import axios from 'axios'
import Form from './components/Form'
import TemplateGallery from './components/TemplateGallery'
import Template1 from './components/Template1'
import Template2 from './components/Template2'
import Template3 from './components/Template3'
import { pdf } from '@react-pdf/renderer';
import CVPdfDocument from './components/CVPdfDocument';

function App() {
  // حالات النموذج
  const [fullName, setFullName] = useState('')
  const [photo, setPhoto] = useState(null)
  const [skills, setSkills] = useState('')
  const [about, setAbout] = useState('')
  const [projects, setProjects] = useState([{ name: '', description: '' }])
  const [selectedTemplate, setSelectedTemplate] = useState(1)

  // حالات جديدة للمعاينة والتحميل
  const [generatedCV, setGeneratedCV] = useState(null)
  const [loading, setLoading] = useState(false)

  // دالة إرسال البيانات والحصول على المحتوى المحسّن
  const handleGenerate = async () => {
    setLoading(true)
    setGeneratedCV(null)

    const formData = new FormData()
    formData.append('name', fullName)
    formData.append('bio', about)
    formData.append('skills', skills)
    formData.append('templateId', selectedTemplate)
    formData.append('projects', JSON.stringify(projects))
    if (photo) {
      formData.append('photo', photo)
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/api/generate-cv',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )

      if (response.data.success) {
        setGeneratedCV(response.data.data)
        console.log('✅ تم استلام البيانات المحسّنة:', response.data.data)
      } else {
        alert('فشل التحسين: ' + response.data.message)
      }
    } catch (error) {
      console.error('❌ فشل الاتصال بالخادم:', error)
      alert('تعذر الاتصال بالخادم. تأكد من تشغيل الخادم على المنفذ 5000')
    } finally {
      setLoading(false)
    }
  }

  // إعادة تعيين المعاينة
  const resetPreview = () => {
    setGeneratedCV(null)
  }

  // تحميل PDF
  const handleDownloadPDF = async () => {
    const blob = await pdf(<CVPdfDocument data={generatedCV} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${generatedCV.name || 'CV'}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
          منشئ السيرة الذاتية والمعرض الشخصي
        </h1>

        {/* نموذج الإدخال - يظهر قبل الضغط على توليد */}
        {!generatedCV && !loading && (
          <>
            <Form
              fullName={fullName} setFullName={setFullName}
              photo={photo} setPhoto={setPhoto}
              skills={skills} setSkills={setSkills}
              about={about} setAbout={setAbout}
              projects={projects} setProjects={setProjects}
            />

            <TemplateGallery
              selected={selectedTemplate}
              onSelect={setSelectedTemplate}
            />

            <div className="text-center mt-10">
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-10 rounded-xl shadow-lg transition disabled:opacity-50"
              >
                🛠️ توليد السيرة الذاتية / المعرض
              </button>
            </div>
          </>
        )}

        {/* مؤشر التحميل */}
        {loading && (
          <div className="text-center mt-6">
            <p className="text-lg text-indigo-600 animate-pulse">
              ⏳ جارٍ تحسين المحتوى باستخدام الذكاء الاصطناعي...
            </p>
          </div>
        )}

        {/* عرض المعاينة بعد استلام البيانات المحسّنة */}
        {generatedCV && !loading && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-700">معاينة السيرة الذاتية</h2>
              <div className="flex gap-3">
                <button
                  onClick={handleDownloadPDF}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition shadow"
                >
                  📄 تحميل PDF
                </button>
                <button
                  onClick={resetPreview}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition"
                >
                  تعديل البيانات
                </button>
              </div>
            </div>

            {/* اختيار القالب المناسب */}
            {selectedTemplate === 1 && <Template1 data={generatedCV} />}
            {selectedTemplate === 2 && <Template2 data={generatedCV} />}
            {selectedTemplate === 3 && <Template3 data={generatedCV} />}
          </div>
        )}
      </div>
    </div>
  )
}

export default App