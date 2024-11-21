import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jannes Rudnick Portfolio',
  description: 'Eine Portfolio Seite.',
  robots: {
    follow: false,
    index: false,
  },
};

const projects = [
  {
    title: "Hackenhattrick",
    description: "Eine minimalistische landingpage mit Kontaktformular für einen Youtube-Kanal.",
    link: "https://hackenhattrick.de/",
    type: "Ehrenamt",
    type2: "Entwicklung + Betreuung",
    tags: ["Next.js", "TinaCMS", "Tailwind CSS"],
    imageUrl: "/haha.png",
    year: 2024,
  },
  {
    title: "Fitnessmentoring",
    description: "Eine landingpage für einen Fitnesscoach.",
    link: "https://fitness-mentoring.de/",
    type: "Auftragsarbeit",
    type2: "Entwicklung + Betreuung",
    tags: ["Next.js", "TinaCMS", "Tailwind CSS"],
    imageUrl: "/fm_coach.png",
    year: 2024,
  },
  {
    title: "Fitnessmentoring Portal",
    description: "Eine coaching portal und eine App für die Kunden eines Fitnesscoaches.",
    link: "https://fitnessmentoring.web.app/",
    type: "Auftragsarbeit",
    type2: "Entwicklung + Betreuung",
    tags: ["React.js", "React Native", "Firebase"],
    imageUrl: "/fm_portal.png",
    year: 2022,
  },
  {
    title: "Schulinsider",
    description: "Eine Schulapp unterstützt durch ein CMS zur Inhaltsverwaltung mit dynamischen Inhalten.",
    link: "https://schulinsider.de/",
    type: "Mitarbeit am Projekt",
    type2: "Entwicklung + Betreuung",
    tags: ["React.js", "React Native", "Firebase", "MariaDB", "GraphQL"],
    imageUrl: "/schulinsider.png",
    year: 2021,
  },
  {
    title: "Study Utils (wip)",
    description: "",
    link: "https://studyutils.app/",
    type: "Mitarbeit am Projekt",
    type2: "Entwicklung",
    tags: ["React.js", "React Native"],
    imageUrl: "/study_utils.png",
    year: 2024,
  },
  {
    title: "Planflix",
    description: "Schichtplaner für Zeitarbeitsfirmen mit Arbeitnehmerüberlassung. Admin-Dashboard zur Verwaltung von Mitarbeitern und Schichten. User-Ansicht zum bewerben auf Schichten.",
    link: "https://planflix.de/",
    type: "Mitarbeit am Projekt",
    type2: "Entwicklung",
    tags: ["React.js", "Firebase"],
    imageUrl: "/planflix.png",
    year: 2022,
  },
  {
    title: "Wristpay",
    description: "Cashless Bezahl- und Controllingsystem.",
    link: "https://business.wristpay.de/",
    type: "Mitarbeit am Projekt",
    type2: "Entwicklung",
    tags: ["React.js", "Firebase", "MongoDB", "Grafana"],
    imageUrl: "/wristpay.png",
    year: 2023,
  },
  {
    title: "Creator Journal",
    description: "Anpassungen des Themes und Integration von Apps.",
    link: "https://creatorjournal.de/",
    type: "Auftragsarbeit",
    type2: "Entwicklung",
    tags: ["Liquid", "Shopify"],
    imageUrl: "/cj.png",
    year: 2023,
  },
  {
    title: "Edubini",
    description: "Anpassungen des Themes und Integration von Apps.",
    link: "https://edubini.de/",
    type: "Auftragsarbeit",
    type2: "Entwicklung",
    tags: ["Liquid", "Shopify"],
    imageUrl: undefined,
    year: 2024,
  },
  {
    title: "Controlling Shopify",
    description: "Revenue, Adspent, Inventory tracking und vieles weiteres wurde automatisiert abgefragt und in Tabellenform und Dashboardformen aufbereitet.",
    link: undefined,
    type: "Auftragsarbeit",
    type2: "Entwicklung",
    tags: ["Make (integromat)", 'Google Sheets', 'Google Data Studio', "Google App Script"],
    imageUrl: undefined,
    year: 2024,
  },
  {
    title: "2Takt Tuning Sachsen",
    description: "YouTube Kanal und Instagram rund um das Thema Moped und Tuning. 2.340 Abonnenten",
    link: "https://www.youtube.com/@2takt-tuningsachsensimsono427",
    type: "Ehrenamt, Mitarbeit am Projekt",
    type2: "Branding, Design & Schnitt",
    tags: ["Photoshop", "Premiere Pro"],
    imageUrl: '/2tts.png',
    year: 2018,
  },
]

export default function Portfolio() {

  const groupedProjects: Record<number, typeof projects> = projects.reduce((acc: Record<number, any[]>, project) => {
    const year = project.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(project);
    return acc;
  }, {});

  return (
    <div className="bg-gray-100 min-h-screen px-6 ">
      <div className="mx-auto pt-6 lg:pt-20">
        <header className="w-full flex justify-between gap-4 flex-col lg:flex-row">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">🚀 Projekte</h2>
          <div className="text-gray-600 flex gap-2">
            <Link href="https://de.linkedin.com/in/jannes-rudnick">
              <Linkedin className="w-6 h-6"/>
            </Link>
            <Link href="https://www.instagram.com/jannesrudnick">
              <Instagram className="w-6 h-6"/>
            </Link>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold text-gray-900">👩🏻‍🚀 Jannes Rudnick</h1>
            <p className="mt-1 text-sm text-gray-600">Fullstack Webentwickler</p>
          </div>
        </header>

        <main className="">
          <div className="">
            {Object.entries(groupedProjects).reverse().map(([year, projects]) => (
              <div key={year}>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4">{year}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <div className="relative w-full h-48">
                        {project.imageUrl ? (
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-lg"
                          />
                        ) : (
                          <div className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 h-full rounded-t-lg"></div>
                        )}
                      </div>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>

                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant={'outline'}>{project.type}</Badge>
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Projekt ansehen
                          <ExternalLink className="ml-1 h-4 w-4"/>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>

  )
}

