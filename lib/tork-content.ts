// /tork copy. Tork is a private repository, so the page tells the story and
// shows what changed for the client (before → after) rather than how the code
// is built. The story section reuses the translated ObraHub copy in
// lib/i18n.ts (t.obrahub.problem).

export type TorkCopy = {
  label: string
  tagline: string
  lead: string
  meta: string[]
  live: string
  sections: { story: string; change: string; quality: string; status: string }
  change: {
    title: string
    intro: string
    head: [string, string, string]
    rows: { topic: string; before: string; after: string }[]
  }
  builtTitle: string
  builtText: string
  quality: { title: string; intro: string; stats: { value: string; label: string }[] }
  status: {
    title: string
    liveTitle: string
    live: string[]
    buildingTitle: string
    building: string[]
    direction: { title: string; text: string }
  }
}

const en: TorkCopy = {
  label: "// Tork · formerly ObraHub",
  tagline: "Labor tracking and billing for *industrial field work*.",
  lead:
    "Tork started as ObraHub, built for Engemil, an industrial maintenance and assembly contractor in Mogi Guaçu, Brazil. It replaces the paper → spreadsheet → retyping cycle with one flow: the foreman logs the day on the phone, every work package keeps a live balance, and the month-end billing comes out in the exact format the client signs. In production at Engemil since August 2026.",
  meta: ["In production · since Aug 2026", "Founder & engineer", "Private repository"],
  live: "Live site",
  sections: {
    story: "01 · The story",
    change: "02 · Before → after",
    quality: "03 · Quality",
    status: "04 · Status",
  },
  change: {
    title: "What changed for the *client*.",
    intro: "The same month of work, before Tork and with it.",
    head: ["", "Before", "With Tork"],
    rows: [
      {
        topic: "Logging the day",
        before: "The foreman writes on paper who worked, in what role and for how long; someone types it into a spreadsheet later.",
        after: "Logged once, on the phone, on site. Shifts, breaks, night hours and the five hour types are calculated on save.",
      },
      {
        topic: "Month-end billing",
        before: "Everything is retyped into a second spreadsheet, in the format the client accepts.",
        after: "Exported straight from the daily reports, in the client's own Excel template.",
      },
      {
        topic: "Package balance",
        before: "Knowing how many budgeted hours were left meant adding up entries by hand.",
        after: "Every package shows its remaining hours the moment a report lands.",
      },
      {
        topic: "Missed hours",
        before: "An hour that was never transcribed was never billed, and nobody found out.",
        after: "Every hour is tied to the job, role and package that pays for it.",
      },
      {
        topic: "Client approval",
        before: "The client checks the billing cell by cell before signing.",
        after: "The inspector reviews, returns or approves each report and signs on the phone, through a secure link with no login.",
      },
    ],
  },
  builtTitle: "Built round by round",
  builtText:
    "Nothing came from a written spec. The system was drawn out in successive rounds of discussion, review and feedback with the person at Engemil who produced all of this by hand, each round trading an assumption for a fact about the operation. The real artefacts were the specification: the client's billing workbook, the engineering tracking spreadsheet and the job register.",
  quality: {
    title: "Tested like it handles *money*.",
    intro: "About 1,900 automated tests at 95% line coverage, with security checks on every change.",
    stats: [
      { value: "1,900+", label: "automated tests" },
      { value: "95%", label: "line coverage" },
      { value: "5", label: "hour types calculated per day" },
      { value: "0", label: "logins needed to sign a report" },
    ],
  },
  status: {
    title: "In production, and *still growing*.",
    liveTitle: "In production",
    live: [
      "daily reports on the phone, with hours calculated automatically",
      "spreadsheet and ZIP import without duplicates",
      "billing exported to Excel in each client's template",
      "approval and signature by phone, no login",
      "settings, documents and branding per company",
    ],
    buildingTitle: "In development",
    building: [
      "online payments: plans and recurring charges. Not released yet.",
      "AI reading purchase orders and PDFs to pre-fill work packages, with a person reviewing before anything is saved.",
    ],
    direction: {
      title: "Where it's headed",
      text: "It was built for one contractor, but the cycle it replaces is the same across the sector: crews inside a client's plant, hours proven month by month, a billing document in a format the client dictates.",
    },
  },
}

