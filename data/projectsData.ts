type Project = {
  type: 'personal' | 'work'
  title: string
  description: string
  imgSrc: string
  href: string
}

type ProjectsData = {
  [locale: string]: Project[]
}

const projectsData: ProjectsData = {

  pt: [
    {
      type: 'personal',
      title: 'Projeto Exemplo',
      description: `Descrição de exemplo. Apenas um placeholder aqui.`,
      imgSrc: '/static/images/google.png',
      href: 'https://www.google.com',
    },
    {
      type: 'work',
      title: 'Projeto Exemplo Work',
      description: `Descrição de exemplo. Apenas um placeholder aqui.`,
      imgSrc: '/static/images/google.png',
      href: 'https://www.google.com',
    },
  ],

  en: [
    {
      type: 'personal',
      title: 'A Search Engine',
      description: `What if you could look up any information in the world? Webpages, images, videos
        and more. Google has many features to help you find exactly what you're looking
        for.`,
      imgSrc: '/static/images/google.png',
      href: 'https://www.google.com',
    },
        {
      type: 'work',
      title: 'Projeto Exemplo Work',
      description: `Descrição de exemplo. Apenas um placeholder aqui.`,
      imgSrc: '/static/images/google.png',
      href: 'https://www.google.com',
    },
  ],

}

export default projectsData
