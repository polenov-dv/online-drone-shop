import { SectionAboutUs } from '@/components/modules/HomeSection/SectionAboutUs'
import { SectionAdvantages } from '@/components/modules/HomeSection/SectionAdvantages'
import { SectionProducts } from '@/components/modules/HomeSection/SectionProducts'
import { SectionServices } from '@/components/modules/HomeSection/SectionServices'

export default function Home() {
  return (
    <main>
      <SectionAboutUs />
      <SectionAdvantages />
      <SectionProducts />
      <SectionServices />
    </main>
  )
}
