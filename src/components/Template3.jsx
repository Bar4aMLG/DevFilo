function Template3({ data }) {
  const { name, photo, skills, bio, projects } = data
  const photoUrl = photo ? `http://localhost:5000${photo}` : null

  return (
    <div className="bg-white border border-gray-300 rounded-2xl shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* العمود الأيسر للمعلومات الشخصية */}
        <div className="bg-gray-900 text-white p-6 md:w-1/3">
          <div className="flex flex-col items-center">
            {photoUrl && (
              <img
                src={photoUrl}
                alt="الصورة"
                className="w-28 h-28 rounded object-cover border-2 border-gray-400 mb-4"
              />
            )}
            <h2 className="text-2xl font-light tracking-wide">{name}</h2>
          </div>

          <div className="mt-8">
            <h3 className="text-sm uppercase tracking-wider text-gray-400 border-b border-gray-600 pb-1 mb-3">مهارات</h3>
            <ul className="space-y-1 text-sm">
              {skills.map((skill, idx) => (
                <li key={idx} className="border-l-2 border-gray-500 pl-2">{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="p-6 md:w-2/3">
          <div className="mb-8">
            <h3 className="text-lg font-bold uppercase tracking-wide text-gray-800 border-b border-gray-300 pb-1 mb-3">نبذة</h3>
            <p className="text-gray-700 leading-relaxed">{bio}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-gray-800 border-b border-gray-300 pb-1 mb-3">المشاريع</h3>
            <div className="space-y-5">
              {projects.map((proj, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-gray-800">{proj.name}</h4>
                  <p className="text-gray-600 mt-1 text-sm">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Template3