// @flow strict
import Image from 'next/image';
import Link from 'next/link';

function ProjectCard({ project }) {

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={project?.cover_image}
          height={1080}
          width={1920}
          alt=""
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <Link target='_blank' href={project.url}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {project.title}
          </p>
        </Link>
        <p className='mb-2 text-sm text-[#16f2b3]'>
          {`${project.role}`}
        </p>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6'>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#2a2f4f] text-[#d3d8e8] text-xs rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;