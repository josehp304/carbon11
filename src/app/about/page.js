import Image from 'next/image';
import SupaImg from '@/components/supaImage'
function About() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">About Us</h1>
          <p className="text-lg text-gray-600">Discover our journey and what drives us.</p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            At [Your Brand Name], we are dedicated to providing the latest fashion trends for Gen-Z. Our mission is to empower individuals to express their unique style and confidence through our clothing.
          </p>
          <Image src="/images/mission.jpg" alt="Mission" width={600} height={400} className="mx-auto rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Meet the Team</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <Image src="/images/team1.jpg" alt="Team Member 1" width={150} height={150} className="rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Patti benoyi</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <Image src="/images/team2.jpg" alt="Team Member 2" width={150} height={150} className="rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">lord joseph</h3>
                <p className="text-gray-600">co-founder</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <Image src="/images/team3.jpg" alt="Team Member 3" width={150} height={150} className="rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">appy devan</h3>
                <p className="text-gray-600">appy director</p>
              </div>
            </div>
            <SupaImg bucket = 'products' path='i1.1.jpg'/>
          </div>
        </div>
    
      </section>
    </main>
  );
}

export default About;