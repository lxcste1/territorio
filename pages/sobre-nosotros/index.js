import React from 'react'
import Image from 'next/image';
import { Container, Grid, Typography } from '@mui/material';
import Title from '@/components/Title/Title';
import ContentCard from '@/components/ContentCard/ContentCard';

export default function AboutUs() {

  const data = [
    {
      title:'LAS RAÍCES',
      text: 'Beto, a los 15 años escuchando punk. Yo, Cecy, a los 15 años pensando solo en el estudio y en el deporte. Desde el 24 de diciembre de 1992, siempre juntos...  tan distintos pero iguales. Los dos venimos de clase trabajadora. Beto, hijo de Pedro, trabajador de la construcción, luchador como muy pocos. Cecy, también conocida por mi apellido, Fanfliet, hija de padre electricista, pescador. Mamá ucraniana. Desde los 21 comenzamos a vivir juntos. Fue difícil para nosotros: trabajar, estudiar. Pero se pudo. Los años seguían pasando y conseguimos tener nuestra casa. También ahí estaba la familia, ayudando en los buenos y malos momentos: el dinero, la construcción. Llegan mis 39 años, ambos buscando mejores trabajos. Entonces, la consulta de Beto: ¿vas a querer ser mamá? Ufff, qué pregunta. ¿Cómo será una personita de nosotros dos? Beto, mi salvador, mi genio, el que siempre estuvo cada vez que las piernas me flaqueaban, dijo sí y, obvio, yo también. Nos teníamos que preparar, cuando llegara nuestro bebé queríamos educarlo nosotros. Y así comenzó el proyecto de la búsqueda de un local, para que yo no viajara tanto, para poder cuidar a nuestra hija.',
      desktopImg:'/600x400.svg',
      mobileImg:'/355x200.svg',
      textAlign:'left'
    },
    {
      title:'EL TRONCO',
      text: 'Caminando por Ituzaingó vimos una hermosa casa antigua. Nos quedamos encantados. Era un caserón con algunas habitaciones sin techo, en otras no había piso pero se nos llenó el corazón. Beto: ¿la querés? Yo dije: sííííííí. Y nos reunimos con los dueños. Sentí que los planetas se alineaban. Así empezamos. Yo había estudiado decoración, Beto, paisajismo. Con Pedro a la cabeza trabajando. “... en esta pared quiero que se abra una arcada...”, “... este piso conservalo, esta cañería también...”Y estaba gran parte de la familia González colaborando, levantando nuestro sueño. Lo logramos hacer en tres meses. Nos decían que éramos locos, que estábamos equivocados, pero, bueno. Así se hizo TERRITORIO BOHEMIAN, primero con la franquicia de Peuque, donde yo me encontraba trabajando como gerente comercial. Siempre estuvo en nuestra idea la fusión de dos rubros distintos: poder comprar ropa y sentarse a tomar algo. Tardamos dos años para cambiar cosas y lograr que se acepte esto en Lanús. Nos capacitamos para poder poner lo mejor, lo distinto, lo especial. Hicimos curso de barismo, catación. Elegimos la mejor máquina de café, la Marzocco. Y queríamos conservar el estilo, ese que te da alegría y nostalgia juntas. La sensación de estar en el patio de la abuela.',
      desktopImg:'/600x400.svg',
      mobileImg:'/355x200.svg',
      textAlign:'right'
    },
    {
      title:'LA COPA DEL ÁRBOL',
      text: 'El 16/12/2016 pudimos abrir Territorio. Yo era la barista y servía las mesas. Una gran pastelera estaba con nosotros en ese tiempo. Y Beto, el comodín en todo. Así comenzó. Cuando pensamos en cómo se iba a llamar, pensamos en un árbol, la copa y sus raíces. Nuestras raíces son fuertes, son las que te van marcando, van haciendo, entre cachetazo y abrazo. Estábamos armando un territorio –nuestro lugar–, ¿y por qué Bohemian? No porque era cool, sino porque es relajado. Por eso cambiamos la última parte de la palabra. Somos así, nos gusta lo antiguo, lo que transmite, lo que se siente, lo que se percibe, lo que se palpa: el saludar a tus clientes con una sonrisa, el no vender sino asesorar. El hablar con sentidos y sentimientos. Y acá estamos, Beto, Cecy y nuestro brote más bello: Lupe. ¡Gracias por acompañarnos!',
      desktopImg:'/600x400.svg',
      mobileImg:'/355x200.svg',
      textAlign:'left'
    },
  ]

  return (
    <Container sx={{paddingTop:'7rem'}}>
      <Grid container justifyContent={'center'}>
        <Grid item md={12}>
            <Title text={'Sobre nosotros'} type={'h3'}/>
        </Grid>
        <Grid item md={12} sx={{display:'flex', justifyContent:'space-evenly', marginY:'2rem'}}>
          <Grid>
                <Image
                    src={'/200x300.svg'}
                    alt={'El árbol'}
                    width={200}
                    height={300}
                    className='md:block hidden'
                />
                <Image
                    src={'/125x190.svg'}
                    alt={'El árbol'}
                    width={125}
                    height={190}
                    className='md:hidden block'
                />                              
          </Grid>
          <Grid sx={{display:'flex', flexWrap:'wrap', flexDirection:'column',alignItems:'end', alignContent:'center', justifyContent:'center'}}>
            <Typography sx={{fontFamily:'Calligraffitti-Regular', textAlign:'end', fontSize:['14px', '25px']}}>
              &ldquo; Un árbol nos recuerda que para crecer
              <br />
              hacia lo alto, hacia lo espiritual, lo abstracto,
              <br />
              es necesario estar bien arraigado
              <br />
              en la tierra, en lo concreto, en la materia.&ldquo;
            </Typography>
            <Typography sx={{textAlign:'end', fontWeight:'700', fontSize:['11px', 'initial']}}>
              Friedrich Nietzsche, Un árbol
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={12} xs={12}>
            <ContentCard data={data} />
        </Grid>
      </Grid>
    </Container>
  )
}
