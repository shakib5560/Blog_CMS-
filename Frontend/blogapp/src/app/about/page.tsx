export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-2xl p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300 bg-white dark:bg-gray-800 dark:text-gray-200">
        <h1 className="text-4xl font-extrabold mb-4 text-center text-gray-900 dark:text-white">About Us</h1>
        <p className="mb-4 text-center text-gray-700 dark:text-gray-300">
          Welcome to our company! We are dedicated to providing the best services
          and products to our customers. Our team works tirelessly to bring
          innovation and quality to everything we do.
        </p>
        <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-gray-50 dark:bg-gray-700">
          <h2 className="text-2xl font-semibold mb-3 text-center text-gray-900 dark:text-white">Our Mission</h2>
          <p className="mb-4 text-center text-gray-700 dark:text-gray-300">
            Our mission is to create outstanding solutions that empower people and
            businesses worldwide. We believe in excellence, creativity, and
            customer satisfaction.
          </p>
        </div>
        <div className="mt-6 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-gray-50 dark:bg-gray-700">
          <h2 className="text-2xl font-semibold mb-3 text-center text-gray-900 dark:text-white">Our Team</h2>
          <p className="text-center text-gray-700 dark:text-gray-300">
            We have a passionate and experienced team of professionals who work
            collaboratively to achieve our goals. Each member brings unique skills
            and insights to our projects.
          </p>
        </div>
      </div>
    </div>
  );
}
