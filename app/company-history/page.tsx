export default function CompanyHistoryPage() {
  const timeline = [
    { year: 2010, event: "TechCorp founded by Jane Doe and John Smith" },
    { year: 2012, event: "Launch of our first AI-powered analytics platform" },
    { year: 2015, event: "Expansion into cloud services with the release of CloudScale" },
    { year: 2017, event: "Introduction of our cybersecurity suite, SecureGuard" },
    { year: 2019, event: "Reached 1 million active users across all products" },
    { year: 2021, event: "Launched open-source initiative to give back to the tech community" },
    { year: 2023, event: "Celebrating our continued growth and innovation" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Company History Timeline</h1>
      <div className="space-y-8">
        {timeline.map((item, index) => (
          <div key={index} className="flex">
            <div className="flex flex-col items-center mr-4">
              <div className="flex items-center justify-center w-8 h-8 border-2 border-blue-500 rounded-full">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              {index !== timeline.length - 1 && <div className="w-0.5 h-full bg-blue-500"></div>}
            </div>
            <div className="pb-8">
              <p className="text-xl font-bold">{item.year}</p>
              <p>{item.event}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

