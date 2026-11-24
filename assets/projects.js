// Dados dos projetos. Descrições baseadas em nome, descrição e linguagem dos repositórios.
// Projetos privados aparecem sem link, nomes de clientes ou dados.
window.PROJECTS = [
  // ---- IA e Jurídico
  {name:"Ementai", cat:"ia", priv:true, tags:["TypeScript","IA","Jurisprudência"], desc:"Plataforma de apoio a rotinas jurídicas com IA, integrada a bases de pesquisa de jurisprudência."},
  {name:"Ementai MCP", cat:"ia", url:"https://github.com/ybngf/ementai-mcp", tags:["MCP","IA","Jurídico"], desc:"Servidor MCP que conecta assistentes de IA às funções do Ementai."},
  {name:"Ementai Social", cat:"ia", priv:true, tags:["TypeScript","IA","Redes sociais"], desc:"Aplicativo para criar, agendar e publicar conteúdo em redes sociais com IA, com tom de voz do usuário."},
  {name:"Ementai Zap", cat:"ia", priv:true, tags:["TypeScript","WhatsApp","Segurança"], desc:"Atendimento e automação via WhatsApp com múltiplos números, redesign de interface e reforço de segurança."},
  {name:"Ai-Legis / e-legis", cat:"ia", priv:true, tags:["TypeScript","IA","Gabinete"], desc:"Sistema para gabinete legislativo com apoio de IA."},
  {name:"Mandato Cloud / AiGabinete", cat:"ia", priv:true, tags:["TypeScript","Dados abertos"], desc:"Gestão de mandato e gabinete, com navegação lateral por função e uso de dados abertos."},
  {name:"Regiscale", cat:"ia", priv:true, tags:["TypeScript","WhatsApp","Landing page"], desc:"Sistema de escalas com integração a WhatsApp e landing page própria."},
  {name:"Agente de atendimento para advocacia", cat:"ia", priv:true, tags:["IA","Chat","Site"], desc:"Site com blog, formulário de contato e agente de atendimento por chat para escritório de advocacia."},
  {name:"Jusratio MCP Server", cat:"ia", url:"https://github.com/ybngf/jusratio-mcp-server", tags:["MCP","Jurisprudência"], desc:"Servidor MCP para pesquisa jurisprudencial (fork mantido e adaptado)."},
  // ---- SaaS e Gestão
  {name:"Estoque SaaS (Gem, Gemini, Zap, VS)", cat:"saas", priv:true, tags:["TypeScript","Blade","IA","WhatsApp"], desc:"Família de sistemas de controle de estoque multiempresa e multiusuário, com IA e WhatsApp."},
  {name:"Controle de Estoque e Assinaturas", cat:"saas", priv:true, tags:["PHP","IA"], desc:"Controle de estoque em PHP com carregamento de produtos por IA e página de assinatura para um negócio de alimentação."},
  {name:"Med-Saas", cat:"saas", priv:true, tags:["TypeScript","Saúde"], desc:"Atendimento médico facilitado."},
  {name:"MedSync AI", cat:"saas", priv:true, tags:["TypeScript","IA","Saúde"], desc:"Aplicação de saúde com IA."},
  {name:"LarZelo", cat:"saas", priv:true, tags:["PHP","Blade"], desc:"Plataforma de serviços profissionais, com site institucional e versão evoluída."},
  {name:"GetHub", cat:"saas", url:"https://github.com/ybngf/GetHub", tags:["TypeScript","Pagamentos"], desc:"Plataforma SaaS de pagamento."},
  {name:"Tamta / Autometa", cat:"saas", priv:true, tags:["TypeScript","Blade","CRM"], desc:"Conjunto de sistemas: Tamta Pro e TS, Autometa CRM, escalas e sistema de prompts com edição e controle de acesso, com deploy automatizado."},
  {name:"Airesume e Airesume Pro", cat:"saas", url:"https://github.com/ybngf/airesume", tags:["TypeScript","IA","Stripe"], desc:"Aplicativo de currículos com IA, painel de cobrança via Stripe e importação a partir de PDF."},
  {name:"listaAI e WhatsApp List", cat:"saas", priv:true, tags:["TypeScript","WhatsApp","IA"], desc:"Gestão de listas e festas, e gestão de listas via WhatsApp."},
  {name:"SuperBusca", cat:"saas", priv:true, tags:["JavaScript"], desc:"Busca e gerenciamento de contatos."},
  {name:"ZapClick", cat:"saas", priv:true, tags:["JavaScript","WhatsApp"], desc:"Ferramenta de engajamento e atendimento via WhatsApp."},
  {name:"QRPLACA", cat:"saas", priv:true, tags:["TypeScript","QR Code","Deploy"], desc:"Site e sistema com captura de IP real, painel administrativo e arquitetura em produção."},
  {name:"MyCharger", cat:"saas", priv:true, tags:["TypeScript"], desc:"Aplicação web em TypeScript."},
  {name:"SóNegócios.shop", cat:"saas", priv:true, tags:["TypeScript","E-commerce"], desc:"Projeto de loja e negócios online."},
  {name:"Genealoogia", cat:"saas", priv:true, tags:["HTML"], desc:"Projeto de genealogia e árvore familiar."},
  {name:"Fortnite Elementais", cat:"saas", priv:true, tags:["TypeScript"], desc:"Projeto em TypeScript com temática de jogo."},
  // ---- Dados e Automação
  {name:"FastSync", cat:"dados", priv:true, tags:["JavaScript","Dados"], desc:"Projeto de normalização e melhorias de grandes bancos de dados."},
  {name:"Automação n8n e painel gerencial", cat:"dados", priv:true, tags:["n8n","Python","BI"], desc:"Fluxos n8n, tarefas agendadas e carga de dados para painéis de vendas e relatórios gerenciais."},
  {name:"Integração entre sistemas de gestão", cat:"dados", priv:true, tags:["Python","ETL","Automação"], desc:"Scripts que baixam arquivos de um sistema, tratam os dados e importam em outro, com relatório de erros por e-mail e testes automatizados."},
  {name:"DealerPlus", cat:"dados", priv:true, tags:["T-SQL","SQL Server"], desc:"Modelagem e consultas em T-SQL para gestão do setor automotivo."},
  {name:"Análise de IPTU", cat:"dados", priv:true, tags:["Python","Dados públicos"], desc:"Ferramenta em Python para análise e cruzamento de dados de IPTU."},
  {name:"Conversor SQLite para MySQL", cat:"dados", url:"https://github.com/ybngf/conversor_sqlite_mysql", tags:["Perl","MySQL"], desc:"Converte dump do SQLite3 em script MySQL para importação."},
  {name:"Saúde da Planta, Alura e Doutor Banquete", cat:"dados", url:"https://github.com/ybngf/Saudedaplanta", tags:["Python","Jupyter"], desc:"Notebooks de ciência de dados, incluindo identificação de plantas e sugestão de ações de cuidado."},
  // ---- Infra e Web
  {name:"Tema Roundcube estilo Locaweb", cat:"infra", url:"https://github.com/ybngf/roundcube_locaweb_skin", tags:["CSS","Roundcube"], desc:"Tema de webmail semelhante ao da Locaweb, com ajustes de modo escuro."},
  {name:"WP Auto Content Pro", cat:"infra", url:"https://github.com/ybngf/WP-Auto-Content-Pro", tags:["PHP","WordPress","IA"], desc:"Plugin WordPress para geração automática de conteúdo."},
  {name:"Instalador e Launcher BR", cat:"infra", url:"https://github.com/ybngf/instalador", tags:["Shell","Linux"], desc:"Scripts de instalação e lançamento automatizados."},
  {name:"Administração de servidores e firewall", cat:"infra", priv:true, tags:["Linux","Docker","CSF","Tailscale"], desc:"Manutenção de VPS, firewall, Docker Swarm e acesso seguro, com rotinas de backup e monitoramento."},
  {name:"WorldLenz", cat:"infra", url:"https://github.com/ybngf/WorldLenz", tags:["TypeScript"], desc:"Aplicação web em TypeScript."},
  {name:"PlanIt", cat:"infra", url:"https://github.com/ybngf/PlanIt", tags:["Planejamento"], desc:"Projeto de planejamento."}
];
window.CASES = [
  {n:"01", t:"SMTP de Alta Performance com PowerMTA + IEM", d:"Campanhas para grandes bases com máxima entregabilidade.", tags:["Linux","PowerMTA","Interspire","MySQL","DKIM","SPF"], h:["Até 256 IPs por servidor","Integração com painel IEM via MySQL","Monitoramento de blacklist, score e IP pools"], u:"case-1-smtp-powerMTA"},
  {n:"02", t:"Infraestrutura Web Segura com cPanel + Bind", d:"Hospedagem de vários sites e domínios com segurança e performance.", tags:["cPanel/WHM","Apache","Exim","Bind","Cloudflare"], h:["Zonas DNS personalizadas","SSL manual e via Cloudflare","Backups automáticos e hardening com fail2ban e firewall"], u:"case-2-servidores-linux"},
  {n:"03", t:"Automação de Atendimento com ManyChat + Make + IA", d:"Atendimento e qualificação de leads em redes sociais.", tags:["ManyChat","Make","OpenAI","Instagram"], h:["Fluxo completo com fallback para humano","Segmentação por categoria de pergunta","Integração com planilhas e CRM"], u:"case-3-automacao-ia"},
  {n:"04", t:"Relatórios Inteligentes para Email Marketing", d:"Superando as limitações dos relatórios nativos do IEM.", tags:["PHP","MySQL","Laravel","Bash"], h:["Coleta automática de métricas por campanha","Painel web com CRUD de usuários e permissões","Filtros por data, abertura, clique e bounce"], u:"case-4-relatorio-email"},
  {n:"05", t:"Gestão de Mídias Sociais com Segmentação", d:"Resultados reais para empresas locais com campanhas segmentadas.", tags:["Facebook Ads","Instagram Ads","TikTok Ads"], h:["Públicos personalizados e lookalike","Relatórios semanais de performance","Teste A/B de criativos e mensagens"], u:"case-5-midias-sociais"}
];
window.CATS = {all:"Todos", ia:"IA e Jurídico", saas:"SaaS e Gestão", dados:"Dados e Automação", infra:"Infra e Web"};