const pt: TorkCopy = {
  label: "// Tork · antes ObraHub",
  tagline: "Apontamento e medição de mão de obra *em campo industrial*.",
  lead:
    "O Tork nasceu como ObraHub, feito para a Engemil, prestadora de manutenção e montagem industrial em Mogi Guaçu/SP. Ele troca o ciclo papel → planilha → redigitação por um fluxo só: o encarregado registra o dia no celular, cada pacote mantém o saldo vivo e a medição do mês sai no formato exato que o cliente assina. Em produção na Engemil desde agosto de 2026.",
  meta: ["Em produção · desde ago 2026", "Fundador e engenheiro", "Repositório privado"],
  live: "Ver no ar",
  sections: {
    story: "01 · A história",
    change: "02 · Antes → depois",
    quality: "03 · Qualidade",
    status: "04 · Status",
  },
  change: {
    title: "O que mudou para o *cliente*.",
    intro: "O mesmo mês de trabalho, antes do Tork e com ele.",
    head: ["", "Antes", "Com o Tork"],
    rows: [
      {
        topic: "Registrar o dia",
        before: "O encarregado anota no papel quem trabalhou, em que função e por quanto tempo; depois alguém digita numa planilha.",
        after: "Registrado uma vez, no celular, na obra. Turnos, intervalos, adicional noturno e os cinco tipos de hora são calculados ao salvar.",
      },
      {
        topic: "Medição do mês",
        before: "Tudo é redigitado numa segunda planilha, no formato que o cliente aceita.",
        after: "Exportada direto dos RDOs, no próprio modelo de Excel do cliente.",
      },
      {
        topic: "Saldo do pacote",
        before: "Saber quantas horas orçadas sobravam exigia somar os apontamentos na mão.",
        after: "Cada pacote mostra as horas restantes no instante em que o RDO entra.",
      },
      {
        topic: "Horas perdidas",
        before: "Hora que não foi transcrita não era faturada, e ninguém ficava sabendo.",
        after: "Cada hora fica amarrada à obra, à função e ao pacote que paga por ela.",
      },
      {
        topic: "Aprovação do cliente",
        before: "O cliente confere a medição célula por célula antes de assinar.",
        after: "O fiscal revisa, devolve ou aprova cada RDO e assina pelo celular, por um link seguro, sem login.",
      },
    ],
  },
  builtTitle: "Construído rodada a rodada",
  builtText:
    "Nada veio de uma especificação escrita. O sistema foi desenhado em rodadas sucessivas de conversa, revisão e feedback com a pessoa da Engemil que produzia tudo isso na mão, cada rodada trocando uma suposição por um fato da operação. Os artefatos reais foram a especificação: a planilha de medição do cliente, a planilha de acompanhamento da engenharia e o cadastro de obras.",
  quality: {
    title: "Testado como quem lida com *dinheiro*.",
    intro: "Cerca de 1.900 testes automatizados com 95% de cobertura de linhas, e verificações de segurança em toda mudança.",
    stats: [
      { value: "1.900+", label: "testes automatizados" },
      { value: "95%", label: "de cobertura de linhas" },
      { value: "5", label: "tipos de hora calculados por dia" },
      { value: "0", label: "logins para assinar um RDO" },
    ],
  },
  status: {
    title: "Em produção, e *ainda crescendo*.",
    liveTitle: "Em produção",
    live: [
      "RDO pelo celular, com as horas calculadas automaticamente",
      "importação de planilhas e ZIP sem duplicar",
      "medição exportada para Excel no modelo de cada cliente",
      "aprovação e assinatura pelo celular, sem login",
      "configurações, documentos e identidade visual por empresa",
    ],
    buildingTitle: "Em desenvolvimento",
    building: [
      "pagamentos online: planos e cobranças recorrentes. Ainda não lançado.",
      "IA lendo pedidos de compra e PDFs para pré-preencher pacotes, com uma pessoa revisando antes de salvar.",
    ],
    direction: {
      title: "Para onde vai",
      text: "Foi feito para uma prestadora, mas o ciclo que ele substitui é o mesmo no setor todo: equipes dentro da planta do cliente, horas provadas mês a mês, uma medição no formato que o cliente dita.",
    },
  },
}

export const torkContent = { en, pt }
