import { BannerHomeSection } from '@/components/sections'
import { MainLayout } from '@/layouts'

export default function HomePage () {
  return (
    <MainLayout title="Inicio">
      <BannerHomeSection />
    </MainLayout>
  )
}
