import resumePDF from '../assets/resume.pdf';

export default function Resume() {
  return (
    <section className="py-10 px-4 min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
        My Resume
      </h2>

      <div className="max-w-4xl mx-auto shadow-lg rounded overflow-hidden">
        <iframe
          src={resumePDF}
          title="Resume PDF"
          className="w-full h-[600px] md:h-[700px] rounded"
          frameBorder="0"
        ></iframe>
      </div>
    </section>
  );
}
