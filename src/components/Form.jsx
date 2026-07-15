function Form({
  fullName, setFullName,
  photo, setPhoto,
  skills, setSkills,
  about, setAbout,
  projects, setProjects
}) {

  // إضافة مشروع جديد فارغ
  const addProject = () => {
    setProjects([...projects, { name: '', description: '' }])
  }

  // حذف مشروع حسب الفهرس
  const removeProject = (index) => {
    const updated = projects.filter((_, i) => i !== index)
    setProjects(updated)
  }

  // تحديث بيانات مشروع محدد
  const updateProject = (index, field, value) => {
    const updated = projects.map((proj, i) =>
      i === index ? { ...proj, [field]: value } : proj
    )
    setProjects(updated)
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mb-8 space-y-5">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">📝 أدخل بياناتك</h2>

      {/* الاسم الكامل */}
      <div>
        <label className="block text-gray-600 mb-1 font-medium">الاسم الكامل</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="أدخل اسمك الكامل"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* الصورة الشخصية */}
      <div>
        <label className="block text-gray-600 mb-1 font-medium">الصورة الشخصية</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
        {photo && <p className="text-xs text-green-600 mt-1">تم اختيار: {photo.name}</p>}
      </div>

      {/* المهارات */}
      <div>
        <label className="block text-gray-600 mb-1 font-medium">المهارات (افصل بينها بفاصلة)</label>
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="مثال: React, JavaScript, CSS"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* نبذة عني */}
      <div>
        <label className="block text-gray-600 mb-1 font-medium">نبذة عني</label>
        <textarea
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          rows="3"
          placeholder="اكتب نبذة مختصرة عن خبراتك وأهدافك"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* المشاريع */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-gray-600 font-medium">المشاريع</label>
          <button
            type="button"
            onClick={addProject}
            className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded-lg transition"
          >
            ➕ إضافة مشروع
          </button>
        </div>

        {projects.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-3 mb-3 relative">
            <button
              onClick={() => removeProject(index)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm"
              title="حذف المشروع"
            >
              ❌
            </button>

            <input
              type="text"
              placeholder="اسم المشروع"
              value={project.name}
              onChange={(e) => updateProject(index, 'name', e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mb-2 focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              placeholder="وصف المشروع"
              value={project.description}
              onChange={(e) => updateProject(index, 'description', e.target.value)}
              rows="2"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Form