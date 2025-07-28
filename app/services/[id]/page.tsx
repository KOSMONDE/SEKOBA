import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Clock, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Types pour les services
interface ServiceDetail {
  id: string
  title: string
  category: string
  description: string
  longDescription: string
  price: string
  duration: string
  image: string
  gallery: string[]
  steps: { title: string; description: string }[]
  products: { name: string; description: string }[]
  aftercare: string[]
  benefits: string[]
  relatedServices: string[]
}

// Base de données simulée des services
const servicesData: Record<string, ServiceDetail> = {
  "coupe-boucles": {
    id: "coupe-boucles",
    title: "Shampoing + Brushing (Court / Mi-longs / Longs)",
    category: "coupes",
    description:
      "Brushing réalisé après un shampooing doux, avec soin adapté à la nature du cheveu pour un fini lisse, soyeux et durable.",
    longDescription:
      "Notre service de coupe pour cheveux bouclés est spécialement conçu pour mettre en valeur et respecter la nature de vos boucles. Chaque coupe commence par un diagnostic approfondi de votre type de boucles, de la santé de vos cheveux et de votre cuir chevelu. Nos coiffeurs experts utilisent des techniques de coupe spécifiques comme la coupe sur cheveux secs ou la méthode de découpage qui préserve le mouvement naturel de vos boucles tout en leur donnant forme et définition. Le service inclut un shampooing avec des produits adaptés, un soin hydratant, et un coiffage personnalisé pour révéler tout le potentiel de vos boucles.",
    price: "À partir de 36 CHF",
    duration: "45–60 min",
    image: "/placeholder.svg?height=500&width=800&text=Coupe Bouclés",
    gallery: [
      "/placeholder.svg?height=300&width=300&text=Bouclés 1",
      "/placeholder.svg?height=300&width=300&text=Bouclés 2",
      "/placeholder.svg?height=300&width=300&text=Bouclés 3",
      "/placeholder.svg?height=300&width=300&text=Bouclés 4",
    ],
    steps: [
      {
        title: "Consultation",
        description:
          "Évaluation de votre type de boucles, de la santé de vos cheveux et discussion de vos attentes et de votre routine capillaire.",
      },
      {
        title: "Shampooing & Soin",
        description:
          "Nettoyage avec des produits sans sulfates et application d'un soin hydratant adapté à votre porosité capillaire.",
      },
      {
        title: "Coupe",
        description:
          "Technique de coupe sur cheveux secs ou humides selon votre type de boucles, pour respecter le mouvement naturel.",
      },
      {
        title: "Coiffage",
        description:
          "Application de produits coiffants adaptés et séchage au diffuseur ou à l'air libre selon votre préférence.",
      },
    ],
    products: [
      {
        name: "Shampooing Hydratant Sans Sulfates",
        description: "Nettoie en douceur sans dessécher les boucles.",
      },
      {
        name: "Après-shampooing Démêlant",
        description: "Facilite le démêlage et nourrit les cheveux en profondeur.",
      },
      {
        name: "Crème de Définition",
        description: "Définit les boucles et combat les frisottis.",
      },
      {
        name: "Gel Léger",
        description: "Fixe les boucles sans effet carton.",
      },
    ],
    aftercare: [
      "Dormez sur une taie d'oreiller en satin pour préserver vos boucles",
      "Rafraîchissez vos boucles avec un spray d'eau et une touche de leave-in",
      "Évitez de toucher vos cheveux une fois secs pour limiter les frisottis",
      "Hydratez vos cheveux 1 à 2 fois par semaine avec un masque nourrissant",
    ],
    benefits: [
      "Boucles plus définies et volumineuses",
      "Réduction des frisottis et de l'effet gonflé",
      "Cheveux plus faciles à coiffer au quotidien",
      "Meilleure santé capillaire à long terme",
      "Conseils personnalisés pour votre routine capillaire",
    ],
    relatedServices: ["soin-hydratation", "coloration-vegetale", "balayage-texture"],
  },
  "soin-hydratation": {
    id: "soin-hydratation",
    title: "Soin Hydratation Profonde",
    category: "soins",
    description:
      "Traitement intensif pour hydrater en profondeur les cheveux secs et déshydratés. Idéal pour tous types de boucles.",
    longDescription:
      "Notre soin d'hydratation profonde est un traitement intensif conçu pour revitaliser les cheveux texturés déshydratés. Ce soin commence par un diagnostic précis de la porosité de vos cheveux pour déterminer le niveau d'hydratation nécessaire. Nous utilisons ensuite une combinaison de produits riches en huiles naturelles, beurres végétaux et protéines qui pénètrent au cœur de la fibre capillaire. Le traitement inclut l'application d'un masque hydratant sous vapeur pour maximiser l'absorption des nutriments. Vos cheveux retrouveront souplesse, brillance et élasticité dès la première séance.",
    price: "À partir de 45€",
    duration: "45 min",
    image: "/placeholder.svg?height=500&width=800&text=Soin Hydratation",
    gallery: [
      "/placeholder.svg?height=300&width=300&text=Hydratation 1",
      "/placeholder.svg?height=300&width=300&text=Hydratation 2",
      "/placeholder.svg?height=300&width=300&text=Hydratation 3",
      "/placeholder.svg?height=300&width=300&text=Hydratation 4",
    ],
    steps: [
      {
        title: "Diagnostic",
        description: "Évaluation de la porosité et du niveau de déshydratation de vos cheveux.",
      },
      {
        title: "Préparation",
        description: "Nettoyage en profondeur pour éliminer les résidus et ouvrir les cuticules.",
      },
      {
        title: "Application du Masque",
        description: "Application d'un masque personnalisé riche en ingrédients hydratants.",
      },
      {
        title: "Traitement Vapeur",
        description: "Exposition à la vapeur pour maximiser la pénétration des actifs.",
      },
      {
        title: "Rinçage & Finition",
        description: "Rinçage soigneux et application d'un sérum de finition pour sceller l'hydratation.",
      },
    ],
    products: [
      {
        name: "Masque Hydratant Intense",
        description: "Formule riche en beurre de karité et huile d'avocat pour une hydratation maximale.",
      },
      {
        name: "Huile de Jojoba",
        description: "Pénètre la fibre capillaire pour une hydratation en profondeur.",
      },
      {
        name: "Sérum à l'Aloe Vera",
        description: "Scelle l'hydratation et apporte brillance et douceur.",
      },
    ],
    aftercare: [
      "Hydratez vos cheveux quotidiennement avec un spray leave-in",
      "Appliquez une huile légère sur les pointes tous les soirs",
      "Évitez l'utilisation excessive d'appareils chauffants",
      "Répétez le traitement toutes les 4 à 6 semaines pour des résultats optimaux",
    ],
    benefits: [
      "Hydratation intense et durable",
      "Réduction de la casse et des pointes fourchues",
      "Boucles plus souples et définies",
      "Brillance et douceur accrues",
      "Cheveux plus résistants face aux agressions extérieures",
    ],
    relatedServices: ["coupe-boucles", "masque-personnalise", "traitement-cuir-chevelu"],
  },
  "box-braids": {
    id: "box-braids",
    title: "Box Braids",
    category: "protectrices",
    description:
      "Tresses avec extensions, idéales pour protéger vos cheveux. Différentes tailles disponibles selon vos préférences.",
    longDescription:
      "Les Box Braids sont une coiffure protectrice populaire qui consiste à créer des tresses individuelles avec l'ajout d'extensions. Cette technique ancestrale permet de protéger vos cheveux naturels tout en offrant un style élégant et polyvalent. Nous proposons différentes tailles de tresses (fines, moyennes ou jumbo) et une variété de longueurs pour s'adapter à vos préférences. Notre équipe prend soin de réaliser des tresses ni trop serrées pour éviter toute tension sur le cuir chevelu, ni trop lâches pour garantir une tenue optimale. Ce service inclut un soin préalable du cuir chevelu et des conseils d'entretien personnalisés pour prolonger la durée de vie de votre coiffure.",
    price: "À partir de 120€",
    duration: "4-6h",
    image: "/placeholder.svg?height=500&width=800&text=Box Braids",
    gallery: [
      "/placeholder.svg?height=300&width=300&text=Box Braids 1",
      "/placeholder.svg?height=300&width=300&text=Box Braids 2",
      "/placeholder.svg?height=300&width=300&text=Box Braids 3",
      "/placeholder.svg?height=300&width=300&text=Box Braids 4",
    ],
    steps: [
      {
        title: "Consultation",
        description: "Discussion sur le style, la taille et la longueur des tresses souhaitées.",
      },
      {
        title: "Préparation",
        description: "Shampooing clarifiant, soin hydratant et séchage complet des cheveux.",
      },
      {
        title: "Sectionnement",
        description: "Division des cheveux en sections précises selon la taille des tresses choisie.",
      },
      {
        title: "Tressage",
        description: "Réalisation des tresses avec ajout d'extensions de qualité.",
      },
      {
        title: "Finition",
        description: "Traitement des pointes à l'eau chaude et application d'huile sur le cuir chevelu.",
      },
    ],
    products: [
      {
        name: "Extensions Synthétiques ou Naturelles",
        description: "Fibres de haute qualité disponibles en différentes textures et couleurs.",
      },
      {
        name: "Huile Légère pour Cuir Chevelu",
        description: "Apaise et hydrate le cuir chevelu pendant toute la durée de la coiffure.",
      },
      {
        name: "Mousse Coiffante",
        description: "Fixe les mèches rebelles et donne un aspect soigné aux tresses.",
      },
    ],
    aftercare: [
      "Hydratez votre cuir chevelu 2 à 3 fois par semaine avec une huile légère",
      "Protégez vos tresses avec un foulard en satin pendant la nuit",
      "Évitez de mouiller excessivement vos tresses",
      "Ne gardez pas vos Box Braids plus de 8 semaines",
      "Prenez rendez-vous pour un retrait professionnel",
    ],
    benefits: [
      "Protection complète des cheveux naturels",
      "Style polyvalent et durable",
      "Favorise la pousse des cheveux",
      "Réduction de la manipulation quotidienne",
      "Idéal pour les transitions capillaires",
    ],
    relatedServices: ["twists", "vanilles", "soin-hydratation"],
  },
}

