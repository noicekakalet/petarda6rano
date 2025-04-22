import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
  Box,
  Paper,
  Alert,
  Divider,
  Chip,
} from '@mui/material';

// Importujemy obrazy statyczne
import petardaImage from '../assets/images/petarda.jpg';
import gotowiecImage from '../assets/images/gotowiec.jpg';
import turboImage from '../assets/images/turbo.jpg';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  specialOffer?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Petarda Mega Huk',
    price: 19.99,
    description: 'Polecana przez Alberta Zdechlaka! UWAGA: Nie odpalać pod szkołą jak Albert, bo będzie problem z policją! Prawdopodobieństwo płaczu po konfrontacji z dyrekcją: 100%. Albert podobno popłakał się też gdy pies sąsiada go gonił, bo ukradł mu kawałek kiełbasy.',
    image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=1000&auto=format&fit=crop',
    specialOffer: true,
  },
  {
    id: 2,
    name: 'Gotowiec Premium',
    price: 29.99,
    description: 'Lepszy niż ten, z którym Albert dostał pałę! Gwarantowana lepsza jakość. Albert twierdził, że ma gotowca, ale dostał 1/5 i płakał przez tydzień. Próbował później przekupić nauczycielkę ukradzionymi batonami ze szkolnego sklepiku, ale go przyłapano.',
    image: 'https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Petarda Turbo Wybuch',
    price: 24.99,
    description: 'Tak głośna, że nawet chomik by się przestraszył (gdyby żył)! Albert twierdzi, że jego chomik zdechł ze starości, ale wszyscy wiemy, że odpalił przy nim Turbo Wybuch. Później próbował go zakopać w ogródku szkolnym i wpadł w kałużę - śmierdział przez tydzień.',
    image: 'https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Guma Miętowa "Świeży Oddech"',
    price: 2.99,
    description: 'Specjalnie dla fanów Alberta! Neutralizuje zapach z ust nawet po 3 dniach nieszczenia zębów. Albert jeszcze jej nie odkrył, dlatego wszyscy wiedzą, kiedy wchodzi do klasy. Nauczycielka biologii raz zemdlała, gdy Albert odpowiadał przy tablicy. Myślała że to gaz z laboratorium.',
    image: 'https://images.unsplash.com/photo-1551818176-60579e574b91?q=80&w=1000&auto=format&fit=crop',
    specialOffer: true,
  },
  {
    id: 5,
    name: 'Snus "Pierwszy Raz"',
    price: 15.99,
    description: 'TYLKO DLA PEŁNOLETNICH! Słynny snus, którego Albert ukradł na nocowaniu w szkole. Po zażyciu siedział 2 godziny w łazience myśląc, że się zrzyga. Do dziś wspomina to jako "najgorszy wieczór życia". Kolega nagrał całe zdarzenie - filmik ma już 10 000 wyświetleń na TikToku.',
    image: 'https://images.unsplash.com/photo-1555991936-ccc58f42ad6a?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Zdechły Chomik (Limited Edition)',
    price: 9.99,
    description: 'Pamiątka po chomiku Alberta! Model 1:1 wykonany z najwyższej jakości plastiku. Dołączamy certyfikat autentyczności z podpisem pani Justyny z Lidla (matki Alberta). UWAGA: Nie narażać na kontakt z petardami! Albert podobno trzyma prawdziwego chomika w zamrażarce, "na pamiątkę".',
    image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=1000&auto=format&fit=crop',
    specialOffer: true,
  },
  {
    id: 7,
    name: 'Śnieg (Opakowanie X-Large)',
    price: 12.50,
    description: 'Historia inspirowana prawdziwymi wydarzeniami! Kiedy Albert odpalił petardę pod szkołą, jego kolega Julek został oskarżony o "branie śniegu". Wychowawczyni (która nienawidzi Alberta) oskarżyła niewinnego Julka, bo nie wierzyła, że Albert mógł mieć petardę. Ten Śnieg to jedyny prawdziwy dowód niewinności Julka!',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop',
    specialOffer: true,
  },
];

