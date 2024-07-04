type Project = {
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
      title: 'Projeto Exemplo',
      description: `Descrição de exemplo. Apenas um placeholder aqui.`,
      imgSrc: '/static/images/google.png',
      href: 'https://www.google.com',
    },
  ],

  en: [
    {
      title: 'A Search Engine',
      description: `What if you could look up any information in the world? Webpages, images, videos
        and more. Google has many features to help you find exactly what you're looking
        for.`,
      imgSrc: '/static/images/google.png',
      href: 'https://www.google.com',
    },
  ],

}

export default projectsData