// Fonction pour récupérer les données d'un service par son ID
function getServiceById(id: string): ServiceDetail | undefined {
  return servicesData[id]
}

// Page de détail d'un service
export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = getServiceById(params.id)

  // Si le service n'existe pas, on affiche un message d'erreur
  if (!service) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Service non trouvé</h1>
        <p className="mb-8">Le service que vous recherchez n'existe pas ou a été déplacé.</p>
        <Link href="/services">
          <Button>Retour à la liste des services</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
              <Link href="/" className="flex w-[120px] h-[80px] relative mr-auto">
                <Image
                  src="Home/sekoba-logo.jpg"
                  alt="Sekoba Coiffure"
                  fill
                  className="object-contain" /></Link>
            </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/#accueil" className="font-medium transition-colors hover:text-primary">
              Accueil
            </Link>
            <Link href="/services" className="font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="/#galerie" className="font-medium transition-colors hover:text-primary">
              Galerie
            </Link>
            <Link href="/#a-propos" className="font-medium transition-colors hover:text-primary">
              À Propos
            </Link>
            <Link href="/#contact" className="font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button className="hidden md:flex">Prendre RDV</Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-8">
          <div className="flex items-center mb-8">
            <Link href="/services" className="flex items-center text-rose-600 hover:text-rose-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux services
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>

              <div className="grid grid-cols-4 gap-2 mb-8">
                {service.gallery.map((img, index) => (
                  <div key={index} className="relative h-24 rounded-md overflow-hidden">
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${service.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="process">Processus</TabsTrigger>
                  <TabsTrigger value="products">Produits</TabsTrigger>
                  <TabsTrigger value="aftercare">Entretien</TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="mt-6">
                  <h2 className="text-2xl font-bold mb-4">À propos de ce service</h2>
                  <p className="text-muted-foreground mb-6">{service.longDescription}</p>

                  <h3 className="text-xl font-bold mb-3">Bénéfices</h3>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-rose-600 mr-2 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="process" className="mt-6">
                  <h2 className="text-2xl font-bold mb-4">Déroulement du service</h2>
                  <div className="space-y-6">
                    {service.steps.map((step, index) => (
                      <div key={index} className="flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-600 font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="products" className="mt-6">
                  <h2 className="text-2xl font-bold mb-4">Produits utilisés</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.products.map((product, index) => (
                      <div key={index} className="bg-slate-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.description}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="aftercare" className="mt-6">
                  <h2 className="text-2xl font-bold mb-4">Conseils d'entretien</h2>
                  <ul className="space-y-3">
                    {service.aftercare.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-rose-600 mr-2 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h1 className="text-2xl font-bold mb-2">{service.title}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">4.9 (128 avis)</span>
                </div>

                <Separator className="my-4" />

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Prix</span>
                    <span className="font-semibold">{service.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Durée</span>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-rose-600 hover:bg-rose-700 mb-4">Réserver maintenant</Button>
                <Button variant="outline" className="w-full">
                  Contacter le salon
                </Button>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <h3 className="font-semibold">Services complémentaires</h3>
                  <div className="space-y-2">
                    {service.relatedServices.map((relatedId) => {
                      const relatedService = servicesData[relatedId]
                      return relatedService ? (
                        <Link
                          href={`/services/${relatedId}`}
                          key={relatedId}
                          className="flex items-center justify-between p-2 rounded-md hover:bg-slate-50"
                        >
                          <span>{relatedService.title}</span>
                          <span className="text-sm text-muted-foreground">{relatedService.price}</span>
                        </Link>
                      ) : null
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-12 bg-slate-50">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Vous pourriez aussi aimer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.values(servicesData)
                .filter((s) => s.id !== service.id && s.category === service.category)
                .slice(0, 3)
                .map((relatedService) => (
                  <div key={relatedService.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 relative">
                      <Image
                        src={relatedService.image || "/placeholder.svg"}
                        alt={relatedService.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{relatedService.title}</h3>
                      <p className="text-muted-foreground mb-4">{relatedService.description}</p>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold">{relatedService.price}</span>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{relatedService.duration}</span>
                        </div>
                      </div>
                      <Link href={`/services/${relatedService.id}`}>
                        <Button className="w-full">Voir les détails</Button>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-slate-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Boucles d'Or</h3>
              <p className="text-slate-300">
                Votre salon spécialisé dans les cheveux bouclés, crépus et frisés à Paris.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-slate-300 hover:text-white">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-300 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#galerie" className="text-slate-300 hover:text-white">
                    Galerie
                  </Link>
                </li>
                <li>
                  <Link href="/#a-propos" className="text-slate-300 hover:text-white">
                    À Propos
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-slate-300 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-slate-300 mb-4">Inscrivez-vous pour recevoir nos conseils et promotions.</p>
              <div className="flex">
                <input type="email" placeholder="Votre email" className="p-2 rounded-l-md w-full text-black" />
                <Button className="rounded-l-none bg-rose-600 hover:bg-rose-700">OK</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-300">
            <p>© {new Date().getFullYear()} Boucles d'Or. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
