import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export function Location() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Visit Our Shop</h1>
          <p className="text-xl text-blue-100 dark:text-gray-300">Find us easily and explore our wide selection</p>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg h-96">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-800">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177661.02241740824!2d80.0295511311715!3d7.214930744539137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2df6f3704f5b9%3A0x63c9bfa44b3d141d!2sSenu%20Communication%20and%20Grocery!5e1!3m2!1sen!2slk!4v1789184366208!5m2!1sen!2slk" 
                  width="600" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">How to Find Us</h2>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 dark:text-white">Our Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      465, Mahingamuwa,,<br />
                      Narangoda,<br />
                      Kurunegala
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex gap-4">
                  <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 dark:text-white">Opening Hours</h3>
                    <div className="text-gray-600 dark:text-gray-300 space-y-1">
                      <p><strong>Monday - Friday:</strong> 8:00 AM - 9:00 PM</p>
                      <p><strong>Saturday:</strong> 8:00 AM - 8:00 PM</p>
                      <p><strong>Sunday:</strong> 9:00 AM - 5:00 PM</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">*Closed on Public Holidays</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 dark:text-white">Contact</h3>
                    <div className="text-gray-600 dark:text-gray-300 space-y-1">
                      <p><strong>Phone:</strong> +94 77 17 38 445</p>
                      <p><strong>Mobile:</strong> +94 77 25 62 065</p>
                      <p><strong>Email:</strong> kandepolau@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Navigation className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Getting Here</h2>
            <p className="text-gray-600 dark:text-gray-300">Easy directions to our shop</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">By Bus</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Get off at Main Street junction.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-green-600 dark:text-green-400">By Car</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Ample parking available. Located 2 minutes from Main Street.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-purple-600 dark:text-purple-400">By Train</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Closest station is Giriulla. 10-minute walk from the station.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Landmarks */}
      <section className="py-16 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Nearby Landmarks</h2>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-8 rounded-lg">
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span>Opposite to Sanasa Bank main entrance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span>Next to LearnWave institute</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span>Near Sanasa Bank</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span>100 meters from the main bus stop</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}