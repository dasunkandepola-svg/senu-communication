import { Users, Target, Award, Heart } from "lucide-react";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Senu Communication</h1>
          <p className="text-xl text-blue-100 dark:text-gray-300">Your trusted partner in education supplies</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Our Story</h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Senu Communication was established with a simple mission: to provide students with high-quality school supplies and writing books at affordable prices. We understand the importance of having the right tools for education, and we're committed to supporting students on their learning journey.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Over the years, we have built strong relationships with our customers and have become a trusted name in the community. Our shop offers a comprehensive selection of notebooks, pens, pencils, textbooks, and all essential school items.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We take pride in our excellent customer service and our dedication to helping parents and students find exactly what they need for a successful academic year.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We only stock high-quality products that meet our strict standards
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600 dark:text-green-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Customer Care</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your satisfaction is our top priority. We're here to help!
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Affordability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Competitive prices that make education accessible to everyone
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 dark:bg-orange-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600 dark:text-orange-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Supporting local students and families in their education journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-800 dark:text-blue-300">School Supplies</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Notebooks and exercise books</li>
                <li>• Pens, pencils, and erasers</li>
                <li>• Rulers, geometry sets, and calculators</li>
                <li>• Art supplies and coloring materials</li>
                <li>• School bags and lunch boxes</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-green-800 dark:text-green-300">Writing Books</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Textbooks for all grades</li>
                <li>• Exercise books and workbooks</li>
                <li>• Reference books and guides</li>
                <li>• Story books and educational literature</li>
                <li>• Special subject materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}