const Products = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Witaj w sklepie Cwelbert
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4, bgcolor: '#f5f5f5' }}>
        <Typography variant="h5" gutterBottom color="error">
          🤣 Historia Alberta Zdechlaka - Naszego "Eksperta" 🤡
        </Typography>
        <Typography variant="body1" paragraph>
          Albert, nasz "ekspert", znany jest z tego, że:
        </Typography>
        <ul>
          <li>Dostał pałę z gotowca, którego używał (twierdził, że "nauczycielka się uwzięła")</li>
          <li>Jego chomik zdechł (płakał przez tydzień, choć sam go zagłodził)</li>
          <li>Chodzi ciągle w tych samych ciuchach (rekord: 3 tygodnie w jednej koszulce)</li>
          <li>Jego oddech potrafi obudzić nieżywego (nawet jego kot ucieka)</li>
          <li>Odpalił petardę pod szkołą i wezwano policję (potem się wypierał, ale wszyscy widzieli)</li>
          <li>Ukradł snusa na nocowaniu w szkole i spędził 2 godziny w łazience, bojąc się, że się zrzyga</li>
          <li>Jego matka, pani Justyna, pracuje za minimalną krajową w Lidlu (czasem daje mu przeterminowane bułki)</li>
          <li>Podczas zawodów szkolnych przebiegł tylko 100m, potem wymiotował przez 20 minut</li>
          <li>Przyniósł raz do szkoły kanapkę z pasztetem, która leżała tydzień w plecaku - zjadł ją mimo pleśni</li>
          <li>Raz zasnął na lekcji matematyki i tak głośno chrapał, że dyrektor przyszedł sprawdzić co się dzieje</li>
        </ul>
        <Alert severity="warning" sx={{ mt: 2 }}>
          Nie bądź jak Albert - używaj naszych produktów z głową i myj zęby regularnie!
        </Alert>
        <Alert severity="info" sx={{ mt: 2 }}>
          ODBIÓR OSOBISTY: Wszystkie produkty można odebrać w Lidlu na kasie nr 3, gdzie pracuje pani Justyna (matka Alberta). 
          Hasło odbioru: "Syn się znowu spóźni na obiad". UWAGA: Pani Justyna może być smutna, bo znowu musiała zapłacić za szkody wyrządzone przez Alberta.
        </Alert>
        <Alert severity="success" sx={{ mt: 2 }}>
          <Typography variant="body1">
            <strong>BONUS DO KAŻDEGO ZAMÓWIENIA!</strong> Dodajemy za darmo oryginalną naklejkę Lidla skradzioną przez Alberta ze zbiorów jego mamy. Kolekcjonerska wartość gwarantowana - niektóre naklejki mają jeszcze ślady palców pani Justyny i plamy po sosie, którym Albert zjadł obiad!
          </Typography>
        </Alert>
        <Typography variant="caption" sx={{ display: 'block', mt: 2, fontStyle: 'italic' }}>
          * Na podstawie prawdziwych zdarzeń z życia Alberta. Imię nie zostało zmienione, aby chronić niewinnych - Albert nie jest niewinny.
        </Typography>
      </Paper>

      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Nasze produkty
      </Typography>

      <Alert severity="error" sx={{ mb: 4 }}>
        <Typography variant="body1">
          <strong>OSTRZEŻENIE:</strong> Albert próbował dzisiaj rano odwiedzić nasz magazyn. Jeśli widzisz kogoś w brudnej bluzie z plamą po ketchupie, śmierdzącego na kilometr i próbującego sprzedać "oryginalne" petardy z plecaka - to Albert. Ignoruj go, chyba że chcesz zobaczyć, jak płacze, gdy powiesz, że wezwiesz jego mamę.
        </Typography>
      </Alert>

      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: '1fr 1fr',
          md: '1fr 1fr 1fr'
        },
        gap: 4,
        mb: 6
      }}>
        {products.map((product) => (
          <Card key={product.id} sx={{ position: 'relative' }}>
            {product.specialOffer && (
              <Chip 
                label="BESTSELLER!" 
                color="error" 
                sx={{ 
                  position: 'absolute', 
                  top: 10, 
                  right: 10, 
                  zIndex: 1,
                  fontWeight: 'bold'
                }} 
              />
            )}
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.name}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ minHeight: '80px' }}>
                {product.description}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                  {product.price.toFixed(2)} zł
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(product)}
                >
                  Dodaj do koszyka
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Paper elevation={3} sx={{ p: 3, mb: 4, bgcolor: '#fff8e1' }}>
        <Typography variant="h6" gutterBottom>
          🤣 Czy wiesz, że...
        </Typography>
        <Typography variant="body2" paragraph>
          Gdy Albert miał założyć mundurek na akademię, okazało się, że nie ma czystej koszuli. Próbował wyprasować tę, którą nosił przez dwa tygodnie, ale nawet żelazko się zbuntowało i się spaliło. Jego mama, pani Justyna z Lidla, musiała brać nadgodziny, żeby kupić nowe żelazko. Podobno nawet proszek do prania "Perwoll Black Magic" zmienił kolor na brązowy!
        </Typography>
        <Typography variant="body2" paragraph>
          PS: Jeśli zobaczysz Alberta w Lidlu kręcącego się koło kas - uważaj na portfel. Ostatnio próbował wymienić zdechłego chomika na paczkę snusa...
        </Typography>
        <Typography variant="body2" paragraph>
          Albert chciał raz zaimponować dziewczynie z równoległej klasy i powiedział, że jest właścicielem sklepu z petardami. 
          Kiedy go odwiedziła, okazało się, że jego "sklep" to pudełko po butach za śmietnikiem. Zapomniał, że pada deszcz i wszystkie petardy zamokły.
          Próbował je wysuszyć suszarką do włosów i spalił sobie brwi - do dzisiaj ma dziwne łyse miejsca na twarzy.
        </Typography>
        <Typography variant="body2" paragraph>
          Słynna sprawa "brania śniegu": Kiedy wychowawczyni usłyszała wybuch petardy, od razu oskarżyła Julka o "branie śniegu"
          mimo że biedny chłopak stał 10 metrów od miejsca wybuchu. Albert śmiał się tak głośno, że nauczycielka od WF-u myślała, że dostał ataku astmy.
          Do dziś w szkole funkcjonuje powiedzenie "Nie bierz śniegu jak Julek, bo wszyscy wiedzą, że to Albert".
        </Typography>
        <Typography variant="body2">
          Ranking popularności Alberta w szkole: ostatnie miejsce, tuż za karaluchem, którego znaleziono w szkolnej stołówce.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Products; 