export default function HeroSection() {
  return (
    <section className="bg-white px-6 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-10">
        <div className="grid md:grid-cols-1 gap-12">
          <div className="space-y-28">
            <div className="space-y-6">
              <h1 className="text-[14vh] font-bold leading-none kodchasan-semibold">
                Find the right <br /> <span className="text-primary">course</span> for you
              </h1>
              <p className="text-gray-600 text-xl font-medium Kodchasan-medium">
                See your personalized recommendations
                <br />
                based on your interests and goals
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-primary text-white px-6 py-2.5 rounded-full">Find course</button>
                <a href="#" className="text-primary flex items-center gap-2">
                  View our blog
                  <svg className="w-4 h-4 -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex gap-4 mt-8 Kodchasan-medium ">
              <div className="h-36 w-52 border border-black rounded-2xl">
                <div className="number-badge bg-[#a479dc] w-fit border border-black m-4 ">
                  <span className="text-sm Kodchasan-medium text-white font-bold px-2 tracking-wider">Education</span>
                </div>
                <div className="flex flex-col items-start justify-start px-4">
                  <span className="text-base font-medium">subjects</span>
                  <span className="text-3xl font-bold ">+40</span>
                </div>
              </div>
              <div className="h-36 w-52 border border-black rounded-2xl bg-[#a479dc]/80">
                <div className="number-badge bg-[#FDCC41] w-fit border border-black m-4 ">
                  <span className="text-sm Kodchasan-medium text-black font-semibold px-2 tracking-wider">Online</span>
                </div>
                <div className="flex flex-col items-start justify-start px-4">
                  <span className="text-base font-medium">cources</span>
                  <span className="text-3xl font-bold ">+120</span>
                </div>
              </div>
              <div className="h-36 w-52 border border-black rounded-2xl bg-[#FDCC41]">
                <div className="number-badge bg-[#fff] w-fit border border-black m-4 ">
                  <span className="text-sm Kodchasan-medium text-black font-bold px-2 leading-none tracking-wider">5.0</span>
                </div>
                <div className="flex flex-col items-start justify-start px-4">
                  <span className="text-base font-medium">learner reviews</span>
                  <span className="text-3xl font-bold ">+180k</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-10 right-10 w-1/2">
            <div className="absolute max-w-1/4 top-4 right-10 rounded-full px-3 py-1.5 flex items-start gap-2 flex-col">
              <span className="text-base font-semibold tracking-wider kodchasan-medium text-gray-500">Certified teachers only</span>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`/user/user${i}.jpg`}
                    alt="Teacher avatar"
                    className="w-16 h-16 rounded-full border border-black object-cover object-top"
                  />
                ))}
                <div className="w-16 h-16 rounded-full border-2 bg-[#fccc42] border-white flex items-center justify-center">
                  <span className="text-xs font-medium">135k+</span>
                </div>
              </div>
            </div>
            <img
              src='/humanPencil.png'
              alt="Person on pencil illustration"
              className="w-2/3 absolute top-28 right-16"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

