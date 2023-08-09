const education = [
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
  },
];

export default function Education() {
  return (
    <div id="education">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-12">EDUCATION</h2>
        <ul role="list" className="divide-y divide-gray-100">
          {education.map((item) => (
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
        </ul>
      </div>
    </div>
  );
}
