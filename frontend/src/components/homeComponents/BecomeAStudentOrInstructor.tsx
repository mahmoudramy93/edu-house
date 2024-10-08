import Image from "next/image";
import { ButtonLink } from "../common";

const BecomeAStudentOrInstructor = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-1 lg:order-none">
            <Image
              src="/images/instructor.jpg"
              alt="Become an Instructor"
              width={480}
              height={270}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          <div className="order-2">
            <h2 className="text-3xl font-bold mb-4">Become an Instructor</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join our community of expert instructors and start teaching your
              favorite subjects to learners all over the world. Share your
              knowledge, build your brand, and make an impact.
            </p>
            <ButtonLink href="#"> Apply Now</ButtonLink>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-none">
            <h2 className="text-3xl font-bold mb-4">Become a Student</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Explore a world of learning with our top-tier courses. Whether
              you&apos;re just starting or advancing your skills, we have
              something for everyone. Begin your journey to success with us.
            </p>
            <ButtonLink href="#"> Apply Now</ButtonLink>
          </div>

          <div className="order-1 lg:order-none">
            <Image
              src="/images/student.jpg"
              alt="Become a Student"
              width={480}
              height={270}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeAStudentOrInstructor;
