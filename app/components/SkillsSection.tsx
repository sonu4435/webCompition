export default function SkillsSection() {
  return (
    <section className="px-16 py-20 bg-white">
      <div className="h-full w-full">
        <div className="bg-[#ffca39] rounded-3xl p-12 py-28 relative overflow-hidden">
          <div className="max-w-xl">
            <h2 className="text-[4vw] kodchasan-semibold text-nowrap font-bold mb-4 leading-tight">
              Upgrade your <span className="text-white">skills</span>
              <br />
              with <span className="text-white">FREE</span> online courses
            </h2>
            <p className="text-gray-700 mb-8 text-sm leading-relaxed">
              Ready to level up your in-demand skills to kickstart your career? The Learnify Click Start program offers
              29 FREE online courses to help you get your first experience in your chosen profession.
            </p>
            <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm">Start now</button>
          </div>
          <img
            src="/cources/skillSet.jpg"
            alt="Puzzle illustration"
            className="absolute -right-10 -bottom-20 w-1/3 p-10 -rotate-12"
          />
        </div>
      </div>
    </section>
  )
}

