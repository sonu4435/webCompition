export default function SubjectsSection() {
  const subjects = [
    "Psychology & Mental Health",
    "Healthcare & Medicine",
    "IT/Computer Science",
    "Copywriting&Marketing",
    "Business&Management",
  ]

  return (
    <section className="bg-white px-6 py-20 h-screen w-full">
      <div className="max-w-6xl mx-10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-2">
              Explore
              <br />
              top <span className="text-primary">subjects</span>
            </h2>
            <p className="text-sm text-gray-600 max-w-md mt-4">
              Whether you're looking for a new starting point as a psychologist, our expert-led courses and credentials
              will help you achieve career success and satisfaction.
            </p>
          </div>
          <button className="px-4 py-1.5 rounded-full bg-yellow-100 text-sm">Our subjects</button>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {subjects.map((subject, index) => (
            <button key={index} className="subject-tag">
              {subject}
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm">Explore courses</button>
          <button className="text-primary text-sm flex items-center gap-2">
            View all subjects
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <img
          src="/placeholder.svg?height=400&width=400"
          alt="Subject illustration"
          className="float-right w-1/3 mt-[-100px]"
        />
      </div>
    </section>
  )
}

