import StoreCard from "./StoreCard";

const WhereToBuy = () => {
  const stores = [
    {
      name: "Mercado Livre",
      logo: "https://upload.wikimedia.org/wikipedia/pt/0/04/Logotipo_MercadoLivre.png",
      url: "https://www.mercadolivre.com.br/teles-forever-a-ultima-verdade/up/MLBU3440259912?has_official_store=false&highlight=false&pdp_filters=official_store%3A219884&headerTopBrand=false#polycard_client=search-nordic&search_layout=grid&position=1&type=product&tracking_id=763b9935-3b82-4e0c-8cbb-b57cc7f59dd4&wid=MLB4216668729&sid=search"
    },
    {
      name: "Casas Bahia",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Casas_Bahia_logo.svg/2560px-Casas_Bahia_logo.svg.png",
      url: "https://www.casasbahia.com.br/teles-forever-a-ultima-verdade/p/1576345802"
    },
    {
      name: "Extra",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Extra_logo_2005.svg/250px-Extra_logo_2005.svg.png",
      url: "https://www.extra.com.br/teles-forever-a-ultima-verdade/p/1576345802"
    },
    {
      name: "Ponto Frio",
      logo: "https://upload.wikimedia.org/wikipedia/pt/e/e8/Logotipo_do_Pontofrio.png",
      url: "https://www.pontofrio.com.br/teles-forever-a-ultima-verdade/p/1576345802"
    },
    {
      name: "Estante Virtual",
      logo: "https://teles-lpsaxv.manus.space/assets/estante-virtual-oEdSOXeP.jpg",
      url: "https://www.estantevirtual.com.br/livro/teles-forever-a-ultima-verdade-MAA-0420-000"
    },
    {
      name: "Loja Um Livro",
      url: "https://loja.umlivro.com.br/teles-forever-a-ultima-verdade-7399287/p"
    },
    {
      name: "Amazon Brasil",
      logo: "https://teles-lpsaxv.manus.space/assets/amazon-BIHvbXY2.png",
      url: "https://www.amazon.com.br/Teles-Forever-%C3%BAltima-verdade-Oliveira/dp/6553918252/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.1Od2N1yYUhRwiP0hBZpz4g.ipSS8oU72TZTS1NWjpid7pQjQlcC1_FJRDiP060AFzA&dib_tag=se&keywords=Teles+Forever+a+%C3%BAltima+verdade&m=A369J5X4JYWGUG&qid=1759779017&s=merchant-items&sr=1-1&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d"
    }
  ];

  return (
    <section id="onde-comprar" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Onde Comprar
          </h2>
          <p className="text-xl text-muted-foreground">
            Escolha a loja de sua preferência
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stores.map((store) => (
            <StoreCard key={store.name} {...store} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereToBuy;
