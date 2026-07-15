function Template1({ data }) {
  const { name, photo, skills, bio, projects } = data

  // بناء رابط الصورة الكامل
  const photoUrl = photo ? `http://localhost:5000${photo}` : null

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* الشريط الجانبي */}
        <div className="bg-gradient-to-b from-blue-600 to-purple-600 text-white p-6 md:w-1/3">
          {photoUrl && (
            <div className="flex justify-center mb-4">
              <img
                src={photoUrl}
                alt="الصورة الشخصية"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow"
              />
            </div>
          )}
          <h2 className="text-2xl font-bold text-center mb-6">{name}</h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold border-b border-white/30 pb-2 mb-3">المهارات</h3>
            <ul className="space-y-1 list-disc list-inside">
              {skills.map((skill, idx) => (
                <li key={idx} className="text-sm">{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="p-6 md:w-2/3 bg-gray-50">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 border-b-2 border-indigo-400 pb-2 mb-3">نبذة شخصية</h3>
            <p className="text-gray-700 leading-relaxed">{bio}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 border-b-2 border-indigo-400 pb-2 mb-3">المشاريع</h3>
            {projects.map((proj, idx) => (
              <div key={idx} className="mb-4 p-3 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold text-indigo-700 text-lg">{proj.name}</h4>
                <p className="text-gray-600 mt-1">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Template1