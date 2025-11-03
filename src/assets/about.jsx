import { AiOutlineUser } from "react-icons/ai";
import Profile from './pictures/pic1.jpg';
export default function Example() {
  return (
    <section id="about" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%]   origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <a href="" className="items-center justify-center font-bold flex flex-col text-center text-black text-3xl">
          <AiOutlineUser /> About Me</a>
        <figure className="mt-10">
          <blockquote className=" text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
              “I am an experienced and passionate Science and mathematics educator with a
              proven track record of 8 years in inspiring and guiding students to develop a deep
              understanding and appreciation for mathematics. I am highly organized, detail-oriented, and proficient in using various
              teaching tools and technologies. I hold a Bachelor of Science in Mathematics and Statistics and am currently pursuing a Master’s in Big Data Analytics. My teaching
              expertise spans Pure Mathematics, Statistics, and Mechanics, with a strong focus on developing students'
              problem-solving and analytical skills.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src={Profile}
              className="mx-auto size-10 rounded-full border border-gray-200 object-cover w-20 h-20 "
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Jimmy Chiriwa</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">Math and Science Teacher</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
