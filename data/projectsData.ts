type Project = {
  type: 'personal' | 'work'
  title: string
  description: string
  imgSrc: string
  href?: string
}

type ProjectsData = {
  [locale: string]: Project[]
}

const projectsData: ProjectsData = {

  pt: [
    {
      type: 'personal',
      title: 'Torabox',
      description: `Sofware House especializada em desenvolver soluções web e mobile personalizadas para clientes individuais e empresas.`,
      imgSrc: '/static/images/projects/torabox.png',
      href: 'https://www.torabox.tech/',
    },
    {
      type: 'work',
      title: 'Sistema de Aquisição de Dados do DEMIBAV',
      description: `Desenvolvimento de um sistema de aquisição de dados (DAQ) de baixo custo para monitoramento de variáveis relacionadas ao processo de injeção de polímeros, com capacidade para lidar com dez sensores e aquisição de dados simultânea.`,
      imgSrc: '/static/images/projects/demibav-daq.png',
      // href: 'https://www.google.com',
    },
  ],

  en: [
    {
      type: 'personal',
      title: 'Torabox',
      description: `Software House specialized in developing customized web and mobile solutions for individual clients and businesses.`,
      imgSrc: '/static/images/projects/torabox.png',
      href: 'https://www.torabox.tech/',
    },
        {
      type: 'work',
      title: 'DEMIBAV Data Acquisition System',
      description: `Development of a low-cost DAQ system for monitoring variables related to the polymer injection process, with the capacity to handle ten sensors and simultaneous data acquisition.`,
      imgSrc: '/static/images/projects/demibav-daq.png',
      // href: 'https://www.google.com',
    },
  ],

}

export default projectsData
