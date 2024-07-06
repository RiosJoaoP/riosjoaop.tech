'use client'

import projectsData from '@/data/projectsData'
import Card from '@/components/projectcard'
import { LocaleTypes } from '../i18n/settings'
import { useParams } from 'next/navigation'

type ProjectProps = {
  params: { projectType: 'personal' | 'work' }
}

const Project = ({ params: { projectType } }: ProjectProps) => {
  const locale = useParams()?.locale as LocaleTypes
  const projectArray = projectsData[locale]
  
  return (
  projectArray.filter(({ type }) => type === projectType).length > 0 ? (
      <>
        {projectArray.filter(({ type }) => type === type).map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            href={project.href}
          />
        ))}
      </>
    ) : null
  )
}

export default Project
