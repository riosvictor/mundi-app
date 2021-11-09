type MainCity = {
  urlCity: string;
  urlCountry: string;
  city: string;
  country: string;
}

export type Data = {
  id: string;
  urlPlaceBanner: string;
  title: string,
  text: string,
  countries: number,
  languages: number,
  citiesMoreVisited: number,
  mainCities: MainCity[]
}

export type Error = {
  message: string
}

export const locals: Data[] = [
  {
    id: "europe",
    title: "Europa",
    text: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
    countries: 50,
    languages: 24,
    citiesMoreVisited: 27,
    urlPlaceBanner: "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1070&q=80",
    mainCities: []
  },
  {
    id: "south-america",
    title: "América do Sul",
    text: "O subcontinente abordado é privilegiado em área costeira, ao longo do litoral sul-americano são identificados diversos acidentes geográficos, um exemplo desse tipo de configuração é o Estreito de Margalhães, que liga o oceano Pacífico ao Atlântico, além das Malvinas (arquipélago com mais de duzentas ilhas, localizadas na costa Argentina), Fernando de Noronha (vinte ilhas de origem vulcânica, localizadas na costa nordeste do Brasil); e na costa do Equador, as ilhas Galápagos, instituídas pela ONU (Organização das Nações Unidas) como Patrimônio Natural da Humanidade.",
    countries: 12,
    languages: 10,
    citiesMoreVisited: 15,
    urlPlaceBanner: "https://images.unsplash.com/photo-1606064934508-73f08e379a91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1067&q=80",
    mainCities: []
  },
  {
    id: "north-america",
    title: "América do Norte",
    text: "A América do Norte está localizada no extremo norte das Américas e é composta por apenas três países: Estados Unidos, Canadá e México, além de territórios de domínios europeus, como a Groelândia (pertencente ao Reino da Dinamarca, com representação no parlamento) e Bermudas (dependência britânica). Os dois primeiros países são os únicos do continente americano que estão inseridos no grupo dos países mais importantes político e economicamente, especialmente os Estados Unidos, que possuem a condição de maior potência mundial; já o México configura-se como um país em desenvolvimento, ou seja, emergente.",
    countries: 3,
    languages: 5,
    citiesMoreVisited: 11,
    urlPlaceBanner: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1070&q=80",
    mainCities: []
  },
  {
    id: "asian",
    title: "Ásia",
    text: "A Ásia é o maior continente em área terrestre do mundo, estando boa parte do continente localizado no Hemisfério Norte. Além de ser o mais extenso, é também o mais populoso, habitando nele cerca de três quintos da população mundial. A Ásia é multicultural, abrigando diversas culturas, etnias, religiões e tradições.\n"+
    "Geograficamente, o continente asiático é também muito diverso. No continente, localiza-se algumas montanhas que estão entre as mais altas do mundo, grandes desertos e extensos rios. O povo asiático corresponde a uma das civilizações mais antigas do mundo, iniciada há cerca de 4000 anos. A economia e governos são também variados, visto que o continente é composto por um grande número de países, cada qual com as suas particularidades.",
    countries: 50,
    languages: 2301,
    citiesMoreVisited: 18,
    urlPlaceBanner: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1092&q=80",
    mainCities: []
  },
  {
    id: "africa",
    title: "África",
    text: "África é um dos seis continentes do mundo, sendo o terceiro maior em extensão territorial. O território estende-se por mais de 30 milhões de km², ocupando, aproximadamente, 20% da área continental da Terra. No continente vive mais de um bilhão de habitantes, fazendo dele o segundo mais populoso entre os demais.\n"+
    "A África é conhecida pela sua pluralidade étnica e cultural, e, por meio de uma história milenar, é capaz de contar a história de toda a humanidade. Apesar da enorme riqueza do continente, muitos países africanos apresentam baixos índices de desenvolvimento, com diversos problemas sociais, como a miséria, baixa qualidade de vida, subnutrição e o analfabetismo.",
    countries: 54,
    languages: 1000,
    citiesMoreVisited: 16,
    urlPlaceBanner: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
    mainCities: []
  },
  {
    id: "oceania",
    title: "Oceania",
    text: "A Oceania é um continente situado entre os oceanos Índico e Pacífico, a sudeste da Ásia. A maior parte de suas terras fica no Hemisfério Sul do planeta. É composto por 14 países e ilhas e territórios pertencentes a outros países, tanto oceânicos quanto de outros continentes. A maior e mais populosa das nações é a Austrália, que consiste também na principal economia do continente. Destaca-se também a Nova Zelândia. No total, o continente possui cerca de 42 milhões de habitantes e apresenta condições bastante contrastantes no que diz respeito aos aspectos socieconômicos de seus países.",
    countries: 14,
    languages: 848,
    citiesMoreVisited: 27,
    urlPlaceBanner: "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1070&q=80",
    mainCities: []
  },
]