"use client";

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ArrowLeft, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container py-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="block w-[250px] h-[97px] relative">
              <Image
                src="Home/sekoba-logo.jpg"
                alt="Sekoba Coiffure"
                fill
                className="object-contain" /></Link>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/services" className="font-medium hover:text-primary">Services</Link>
              <Link href="/#galerie" className="font-medium hover:text-primary">Galerie</Link>
              <Link href="/#a-propos" className="font-medium hover:text-primary">À Propos</Link>
              <Link href="/#contact" className="font-medium hover:text-primary">Contact</Link>
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
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
          {menuOpen && (
            <nav className="md:hidden flex flex-col gap-4 px-4 py-2 bg-white border-t">
              <Link href="/#accueil" className="font-medium hover:text-primary">Accueil</Link>
              <Link href="/services" className="font-medium hover:text-primary">Services</Link>
              <Link href="/#galerie" className="font-medium hover:text-primary">Galerie</Link>
              <Link href="/#a-propos" className="font-medium hover:text-primary">À Propos</Link>
              <Link href="/#contact" className="font-medium hover:text-primary">Contact</Link>
              <a href="https://salonkee.ch/salon/sekoba-coiffure?lang=en" target="_blank" rel="noopener noreferrer">
                <Button className="w-full mt-2">Prendre RDV</Button>
              </a>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">
        {/* Bandeau */}
        <section className="relative h-[300px] w-full bg-slate-900 flex items-center justify-center">
          <div className="text-center text-white space-y-4 max-w-2xl">
            <h1 className="text-4xl font-bold sm:text-5xl">Nos Services</h1>
            <p className="text-lg">Découvrez notre gamme complète de services spécialisés pour cheveux bouclés, crépus et frisés.</p>
          </div>
        </section>

        {/* Contenu des services */}
        <section className="py-12">
          <div className="container space-y-12">
            {/* Retour */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-rose-600 hover:text-rose-700">
                <ArrowLeft className="h-4 w-4 mr-2" /> Retour à l'accueil
              </Link>
            </div>

            <Tabs defaultValue="coupes">
              <TabsList
  className="grid grid-cols-2 gap-3 px-4 mb-6 pb-4 min-h-[56px] bg-white
           md:flex md:overflow-x-auto md:whitespace-nowrap md:no-scrollbar md:gap-4 md:px-0 md:mb-0 md:pb-0 md:bg-white"

>


  <TabsTrigger className="w-full text-center" value="coupes">
    Coupes & Coiffage
  </TabsTrigger>
  <TabsTrigger className="w-full text-center" value="soins">
    Soins & Lissages
  </TabsTrigger>
  <TabsTrigger className="w-full text-center" value="protectrices">
    Coloration
  </TabsTrigger>
  <TabsTrigger className="w-full text-center" value="coloration">
    Extensions & Onglerie
  </TabsTrigger>
</TabsList>



              <hr className="hidden md:block w-full border-t border-gray-200 my-6" />




              {/* Coupes */}
              <TabsContent
                value="coupes"
                className="container mx-auto !pt-0 !pb-0 mt-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Service 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Shampoing + Brushing</h3>
                    <p className="text-muted-foreground mb-4">Brushing réalisé après un shampooing doux.</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">À partir de 36 CHF</span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" /> <span>45–60 min</span>
                      </div>
                    </div> 
                    <Link
  href="https://salonkee.ch/salon/sekoba-coiffure?lang=fr"
  legacyBehavior
>
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full"
  >
    <Button className="w-full bg-rose-600 hover:bg-rose-700">
      Réserver sur Salonkee
    </Button>
  </a>
</Link>
                    
                  </div>
                </div>
                {/* Service 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Shampoing + Coupe + Brushing</h3>
                    <p className="text-muted-foreground mb-4">Coupe sur mesure avec shampooing et brushing.</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">À partir de 55 CHF</span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" /> <span>60–75 min</span>
                      </div>
                    </div>
                    <Link
  href="https://salonkee.ch/salon/sekoba-coiffure?lang=fr"
  legacyBehavior
>
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full"
  >
    <Button className="w-full bg-rose-600 hover:bg-rose-700">
      Réserver sur Salonkee
    </Button>
  </a>
</Link>
                  </div>
                </div>
                {/* Service 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Boucles anglaises</h3>
                    <p className="text-muted-foreground mb-4">Boucles structurées après shampooing.</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">À partir de 50 CHF</span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" /> <span>60 min</span>
                      </div>
                    </div>
                    <Link
  href="https://salonkee.ch/salon/sekoba-coiffure?lang=fr"
  legacyBehavior
>
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full"
  >
    <Button className="w-full bg-rose-600 hover:bg-rose-700">
      Réserver sur Salonkee
    </Button>
  </a>
</Link>
                  </div>
                </div>
                {/* Service 4 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Mise en plis</h3>
                    <p className="text-muted-foreground mb-4">Ondulations durables avec rouleaux.</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">À partir de 35 CHF</span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" /> <span>60 min</span>
                      </div>
                    </div>
                     <Link
  href="https://salonkee.ch/salon/sekoba-coiffure?lang=fr"
  legacyBehavior
>
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full"
  >
    <Button className="w-full bg-rose-600 hover:bg-rose-700">
      Réserver sur Salonkee
    </Button>
  </a>
</Link>
                  </div>
                </div>
              </TabsContent>

              {/* Soins */}
              <TabsContent
                value="soins"
                className="!pt-0 !pb-0 mt-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Lissage Brésilien</h3>
                    <p className="text-muted-foreground mb-4">Lissage à la kératine pour brillance et souplesse durable.</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">À partir de 150 CHF</span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" /> <span>2h–3h30</span>
                      </div>
                    </div>
                     <Link
  href="https://salonkee.ch/salon/sekoba-coiffure?lang=fr"
  legacyBehavior
>
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full"
  >
    <Button className="w-full bg-rose-600 hover:bg-rose-700">
      Réserver sur Salonkee
    </Button>
  </a>
</Link>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Défrisage</h3>
                    <p className="text-muted-foreground mb-4">Défrisage professionnel respectueux de la fibre capillaire.</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">À partir de 70 CHF</span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" /> <span>1h–1h30</span>
                      </div>
                    </div>
                    <Link
  href="https://salonkee.ch/salon/sekoba-coiffure?lang=fr"
  legacyBehavior
>
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full"
  >
    <Button className="w-full bg-rose-600 hover:bg-rose-700">
      Réserver sur Salonkee
    </Button>
  </a>
</Link>
                  </div>
                </div>
              </TabsContent>

              {/* Coloration & Décoloration */}
              <TabsContent
                value="protectrices"
                className="container mx-auto !pt-0 !pb-0 mt-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Couleur + Brushing</h3>
                    <p className="text-muted-foreground mb-4">Coloration ton sur ton suivie d’un brushing.</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">À partir de 76 CHF</span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" /> <span>1h30–2h</span>
                      </div>
                    </div>
                     <Link
  href="https://salonkee.ch/salon/sekoba-coiffure?lang=fr"
  legacyBehavior
>
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full"
  >
    <Button className="w-full bg-rose-600 hover:bg-rose-700">
      Réserver sur Salonkee
    </Button>
  </a>
</Link>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Couleur végétale + Brushing</h3>
                    <p className="text-muted-foreground mb-4">Coloration naturelle à base de plantes.</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">À partir de 81 CHF</span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" /> <span>2h</span>
                      </div>
                    </div>
                     <Link
  href="https://salonkee.ch/salon/sekoba-coiffure?lang=fr"
  legacyBehavior
>
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full"
  >
    <Button className="w-full bg-rose-600 hover:bg-rose-700">
      Réserver sur Salonkee
    </Button>
  </a>
</Link>
                  </div>
                </div>
              </TabsContent>

              {/* Tresses et Extensions */}
              <TabsContent
                value="coloration"
                className="container mx-auto !pt-0 !pb-0 mt-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Tissage</h3>
                    <p className="text-muted-foreground mb-4">Pose de tissage pour protéger vos cheveux.</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">À partir de 130 CHF</span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" /> <span>90 min</span>
                      </div>
                    </div>
                     <Link
  href="https://salonkee.ch/salon/sekoba-coiffure?lang=fr"
  legacyBehavior
>
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full"
  >
    <Button className="w-full bg-rose-600 hover:bg-rose-700">
      Réserver sur Salonkee
    </Button>
  </a>
</Link>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Nattes Twistées</h3>
                    <p className="text-muted-foreground mb-4">Torsades avec ou sans rajouts.</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">À partir de 100 CHF</span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" /> <span>2h</span>
                      </div>
                    </div>
                    <Link
  href="https://salonkee.ch/salon/sekoba-coiffure?lang=fr"
  legacyBehavior
>
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full"
  >
    <Button className="w-full bg-rose-600 hover:bg-rose-700">
      Réserver sur Salonkee
    </Button>
  </a>
</Link>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Informations Importantes */}
        <section className="py-12 bg-slate-50">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Informations Importantes</h2>
              <p className="text-muted-foreground mt-2">Tout ce que vous devez savoir avant votre rendez-vous</p>
            </div>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>Comment se préparer pour mon rendez-vous ?</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Venir avec les cheveux détanglés si possible</li>
                    <li>Apporter des photos de la coiffure souhaitée</li>
                    <li>Nous informer de tout traitement chimique récent</li>
                    <li>Arriver 10 minutes avant l'heure du rendez-vous</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Quelle est votre politique d'annulation ?</AccordionTrigger>
                <AccordionContent>
                  Préavis de 24 h pour toute annulation ou modification, frais de 50 % en cas d'absence.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Quels produits utilisez-vous ?</AccordionTrigger>
                <AccordionContent>
                  Produits professionnels sans sulfates : Shea Moisture, Cantu, As I Am et notre gamme naturelle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Proposez-vous des forfaits ou des abonnements ?</AccordionTrigger>
                <AccordionContent>
                  Formules d'abonnement et forfaits mariage/événements disponibles sur demande.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Combien de temps durent les coiffures protectrices ?</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Box Braids : 6–8 semaines</li>
                    <li>Twists : 4–6 semaines</li>
                    <li>Vanilles : 2–3 semaines</li>
                    <li>Crochet Braids : 4–6 semaines</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-12 bg-rose-600 text-white">
          <div className="container text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold">Prêt(e) à prendre soin de vos boucles ?</h2>
            <p>Réservez dès maintenant votre rendez-vous et bénéficiez de l'expertise de nos coiffeurs spécialisés.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://salonkee.ch/salon/sekoba-coiffure?lang=en" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-rose-600 hover:bg-white/90">Prendre Rendez-vous</Button>
              </a>
              <Link href="https://sekoba.kosmonde.fr/#contact">
                <Button size="lg" className="bg-black text-white hover:bg-black/90">Nous Contacter</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SEKOBA</h3>
            <p className="text-slate-300">Votre salon spécialisé dans les cheveux bouclés, crépus et frisés à Genève.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-slate-300 hover:text-white">Accueil</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-white">Services</Link></li>
              <li><Link href="/#galerie" className="text-slate-300 hover:text-white">Galerie</Link></li>
              <li><Link href="/#a-propos" className="text-slate-300 hover:text-white">À Propos</Link></li>
              <li><Link href="/#contact" className="text-slate-300 hover:text-white">Contact</Link></li>
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
      </footer>
    </div>
  )
}
