import { SectionAboutUs } from '@/components/modules/HomeSection/SectionAboutUs'
import { SectionAdvantages } from '@/components/modules/HomeSection/SectionAdvantages'
import { SectionProducts } from '@/components/modules/HomeSection/SectionProducts'

export default function Home() {
  return (
    <main>
      <SectionAboutUs />
      <SectionAdvantages />
      <SectionProducts />
    </main>
  )
}
