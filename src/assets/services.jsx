import { PiStudentFill } from "react-icons/pi";
import { FaBook,FaBriefcase } from "react-icons/fa";
import { RiBaseStationLine } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";
const features = [
  {
    name: 'Direct Student Services (Tutoring) 🧑‍🎓',
    description:
      'Personalized tutoring sessions focus on the specific needs of each student. These sessions provide targeted assistance with difficult concepts, homework, and exam preparation, ensuring that students receive the attention they need to excel.',
    icon: PiStudentFill,
  },
  {
    name: 'Curriculum & Resource Development 📚  ',
    description:
      'Ensure that the curriculum aligns with local, state, and national educational standards, promoting consistency and quality.Select appropriate textbooks and supplementary readings that support the curriculum and cater to diverse learning styles.',
    icon: FaBook,
  },
  {
    name: 'Professional & Consulting Services 💼',
    description:
      'By offering expertise, resources, and targeted support, professional consultants play a crucial role in transforming educational environments to meet the diverse needs of students.I provide actionable recommendations for enhancing the quality of education and to suit individual learning requirements.',
    icon: FaBriefcase,
  },
  {
    name: 'Online Learning Platforms 📈',
    description:
      'Students can access resources and courses from anywhere, at any time, which is particularly beneficial for those with varying schedules or geographical constraints. This flexibility allows learners to study at their own pace, catering to individual learning styles and needs.',
    icon: RiBaseStationLine,
  },
]

export default function Example() {
return (
    <div id="services" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
                 <div className="flex justify-center items-center w-15 h-15 mx-auto pt-px-2"> 
                     <MdMiscellaneousServices className="w-20 h-20" />
                 </div>
                <h2 className=" font-semibold text-3xl text-black">Services</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                    Helping students succeed in Maths and Science
                </p>
                <p className="mt-6 text-lg/8 text-gray-700">
                    These services can enhance teaching effectiveness and improve student engagement in math and science subjects.
                </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-16">
                            <dt className="text-base/7 font-semibold text-gray-900">
                                <div className="absolute top-0 left-0 flex size-14 items-center justify-center rounded-lg bg-indigo-600">
                                    <feature.icon aria-hidden="true" className="w-10 h-10 text-white" />
                                </div>
                                {feature.name}
                            </dt>
                            <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    </div>
)
}
