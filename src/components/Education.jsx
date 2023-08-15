const collegeEducation = [
  {
    id:1,
    name: "Institute Of Technology, Nirma University.Ahmedabad",
    link: "https://nirmauni.ac.in/",
    date: "2022 / 2024",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/83/Nirma_University_Logo.png",
    course: "M.C.A (Master of Computer Application)",
    cgpa: 8.45,
  },
  {
    id:2,
    name: "Smt. C.Z.M Gosrani B.C.A College.Jamnagar",
    link: "https://czmgbca.oshwaleducationtrust.org/",
    date: "2019 / 2022",
    imageUrl: "https://czmgbca.oshwaleducationtrust.org/img/logo.png",
    course: "B.C.A (Bachelor of Computer Application)",
    cgpa: 8.86,
  }
];

const schoolEducation = [
  {
    id:2,
    name: "St. Xavier's School Jamnagar",
    link: "http://xaviers.co.in/",
    date: "2019",
    imageUrl: "http://xaviers.co.in/wp-content/uploads/2020/06/Logo_400_500-e1591338995624.png",
    course: "H.S.C",
    percentage: "82%",
  },
  {
    id:2,
    name: "St.Francis School Jamnagar",
    link: "https://stfrancisjamnagar.in/",
    date: "2017",
    imageUrl: "https://stfrancisjamnagar.in/img/ftr-logo.png",
    course: "S.S.C",
    percentage: "84%",
  },
];



export default function Education() {
  return (
    <div id="education">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32" >
      <h2 className="text-2xl font-bold text-gray-900 mb-12">EDUCATION</h2>
        <ul role="list" className="divide-y divide-gray-100">
          {collegeEducation.map((item) => (
            <li key={item.id} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={item.imageUrl}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <a
                    className="text-md font-semibold leading-6 text-gray-900"
                    target="blank"
                    href={item.link}
                  >
                    {item.name}
                  </a>
                  <p
                    className="mt-1 truncate text-sm leading-5 text-gray-500"
                    target="_blank"
                  >
                    Course: {item.course}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-md leading-6 text-gray-900">
                  CGPA: {item.cgpa}
                </p>
                <p className="mt-1 text-sm leading-5 text-gray-500">
                  {item.date}
                    </p>
              </div>
            </li>
          ))}
          {schoolEducation.map((item) => (
            <li key={item.id} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={item.imageUrl}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <a
                    className="text-md font-semibold leading-6 text-gray-900"
                    target="blank"
                    href={item.link}
                  >
                    {item.name}
                  </a>
                  <p
                    className="mt-1 truncate text-sm leading-5 text-gray-500"
                    target="_blank"
                  >
                    Course: {item.course}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-md leading-6 text-gray-900">
                  PERCENTAGE: {item.percentage}
                </p>
                <p className="mt-1 text-sm leading-5 text-gray-500">
                  {item.date}
                    </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
