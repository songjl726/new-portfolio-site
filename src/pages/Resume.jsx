export default function Resume() {
  return (
    <section className="py-10 px-4 min-h-screen transition-colors">
      <h2 className="text-4xl font-title text-center mb-4 mt-8">My Resume</h2>

      <div className="max-w-4xl mx-auto shadow-lg rounded overflow-hidden">
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vTwejcfjfJYr-C1NZH0wbSApA6NNPRgvpXvWHkNqALVA7oeJf3O2SkQCZgBCe3Acg/pub?embedded=true"
          title="Resume PDF"
          className="w-full h-[600px] md:h-[700px] rounded"
        ></iframe>
      </div>
    </section>
  );
}
