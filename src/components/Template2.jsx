function Template2({ data }) {
  const { name, photo, skills, bio, projects } = data
  const photoUrl = photo ? `http://localhost:5000${photo}` : null

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* الهيدر */}
      <div className="bg-gradient-to-r from-green-400 to-teal-500 p-8 text-white text-center">
        {photoUrl && (
          <img
            src={photoUrl}
            alt="الصورة"
            className="w-24 h-24 rounded-full object-cover border-4 border-white mx-auto mb-4"
          />
        )}
        <h1 className="text-3xl font-bold">{name}</h1>
      </div>

      {/* المحتوى */}
      <div className="p-6 space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-teal-600 mb-2">نبذة عني</h2>
          <p className="text-gray-700">{bio}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-teal-600 mb-2">المهارات</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-teal-600 mb-2">المشاريع</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((proj, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                <h3 className="font-semibold text-lg text-gray-800">{proj.name}</h3>
                <p className="text-gray-600 mt-1">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Template2