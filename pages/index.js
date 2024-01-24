import InfoCard from "@/components/InfoCard/InfoCard"
import MainBanner from "@/components/MainBanner/MainBanner"
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
          <Grid item>
              <InfoCard data={infoCardData}/>
          </Grid>
        </Container>
      </main>
    </>
  )
}
