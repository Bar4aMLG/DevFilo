const templates = [
  {
    id: 1,
    name: 'القالب الكلاسيكي',
    preview: 'bg-gradient-to-r from-blue-500 to-purple-500',
    description: 'تصميم أنيق مع شريط جانبي',
  },
  {
    id: 2,
    name: 'القالب العصري',
    preview: 'bg-gradient-to-r from-green-400 to-teal-500',
    description: 'ألوان حيوية ومظهر حديث',
  },
  {
    id: 3,
    name: 'القالب البسيط',
    preview: 'bg-gradient-to-r from-gray-700 to-gray-900',
    description: 'تصميم بسيط بالأبيض والأسود',
  },
]

function TemplateGallery({ selected, onSelect }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">🎨 اختر قالباً</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {templates.map((tpl) => (
          <div
            key={tpl.id}
            onClick={() => onSelect(tpl.id)}
            className={`cursor-pointer rounded-xl p-4 transition-all duration-200 border-2 ${
              selected === tpl.id
                ? 'border-indigo-500 shadow-lg scale-105'
                : 'border-gray-200 hover:shadow-md'
            }`}
          >
            <div className={`h-24 rounded-lg mb-3 flex items-center justify-center ${tpl.preview}`}>
              <span className="text-white font-bold text-lg">{tpl.name}</span>
            </div>
            <p className="text-sm text-gray-600 text-center">{tpl.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TemplateGallery