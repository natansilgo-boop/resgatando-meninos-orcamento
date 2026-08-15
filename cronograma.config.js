// Dados do cronograma — edite datas, entregas e valores aqui.
// Nada de layout depende do conteúdo deste arquivo: mude à vontade.
const CRONOGRAMA = {
  semanas: [
    {
      numero: 1,
      periodo: "11/08 – 17/08",
      titulo: "Fechamento e organização",
      itens: [
        "Contrato assinado, pagamento da 1ª parcela confirmado",
        "Conferência de tudo que já foi recebido (lista acima) e do que ainda falta",
        "Briefing final com a Kátia: alinhar prazo de entrega das 8 atividades restantes (regras 1 a 8) — isso é o principal risco de atraso do projeto inteiro, porque não depende de você",
        "Definição da identidade visual final: paleta de cores, tipografia, estilo de ícones (usando como base o que já apareceu nos pôsteres e no jogo da memória, pra manter consistência com o que a Kátia já viu e aprovou visualmente)",
        "Criação do cronograma detalhado (este documento)"
      ],
      pontoDeAtencao: "Cobrar já nesta semana uma data de entrega das atividades 1-8. Sem isso, semana 6-7 fica um buraco no cronograma."
    },
    {
      numero: 2,
      periodo: "18/08 – 24/08",
      titulo: "Ebook, bloco 1",
      itens: [
        "Diagramação do ebook (125 páginas) a partir do manuscrito recebido — primeira metade (~página 1 a 60)",
        "Aplicação da identidade visual definida na semana 1",
        "Início do design da capa (conceito e primeira versão)"
      ],
      entrega: "~metade do ebook diagramado + capa em rascunho"
    },
    {
      numero: 3,
      periodo: "25/08 – 31/08",
      titulo: "Ebook, bloco 2 + capa",
      itens: [
        "Diagramação do restante do ebook (página ~60 a 125)",
        "Fechamento e aprovação interna da capa",
        "Revisão de consistência visual (fontes, espaçamentos, numeração de página) no ebook inteiro"
      ],
      entrega: "ebook 100% diagramado + capa finalizada"
    },
    {
      numero: 4,
      periodo: "01/09 – 07/09",
      titulo: "Devocional + Guia do Homem",
      itens: [
        "Diagramação final do devocional de 30 dias (texto já pronto, aplicar layout definitivo dia a dia)",
        "Diagramação final do Guia do Homem de Referência (texto já pronto)"
      ],
      entrega: "devocional e guia prontos em formato final",
      checkpointPagamento: { parcela: 2, valor: 2500, vencimento: "10/09" }
    },
    {
      numero: 5,
      periodo: "08/09 – 14/09",
      titulo: "Jogo da memória + Montando Meu Guerreiro + pôsteres",
      itens: [
        "Produção da versão final em alta qualidade do jogo da memória (o conteúdo já existe, falta o acabamento gráfico pronto pra impressão/PDF)",
        "Produção da versão final do Montando Meu Guerreiro (mesma lógica: conteúdo pronto, falta o acabamento final)",
        "Diagramação final dos pôsteres das 12 regras no padrão visual definitivo"
      ],
      entrega: "os 3 materiais lúdicos prontos em versão final"
    },
    {
      numero: 6,
      periodo: "15/09 – 21/09",
      titulo: "Atividades práticas: revisão + cobrança",
      itens: [
        "Revisão e ajuste fino de diagramação das atividades já recebidas (regras 9, 10, 11, 12)",
        "Cobrança formal do material pendente: atividades das regras 1 a 8",
        "Se o material chegar nesta semana, já inicia a diagramação das primeiras atividades"
      ],
      pontoDeAtencao: "Essa é a semana de virada — se as regras 1-8 não chegarem até aqui, a semana 7 (planejada pra diagramação) fica sem o que diagramar, e o atraso empurra pra frente (cláusula do contrato prevê prorrogação automática nesse caso, mas o cronograma geral atrasa junto)."
    },
    {
      numero: 7,
      periodo: "22/09 – 28/09",
      titulo: "Atividades práticas: diagramação final + envio geral",
      itens: [
        "Diagramação das atividades das regras 1 a 8 (assumindo que o texto chegou)",
        "Envio de todo o pacote de material (ebook, devocional, guia, jogos, pôsteres, atividades) pra aprovação da Kátia",
        "Início da contagem dos 5 dias úteis de aprovação previstos em contrato"
      ],
      entrega: "pacote completo de material enviado pra aprovação"
    },
    {
      numero: 8,
      periodo: "29/09 – 05/10",
      titulo: "Ajustes finais + estrutura de venda",
      itens: [
        "Rodada de ajustes (até 2 rodadas incluídas no contrato) com base no retorno da Kátia",
        "Fechamento definitivo de todo o material",
        "Estrutura de venda: criação da conta Kiwify, montagem da área de membros, configuração da página de vendas e integrações de pagamento"
      ],
      entrega: "material 100% aprovado e fechado + loja pronta pra vender",
      checkpointPagamento: { parcela: 3, valor: 2500, vencimento: "10/10" }
    },
    {
      numero: 9,
      periodo: "06/10 – 12/10",
      titulo: "Plano de lançamento + início dos criativos",
      itens: [
        "Elaboração do plano de lançamento: oferta, gatilhos, cronograma completo de pré-lançamento e lançamento",
        "Início da produção dos 30 criativos (peças pra anúncios/redes)"
      ],
      entrega: "plano de lançamento fechado + primeiros criativos prontos"
    },
    {
      numero: 10,
      periodo: "13/10 – 19/10",
      titulo: "Vídeos + início do aquecimento",
      itens: [
        "Produção dos 12 vídeos para vender junto",
        "Início da publicação do conteúdo de aquecimento em @resgatandomeninos e @conselhosparaolar (sem vender ainda)"
      ],
      entrega: "os 12 vídeos prontos + aquecimento no ar"
    },
    {
      numero: 11,
      periodo: "20/10 – 26/10",
      titulo: "Aquecimento + captação de lista",
      itens: [
        "Continuidade do conteúdo de aquecimento nos perfis",
        "Estruturação e ativação da captação de lista, usando o mini ebook/isca digital",
        "Início da gestão de tráfego pago voltado a leads"
      ],
      entrega: "lista em construção + tráfego de leads rodando"
    },
    {
      numero: 12,
      periodo: "27/10 – 02/11",
      titulo: "Lançamento",
      itens: [
        "Abertura do carrinho de vendas",
        "Tráfego pago migrando pra conversão",
        "Disparo da sequência de e-mail/WhatsApp de vendas",
        "Entrega de acesso aos compradores + suporte pós-venda + remarketing básico pra quem não converteu"
      ],
      entrega: "projeto lançado e entregue"
    }
  ]
};
