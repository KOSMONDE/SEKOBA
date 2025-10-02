"use client";

import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock, MapPin, Phone, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const galleryItems = [
  { type: "video", src: "/videos/VID-20250919-WA0058.mp4", poster: "/galeries/2b63f081-b205-473a-bbf8-a2781a5a1a9f.png" },
  { type: "video", src: "/videos/VID-20250919-WA0055.mp4", poster: "/galeries/2b63f081-b205-473a-bbf8-a2781a5a1a9f.png" },
  { type: "video", src: "/videos/VID-20250919-WA0061.mp4", poster: "/galeries/2b63f081-b205-473a-bbf8-a2781a5a1a9f.png" },
  { type: "video", src: "/videos/VID-20250919-WA0026.mp4", poster: "/galeries/2b63f081-b205-473a-bbf8-a2781a5a1a9f.png" },
  { type: "video", src: "/videos/VID-20250919-WA0053.mp4", poster: "/galeries/2b63f081-b205-473a-bbf8-a2781a5a1a9f.png" },
  { type: "video", src: "/videos/VID-20250919-WA0027.mp4", poster: "/galeries/2b63f081-b205-473a-bbf8-a2781a5a1a9f.png" },
  { type: "video", src: "/videos/VID-20250919-WA0057.mp4", poster: "/galeries/2b63f081-b205-473a-bbf8-a2781a5a1a9f.png" },
  { type: "video", src: "/videos/VID-20250919-WA0028.mp4", poster: "/galeries/2b63f081-b205-473a-bbf8-a2781a5a1a9f.png" },
]



  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container py-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex w-[120px] h-[80px] relative mr-auto">
                <Image
                  src="Home/sekoba-logo.jpg"
                  alt="Sekoba Coiffure"
                  fill
                  className="object-contain" /></Link>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">

              <Link href="/services" className="font-medium hover:text-primary">Services</Link>
              <Link href="#galerie" className="font-medium hover:text-primary">Galerie</Link>
              <Link href="#a-propos" className="font-medium hover:text-primary">À Propos</Link>
              <Link href="#contact" className="font-medium hover:text-primary">Contact</Link>
            </nav>
            <a
              href="https://salonkee.ch/salon/sekoba-coiffure?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <Button>Prendre RDV</Button>
            </a>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden z-50"
              onClick={() => setMenuOpen(!menuOpen)}
            >
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
          {menuOpen && (
            <nav className="md:hidden flex flex-col gap-4 px-4 py-2 bg-white border-t">

              <Link href="/services" className="font-medium hover:text-primary">Services</Link>
              <Link href="#galerie" className="font-medium hover:text-primary">Galerie</Link>
              <Link href="#a-propos" className="font-medium hover:text-primary">À Propos</Link>
              <Link href="#contact" className="font-medium hover:text-primary">Contact</Link>
              <a
                href="https://salonkee.ch/salon/sekoba-coiffure?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full mt-2">Prendre RDV</Button>
              </a>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">
        <section className="relative h-[600px] md:h-[600px] w-full overflow-hidden">
          {/* Image de fond */}
          <div className="absolute inset-0 z-0">
            <Image
              src="Home/banner_image.webp"
              alt="Femme aux cheveux lisses et bouclés représentant la diversité des textures au salon SEKOBA"
              fill
              className="object-cover [object-position:17%_center] md:[object-position:center_20%]"
              priority
            />

            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Texte visible par-dessus */}
          <div className="relative z-10 flex h-full items-end justify-center pb-10 md:items-center md:justify-end md:pb-0">
            <div className="w-full max-w-xl px-6 text-white text-left space-y-6">
              <div className="space-y-4">
                <h1 className="hidden sm:block text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                  Experts en <br className="hidden sm:inline" />
                  Cheveux Bouclés, <br className="hidden sm:inline" />
                  Crépus et Frisés
                </h1>
                <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-md text-center sm:text-left">
                  Notre salon est spécialisé dans la coupe, le soin et la mise en valeur des cheveux texturés.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center sm:items-start sm:justify-start sm:flex-row">
                <a
                  href="https://salonkee.ch/salon/sekoba-coiffure?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                    Prendre Rendez-vous
                  </Button>
                </a>
                <Link href="/services">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white/90">
                    Nos Services
                  </Button>

                </Link>
              </div>
            </div>
          </div>
        </section>




        <section id="services" className="py-16 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Nos Services Spécialisés</h2>
              <p className="text-muted-foreground mt-2">Des soins adaptés à tous les types de boucles et textures</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Carte 1 : Coupe & Coiffage */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/Home/profile-femme-coiffure-europeenne-salon.webp"
                    alt="Portrait de profil d’une femme européenne aux cheveux bouclés dans un salon lumineux au fond flou"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Coupes & Coiffage</h3>
                  <p className="text-muted-foreground mb-4">
                    Coupes personnalisées et brushing qui respectent la nature de vos cheveux texturés.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">À partir de 45 CHF</span>

                  </div>
                </div>
              </div>

              {/* Carte 2 : Soins Hydratants */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Conteneur 4:3 responsive */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/services/hydratants.webp"
                    alt="Portrait horizontal d’un homme recevant un soin avec masque facial couvrant tout son visage dans un salon coiffure, arrière-plan flou"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Soins & Lissages</h3>
                  <p className="text-muted-foreground mb-4">
                    Soins hydratants, protéinés ou lissants pour renforcer et discipliner vos cheveux.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">À partir de 35 CHF</span>

                  </div>                </div>
              </div>

              {/* Carte 3 : Coiffures Protectrices */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/Home/tresses-extensions-femme-italienne-horizontale.webp"
                    alt="Portrait horizontal d’une femme italienne aux longues tresses serrées dans un salon coiffure avec arrière-plan flou"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Tresses & Extensions</h3>
                  <p className="text-muted-foreground mb-4">
                    Tresses, nattes, ou extensions sur mesure pour sublimer et protéger vos cheveux.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">À partir de 60 CHF</span>

                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <a href="https://sekoba.kosmonde.fr/services">
                <Button>Voir tous nos services</Button>
              </a>

            </div>
          </div>
        </section>


        <section id="galerie" className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Notre Galerie</h2>
              <p className="text-muted-foreground mt-2">
                Découvrez nos plus belles réalisations
              </p>
            </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {galleryItems.map((item, index) => (
    <div key={index} className="relative w-full h-96 overflow-hidden rounded-lg">
      {item.type === "image" ? (
        <Image
          src={item.src}
          alt={`Galerie ${index + 1}`}
          fill
          className="object-cover transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      ) : (
        <video
          src={item.src}
          poster={item.poster}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      )}
    </div>
  ))}
</div>


            <div className="mt-12 text-center">
              <a
                href="https://www.instagram.com/sekoba_coiffure_geneve/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Voir plus de photos</Button>
              </a>
            </div>
          </div>
        </section>





        <section id="a-propos" className="py-16 bg-slate-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="w-full">
                <Image
                  src="Home/portrait_coiffeuse_sekoba.webp"
                  alt="Notre équipe"
                  width={1920}           // largeur “native” ou celle que vous ciblez
                  height={1280}          // hauteur native (ici ratio 3:2 par exemple)
                  className="w-full h-auto rounded-lg"
                />
              </div>



              <div>
                <h2 className="text-3xl font-bold mb-4">À Propos de SEKOBA</h2>
                <p className="text-muted-foreground mb-4">
                  Kady, coiffeuse passionnée depuis 35 ans, met son expertise au service de Sekoba Coiffure, un salon mixte reconnu pour son savoir-faire en cheveux texturés, bouclés, crépus et lisses. Grâce à sa maîtrise des techniques variées, elle propose des coupes modernes, des tresses, des tissages et des soins personnalisés adaptés à chaque chevelure.
                </p>
                <p className="text-muted-foreground mb-4">
                  Elle est également spécialisée dans le spa capillaire et les soins aux huiles naturelles, ainsi que dans les colorations sans ammoniaque de la marque Kust. Attentive aux besoins de chacun, Kady offre une expérience chaleureuse et professionnelle, alliant écoute, bien-être et excellence coiffure.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span>4.7/5 sur Google</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>+35 ans d'expérience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span>+2000 clients satisfaits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>Produits naturels</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-rose-600 text-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
                <p className="mb-8">Prenez rendez-vous dès maintenant ou contactez-nous pour plus d'informations.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" />
                    <span>Rue Voltaire 20, 1201 Genève</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <span>+41 79 917 19 67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-5 w-5" />
                    <div>
                      <p>Lundi - Samedi: 9h - 19h</p>
                      <p>Dimanche: Fermé</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="https://salonkee.ch/salon/sekoba-coiffure?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-white text-rose-600 hover:bg-white/90">
                      Prendre Rendez-vous
                    </Button>
                  </a>
                </div>

              </div>
              <div className="bg-white text-black p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Envoyez-nous un message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nom
                      </label>
                      <input id="name" className="w-full p-2 border rounded-md" placeholder="Votre nom" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-2 border rounded-md"
                        placeholder="Votre email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      className="w-full p-2 border rounded-md"
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-2 border rounded-md"
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">Envoyer</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-slate-900 text-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center py-8">
                <Image
                  src="/Home/sekoba-logo-footer.png"
                  alt="Sekoba Coiffure"
                  width={120}
                  height={120}
                  className="mx-auto mb-4"
                />
                <p className="text-slate-300">
                  Votre salon spécialisé dans les cheveux bouclés, crépus et frisés à Genève.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#accueil" className="text-slate-300 hover:text-white">
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="text-slate-300 hover:text-white">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#galerie" className="text-slate-300 hover:text-white">
                      Galerie
                    </Link>
                  </li>
                  <li>
                    <Link href="#a-propos" className="text-slate-300 hover:text-white">
                      À Propos
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="text-slate-300 hover:text-white">
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
              <p>© {new Date().getFullYear()} SEKOBA. Tous droits réservés.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
