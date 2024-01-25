import CTAButton from "@/components/CTAButton/CTAButton"
import InfoCard from "@/components/InfoCard/InfoCard"
import MainBanner from "@/components/MainBanner/MainBanner"
import SectionCard from "@/components/SectionCard/SectionCard"
import Title from "@/components/Title/Title"
import { Container, Grid } from "@mui/material"

export default function Home() {

    const infoCardData = {
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis perferendis, natus vel ullam quod sit ea saepe vitae! Consectetur culpa accusamus officiis incidunt! Tempora voluptatem provident nobis sed facilis rerum?",
    alt:'Café & pastelería',
    mobileImg: '/315x215.svg',
    desktopImg: '/600x400.svg'
  }

  return (
    <>
      <main>
        <MainBanner />
        <Container>
          <Grid container sx={{justifyContent:'center', marginY:'2rem'}}>
            <Grid item>
              <Title text={'Café & pastelería'} type={'h3'}/>
            </Grid>
          </Grid>
          <Grid item sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
              <InfoCard data={infoCardData}/>
              <CTAButton linkTo='https://alacartaonline.com.ar/restaurant/6001b2e3feb46a6a4347c483'>Ver carta</CTAButton>
          </Grid>
          <Grid item>
              <Title text={'Cuidado & belleza'} type={'h3'}/>
          </Grid>
          <Grid item sx={{display:'flex', flexWrap:'wrap', justifyContent:['unset', 'space-evenly'], maxWidth:['315px', 'unset'], margin:['0 auto', 'unset']}}>
              <SectionCard />
          </Grid>
          <Grid item sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
            <CTAButton linkTo={'/servicios'}>Quiero ver todos</CTAButton>
          </Grid>
        </Container>
      </main>
    </>
  )
}
