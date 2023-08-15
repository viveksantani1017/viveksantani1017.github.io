export default function Experience() {
  return (
    <div id="experience">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-2xl font-bold text-gray-900">EXPERIENCE</h2>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="mt-4 flex items-center space-x-3 text-base">
              <div className="font-semibold text-gray-900 text-xl">
                Triotronick Systems
              </div>
            </div>
            <figure className="mt-10">
              <div className="mt-4 flex-col text-base">
                <div className="font-semibold text-gray-600">
                  06/2023 - 07/2023
                </div>
                <div className="text-gray-900 text-lg">
                  Triotronick Systems l Jamnagar, India
                </div>
                <div className="text-gray-600">Full Stack Developer Intern</div>
                <div className="text-gray-900">
                  Successfully created parts of Madfarms admin panel using ReactJs and
                  created multiple APIs using .Net Core 6
                </div>
                <a
                  href="https://github.com/trioinfotech/mad-farm-web-api"
                  className="text-sm leading-6 text-gray-500"
                  target="blank"
                >
                  Github <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
              <div className="font-semibold text-gray-900 text-xl mt-12">
                Reference
              </div>
              <figcaption className="mt-5">
                <div className="mt-4 flex flex-col text-base">
                  <div className="font-semibold text-gray-900">Meet Thakar</div>
                  <div className="text-gray-600">
                    Sr. Full Stack Developer | Triotronick Systems
                  </div>
                  <div className="text-gray-600">
                    Email |{" "}
                    <a href="mailto:mvthakar@outlook.com">
                      mvthakar@outlook.com
                    </a>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
      </div>
    </div>
    </div>
  );
}
